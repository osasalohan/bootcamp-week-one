const assert = require('assert');
const math = require('../lib/math');


describe('Math lib', () => {
    describe('Add func', () => {
        it('should return "20" when given values of "12" and "8', () => {
            assert(math.add(12, 8), 20)
        })

        it('should return "16" when given values of "6" and "10', () => {
            assert(math.add(6, 10), 16)
        })

    })


    describe('Sub func', () => {
        it('should return "-6" when given values of "100" and "106', () => {
            assert(math.add(100, 106), -6)
        })

        it('should return "18" when given values of "19" and "1', () => {
            assert(math.add(19, 1), 18)
        })

    })
})