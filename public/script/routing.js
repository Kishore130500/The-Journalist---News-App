import { loadFullNews } from "./loadOneNews.js";

//Add a script
const newScript = (path) => {
    const newElement = document.createElement("script");
    newElement.type = "module";
    newElement.src = path;
    newElement.className = "temp-element";
    document.body.appendChild(newElement);
};

//Add a style
const newStyle = (path) => {
    const newElement = document.createElement("link");
    newElement.rel = "stylesheet";
    newElement.href = path;
    newElement.className = "temp-element";
    document.head.appendChild(newElement);
};

//Pop style and script
const deleteScriptAndStyle = () => {
    const elements = document.querySelectorAll(".temp-element");
    const elementsArray = [...elements];
    elementsArray.forEach(element => element.parentNode.removeChild(element));
    console.log("Script n Style Deleted")
};

//Selecting root div
const root = document.getElementById("news-board");

//Load the Home Page
const loadHomePage = () => {
    deleteScriptAndStyle();
    newStyle("../css/app.css");
    newScript("../script/loadAllNews.js");
    newScript("../script/homePage.js")
};

//Load the form page
const loadFormPage = () => {
    deleteScriptAndStyle();
    newStyle("../css/app.css");
    newStyle("../css/form.css");
    newScript("../script/submitFormData.js");
    const formTemplate = `
        <form>
            <div class="container">
                <label for="author">Author</label>
                <input type="text" name="author" class="input-fields" id="author-input">
                <label for="date" id="date-label">Date</label>
                <input type="date"name="date" class="input-fields" id="date-input">
            </div>
            <label class="clearfix" for="heading">Heading</label> <br>
            <textarea name="title" class="input-fields" id=""></textarea><br>
            <label for="content">Article</label><br> <br>
            <textarea name="description" class="input-fields" id="content-box"></textarea><br>
            <button type="submit" id="form-submit">Submit</button>
        </form>`;
    root.innerHTML = formTemplate;

}; 

//Load the page for reading a news
const loadReadPage = (id) => {
    deleteScriptAndStyle();    
    newStyle("../../../css/app.css");
    newStyle("../../../css/read-news.css");
    newScript("../../../script/loadOneNews.js");
    loadFullNews(id);
};


const loadPage = (id = 0) => {

    const endPoint = document.location.pathname;
    console.log(endPoint);//remove later

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

    }
}


window.addEventListener("popstate", loadPage);
document.addEventListener("DOMContentLoaded", loadPage);

export  {loadPage};