(function () {
    var obj = {_age: 12};
    Object.defineProperty(obj, '_age', {configurable: false, writable: true, enumerable: false});
    Object.defineProperty(obj, 'age', {
        configurable: false,
        get: function () {
            return this._age;
        },
        set: function (val) {
            this._age = val;
        }
    });
    console.log(obj);
}());