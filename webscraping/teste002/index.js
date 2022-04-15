const axios = require('axios');
const puppeteer = require('puppeteer');
const fs = require('fs');
const cheerio = require('cheerio');

// (async () => {
// const browser = await puppeteer.launch({ headless: false });
// const page = await browser.newPage();
// await page.goto('https://mangahosted.com/manga/one-piece-br-mh80123/1044#1');
// const pageNumber = page.url().split('#')[1];
// const imgURL = await page.$eval('#img_1', (img) => img.src);
// console.log(imgURL);
// await browser.close();
// })();

const URL = 'https://mangahosted.com/manga/one-piece-br-mh80123';
const foldersNumber = [];

const getChapters = async () => {
  try {
    const res = await axios.get(URL);
    const { data: html } = res;
    const $ = cheerio.load(html);
    const chapters = [];
    $('a.btn-green').each((index, n2) => {
      const link = $(n2).attr('href');
      const capName = link.split('/')[5];
      if (Number(capName) >= 1 && Number(capName) <= 2) {
        chapters.push(link);
        foldersNumber.push(capName);
      }
    });
    return chapters;
  } catch (err) {
    console.log(err.message);
  }
};

const getLinks = async () => {
  try {
    const chaptersPage = await getChapters();

    chaptersPage.forEach(async (cap, index) => {
      const { data: html } = await axios.get(cap);
      const $ = cheerio.load(html);
      const allPictures = $('picture');
      allPictures.each(async () => {
        const img = $(this).find('img');
        await buildArray(img.attr('src'), index);
      });
    });
  } catch (err) {
    console.log(err.message);
  }
  console.log(teste);
};

getLinks();

const teste = [];
const buildArray = async (src, index) => {
  console.log(src);
  const res = new Promise((resolve, reject) => {
    if (!src) reject(new Error('deu ruim aqui, Cumpadi'));
    teste.push({
      link: src,
      page: index,
    });
    resolve('tudo certo');
  });

  return res;
};

// const init = async () => {
//   const links = await getLinks();
//   console.log(links);
// };

// init();
