#!/usr/bin/node

const fs = require('fs');
const ColorThief = require('colorthief');

function getDominantColors(folderPath) {
  const files = fs.readdirSync(folderPath);

  files.forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const imagePath = `${folderPath}/${file}`;
      ColorThief.getPalette(imagePath, 5)
        .then(color => {
          console.log(imagePath);
          console.log(color);
        })
        .catch(err => { console.log(err) })
    }
  });
}

const folderPath = '/Users/yansiqi/Pictures/wallpaper';
getDominantColors(folderPath);