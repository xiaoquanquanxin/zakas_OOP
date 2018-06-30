(function () {
    console.log("5.3构造函数继承");

    //  重点,你要保证构造函数不会在缺失参数时报错
    function A() {
        this.name = "a";
    }

    A.prototype.getName = function () {
        return this.name;
    };

    A.prototype.getCountry = function (countryName) {
        return this.name + " is from " + countryName;
    };

    function B() {
        this.name = "b";
    }

    B.prototype = new A();
    B.prototype.constructor = B;
    var b = new B();
    console.log(b);
    console.log(b.getCountry("中国"));
    for (var key in b) {
        //  缺点是原型会被访问
        console.log(b.hasOwnProperty(key) ? key : "");
    }
    console.log("5.3构造函数继承");
})();