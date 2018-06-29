(function () {
    var obj = {name: "a"};
//  属性的特性对应 删,改,查
//  查看当前属性特性
    console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

//  删除,可配置 configurable ,控制属性的可否删除,初始化可否赋值,自身以及可枚举属性特性
    Object.defineProperty(obj, 'name', {configurable: false});
    console.log(obj);
    console.log(delete obj.name === false);
//
//console.log("***********");
    var obj = {name: "a"};
//  枚举性 enumerable  for...in不可以,Object.keys不可以,in可以,hasOwnProperty可以,
    Object.defineProperty(obj, 'name', {enumerable: false});
    console.log(obj);
//  可写 writable,设置为false后,不可修改值
    Object.defineProperty(obj, 'name', {value: false, writable: false});

    /******
     *  对于一个已存在的属性,可以在任何时候给任何属性特性赋值
     *
     *  给一个没有被初始化的属性配置特性
     *  他如果初次将可配置configurable设置为false,那么他将永远无法修改configurable和enumerable,他可以将默认值为true的writable修改为false而反过来则不可以
     *
     *  这种情况下可能会出现众多bug,不建议使用
     * ****/
    console.log("**************");
    Object.defineProperty(obj, 'age', {configurable: true, enumerable: true, writable: true});
    console.log(obj);
    console.log(Object.getOwnPropertyDescriptor(obj, 'age'));
}());