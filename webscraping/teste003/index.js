const axios = require('axios');
const cheerio = require('cheerio');
const epub = require('epub-gen');
const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const { questionInt } = require('readline-sync');
const path = require('path');

const URL = 'https://saikaiscan.com.br/series/king-of-gods-kog?tab=capitulos';
const volumeNumber = questionInt('Digite o numero do volume que deseja: ');
const directoryName = `Volume ${volumeNumber}`;

const goingMerry = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  const volumeButton = await page.$$('.active');
  await volumeButton[volumeNumber].click();
  const content = await page.content();
  await fs.writeFile('./volume.html', content, 'utf-8');
  await browser.close();
};

const getLinksForCaps = async () => {
  await goingMerry();
  const html = await fs.readFile('./volume.html', 'utf-8');
  const $ = cheerio.load(html);
  const linkForCaps = [];
  const files = await fs.readdir('./Capitulos');
  if (!files.includes(directoryName)) {
    await fs.mkdir(`./Capitulos/${directoryName}`);
  }
  $('a[data-v-6b52f310=""]').each((index, cap) => {
    const capUrl = `https://saikaiscan.com.br${$(cap).attr('href')}`;
    const capName = capUrl.split('/').slice(-1)[0];
    linkForCaps.push({ capName, capUrl });
  });
  await fs.writeFile('./links.json', JSON.stringify(linkForCaps, null, 2));
};

const download = async (capTitle, capUrl) => {
  const novelPage = await axios.get(capUrl);
  const { data: html } = novelPage;
  const $ = cheerio.load(html);
  const options = {
    title: `King_of_Gods_Cap_${capTitle}`,
    author: 'Fast Food Restaurant',
    cover: path.join(__dirname, 'cover.jpg'),
    content: [
      {
        title: capTitle,
        data: $('#leitor-serie-body').html(),
      },
    ],
  };
  new epub(options, `./Capitulos/${capTitle}.epub`).promise.then(() =>
    console.log('Done')
  );
};

const removeArchive = async (filePath) => {
  await fs.rm(filePath);
};

const franky = async () => {
  await getLinksForCaps();
  const json = await fs.readFile('./links.json', 'utf-8');
  const links = JSON.parse(json);
  for (let { capName, capUrl } of links) {
    await download(capName, capUrl);
  }
  await removeArchive('./volume.html');
  await removeArchive('./links.json');
};

franky();
