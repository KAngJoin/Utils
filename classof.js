/**
 * @name 类型检测
 * @param {*} object 
 */
function classof(object) {
    if (object === undefined) return 'Undefined'
    if (object === null) return 'Null'
    return Object.prototype.toString.call(object).slice(8, -1)
}
/**
 * 总结 ：
 *  1. 获取数组部分成员，使用`负数`的好处   如：.slice(8, -1)
 */

let str = '[abcdefg]'
console.log(str.slice(6, -1)); // fg  6 = -1 -2 + length