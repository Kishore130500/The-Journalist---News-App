import { popUp } from "./popUp.js";

document.querySelector("#form-submit").innerHTML = "Submit";

let formData = {}

window.addEventListener('load', () => {
    formData = {
        title: "",
        date: "",
        author: "",
        image: "",
        description: ""
    }
});

//Collecting data in fields
const handleInputChange = (event) => {
    formData[event.target.name] = event.target.value;
};

const inputs = document.querySelector('#news-board');
inputs.addEventListener('change', handleInputChange);

//Submitting data
const handleSubmit = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);

    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    // "/" in beginning of the end point ensures that the request is made to the absolute path, from the root of the domain. 
    fetch('/api/v1/news', options)
        .then(response => {
            const inputFields = document.querySelectorAll(".input-fields");
            [...inputFields].forEach(element => element.value = "");
            popUp("done","Posted")
            console.log(response.body);
        })
        .catch(err => {
            popUp("close","posting");
            console.log(" 💥 Error : \n",err)});
};

const submitData = document.querySelector('#form-submit');
submitData.addEventListener('click', handleSubmit);