let currentDate = new Date();
global.date = currentDate;

module.exports.getMessage = function () {
    let hour = currentDate.getHours();

    if (hour > 16)
        return "Кутман кеч! Салам " + global.name;
    else if (hour > 10)
        return "Кутман кун! Салам " + name;
    else
        return "Кутман тан," + name
}