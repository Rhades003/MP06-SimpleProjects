var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function IdentifiableMixin(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = 0;
            return _this;
        }
        return class_1;
    }(Base));
}
function NameableMixin(Base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Unnamed";
            return _this;
        }
        return class_2;
    }(Base));
}
var BaseEntity = /** @class */ (function () {
    function BaseEntity(entity) {
        this.entity = entity;
    }
    BaseEntity.prototype.logProperty = function (key) {
        console.log("The value of ".concat(key.toString(), " is:"), this.entity[key]);
    };
    return BaseEntity;
}());
var BasicEntity = /** @class */ (function () {
    function BasicEntity() {
    }
    return BasicEntity;
}());
//TODO
var ClaseDefinitivaInevitableLikeThanos = /** @class */ (function (_super) {
    __extends(ClaseDefinitivaInevitableLikeThanos, _super);
    function ClaseDefinitivaInevitableLikeThanos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClaseDefinitivaInevitableLikeThanos;
}(IdentifiableMixin(NameableMixin(BasicEntity))));
var ClaseDefinitivaInevitableLikeThanos2 = /** @class */ (function (_super) {
    __extends(ClaseDefinitivaInevitableLikeThanos2, _super);
    function ClaseDefinitivaInevitableLikeThanos2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClaseDefinitivaInevitableLikeThanos2;
}(BaseEntity));
var clase = new ClaseDefinitivaInevitableLikeThanos();
var clase2 = new ClaseDefinitivaInevitableLikeThanos2(clase);
clase2.logProperty("id");
