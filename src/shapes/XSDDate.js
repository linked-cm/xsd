"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XSDDate = void 0;
/**
 * Minimal shim for backward compatibility.
 * XSDDate was removed because @_linked/core queries return native JS dates,
 * making a literal-wrapping Shape unnecessary. This shim provides the static
 * utility methods so unmigrated packages (e.g. irlcg) can still import them.
 */
var XSDDate = /** @class */ (function () {
    function XSDDate() {
    }
    XSDDate.toNativeDate = function (literal) {
        if (!literal)
            return null;
        var value = typeof literal === 'string' ? literal : literal.value;
        return value ? new Date(value) : null;
    };
    XSDDate.fromNativeDate = function (nativeDate) {
        if (!nativeDate)
            return null;
        var value = nativeDate.toISOString();
        return { node: value, value: value };
    };
    XSDDate.fromTimestamp = function (timestamp) {
        var native = new Date(typeof timestamp === 'string' ? parseInt(timestamp) : timestamp);
        return this.fromNativeDate(native);
    };
    return XSDDate;
}());
exports.XSDDate = XSDDate;
//# sourceMappingURL=XSDDate.js.map