
import { expect } from "chai";
import "mocha";
import { guid, Guid } from "../lib/Guid";

describe("Guid performance", () => {
   
    it("Should create 1,000,000 guids in less than one second", () => {
        const startTime = Date.now();

        for (var i = 0; i < 1_000_000; i += 1) {
            const result: guid = Guid.newGuid();
        }
        
        const endTime = Date.now();
        
    }).timeout(1000).slow(875).retries(5);

});