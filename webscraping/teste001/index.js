const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = 'https://mangahosted.com/manga/one-piece-br-mh80123';
const folderNameArray = [];

const getChapters = async () => {
  try {
    const res = await axios.get(URL);
    const { data: html } = res;
    const $ = cheerio.load(html);
    const chapters = [];
    $('a.btn-green').each((index, n2) => {
      if (index < 2) {
        chapters.push($(n2).attr('href'));
        folderNameArray.push($(n2).attr('title').split(' - ')[1]);
      }
    });
    return chapters;
  } catch (err) {
    console.log(err.message);
  }
};

const getImagesLink = async () => {
  const chaptersPage = await getChapters();
  console.log(folderNameArray);

  chaptersPage.forEach(async (cap, index) => {
    const { data: html } = await axios.get(cap);
    const $ = cheerio.load(html);
    const allPictures = $('picture');
    const imgsArray = [];
    allPictures.each(function () {
      const img = $(this).find('img');
      imgsArray.push(img.attr('src'));
    });
    saveImages(imgsArray, index);
  });
};

const saveImages = (arr, fIndex) => {
  fs.mkdirSync(folderNameArray[fIndex]);
  arr.forEach((img, index) => {
    axios.get(img, { responseType: 'stream' }).then(({ data }) => {
      data.pipe(
        fs.createWriteStream(
          `./${folderNameArray[fIndex]}/${(index + 1)
            .toString()
            .padStart(2, '0')}.jpg`
        )
      );
    });
  });
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
