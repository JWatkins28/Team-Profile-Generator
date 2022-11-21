const Employee = require('../lib/Employee');

describe('Employee', () => {
    // Test for all use cases when initalizing a new Employee object
    describe('Initialization', () => {
        it("should create an object with 'name', 'id' and 'email' if provided valid arguments", () => {
            const employee = new Employee("Justin", 5, "justin@gmail.com");

            // Verifying that the new object has the correct properties
            expect(employee.name).toEqual("Justin");
            expect(employee.id).toEqual(5);
            expect(employee.email).toEqual("justin@gmail.com")
        });

        it('should return name value', () => {
            const employee = new Employee("Justin", 5, "justin@gmail.com");

            expect(employee.getName(employee.name)).toBe('Justin')
        });

        it('should return ID value', () => {
            const employee = new Employee("Justin", 5, "justin@gmail.com");

            expect(employee.getId()).toBe(5)
        });

        it('should return email value', () => {
            const employee = new Employee("Justin", 5, "justin@gmail.com");

            expect(employee.getEmail(employee.email)).toBe('justin@gmail.com')
        });

        it('should return role value', () => {
            const employee = new Employee("Justin", 5, "justin@gmail.com");

            expect(employee.getRole()).toBe("Employee");
        })
    })
})