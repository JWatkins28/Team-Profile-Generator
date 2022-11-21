const Engineer = require('../lib/Engineer');

// TESTS FOR THE ENGINEER CLASS
describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object with the properties from Employee as well as their github', () => {
            const engineer = new Engineer("Justin", 5, "justin@gmail.com", "jwatkins28")

            expect(engineer.name).toEqual("Justin");
            expect(engineer.id).toEqual(5);
            expect(engineer.email).toEqual("justin@gmail.com");
            expect(engineer.github).toEqual("jwatkins28")

        });

        it('should return their github link', () => {
            const engineer = new Engineer("Justin", 5, "justin@gmail.com", "jwatkins28")

            expect(engineer.getGithub()).toEqual('https://github.com/jwatkins28')
        });

        it('should return the "Engineer" role', () => {
            const engineer = new Engineer("Justin", 5, "justin@gmail.com", "jwatkins28")

            expect(engineer.getRole()).toEqual('Engineer')
        });
    })
})