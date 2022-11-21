const Intern = require('../lib/Intern')

// TESTS FOR THE INTERN CLASS
describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an object with the properties from Employee as well as their school', () => {
            const intern = new Intern("Justin", 5, "justin@gmail.com", "Harvard")

            expect(intern.name).toEqual('Justin')
            expect(intern.id).toEqual(5)
            expect(intern.email).toEqual('justin@gmail.com')
            expect(intern.school).toEqual('Harvard')
        });

        it('should return their school name', () => {
            const intern = new Intern("Justin", 5, "justin@gmail.com", "Harvard")

            expect(intern.getSchool()).toEqual('Harvard')
        });

        it('should return their role as "Intern"', () => {
            const intern = new Intern("Justin", 5, "justin@gmail.com", "Harvard")

            expect(intern.getRole()).toEqual('Intern')
        });
    })
})