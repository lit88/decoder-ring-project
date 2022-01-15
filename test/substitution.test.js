const { expect, should } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", ()=> {
    it("should return false when alphabet is not 26 characters", ()=> {
        const actual = substitution("ben", "fdhlaehrawr")
        expect(actual).to.be.false
    })

    it("should return false when alphabet isn't provided", ()=> {
        const actual = substitution("ben")
        expect(actual).to.be.false
    })

    it("should return false when there are any duplicate characters in the given alphabet", ()=> {
        const actual = substitution("ben", "xxxqmcgrukswaflnthdjpzibev")
        expect(actual).to.be.false
    })

    it("should encode the input according to the given alphabet", ()=> {
        const actual = substitution("ben", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "omf"
        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters when encoding", ()=> {
        const actual = substitution("Ben", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "omf"
        expect(actual).to.equal(expected)
    })

    it("should maintain spaces when encoding", ()=> {
        const actual = substitution("ben love", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "omf wlzm"
        expect(actual).to.equal(expected)
    })

    it("should encode when provided with unique characters", ()=> {
        const actual = substitution("ben", "x#yqmcgrukswaflnthdjpzibev")
        const expected = "#mf"
        expect(actual).to.equal(expected)
    })

    it("should decode the input according to the given alphabet", ()=> {
        const actual = substitution("omf", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "ben"
        expect(actual).to.equal(expected)
    })

    it("should maintain spaces when decoding", ()=> {
        const actual = substitution("omf wlzm", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "ben love"
        expect(actual).to.equal(expected)
    })

    it("should decode when provided with unique characters", ()=> {
        const actual = substitution("#mf", "x#yqmcgrukswaflnthdjpzibev", false)
        const expected = "ben"
        expect(actual).to.equal(expected)
    })
})