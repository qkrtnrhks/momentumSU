const clockContainer = document.querySelector(".js-clock"),
     clockTitle = clockContainer.querySelector("h1");


function timer() {
   const timeNow = new Date();
   const hourNow = timeNow.getHours();
   const minuteNow = timeNow.getMinutes();
   const secondNow = timeNow.getSeconds();

   clockTitle.innerText = `${hourNow < 10 ? `0${hourNow}` : hourNow}:${minuteNow < 10 ? `0${minuteNow}` : minuteNow}:${secondNow < 10 ? `0${secondNow}` : secondNow}`
}


function init() {
    timer()
    setInterval(timer, 1000)
}

init()