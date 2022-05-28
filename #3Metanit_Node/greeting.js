let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 16)
        return "晚上好，" + name;
    else if (hour > 10)
        return "中午好，" + name;
    else
        return "早上好，"+name
}