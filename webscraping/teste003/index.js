const axios = require('axios');
const cheerio = require('cheerio');
const epub = require('epub-gen');
const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const { questionInt } = require('readline-sync');

const URL = 'https://saikaiscan.com.br/series/king-of-gods-kog?tab=capitulos';
const volumeNumber = questionInt('Digite o numero do volume que deseja: ');

const goingMerry = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  const volumeButton = await page.$$('.active')
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
    title: 'King of Gods',
    author: 'Fast Food Restaurant',
    output: `./Capitulos/${capTitle}.epub`,
    content: [
      {
        title: capTitle,
        data: $('#leitor-serie-body').html(),
      },
    ],
  };
  new epub(options).promise.then(() => console.log('Done'));
};

const franky = async () => {
  await getLinksForCaps();
  const json = await fs.readFile('./links.json', 'utf-8');
  const links = JSON.parse(json);
  for (let { capName, capUrl } of links) {
    await download(capName, capUrl);
  }
};

franky();
