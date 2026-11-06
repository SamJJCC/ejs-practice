import express from 'express';//import express
//creating an instance of express app
const app = express();

const PORT = 3004; // Choose an available port number

//view engine
app.set('view engine', 'ejs');
// enable static file serving
app.use(express.static('public'));




// Define a default "route" ('/')

app.get('/', (req, res) => {

    const person = { name: 'Donald Duck', occupation: 'plumber',favoriteColor:'blue' };

    res.render('home', { person });

});


// Define a default "route" ('/')

app.get('/friends', (req, res) => {


    const friends = [ 'Mickey', 'Goofy', 'Minnie', 'Daisy' ];

    res.render('friends', { friends });

});


app.get('/fav-movies', (req, res) => {


    const movies = [  'Spider-Man Brand New Day','Avengers Endgame ', 'Creed', 'Hereditary' ];

    res.render('movies', { movies });

});

// start the server on the designated port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));