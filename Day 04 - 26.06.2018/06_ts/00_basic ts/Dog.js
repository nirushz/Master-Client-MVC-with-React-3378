var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.makeSound = function (str) {
        console.log("Dog makeSound " + str);
    };
    Dog.prototype.walkRight = function () {
        console.log("Dog walkRight");
    };
    return Dog;
}(Animal));
//# sourceMappingURL=Dog.js.map