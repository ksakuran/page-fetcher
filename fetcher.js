const args = process.argv.splice(2)
//console.log(args);
const url = args[0];
const filePath = args[1];

const fs = require('fs');

const request = require('request');

request(`${url}`, (error, response, body) => {
  if(error) {
  console.log('error: ', error);
  } //prints out error if one occurred
  const bytes = body.length;
  fs.writeFile(`${filePath}`, body, err => {
    if (err) {
      console.log(err);
    }    
    console.log(`Downloaded and saved ${bytes} bytes to ${filePath}`)
  }) 
});