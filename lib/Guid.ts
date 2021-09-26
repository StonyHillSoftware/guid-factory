// #region guid type

class GuidFlavoring<FlavorT> {
  // tslint:disable-next-line: variable-name
  _type?: FlavorT;
}

/** A **guid** type, based on **string** */
type GuidFlavor<T, FlavorT> = T & GuidFlavoring<FlavorT>;

// #endregion

// #region Guid class

/** A **guid**-flavored string primitive, supported by factory methods in the **Guid** class */
export type guid = GuidFlavor<string, 'guid'>;

/** A container for factory methods, which support the **guid** type */
export class Guid {
  /** Specifies the RegExp necessary to validate **guid** values */
  private static validator: RegExp = new RegExp(
    '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
    'i'
  );

  /** Generates a random, hyphenated **guid** value */
  static newGuid = (): guid =>
    [
      Guid.generateGuidSegment(2),
      Guid.generateGuidSegment(1),
      Guid.generateGuidSegment(1),
      Guid.generateGuidSegment(1),
      Guid.generateGuidSegment(3),
    ].join('-');

  /** Generates a new **guid**, with the empty/least possible value
   * @returns {guid} 00000000-0000-0000-0000-000000000000
   */
  static empty = (): guid => '00000000-0000-0000-0000-000000000000';

  /** Generates a new **guid**, with the full/greatest possible value
   * @returns {guid} ffffffff-ffff-ffff-ffff-ffffffffffff
   */
  static full = (): guid => 'ffffffff-ffff-ffff-ffff-ffffffffffff';

  /** Evaluates whether the supplied **guid** is equal to the empty/least possible value */
  static isEmpty = (value: guid) => value === Guid.empty();

  /** Evaluates whether the supplied *guid* is equal to the empty/greatest possible value */
  static isFull = (value: guid) => value === Guid.full();

  /** Evaluates whether the supplied value is a valid **guid** */
  static isValid = (value: string | guid): boolean =>
    Guid.validator.test(value.toLowerCase());

  /** Generates a specified number of double-byte segements for **guid** generation  */
  private static generateGuidSegment(count: number): string {
    let out = '';

    for (let i = 0; i < count; i++) {
      // tslint:disable-next-line:no-bitwise
      out += (((1 + Math.random()) * 0x10000) | 0)
        .toString(16)
        .substring(1)
        .toLowerCase();
    }
    
    return out;
  }
}

// #endregion