function daysOfTheMonth(_date) {
    let now = new Date(_date); 
    let nowMonth = now.getMonth(); 
    let nowYear = now.getFullYear(); 
    let monthStartDate = new Date(nowYear, nowMonth, 1);
    let monthEndDate = new Date(nowYear, nowMonth + 1, 1);
    let timeStar = Date.parse(monthStartDate)
    let timeEnd = Date.parse(monthEndDate)
    let day = (timeEnd - timeStar) / (3600 * 24 * 1000)
    return day
}
function GetThisWeek(time) {
    let now = new Date(time)
    if (now.toString() === 'Invalid Date') throw TypeError()
    console.log(daysOfTheMonth('2020-07'));
    console.log(now.getMonth()) // 一周的第几天, 0-6 其中 0 表示 周天
}

GetThisWeek('2020-08-02')