// const url = require('url');
// const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// const q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// const qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'


const http = require("http");
const url = require("url");
const os = require('os');
const path = require('path');


const filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);

console.log("Platform: "  + os.platform());
console.log("Architecture: " + os.arch());


const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': "text/plain"})
    const q = url.parse(req.url);
    console.log(q.year);
    console.log(q.month);
})

app.listen(3000)