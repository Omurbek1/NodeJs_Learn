function User(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = function () {
        console.log(`Аты:${this.name}  Жашы:${this.age}`);
    }
}
User.prototype.sayHi = function () {
    console.log(`Салам,менин атым ${this.name}  Мен ${this.age} жаштамын`);
}

module.exports = User