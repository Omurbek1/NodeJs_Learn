let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 16)
        return "Кутман кеч," + name;
    else if (hour > 10)
        return "Кутман кун," + name;
    else
        return "Кутман тан," + name
}
