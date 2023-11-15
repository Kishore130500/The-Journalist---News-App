import { capitalize } from "./homePage.js";

let data;

const fillNewsTemplate = function () {
    fetch("/api/v1/news")
        .then(response => response.json())
        .then(convertedData => {
            data = convertedData["data"];
            const newsBoard = document.getElementById("news-board")
            data.forEach(news => {
                const newsCard = document.createElement("div");
                newsCard.className = "news-card";
                newsCard.innerHTML = `
                    <a href=""> <h2 id="${news._id}">${news.title}</h2> </a>
                    <em class="news-date">${news.date}</em>
                    <em class="news-author">${capitalize(news.author)}</em>
                    `
                newsBoard.appendChild(newsCard);
            });
        })
        .catch(err => console.log(" 💥 Error retrieving data \n", err));
}



fillNewsTemplate();