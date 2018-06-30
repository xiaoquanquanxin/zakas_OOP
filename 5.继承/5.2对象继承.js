(function () {
//  对象继承是最简单的继承类型
//  指定哪个对象是新对象的原型就ok
    var a = {a: 1};
    var b = {b: 2};
//  修改原型
    a.__proto__ = b;
    console.log("5.2对象继承");
    console.log(a);


    var c = {c: 3};
//  指定原型
    var d = Object.create(c, {
        "d": {
            value: 4,
            enumerable: true,
            configurable: true,
            writable: true
        }
    });
    console.log(d);


    console.log("5.2对象继承");
})();