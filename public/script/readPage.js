import { newButton } from "./helpers.js"
import { loadPage } from "./routing.js";
import { newsId}  from "./loadOneNews.js";

export const loadModifyButtons = () => {
    newButton("delete-button","Delete");
    newButton("update-button","Update");
    const deleteButton = document.getElementById("delete-button");
    deleteButton.addEventListener("click" ,(event) => {
        event.preventDefault();
        alert("delete-button clicked");
    });

    const updateButton = document.getElementById("update-button");
    updateButton.addEventListener("click", (event) => {
        event.preventDefault();
        history.pushState(null,null,`update/${newsId}`);
        loadPage(newsId);
    });
}