
/**
 * Created by Chris on 1/4/2015.
 */

var thru = require('through'),
    split = require('split'),
    lineIndex = 0,
    isEvenLine = function() {
        return lineIndex % 2 === 0;
    },
    write = function(dataBuf){
        var output = dataBuf.toString();
        lineIndex++;
        if (isEvenLine())
            output = output.toUpperCase();
        else
            output = output.toLocaleLowerCase();
        this.queue(output + '\n');
    };

process.stdin
    .pipe(split())
    .pipe(thru(write))
    .pipe(process.stdout);