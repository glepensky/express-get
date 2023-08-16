let express = require('express');
// Using express to reduce the amount of code to make the server run. 
let app = express();
const port = 5001;

app.use(express.static('server/public'));
// Telling server were html and js files are.

app.listen(port, function() {
    console.log('listening on port', port);
})
// Like a while loop, this will just keep running until we tell it to stop. 

// -----------new week 7 code below-------------

app.use(express.json())

const quoteList = require('./quoteList')
// ./ is navigating internal file navigation
// the / on 15 is a route

// when we visit localhost:5001/quotes
// in our browser, express will call this function
app.get('/quotes', (req, res) => {
    console.log('request for /quotes was made');
    // '/quotes' is the path
    // req is request and res is response
    // send back list of quotes
    // so we can see it in our browser
    res.send(quoteList)
    // the response is to send the quote list
})

app.post('/quotes', (req, res) => {
    console.log('get a POST request.', req.body);

    let quote = req.body
    quoteList.push(quote)
    res.sendStatus(201)
})





// DELETE
app.delete('/quotes/:index', (req,res) => {
    console.log('Delete request!', req.body);
    console.log(req.params);

let index = req.params.index

quoteList.splice(index, 1)
res.sendStatus(201)
})

// http://localhost:5001/quotes
// this is called | Route | Path | URL
// 
// 4 types of routes
// GET
// POST
// PUT
// DELETE
// "CRUD" - Create, Read, Update, Delete

// status codes
// 200 Ok - everything worked as expected.
// 201 Created - a record was created without issue.
// 400 Bad Request - something when wrong in your route.
// 404 Not Found - you probably have the wrong address.
// 500 Server Error - something bad happened on the server.

