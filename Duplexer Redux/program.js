/**
 * Created by Chris on 1/5/2015.
 */
var thru = require('through'),
    duplex = require('duplexer');

module.exports = function(counter){
    var countryCounts = {},
        write = function(location){
            countryCounts[location.country] = ++countryCounts[location.country] || 1;
        },
        end = function(){
            counter.setCounts(countryCounts);
        };
    return duplex(thru(write, end), counter);
};
