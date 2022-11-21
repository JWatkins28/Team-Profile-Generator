const Manager = require('../lib/Manager');

// TESTS FOR THE MANAGER CLASS
describe('Manager', () => {
    describe('Initialization', () => {
        it("should create an object with the properties from Employee as well as their office number", () => {
            const manager = new Manager("Justin", 5, "justin@gmail.com", 69)

            expect(manager.name).toEqual("Justin");
            expect(manager.id).toEqual(5);
            expect(manager.email).toEqual("justin@gmail.com");
            expect(manager.officeNumber).toEqual(69);
        });

        it('should return the role of Manager', () => {
            const manager = new Manager("Justin", 5, "justin@gmail.com", 69)

            expect(manager.getRole()).toEqual("Manager");
        })
    })
})