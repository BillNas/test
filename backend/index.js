const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.json())


app.get('/', (req, res, next) => {
    axios
        .get('http://dummy.restapiexample.com/api/v1/employees')
        .then((response) => {
            const {
                data
            } = response
            res.json(data.data)
            data.data.forEach((d) =>
                console.log({
                    Name: d.employee_name,
                    Salary: d.employee_salary
                }),
            )
        })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server Up in Port ${port}`)
})
