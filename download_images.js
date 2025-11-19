const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    {
        url: 'https://images.unsplash.com/photo-1591122523233-22037c1dec9f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'olive-grove.jpg'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1668772053928-378aec69cbf6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'hiram-bottle.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1574785289548-b6604d39125d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'olivazerta-pouring.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1474979266404-7cadd259d3d6?q=80&w=2070&auto=format&fit=crop',
        name: 'hero-bg.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=2070&auto=format&fit=crop',
        name: 'cta-bg.jpg'
    }
];

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join('public', 'images', filename));
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filename, () => { }); // Delete the file async. (But we don't check the result)
            console.error(`Error downloading ${filename}: ${err.message}`);
            reject(err.message);
        });
    });
};

async function downloadAll() {
    for (const img of images) {
        try {
            await downloadImage(img.url, img.name);
        } catch (e) {
            console.error(e);
        }
    }
}

downloadAll();
