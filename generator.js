const id = Symbol();

const user = {
    [id]: 1,
    age: 35,
    name: "Taras"
};
user["id"] = 2;
console.log(user);
console.log(user[id]);

const company = {
    employees: ["Taras", "Ira", "Max"],
    currentEmp: 0,
    next() {
        if (this.currentEmp >= this.employees.length) {
            return { value: this.currentEmp, done: true };
        }
        const employee = {
            value: this.employees[this.currentEmp],
            done: false
        };
        this.currentEmp++;
        return employee;
    },
    [Symbol.iterator]: function* () {
        /* using own logic  */

        let employee = company.next();

        while (!employee.done) {
            yield employee.value;
            employee = company.next();
        }

        /* 2 way using the generator logic*/

        // let currentEmp = 0;
        // while (currentEmp < this.employees.length) {
        //     yield this.employees[currentEmp];
        //     currentEmp++;
        // }
    }
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// let employee = company.next();

// while (!employee.done) {
//     console.log(employee.value);
//     employee = company.next();
// }

// for (const emp of company) {
//     console.log(emp);
// }
// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

console.log([...company]);
