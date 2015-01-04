/**
 * Created by Chris on 1/4/2015.
 */

var http = require('http'),
    thru = require('through'),
    toUpperCase,
    handleRequest,
    server;

    toUpperCase = function(dataBuf){
        this.queue(dataBuf.toString().toUpperCase());
    };
    handleRequest = function(req, res){
        res.writeHead(200, {'content-type': 'text/plain'});
        if(req.method === 'POST'){
            req.pipe(thru(toUpperCase)).pipe(res);
        }
        else
        {
            res.end('beep boop\n');
        }
    };
    server = http.createServer(handleRequest);

    server.listen(process.argv[2]);