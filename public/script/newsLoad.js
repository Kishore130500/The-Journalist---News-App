const capitalize = (authorName) => {
    let nameSplit = authorName.split(" ");
    nameSplit.forEach((item,index) => nameSplit[index] =  item.charAt(0).toUpperCase()+item.slice(1).toLowerCase());
    return nameSplit.join(" ");
}

const fillNewsTemplate = function () {
    fetch("/api/v1/news")
        .then(response => response.json())
        .then(convertedData => {
            const data = convertedData["data"];
            const newsBoard = document.getElementById("news-board")
            data.forEach(news => {
                const newsCard = document.createElement("div");
                newsCard.className="news-card";
                newsCard.innerHTML = `
                    <a href="/read"><h2>${news["title"]}</h2></a>
                    <em class="news-date">${news["date"]}</em>
                    <em class="news-author">${capitalize(news["author"])}</em>
                    `
                newsBoard.appendChild(newsCard);
            });
        })
        .catch(err => console.log(" 💥 Error retrieving data \n", err));
}

fillNewsTemplate();
