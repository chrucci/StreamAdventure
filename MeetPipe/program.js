/**
 * Created by Chris on 1/4/2015.
 */

var fs = require('fs'),
    filepath = process.argv[2];

    fs.createReadStream(filepath).pipe(process.stdout);

