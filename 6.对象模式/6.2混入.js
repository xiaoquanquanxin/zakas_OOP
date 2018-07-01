console.log("6.2混入-----------------------");

//  就是for in  hasOwnProperty 循环赋值对象,而且是浅拷贝
/**
 * 可以给一个对象添加事件支持
 * */
function EventTarget() {

}

EventTarget.prototype = {
    constructor: EventTarget,
    addListener: function (type, listener) {
        if (!this.hasOwnProperty("_listeners")) {
            this._listeners = [];
        }
        if (typeof  this._listeners[type] === "undefined") {
            this._listeners[type] = [];
        }
        this._listeners[type].push(listener);
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this;
        }
        if (!event.type) {
            throw new Error("少了type这个属性");
        }
        if (this._listeners && this._listeners[event.type] instanceof Array) {
            var listeners = this._listeners[event.type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event);
            }
        }
    },
    removeListener: function (type, listener) {
        if (this._listeners && this._listeners[type] instanceof Array) {
            var listeners = this._listeners[type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i] === listener) {
                    listener.splice(i, 1);
                    break;
                }
            }
        }
    }
};
var target = new EventTarget();

target.addListener("message1", function (event) {
    console.log(event);
});

target.addListener("message", function (event) {
    console.log(event);
});
target.fire({type: "message", data: "hello world"});
target.fire({type: "message1", data: "11111111"});
console.log("6.2混入-----------------------");