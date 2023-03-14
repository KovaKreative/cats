const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDataFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data");
    
    if(!error) return callback(data);
  });
};

const myCallback = function(data) {
  console.log('Return Value: ', data);
}

breedDetailsFromFile('Bombay', myCallback);
