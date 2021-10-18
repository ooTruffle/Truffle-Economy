const fs = require('fs'); // File System for JS
/**
 * Gets the digit length of any positive or negative number
 * @param {number} x Any Number 
 * @returns {number} Number of digits in a number, like 50000 would return 5
 */
function numDigits(x) { // taken from https://stackoverflow.com/a/28203456 god bless
    return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1; 
}
/**
 * Returns a random whole intiger from 0 to max number
 * @param {number} max Max Number to go to
 * @returns {number} Randomly Generated Number
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Writes JS Object data to a JSON File
 * @param {Object} rawdata An Array Object
 * @param {string} location Location of a file ex: ./poop.json
 * @returns {boolean}  True if successful and vice versa
 */
function WriteToJson(rawdata, location) {
    var final = JSON.stringify(rawdata);
    fs.writeFileSync(location, final, function(err){
        if(err){
          return console.log(err);
        }
        console.log("The File was saved");
        return true;
    });
}

/**
 * 
 * @param {number} ms 
 * @returns {Promise} Waits for set timeout in MS to be done
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {numDigits, getRandomInt, WriteToJson, sleep};