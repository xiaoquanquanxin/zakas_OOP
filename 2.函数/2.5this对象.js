let obj = {
    name: "james",
    getName: function () {
        console.log(this.name);
    }
};

let otherObj = {
    name: "pierce"
};

const getName = function () {
    console.log(this.name)
};
// getName.call(otherObj);
// getName();
const otherObjGetName = getName.bind(otherObj);
otherObjGetName();
obj.getName = getName.bind(otherObj);
obj.getName();
console.log(obj);