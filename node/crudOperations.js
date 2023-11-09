const express = require('express')

const app = express();

const { readEmployee, readEmployeeById, insertEmployee, updateEmployee, deleteEmployee } = require('./operations')

app.use(express.json())

app.get("/getEmployee", async (req, res) => {
    const ans = await readEmployee()
    res.send(ans)
})

app.get("/readEmployeeById/:id", async (req, res) => {
    const id = req.params.id
    const ans = await readEmployeeById(id);
    res.send(ans)
})

app.post("/newEmp", async (req, res) => {
    const { id, name, city, salary, age } = req.body;
    const ans = await insertEmployee(id, name, city, salary, age)
    res.send(ans)
})

app.delete("/del/:id", async (req, res) => {
    const id = req.params.id;
    const ans = await deleteEmployee(id);
    res.send(ans)
})

app.put('/update', async (req, res) => {
    const { id, city } = req.body;
    const ans = await updateEmployee(id, city);
    res.send(ans)
})


app.listen(3000, () => {
    console.log("Server is running...")
})

