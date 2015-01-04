/**
 * Created by Chris on 1/4/2015.
 */

var thru = require('through'),
    write = function(dataBuffer){
        this.queue(dataBuffer.toString().toUpperCase());
    };

    process.stdin.pipe(thru(write)).pipe(process.stdout);
