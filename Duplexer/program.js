/**
 * Created by Chris on 1/5/2015.
 */

var spawn = require('child_process').spawn,
    duplex = require('duplexer');

    module.exports = function(cmd, opts){
        var child = spawn(cmd, opts);
        return duplex(child.stdin, child.stdout);
    };
