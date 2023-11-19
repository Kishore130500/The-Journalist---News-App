import { accessData } from "./fetchAllData.js";
import { capitalize } from "./helpers.js";

let fullNews;
let newsId;
const loadFullNews = (id) => {
        accessData().then(data => {
            fullNews = data.find(data => data._id === id);
            newsId = fullNews._id;
            const newsClickEvent = document.getElementById("news-board");
            const fullNewsCard = `
                   <section id="news-page">
                       <h1> ${fullNews.title} </h1>
                       <div id="subscript-container">
                           <em> Edited by: <span id="author-name"> ${capitalize(fullNews.author)} </span> </em>
                           <em>  Updated: <span> ${fullNews.date} </span> </em>
                       </div>
                       <hr>
                       ${fullNews.image ? `<img id="news-img" src=${fullNews.image} alt=""></img>`:""}
                       <article id="content"> ${(fullNews.description).replaceAll("\n","<br>")} </article>
                   </section>
               `;
               newsClickEvent.innerHTML = fullNewsCard;
               window.scrollTo(0, 0);
        })
}

export {loadFullNews,fullNews,newsId};
