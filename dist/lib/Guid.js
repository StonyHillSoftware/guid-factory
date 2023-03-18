"use strict";
// #region guid type
exports.__esModule = true;
exports.Guid = void 0;
var GuidFlavoring = /** @class */ (function () {
    function GuidFlavoring() {
    }
    return GuidFlavoring;
}());
/** A container for factory methods, which support the **guid** type */
var Guid = /** @class */ (function () {
    function Guid() {
    }
    /** Generates a specified number of double-byte segements for **guid** generation  */
    Guid.generateGuidSegment = function (count) {
        var out = '';
        for (var i = 0; i < count; i++) {
            // tslint:disable-next-line:no-bitwise
            out += (((1 + Math.random()) * 0x10000) | 0)
                .toString(16)
                .substring(1)
                .toLowerCase();
        }
        return out;
    };
    /** Specifies the RegExp necessary to validate **guid** values */
    Guid.validator = new RegExp('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$', 'i');
    /** Generates a random, hyphenated **guid** value */
    Guid.newGuid = function () {
        return [
            Guid.generateGuidSegment(2),
            Guid.generateGuidSegment(1),
            Guid.generateGuidSegment(1),
            Guid.generateGuidSegment(1),
            Guid.generateGuidSegment(3),
        ].join('-');
    };
    /** Generates a new **guid**, with the empty/least possible value
     * @returns {guid} 00000000-0000-0000-0000-000000000000
     */
    Guid.empty = function () { return '00000000-0000-0000-0000-000000000000'; };
    /** Generates a new **guid**, with the full/greatest possible value
     * @returns {guid} ffffffff-ffff-ffff-ffff-ffffffffffff
     */
    Guid.full = function () { return 'ffffffff-ffff-ffff-ffff-ffffffffffff'; };
    /** Evaluates whether the supplied **guid** is equal to the empty/least possible value */
    Guid.isEmpty = function (value) { return value === Guid.empty(); };
    /** Evaluates whether the supplied *guid* is equal to the empty/greatest possible value */
    Guid.isFull = function (value) { return value === Guid.full(); };
    /** Evaluates whether the supplied value is a valid **guid** */
    Guid.isValid = function (value) {
        return Guid.validator.test(value.toLowerCase());
    };
    return Guid;
}());
exports.Guid = Guid;
// #endregion
