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
  static newGuid(): guid { 
    const segments = this.generateGuidSegments();
    return `${segments[0]}${segments[1]}-${segments[2]}-${segments[3]}-${segments[4]}-${segments[5]}${segments[6]}${segments[7]}`;
  }

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
  static isValid(value: string | guid): boolean {
    if (value.length === 0) return false;

    let trimmedValue = value.trim();
    if (trimmedValue.length < 32 && trimmedValue.length > 36) return false;
    
    return Guid.validator.test(value);
  };

  private static generateGuidSegments(count: number = 8): Array<string> {
    let segments = new Array<string>(count);

    for (let i = 0; i < count; i++) {
      // tslint:disable-next-line:no-bitwise
      segments[i] = (((1 + Math.random()) * 0x10000) | 0)
        .toString(16)
        .slice(1);
    }

    return segments;    
  }

}

// #endregion