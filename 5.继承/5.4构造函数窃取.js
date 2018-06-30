(function () {
    //  如果你需要在子类中继承父类的构造函数部分,也就是希望子类的构造函数拥有父类构造函数里的值的时候
    //  也被叫做伪类继承
    console.log("5.4构造函数窃取");
    console.log("传说中的call继承,依据是call指定一个新this值去调用方法");

    function A(name) {
        this.name = name;
    }

    A.prototype.getName = function () {
        return this.name;
    };

    //  我希望在子类中拥有父类的name这个属性
    function B(name) {
       A.call(this, name);
    }
    B.prototype = new A();
    B.prototype.constructor = B;
    var b = new B("james");
    console.log(b);
    console.log(b.getName())
    console.log("5.4构造函数窃取");
})();