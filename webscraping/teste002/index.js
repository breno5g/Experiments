const puppeteer = require('puppeteer');
const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

const URL =
  'https://techwek.com/imagens-de-bom-dia-para-whatsapp-com-lindas-fotos-mensagens/';
// 'https://www.google.com.br/search?q=imagens+de+bom+dia&hl=en&tbm=isch&source=hp&biw=1366&bih=624&ei=MDVbYtihG6q75OUP-MO88A4&iflsig=AHkkrS4AAAAAYltDQPpkX6-TiEGAkvqUJ6ASeA_Aabrt&ved=0ahUKEwjY-enCw5n3AhWqHbkGHfghD-4Q4dUDCAY&uact=5&oq=imagens+de+bom+dia&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgARQuwhYrBhg1RloAHAAeAGAAZ0CiAHOE5IBBjAuMTcuMZgBAKABAaoBC2d3cy13aXotaW1nsAEA&sclient=img';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  // await page.screenshot({ path: 'example.png' });
  // Pegar os links das imagens e salvar
  const imgsList = await page.evaluate(() => {
    // Pegar as imagens
    const imgsNodeList = document.querySelectorAll('.jetpack-lazy-image');
    // converter para um array de imagens
    const imgsArray = Array.from(imgsNodeList);
    // pegar apenas o src e salvar em um objeto
    return imgsArray.map(({ src }, index) => {
      if (!src) return false;
      return {
        id: index + 1,
        src,
      };
    });
  });
  // Salvar as imagens em um json caso eu queira criar uma função de não repetir imagens
  // fs.writeFileSync('./imgsList.json', JSON.stringify(imgsList, null, 2));

  // Selecionar uma imagem aleatoriamente
  const randomNumber = Math.floor(Math.random() * imgsList.length - 1);
  const selectedImage = imgsList[randomNumber].src;

  // caso precise baixar a imagem
  // await downloadImage(selectedImage);

  await page.goto('http://discord.com/login');
  await discordLogin(page);
  await page.goto(
    // 'https://discord.com/channels/943937409488392262/958458783380676679'
    // 'https://discord.com/channels/@me/847990754638037003'
    // 'https://discord.com/channels/@me/943852257454207027'
    'https://discord.com/channels/943937409488392262/943937409488392265'
  );
  await sendImage(page, selectedImage);
  await page.waitForTimeout(3000);

  await browser.close();
})();

const downloadImage = async (src) => {
  console.log(src);
  const promise = new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(src, { responseType: 'stream' });
      const { data } = res;
      data.pipe(fs.createWriteStream('./bomDia.jpg'));
      resolve('Tudo certo cumpadi');
    } catch (err) {
      reject(new Error('Download error: ' + err.message));
    }
  });
  return promise;
};

const discordLogin = async (page) => {
  await page.type('input[name="email"]', process.env.EMAIL);
  await page.type('input[name="password"]', process.env.PASSWORD);
  page.click('button[type="submit"]');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
};

const sendImage = async (page, image) => {
  await page.waitForTimeout(5000);
  await page.keyboard.type(image);
  await page.keyboard.press('Enter');
};
