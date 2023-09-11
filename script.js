function getDayOfWeekAsString(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

function currentDate() {
const dayObject = document.getElementById('currentDayOfTheWeek')
const today = new Date()
const day = getDayOfWeekAsString(today)
dayObject.textContent = day  
}
function currentUTC() {
    const utcObject = document.getElementById('currentUTCTime')
    const today = new Date()
    const utc = today.getUTCMilliseconds()
    utcObject.textContent = utc  
    }
const updateButtonday = document.getElementById('currentDay');
updateButtonday.addEventListener('click', currentDate)

const updateButtonutc = document.getElementById('currentUTC');
updateButtonutc.addEventListener('click', currentUTC)


