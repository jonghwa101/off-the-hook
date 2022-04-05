// Store our excuse history. This will be used in local storage for persistence later
var excuseHistory = [];

// Fetch a randomly generated excuse
var getExcuse = function() {
    fetch("https://excuser.herokuapp.com/v1/excuse").then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
                addToHistory(data[0].id, data[0].excuse);
            })
        }
    })
}

// Store an excuse in our history array
var addToHistory = function(id, excuse) {
    excuseHistory.push({
        id: id,
        excuse: excuse
    })
    console.log(excuseHistory);
}

getExcuse();