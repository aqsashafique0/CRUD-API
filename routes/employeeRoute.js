const express = require('express')
const { 
    createEmployee, 
    deleteEmployee, 
    getEmployee, 
    getEmployees, 
    updateEmployee } = require("../controller/EmployeesController");


const employeeRoute = express.Router();


employeeRoute.route('/').get(getEmployees).post(createEmployee)
employeeRoute.route('/:id').get(getEmployee).put(updateEmployee).delete(deleteEmployee)
module.exports = employeeRoute;

