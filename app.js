const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 8080;

mongoose.connect('mongodb://127.0.0.1:27017/pcontact', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongoose connected');
}).catch((e) => {
    console.log('Failed to connect to MongoDB:', e);
});

var contactSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);
app.use(express.urlencoded({ extended: true}));


app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('index.ejs');
});

app.get('/resume', (req,res)=>{
    res.status(200).render('resume.ejs')
})

app.get('/project', (req, res) => {
    res.status(200).render('project.ejs');
});
app.get('/project-1', (req, res) => {
    res.status(200).render('project-1.ejs');
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.ejs');
});



app.post('/contactUs', async (req, res) => {
    try {
        const myData = new Contact(req.body);
        await myData.save();
        res.redirect('/contact')//it redirect to this page will help to be the same page on submitting the contact form 
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});