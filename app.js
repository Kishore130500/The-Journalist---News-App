const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
require('./dbconnect.js') //To connect DB

const app = express();
app.use(express.json());

const newsSchema = new mongoose.Schema({
    title: String,
    date: String,
    author: String,
    description: String
})
const News = mongoose.model('News', newsSchema);

/*
const testNews = new News({
    title: 'HTLS 2023: Peak XV Partners MD says ‘AI is fastest-changing landscape’, gives Indian startups a heads up',
    date: '2023-11-02',
    author: 'HT News Desk',
    description: `HTLS 2023: Shailendra Singh of Peak XV Partners said the current environment is a gift for founders as they are able to surround themselves with good talent.
\nArtificial intelligence or AI is perhaps the “fastest-changing landscape of any new arena” and some of the Indian startups working on it will need to learn, evolve and grow quickly, said Shailendra Singh, managing director of Peak XV Partners (formerly Sequoia Capital India) – a leading venture capital and growth investing firm investing across India and Southeast Asia. Speaking on Day 3 of the 21st edition of the Hindustan Times Leadership Summit, Singh told the editor-in-chief R Sukumar that “every company needs to have an AI strategy now”.
\nIn the last 18 years, Singh and his team have partnered with over 400 companies in the technology, consumer, and financial space. He joined the firm in 2006 and spearheads all activities in India and the ASEAN region. Singh has advised on several successful investments including Carousell, CRED, Druva, Gojek, Pine Labs, Tokopedia and Unacademy.
\nHe was included on the Forbes Midas List of top global VCs in 2018, 2019 and 2020. He has received an MBA with distinction from Harvard Business School and an undergraduate degree in chemical engineering from IIT Bombay.`
})
testNews.save().then(doc  =>{
    console.log(doc);
}).catch(err =>{
    console.log("Error adding data 💥:",err);
});

*/

const tempHome = fs.readFileSync('./public/templates/template-home.html', 'utf-8');
const tempForm = fs.readFileSync('./public/templates/template-form.html', 'utf-8');
const tempRead = fs.readFileSync(`./public/templates/template-read.html`, 'utf-8');
const tempCard = fs.readFileSync('./public/templates/template-news-card.html', 'utf-8');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send(tempHome);
});

app.get('/read', (req, res) => {
    res.status(200).send(tempRead)
});

app.get('/create', (req, res) => {
    res.status(200).send(tempForm);
});

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

app.post('/api/v1/news', (req, res) => {
    const newNewsToAdd = new News(req.body);
    newNewsToAdd.save()
        .then(doc => console.log(doc))
        .catch(err => console.log(" 💥 Error adding data:", err));
    res.status(200).send(" Data Recieved on Server")
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`\n 📢 App started on port ${port}`);
});