"use strict";
// #region guid type
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guid = void 0;
class GuidFlavoring {
}
/** A container for factory methods, which support the **guid** type */
class Guid {
    /** Generates a random, hyphenated **guid** value */
    static newGuid() {
        const segments = this.generateGuidSegments();
        return `${segments[0]}${segments[1]}-${segments[2]}-${segments[3]}-${segments[4]}-${segments[5]}${segments[6]}${segments[7]}`;
    }
    /** Evaluates whether the supplied value is a valid **guid** */
    static isValid(value) {
        if (value.length === 0)
            return false;
        let trimmedValue = value.trim();
        if (trimmedValue.length < 32 && trimmedValue.length > 36)
            return false;
        return Guid.validator.test(value);
    }
    ;
    static generateGuidSegments(count = 8) {
        let segments = new Array(count);
        for (let i = 0; i < count; i++) {
            // tslint:disable-next-line:no-bitwise
            segments[i] = (((1 + Math.random()) * 0x10000) | 0)
                .toString(16)
                .slice(1);
        }
        return segments;
    }
}
/** Specifies the RegExp necessary to validate **guid** values */
Guid.validator = new RegExp('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$', 'i');
/** Generates a new **guid**, with the empty/least possible value
 * @returns {guid} 00000000-0000-0000-0000-000000000000
 */
Guid.empty = () => '00000000-0000-0000-0000-000000000000';
/** Generates a new **guid**, with the full/greatest possible value
 * @returns {guid} ffffffff-ffff-ffff-ffff-ffffffffffff
 */
Guid.full = () => 'ffffffff-ffff-ffff-ffff-ffffffffffff';
/** Evaluates whether the supplied **guid** is equal to the empty/least possible value */
Guid.isEmpty = (value) => value === Guid.empty();
/** Evaluates whether the supplied *guid* is equal to the empty/greatest possible value */
Guid.isFull = (value) => value === Guid.full();
exports.Guid = Guid;
// #endregion
