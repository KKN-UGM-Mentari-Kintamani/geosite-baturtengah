const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// The portfolio section starts around line 104 and ends around 307.
// We want to replace the structure inside each single-portfolio item.

const regex = /<div class="single-portfolio([\s\S]*?)<div class="item">([\s\S]*?)<img src="(.*?)" alt="(.*?)">([\s\S]*?)<div class="p-inner([^>]*)">([\s\S]*?)<h4><a href="(.*?)"[^>]*>(.*?)<\/a><\/h4>([\s\S]*?)<div class="cat([^>]*)">(.*?)<\/div>([\s\S]*?)<\/div>([\s\S]*?)<\/div>([\s\S]*?)<\/div>/g;

content = content.replace(regex, (match, p1, p2, imgSrc, imgAlt, p5, pInnerClass, p7, href, name, p10, catClass, catName, p13, p14, p15) => {
    
    // Convert name to a valid filename for the profile page
    let fileName = name.replace(/[^a-zA-Z0-9]/g, '') + '-Info.html';
    
    // If it's already one of the ones we did, keep its filename (or it will just recreate it)
    if (name === "Golden Temple") fileName = "GoldenTemple-Info.html";
    if (name === "Gwalior Fort") fileName = "GwaliorFort-Info.html";
    if (name === "Twang") fileName = "Twang-Info.html";
    
    // Create the dummy html file if it doesn't exist
    const templatePath = path.join(__dirname, 'Pages-inside', 'GoldenTemple-Info.html');
    const newFilePath = path.join(__dirname, 'Pages-inside', fileName);
    
    if (!fs.existsSync(newFilePath)) {
        try {
            fs.copyFileSync(templatePath, newFilePath);
            console.log(`Created ${fileName}`);
        } catch(e) {
            console.error(`Failed to create ${fileName}`);
        }
    }

    return `<div class="single-portfolio${p1}<div class="item">
								<img src="${imgSrc}" alt="${imgAlt}" style="border-radius: 10px;">
								<div class="p-inner text-center mt-3">
									<h4><a href="./Pages-inside/${fileName}" style="color: #0056b3; text-decoration: none;">${name}</a></h4>
									<div class="cat" style="color: #888;">${catName}</div>
								</div>
							</div>
						</div>`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Portfolio updated successfully!');
