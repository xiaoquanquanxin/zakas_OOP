(function () {
    //  对象对属性的控制有三种,可拓展性 preventExtensions,封印 seal,冻结 freeze
    var obj = {
        name: "a",
    };
//  可拓展性控制对象是否可以新增属性
    Object.preventExtensions(obj);
    console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
    console.log(Object.isExtensible(obj) === false);

//  封印对象,控制增删
    Object.seal(obj);
//  由于不可以删除属性,则obj.name的configurable特性变成了false
    console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
    console.log(Object.isSealed(obj));
//  这时不能修改可配置特性
//  Object.defineProperty(obj, 'name', {configurable: false/true(x)});

//  冻结对象,控制增删改
    Object.freeze(obj);
    console.log(Object.isFrozen(obj));
    console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
}());