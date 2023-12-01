#!/usr/bin/node

// npm i --save colorthief@2.3.0

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
        .catch(err => {
          console.log(err);
        })
    }
  });
}

const folderPath = '/your/path';
getDominantColors(folderPath);
