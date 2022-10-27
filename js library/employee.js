class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    acquireName() {
        return this.name
    };

    acquireId() {
        return this.id
    };

    acquireEmail() {
        return this.email
    };
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;