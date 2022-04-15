const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = 'https://mangahosted.com/manga/one-piece-br-mh80123/1046#1';

axios(URL).then(({ data }) => {
  const html = data;
  const $ = cheerio.load(html);

  const allPictures = $('picture');
  const imgsArray = [];
  allPictures.each(function () {
    const img = $(this).find('img');
    imgsArray.push(img.attr('src'));
  });
  fs.mkdirSync('./cap1046');
  imgsArray.forEach((img, index) => {
    axios.get(img, { responseType: 'stream' }).then(({ data }) => {
      data.pipe(
        fs.createWriteStream(
          `./cap1046/${(index + 1).toString().padStart(2, '0')}.jpg`
        )
      );
    });
  });
});
