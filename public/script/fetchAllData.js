let data;

function fetchData(){
    fetch('/api/v1/news')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData["data"];
        })
        .catch(err => console.log(" 💥 Error retrieving data \n", err));
}

window.onload = fetchData();

export function accessData(){
    if(!data){
        fetchData().then(() => data);
    }else{
        return Promise.resolve(data);
    }
}