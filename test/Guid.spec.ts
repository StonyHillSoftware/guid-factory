
import { expect } from "chai";
import "mocha";
import { guid, Guid } from "../lib/Guid";

describe("Guid", () => {
    it("Should create a new GUID", () => {
        //generated guid using the static construction method
        const result: guid = Guid.newGuid();
        expect(Guid.isValid(result)).equal(true);
    });
});