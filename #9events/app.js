// const Emitter = require('events')
// let emitter = new Emitter();
// let eventName = 'greet';
// emitter.on(eventName, function (data) {
//     console.log("Баарынарга салам!");
// });

// emitter.emit(eventName, "Привет мир!")

// 2

const util = require('util');
const EventEmitter = require('events')

function User() {

}
util.inherits(User, EventEmitter)
let eventName = 'Omurbek'
User.prototype.sayHi = function (data) {
    this.emit(eventName, data)
}
let user = new User();
user.on(eventName, function (data) {
    console.log(data);
})
user.sayHi('Мага сенин кийимин керек!')