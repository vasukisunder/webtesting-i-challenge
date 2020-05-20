const enhancer = require('./enhancer.js');
// test away!


const item = {
    name: "weapon",
    durability: 42,
    enhancement: 12
};



describe("repairs item", () => {
    it("should repair item durability to 100", () => {
        expect(enhancer.repair(item)).toEqual({...item, durability: 100})
    })
})

describe("enhancement succeeds", () => {
    it("should incr by 1 and not change durability", () => {
        expect(enhancer.succeed(item)).toEqual({...item, enhancement: ++item.enhancement});
    })
    it("should not change when enhancement is 20", () => {
        expect(enhancer.succeed({...item, enhancement: 20})).toEqual({...item, enhancement: 20})
    })
    
})

describe("enhancement fails", () => {
    it("should decr durability by 5", () => {
        expect(enhancer.fail(item)).toEqual({ ...item, durability: item.durability - 5 })
    })

    it("should decr durability by 10", () => {
        expect(enhancer.fail({...item, enhancement: 16})).toEqual({ ...item, enhancement: 16, durability: item.durability - 10 })
    })

    it("should decr durability by 10 and enhancement by 1", () => {
        expect(enhancer.fail({...item, enhancement: 18})).toEqual({ ...item, enhancement: 17, durability: item.durability - 10 })
    })
})

describe("get function works", () => {
    it("should edit name", () => {
        enhancer.get(item);
        expect(item.name).toBe( `[+${item.enhancement}] weapon`)
    })
})