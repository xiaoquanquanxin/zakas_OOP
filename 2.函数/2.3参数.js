function sum() {
    var result = 0;
    var length = arguments.length;
    while (length) {
        length--;
        result += arguments[length];
    }
    return result;
}

var a = sum(1, 2, 3, 4, 5);
var b = sum(1);
var c = sum();
console.log(a, b, c);


function getName(label) {
    console.log(label, this.name);
}

var obj = {
    name: "kk"
};

var fn = getName.bind(obj,"雷波多");
console.log(fn)