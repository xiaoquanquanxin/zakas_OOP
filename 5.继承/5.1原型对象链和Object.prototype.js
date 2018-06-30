(function () {
//  原型对象的属性可以经由对象的实例访问,这就是继承的一种形式
//  对象实例继承了原型对象的属性,而原型对象也是一个对象,他也有自己的原型对象并承其属性.这就是原型链

    var obj = {};
    Object.getPrototypeOf(obj);
//  任何字面量对象都继承自 Object.prototype

//  继承自Object.prototype的方法包括: hasOwnProperty , propertyIsEnumerable , isPrototypeOf , valueOf , toString

//  对对象进行操作符操作就会调用valueOf方法,默认返回值本身
    var obj = {a: 1};
//  返回本身
    console.log(obj.valueOf());

    var obj1 = {a: 2};
//  操作符返回值表达,无法正常表达的时候
    console.log((obj1 + 2));

    var arr = [1, 2, 3];
//  返回本身
    console.log(arr.valueOf());

//  一旦valueOf()返回的是引用的时候,就会回退调用toString()方法.
    console.log(arr + 1);
}());