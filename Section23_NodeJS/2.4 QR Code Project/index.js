/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';


inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    const newArray = url.slice(0, -4);
    qr_svg.pipe(fs.createWriteStream('qr_imge_'+newArray+'.png'));

    // const data = new Uint8Array(Buffer.from(url));
    fs.writeFile('URL2.txt', url, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



