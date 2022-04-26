const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe('Test suit for Fizz Buzz', () => {
    test('1) Fizz on score divisible by 3', () => {
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1)
        const explorer3 = {name: "Explorer3", score: 3}
        FizzbuzzService.applyValidationInExplorer(explorer3) 

        expect(explorer1.trick).toBe(1)
        expect(explorer3.trick).toBe('FIZZ')

        
        // const explorer15 = {name: "Explorer15", score: 15}
        // // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        // FizzbuzzService.applyValidationInExplorer(explorer15) 
    })
    test('2) Buzz on score divisible by 5', () => {
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1)
        const explorer5 = {name: "Explorer5", score: 5}
        FizzbuzzService.applyValidationInExplorer(explorer5) 

        expect(explorer1.trick).toBe(1)
        expect(explorer5.trick).toBe('BUZZ')

    })
})