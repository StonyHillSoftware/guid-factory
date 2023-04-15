
import { expect } from "chai";
import "mocha";
import { guid, Guid } from "../lib/Guid";

describe("Guid performance", () => {
   
    let validGuids = [...Array(1_000_000).keys()].map(x => Guid.newGuid());

    let invalidGuids = [...Array(1_000_000).keys()].map(x => {
        let r = Math.random();
        if (r < 0.25) return '                                ';     
        if (r < 0.50) return '';
        if (r < 0.75) return r.toString() + r.toString();
        if (r < 1.00) return r.toString();
        return '';
    });

    it("Should create 1,000,000 guids in less than one second", () => {
        for (let i = 0; i < 1_000_000; i += 1) {
            const result: guid = Guid.newGuid();
        }        
    }).timeout(1_000)
      .slow(800)
      .retries(5);

    it("Should create 100,000 guids in less than 100 milliseconds", () => {
        for (let i = 0; i < 100_000; i += 1) {
            const result: guid = Guid.newGuid();
        }        
    }).timeout(100)
      .slow(80)
      .retries(5);

    it("Should create 10,000 guids in less than 10 milliseconds", () => {
        for (let i = 0; i < 10_000; i += 1) {
            const result: guid = Guid.newGuid();
        }        
    }).timeout(10)
      .slow(8)
      .retries(5);

    it("Should validate 1,000,000 valid guids in less than five seconds", () => {
        for (let i = 0; i < 1_000_000; i += 1) {
            expect(Guid.isValid(validGuids[i])).equal(true);
        }

    }).timeout(5_000)
      .slow(4_000)
      .retries(5);

    it("Should validate 100,000 valid guids in less than five seconds", () => {
        for (let i = 0; i < 100_000; i += 1) {
            expect(Guid.isValid(validGuids[i])).equal(true);
        }

    }).timeout(500)
      .slow(400)
      .retries(5);
      
    it("Should validate 10,000 valid guids in less than five seconds", () => {
        for (let i = 0; i < 10_000; i += 1) {
            expect(Guid.isValid(validGuids[i])).equal(true);
        }

    }).timeout(50)
      .slow(40)
      .retries(5);      

    it("Should invalidate 1,000,000 invalid guids in less than five seconds", () => {
        for (let i = 0; i < 1_000_000; i += 1) {
            expect(Guid.isValid(invalidGuids[i])).equal(false);
        }
    }).timeout(5_000)
      .slow(4_000)
      .retries(5);

    it("Should invalidate 100,000 invalid guids in less than five seconds", () => {
        for (let i = 0; i < 100_000; i += 1) {
            expect(Guid.isValid(invalidGuids[i])).equal(false);
        }
    }).timeout(500)
      .slow(400)
      .retries(5);
      
    it("Should invalidate 10,000 invalid guids in less than five seconds", () => {
        for (let i = 0; i < 10_000; i += 1) {
            expect(Guid.isValid(invalidGuids[i])).equal(false);
        }
    }).timeout(50)
      .slow(40)
      .retries(5);      
});