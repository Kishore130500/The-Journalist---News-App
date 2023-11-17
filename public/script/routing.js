import { loadFullNews } from "./loadOneNews.js";
import { newScript,newStyle,deleteScriptAndStyle } from "./helpers.js";
import { loadCreateButton } from "./homePage.js";
import { loadModifyButtons } from "./readPage.js";

//Selecting root div
const root = document.getElementById("news-board");

//HTML template for  form
const formTemplate = `
    <form>
        <div class="container">
            <label for="author">Author</label>
            <input type="text" name="author" class="input-fields" id="author-input" required>
            <label for="date" id="date-label">Date</label>
            <input type="date"name="date" class="input-fields" id="date-input" required>
        </div>
        <label class="clearfix" for="heading">Heading</label> <br>
        <textarea name="title" class="input-fields" id="" required></textarea><br>
        <label for="content">Article</label><br> <br>
        <textarea name="description" class="input-fields" id="content-box" required></textarea><br>
        <button type="submit" id="form-submit"> </button>
    </form>`;

//For currently selected news' id
let currentId;


//Load the Home Page
const loadHomePage = () => {
    deleteScriptAndStyle();
    loadCreateButton();
    newStyle("../css/app.css");
    newScript("../script/loadAllNews.js");
    newScript("../script/homePage.js")
};

//Load the form page
const loadFormPage = () => {
    deleteScriptAndStyle();
    newStyle("../css/form.css");
    newScript("../script/submitFormData.js");
    root.innerHTML = formTemplate;
}; 

//Load the page for reading a news
const loadReadPage = (id) => {
    currentId = id;
    deleteScriptAndStyle();
    loadModifyButtons();
    newStyle("../../../css/read-news.css");
    //newScript("../../../script/loadOneNews.js");
    loadFullNews(id);  
};

const loadUpdatePage = () => {
    deleteScriptAndStyle();
    newStyle("../../../../css/form.css");
    newScript("../../../../script/updateNews.js");
    root.innerHTML = formTemplate;
};

const loadPage = (id = 0) => {

    const endPoint = document.location.pathname;
    console.log(`Path is :${endPoint}`);//remove later

    switch (endPoint) {
        case "/":
            loadHomePage();
            break;

        case "/news/form":
            loadFormPage();
            break;

        case `/api/v1/news/${id}`:
            loadReadPage(id);
            break;
        
        case `/api/v1/news/update/${id}`:
            loadUpdatePage();
            break;

    }
}


window.addEventListener("popstate", loadPage);
document.addEventListener("DOMContentLoaded", loadPage);

export  {loadPage};