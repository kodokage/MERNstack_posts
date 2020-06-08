const express = require('express');
const app  = express();
const mongoose = require('mongoose')
//const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


//Models
const Post =  require('./models/Post');
//const Members = require('./Members')

//Connect to database
mongoose.connect("mongodb://localhost:27017/MernApp").then(
          () => {console.log('Database connection is successful') },
          err => { console.log('Error when connecting to the database'+ err)}
);


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('tiny'));
app.use(cors());




//Middleware

/////Routes
app.get('/', (req, res)=>{
    res.send('Working')
})

app.post('/post', (req, res)=>{
    console.log("Making Post");
    const{name, title, subject} = req.body;
    const newPost = new Post({
        name,
        title,
        subject
    });
    newPost.save();
    console.log(newPost);
    
})

app.get('/posts', (req, res)=>{
    console.log('Getting Posts');
    Post.find({}).then(posts=>{
        res.json(posts)
    })
})




const PORT = 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`))