const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'Pages-inside', 'GoldenTemple-Info.html');
const template = fs.readFileSync(templatePath, 'utf8');

const places = [
    { file: 'GwaliorFort-Info.html', name: 'Gwalior Fort' },
    { file: 'Twang-Info.html', name: 'Twang' },
    { file: 'Alleppey-Info.html', name: 'Alleppey' },
    { file: 'CamelSafari-Info.html', name: 'Camel Safari' },
    { file: 'SanchiStupa-Info.html', name: 'Sanchi Stupa' },
    { file: 'UmngotRiver-Info.html', name: 'Umngot River' },
    { file: 'VivekanandaRockMemorial-Info.html', name: 'Vivekananda Rock Memorial' },
    { file: 'MehrangarhFort-Info.html', name: 'Mehrangarh Fort' },
    { file: 'Hampi-Info.html', name: 'Hampi' },
    { file: 'Mon-Info.html', name: 'Mon' },
    { file: 'ColvaBreach-Info.html', name: 'Colva Beach' },
];

places.forEach(({ file, name }) => {
    let content = template;
    // Replace title
    content = content.replace(/<title>.*?<\/title>/g, `<title>${name} - Tour India</title>`);
    // Replace h1 heading (Golden Temple -> place name)
    content = content.replace(/Golden Temple/g, name);
    // Replace breadcrumb
    content = content.replace(/Taj Mahal/g, name);
    
    const filePath = path.join(__dirname, 'Pages-inside', file);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created: ${file} -> ${name}`);
});

console.log('All profile pages created!');
