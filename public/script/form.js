let formData = {}

window.addEventListener('load', () => {
    formData = {
        title: "",
        date: "",
        author: "",
        description: ""
    }
});

//Collecting data in fields
const handleInputChange = (event) => {
    formData[event.target.name] = event.target.value;
};

const inputs = document.querySelector('.form-holder');
inputs.addEventListener('change', handleInputChange);

//Submitting data
const handleSubmit = (event) => {
    event.preventDefault();


    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
    }
    fetch('api/v1/news', options)
        .then(response => {
            alert("✅ Successfully posted article")
            console.log(response.body)
        })
        .catch(err => console.log(" 💥 Error sending data"));
};

const submitData = document.querySelector('#form-submit');
submitData.addEventListener('click', handleSubmit);