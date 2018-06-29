(function () {
    function Person(name) {
        Object.defineProperty(this, 'name', {
            configurable: false,
            enumerable: false,
            get: function () {
                return name
            },
            set: function (val) {
                name = val;
            }
        });
        this.sayName = function () {
            console.log(this.name)
        }
    }
    var person1 = new Person("james");
    person1.name = "tmac";
    person1.sayName();
    for(var key in person1){
        console.log(key);
    }
    console.log(person1);
    console.log("*********");
}());