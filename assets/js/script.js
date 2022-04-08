// Store our excuse history. This will be used in local storage for persistence later
var excuseHistory = [];

var memeImgEl = document.querySelector(".meme");
var excuseButtonEl = document.querySelector("#excuse-btn");

var excuseEl = document.querySelector("#current-excuse");
var excuseHistoryEl = document.querySelector("#excuse-history");

// Fetch a randomly generated excuse
var getExcuse = function() {
    fetch("https://excuser.herokuapp.com/v1/excuse").then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                excuseEl.textContent = data[0].excuse;
                addToHistory(data[0].id, data[0].excuse);
            })
        }
    })
}

// Store an excuse in our history array and update the element on the page
var addToHistory = function(id, excuse) {
    excuseHistory.push({
        id: id,
        excuse: excuse
    })
    excuseHistoryEl.value += excuse + '\r\n';
}

// Use imgflip API to get a randomly generated meme
var getMeme = function() {
    fetch("https://api.imgflip.com/get_memes").then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                var meme = data.data.memes[Math.floor(Math.random() * 100)];
                memeImgEl.setAttribute("src", meme.url);
            })
        }
    })
}

// Get weekday to display in the header
// var getWeekDay = function() {
//     var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//     var weekValue = new Date();
//     var weekDay = daysOfWeek[weekValue.getDay()];
//     document.getElementById("weekday").innerHTML = weekDay;
// }

// Get day to display in the header
// var getDay = function() {
//     var thisDate = new Date().getDate();
//     var thisMonth = new Date().getMonth() + 1;
//     var thisYear = new Date().getFullYear();
//     document.getElementById("date").innerHTML = thisMonth  + "/" + thisDate + "/" + thisYear;
// }

// Handle the click of the button to display an excuse and random meme
var buttonClickHandler = function(event) {
    getExcuse();
    getMeme();
}

excuseButtonEl.addEventListener("click", buttonClickHandler);