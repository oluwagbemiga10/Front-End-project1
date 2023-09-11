const day = document.getElementById("day")
const time = document.getElementById("time")
const daysOftheWeek = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const currentDate = new Date()

day.textContent = "Day of the Wek is:" +" " + daysOftheWeek[currentDate.getDay()]

time.textContent = "The current time in milliseconds is:" +" " + currentDate.getTime()

