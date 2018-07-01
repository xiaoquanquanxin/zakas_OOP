//  模块模式,创建拥有私有数据的单件对象的模式
const obj = (function () {
    const o = {};
    var name = "james";
    o.getName = function () {
        return name;
    };
    o.setName = function (val) {
        name = val;
    };
    return o;
})();
console.log(obj);

//  构造函数的私有成员
function Person(name) {
    var age = 123;
    this.name = name;
    this.getAge = function () {
        return age;
    };
    this.growOlder = function () {
        age++;
    }
}

var person = new Person("james");
console.log(person);

//  构造函数的原型操作私有属性,可以达到影响所有实例的效果
var P = (function () {
    var count = 0;

    function Person(name) {
        this.name = name;
        this.addCount();
    }

    Person.prototype.getCount = function () {
        console.log(count);
    }
    Person.prototype.addCount = function () {
        count++;
    };

    return Person;
})();
var p = new P("pierce");
var p = new P("pierce");
var p = new P("pierce");
console.log(p);