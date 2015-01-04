/**
 * Created by Chris on 1/4/2015.
 */

var concat = require('concat-stream'),
    reverse = function(inputBuffer){
        var input = inputBuffer.toString();
        console.log(input.split("").reverse().join(""));
    };

process.stdin
    .pipe(concat(reverse));