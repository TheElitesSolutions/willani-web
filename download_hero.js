const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://plus.unsplash.com/premium_photo-1664114275149-2830de3a229e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const filename = 'hero-background.jpg';

const downloadImage = (url, filename) => {
    const file = fs.createWriteStream(path.join('public', 'images', filename));
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
        });
    }).on('error', (err) => {
        fs.unlink(filename, () => { });
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
};

downloadImage(url, filename);
