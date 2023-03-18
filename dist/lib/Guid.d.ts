declare class GuidFlavoring<FlavorT> {
    _type?: FlavorT;
}
/** A **guid** type, based on **string** */
declare type GuidFlavor<T, FlavorT> = T & GuidFlavoring<FlavorT>;
/** A **guid**-flavored string primitive, supported by factory methods in the **Guid** class */
export declare type guid = GuidFlavor<string, 'guid'>;
/** A container for factory methods, which support the **guid** type */
export declare class Guid {
    /** Specifies the RegExp necessary to validate **guid** values */
    private static validator;
    /** Generates a random, hyphenated **guid** value */
    static newGuid: () => guid;
    /** Generates a new **guid**, with the empty/least possible value
     * @returns {guid} 00000000-0000-0000-0000-000000000000
     */
    static empty: () => guid;
    /** Generates a new **guid**, with the full/greatest possible value
     * @returns {guid} ffffffff-ffff-ffff-ffff-ffffffffffff
     */
    static full: () => guid;
    /** Evaluates whether the supplied **guid** is equal to the empty/least possible value */
    static isEmpty: (value: guid) => boolean;
    /** Evaluates whether the supplied *guid* is equal to the empty/greatest possible value */
    static isFull: (value: guid) => boolean;
    /** Evaluates whether the supplied value is a valid **guid** */
    static isValid: (value: string | guid) => boolean;
    /** Generates a specified number of double-byte segements for **guid** generation  */
    private static generateGuidSegment;
}
export {};
