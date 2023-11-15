import { accessData } from "./fetchAllData.js";
import { capitalize } from "./homePage.js";


const loadFullNews = (id) => {
        accessData().then(data => {
            const fullNews = data.find(data => data._id === id);
            console.log(fullNews);
            const newsClickEvent = document.getElementById("news-board");
            const fullNewsCard = `
                   <section id="news-page">
                       <h1> ${fullNews.title} </h1>
                       <div id="subscript-container">
                           <em> Edited by: <span id="author-name"> ${capitalize(fullNews.author)} </span> </em>
                           <em>  Updated: <span> ${fullNews.date} </span> </em>
                       </div>
                       <hr>
                       <img id="news-img" src="" alt="">
                       <article id="content"> ${fullNews.description} </article>
                   </section>
               `;
               newsClickEvent.innerHTML = fullNewsCard;
        })
}

export {loadFullNews};  