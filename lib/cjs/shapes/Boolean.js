"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boolean = void 0;
const Shape_1 = require("@_linked/core/shapes/Shape");
const xsd_js_1 = require("../ontologies/xsd.js");
const package_js_1 = require("../package.js");
let Boolean = class Boolean extends Shape_1.Shape {
    static true() {
        return true;
    }
    static false() {
        return false;
    }
    static toLiteral(value) {
        return value ? this.true() : this.false();
    }
    static isTrue(value) {
        return (value === true ||
            value === 'true' ||
            (typeof value === 'object' && (value === null || value === void 0 ? void 0 : value.value) === 'true'));
    }
    static isFalse(value) {
        return (value === false ||
            value === 'false' ||
            (typeof value === 'object' && (value === null || value === void 0 ? void 0 : value.value) === 'false'));
    }
    /**
     * Updates a boolean value of the given node with the opposite of its current boolean value.
     * Will be set to true if not set yet.
     * @param resource
     * @param property
     */
    static negate(_resource, _property) {
        throw new Error('Boolean.negate depends on legacy in-memory mutation and is not migrated');
    }
};
exports.Boolean = Boolean;
Boolean.targetClass = xsd_js_1.xsd.boolean;
exports.Boolean = Boolean = __decorate([
    package_js_1.linkedShape
], Boolean);
//# sourceMappingURL=Boolean.js.map