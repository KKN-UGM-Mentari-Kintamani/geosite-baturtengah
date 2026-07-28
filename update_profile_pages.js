const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

const regex = /href="\.\/Pages-inside\/([^"]+-Info\.html)"[^>]*>([^<]+)<\/a>/g;
let match;
const pagesMap = {};

while ((match = regex.exec(indexContent)) !== null) {
  const fileName = match[1];
  const placeName = match[2].trim();
  pagesMap[fileName] = placeName;
}

const pagesDir = path.join(__dirname, 'Pages-inside');

Object.keys(pagesMap).forEach(fileName => {
  const placeName = pagesMap[fileName];
  const filePath = path.join(pagesDir, fileName);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace title
    content = content.replace(/<title>.*?<\/title>/g, `<title>${placeName} - Tour India</title>`);

    // Replace h1 heading
    content = content.replace(/<h1 class="mt-4 mb-3">[\s\S]*?<small>/g, `<h1 class="mt-4 mb-3">${placeName}\n      <small>`);

    // Replace breadcrumb active item
    content = content.replace(/<li class="breadcrumb-item active">.*?<\/li>/g, `<li class="breadcrumb-item active">${placeName}</li>`);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${fileName} -> ${placeName}`);
  } else {
    console.warn(`File not found: ${fileName}`);
  }
});

console.log('All profile pages updated successfully!');
