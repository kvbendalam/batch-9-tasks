const mysql = require('mysql2')

const connection = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "school"
}).promise()

async function readEmployee() {
    const query = "SELECT * FROM Employee";

    const [output] = await connection.query(query)
    return output;
}

async function readEmployeeById(id) {
    const query = "select * from Employee where id = ?"
    const values = [id]

    const [output] = await connection.query(query, values);
    return output;
}

async function insertEmployee(id, name, city, salary, age) {
    const query = "INSERT INTO Employee (id, name, city, salary, age) VALUES (?,?,?,?,?)";
    const values = [id, name, city, salary, age];

    const [output] = await connection.query(query, values)
    return output
}


async function updateEmployee(id, city) {
    const query = "Update Employee SET city = ? where id = ? ";
    const values = [city, id];

    const [output] = await connection.query(query, values);
    return output
}

async function deleteEmployee(id) {
    const query = "DELETE from Employee where id =?";
    const values = [id]

    const [output] = await connection.query(query, values)
    return output
}

// async function main() {
//     const employees = await readEmployee()
//     console.log(employees)

// const emp = await readEmployeeById(5)
// console.log(emp)

// const newEmp = await insertEmployee(2, "Rekha", "Bangalore", "500000", 28);
// console.log(newEmp);

// const updatedEmp = await updateEmployee(3, "Hyderabad");
// console.log(updatedEmp)

// const delEmp = await deleteEmployee(3)
// console.log(delEmp)
// }

// main()

module.exports = { readEmployee, readEmployeeById, insertEmployee, updateEmployee, deleteEmployee }