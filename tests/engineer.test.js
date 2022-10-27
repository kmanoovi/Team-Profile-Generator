const engineer = require("./src/engineer.js");

test ("Set GitHub account"), () => {
    const testValue = "GithubUser";
    const eng = new Engineer("Carol", 167, "test@yahoo.com", testValue);
    expect(eng.getGithub()).toBe(testValue);
};

test ("Get GitHub account"), () => {
    const testValue = "GithubUser";
    const eng = new Engineer("Carol", 167, "test@yahoo.com", testValue);
    expect(eng.getGithub()).toBe(testValue);
};

test ("getRole() return 'Engineer'"), () => {
    const testValue = "GithubUser";
    const eng = new Engineer("Carol", 167, "test@yahoo.com", testValue);
    expect(eng.getGithub()).toBe(testValue);
};