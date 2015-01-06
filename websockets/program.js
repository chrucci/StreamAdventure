/**
 * Created by Chris on 1/5/2015.
 */

var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');

stream.end('hello\n');