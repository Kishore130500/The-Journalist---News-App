import { loadPage } from "./routing.js";
import { newButton } from "./helpers.js";

export const loadCreateButton = async () => {
    newButton("load-form-button", "Create");
    const loadFormPage = document.getElementById("load-form-button");
    loadFormPage.addEventListener("click", (event) => {
        event.preventDefault();
        history.pushState(null, null, "/news/form");
        loadPage();
    })
}

const newsClickEvent = document.getElementById("news-board");
newsClickEvent.addEventListener("click", (event) => {
    if (event.target.tagName === "H2") {
        event.preventDefault();
        history.pushState(null, null, `/api/v1/news/${event.target.id}`);
        loadPage(event.target.id);
    }
});