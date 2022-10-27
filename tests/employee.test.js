const Employee = require("../js library/employee.js");
const employee = require("./src/employee.js");

test("Can create new Employee", () => {
    const employee = new Employee();
    expect(employee).toBe("object");
});

test("Set name of employee", () => {
    const name = "Susan";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Set if of employee", () => {
    const testID = 200;
    const employee = new Employee(testID);
    expect(employee.testID).toBe(testID);
});

test("Set email of Employee", () => {
    const testEmail = 'test@yahoo.com';
    const employee = new Employee(testEmail);
    expect(employee.testEmail).toBe(testEmail);
});