const manager = require("./src/manager.js");

test ("Set Office Number"), () => {
    const testValue = "OfficeNumber";
    const man = new Manager("Carrie", 205, "test@yahoo.com", testValue);
    expect(man.getOfficeNumber()).toBe(testValue);
};

test ("Get Office Number"), () => {
    const testValue = "SchoolName";
    const man = new Manager("Carrie", 205, "test@yahoo.com", testValue);
    expect(man.getOfficeNumber()).toBe(testValue);
};

test ("getRole() return 'Manager'"), () => {
    const testValue = "OfficeNumber";
    const man = new Manager("Carrie", 205, "test@yahoo.com", testValue);
    expect(man.getOfficeNumber()).toBe(testValue);
};