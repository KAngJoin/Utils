/**
 * @name 获取某个月是多少天
 * @param {String} _date 
 * @returns {Number} day
 * @description 传入一个合法的日期，返回该日期所属月份一个多少天
 */
function daysOfTheMonth(_date) {
    if (!_date) throw new Error('Error parameter for new Date().')
    let now = new Date(_date); //当前日期
    let nowMonth = now.getMonth(); //当前月
    let nowYear = now.getFullYear(); //当前年
    //本月的开始时间
    let monthStartDate = new Date(nowYear, nowMonth, 1);
    //本月的结束时间
    let monthEndDate = new Date(nowYear, nowMonth + 1, 1);
    let timeStar = Date.parse(monthStartDate)
    let timeEnd = Date.parse(monthEndDate)
    let day = (timeEnd - timeStar) / (3600 * 24 * 1000)

    return day
}

let m1 = '2020-02'  // 某一月
let m2 = '2020-04-01' // 具体某一天
let m3 = new Date() // 当前月
console.log(daysOfTheMonth(m1)) // 29
console.log(daysOfTheMonth(m2)) // 30
console.log(daysOfTheMonth(m3)) // 31


/**
 * 总结：new Date()的参数情况 （https://develop=r.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date）
 *      1. new Date();
 *      2. new Date(value);
 *      3. new Date(dateString);
 *      4. new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
 */