const intern = require("./src/intern.js");

test ("Set School name"), () => {
    const testValue = "SchoolName";
    const int = new Intern("Susan", 134, "test@yahoo.com", testValue);
    expect(int.getSchool()).toBe(testValue);
};

test ("Get School name"), () => {
    const testValue = "SchoolName";
    const int = new Intern("Susan", 134, "test@yahoo.com", testValue);
    expect(int.getSchool()).toBe(testValue);
};

test ("getRole() return 'Intern'"), () => {
    const testValue = "SchoolName";
    const int = new Intern("Susan", 134, "test@yahoo.com", testValue);
    expect(int.getSchool()).toBe(testValue);
};