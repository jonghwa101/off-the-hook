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
}

// Use moment to get the weekday to display in the header
var getWeekDay = function() {
    var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];    const d = new Date();
    var weekValue = new Date();
    var weekDay = daysOfWeek[weekValue.getDay()];
    document.getElementById("weekday").innerHTML = weekDay;
}

// Use moment to get the day to display in the header
var getDay = function() {
    var thisDate = new Date().getDate();
    var thisMonth = new Date().getMonth() + 1;
    var thisYear = new Date().getFullYear();
    document.getElementById("date").innerHTML = thisMonth  + "/" + thisDate + "/" + thisYear;
}

getWeekDay();
getDay();
getExcuse();