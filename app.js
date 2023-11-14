const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
require('./dbconnect.js') //To connect to DB

const app = express();
app.use(express.json());

const newsSchema = new mongoose.Schema({
    title: String,
    date: String,
    author: String,
    description: String
})
const News = mongoose.model('News', newsSchema);

const tempHome = fs.readFileSync('./public/templates/template-home.html', 'utf-8');
const tempForm = fs.readFileSync('./public/templates/template-form.html', 'utf-8');
const tempRead = fs.readFileSync(`./public/templates/template-read.html`, 'utf-8');
const tempCard = fs.readFileSync('./public/templates/template-news-card.html', 'utf-8');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send(tempHome);
}); 

/*
app.get('/news/read', (req, res) => {
    res.status(200).send(tempRead)
});
*/ 

/*
app.get('/create', (req, res) => {
    res.status(200).send(tempForm);
});
*/

app.get('/api/v1/news', async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json({
            status: "success",
            result: news.length,
            data: news
        })
    } catch(err){
        res.status(404).json({
            status: "Fail",
            message: err
        })
    }
});

/*
app.get('/api/v1/news/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        console.log(req.params.id)
        res
        .status(200)
        .json({
            status: "success",
            data: {
                news
            }
        })
    } catch(err){
        res
        .status(404)
        .json({
            status: "Fail",
            message: err
        })
    }
});
*/

app.post('/api/v1/news', (req, res) => {
    const newNewsToAdd = new News(req.body);
    newNewsToAdd.save()
        .then(doc => console.log(doc))
        .catch(err => console.log(" 💥 Error adding data:", err));
    res
    .status(200)
    .send(" ✅ Data Recieved on Server")
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`\n 📢 App started on port ${port}`);
});