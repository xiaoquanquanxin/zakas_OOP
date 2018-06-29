(function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.getName = function () {
        return this.name;
    };
    var person1 = new Person("james");

    console.log(person1.getName());
    console.log(Object.getPrototypeOf(person1));
    console.log(Object.prototype === Object.getPrototypeOf({}));
    console.log(Object.prototype.isPrototypeOf({}));
    console.log(person1);
}());