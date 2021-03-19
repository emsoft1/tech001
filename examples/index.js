const express = require("express");
const app = express();
const compression = require("compression");
var bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);
// app is an instance of express, which basically means it is a very big object with lots of properties

// middleware that ensures that we can read our request body easily, by getting the userinput and parsing it for us, therefore making it available to us
app.use(
    express.urlencoded({
        extended: false,
    })
);

// middleware that serves all of our static files
app.use(express.static(__dirname));

// creating our own middleware
app.use((req, res, next) => {
    console.log("middleware running");
    console.log("-----------");
    console.log(`ran ${req.method} at ${req.url} route`);
    console.log("at", Date.now());
    console.log("-----------");
    next();
});

// listen for a GET request on the '/' route
app.get("/", (req, res) => {
    // console.log('-----------');
    // console.log('ran GET / route');
    // console.log('-----------');
    // console.log("req.cookies", req.cookies);
    // res.send("<h1> Express makes my monday!!</h1>");
    res.sendFile(__dirname + "/examples/scroll-horizontally.html");
});

app.listen(process.env.PORT || 8080, function () {
    console.log("I'm listening.");
});
