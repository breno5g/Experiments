const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { question, questionInt } = require('readline-sync');

console.log('Only manga host \n');
const URL = question(
  'Insira a URL da pagina principal do mangá que deseja realizar o download: '
);

const initCap = questionInt('Insira o capitulo inicial que deseja baixar: ');
const endCap = questionInt('Insira o capitulo final que deseja baixar: ');

const folderNameArray = [];

const getChapters = async () => {
  try {
    const res = await axios.get(URL);
    const { data: html } = res;
    const $ = cheerio.load(html);
    const chapters = [];
    $('a.btn-green').each((index, n2) => {
      const link = $(n2).attr('href');
      const capName = link.split('/')[5];
      if (Number(capName) >= initCap && Number(capName) <= endCap) {
        chapters.push(link);
        folderNameArray.push(capName);
      }
    });
    return chapters;
  } catch (err) {
    console.log(err.message);
  }
};

const getImagesLink = async () => {
  try {
    const chaptersPage = await getChapters();

    chaptersPage.forEach(async (cap, index) => {
      const { data: html } = await axios.get(cap);
      const $ = cheerio.load(html);
      const allPictures = $('picture');
      const imgsArray = [];
      allPictures.each(function () {
        const img = $(this).find('img');
        imgsArray.push(img.attr('src'));
      });
      setTimeout(() => {
        saveImages(imgsArray, index);
      }, 3000);
    });
  } catch (err) {
    console.log(err.message);
  }
};

const saveImages = (arr, fIndex) => {
  try {
    const folderName = `Capitulo ${folderNameArray[fIndex]}`;
    fs.mkdirSync(folderName);
    arr.forEach((img, index) => {
      axios.get(img, { responseType: 'stream' }).then(({ data }) => {
        data.pipe(
          fs.createWriteStream(
            `./${folderName}/${(index + 1).toString().padStart(2, '0')}.jpg`
          )
        );
      });
    });
  } catch (err) {
    console.log(err.message);
  }
};

const init = () => {
  getImagesLink();
};

init();

// axios(URL).then(({ data }) => {
//   const html = data;
//   const $ = cheerio.load(html);

// const allPictures = $('picture');
// const imgsArray = [];
// allPictures.each(function () {
//   const img = $(this).find('img');
//   imgsArray.push(img.attr('src'));
// });
//   fs.mkdirSync('./cap1046');
//   imgsArray.forEach((img, index) => {
//     axios.get(img, { responseType: 'stream' }).then(({ data }) => {
//       data.pipe(
//         fs.createWriteStream(
//           `./cap1046/${(index + 1).toString().padStart(2, '0')}.jpg`
//         )
//       );
//     });
//   });
// });
