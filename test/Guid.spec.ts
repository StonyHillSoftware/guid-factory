
import { expect } from "chai";
import "mocha";
import { guid, Guid } from "../lib/Guid";

describe("Guid", () => {
    it("Should create a new GUID", () => {
        const result: guid = Guid.newGuid();
        expect(Guid.isValid(result)).equal(true);
    });

    it("Should create an valid, empty GUID (all 0's)", () => {
        const result: guid = Guid.empty();
        expect(Guid.isValid(result)).equal(true);
        expect(Guid.isEmpty(result)).equal(true);
    });

    it("Should create a valid, full GUID (all f's)", () => {
        const result: guid = Guid.full();
        expect(Guid.isValid(result)).equal(true);
        expect(Guid.isFull(result)).equal(true);
    });

    it("Should validate a good GUID with the 'guid' type", () => {
        const goodGuid: guid = "796b5bb2-98a0-4431-be1e-98a7e537a13a";
        expect(Guid.isValid(goodGuid)).equal(true);
    });

    it("Should validate a good GUID with a string type", () => {
        const goodGuid = "796b5bb2-98a0-4431-be1e-98a7e537a13a";
        expect(Guid.isValid(goodGuid)).equal(true);
    });

    it("Should not validate a bad GUID", () => {
        const badGuid = "12-345-6789";
        expect(Guid.isValid(badGuid)).equal(false);
    });

    it("Should not validate a empty GUID", () => {
        const badGuid = "";
        expect(Guid.isValid(badGuid)).equal(false);
    });

    it("Should not validate a blank GUID", () => {
        const badGuid = "                                ";
        expect(Guid.isValid(badGuid)).equal(false);
    });
});