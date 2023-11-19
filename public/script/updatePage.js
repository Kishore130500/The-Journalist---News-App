import { fullNews } from "./loadOneNews.js";
import { tm } from "./updateNews.js";

export const fillForm = () => {
    console.log( "News is\n",fullNews);
    const inputFields = document.querySelectorAll(".input-fields");
    [...inputFields].forEach(element => 
        element.value = fullNews[element.name]);
        tm();
};