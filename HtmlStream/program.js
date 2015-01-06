/**
 * Created by Chris on 1/5/2015.
 */

var trumpet = require('trumpet'),
    thru = require('through'),
    transformIt = function(buf){
        this.queue(buf.toString().toUpperCase());
    };
var tr = trumpet();

    process.stdin.pipe(tr).pipe(process.stdout);

    var stream = tr.select('.loud').createStream();
    stream.pipe(thru(transformIt)).pipe(stream);