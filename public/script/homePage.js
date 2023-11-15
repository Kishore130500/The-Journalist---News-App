import { loadPage } from "./routing.js";

const capitalize = (authorName) => {
    let nameSplit = authorName.split(" ");
    nameSplit.forEach((item, index) => nameSplit[index] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    return nameSplit.join(" ");
}


const loadFormPage = document.getElementById("load-form-button")
loadFormPage.addEventListener("click", (event) => {
    event.preventDefault();
    history.pushState(null, null, "/news/form");
    loadPage();
})


const newsClickEvent = document.getElementById("news-board");
newsClickEvent.addEventListener("click", (event) => {
    if (event.target.tagName === "H2") {
        event.preventDefault();
        history.pushState(null, null, `/api/v1/news/${event.target.id}`);
        loadPage(event.target.id);
    }
});

export {capitalize};