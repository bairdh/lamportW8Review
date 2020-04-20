// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

const inventoryRouter = require('./routes/inventory.router');
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server up:', port );
})
// routes
app.use('/inventory', inventoryRouter);


