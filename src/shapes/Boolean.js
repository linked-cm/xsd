"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boolean = void 0;
var Shape_1 = require("@_linked/core/shapes/Shape");
var xsd_js_1 = require("../ontologies/xsd.js");
var package_js_1 = require("../package.js");
var Boolean = /** @class */ (function (_super) {
    __extends(Boolean, _super);
    function Boolean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boolean.true = function () {
        return true;
    };
    Boolean.false = function () {
        return false;
    };
    Boolean.toLiteral = function (value) {
        return value ? this.true() : this.false();
    };
    Boolean.isTrue = function (value) {
        return (value === true ||
            value === 'true' ||
            (typeof value === 'object' && (value === null || value === void 0 ? void 0 : value.value) === 'true'));
    };
    Boolean.isFalse = function (value) {
        return (value === false ||
            value === 'false' ||
            (typeof value === 'object' && (value === null || value === void 0 ? void 0 : value.value) === 'false'));
    };
    /**
     * Updates a boolean value of the given node with the opposite of its current boolean value.
     * Will be set to true if not set yet.
     * @param resource
     * @param property
     */
    Boolean.negate = function (_resource, _property) {
        throw new Error('Boolean.negate depends on legacy in-memory mutation and is not migrated');
    };
    Boolean.targetClass = xsd_js_1.xsd.boolean;
    Boolean = __decorate([
        package_js_1.linkedShape
    ], Boolean);
    return Boolean;
}(Shape_1.Shape));
exports.Boolean = Boolean;
//# sourceMappingURL=Boolean.js.map