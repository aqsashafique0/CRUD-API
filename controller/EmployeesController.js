const Employee = require('../models/employeeModel')

const getEmployees = async(req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const createEmployee = async(req, res) => {
    try {
        const employee = await Employee.create(req.body)
        res.status(200).json(employee);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const getEmployee = async(req, res) =>{
    try {
        const {id} = req.params;
        const employee = await Employee.findById(id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
}

const updateEmployee = async(req, res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findByIdAndUpdate(id, req.body);
        // we cannot find any EMPLOYEE in database
        if(!Employee){
            return res.status(404).json({message: `cannot find any Employee with ID ${id}`})
        }
        const updatedemployee = await Employee.findById(id);
        res.status(200).json(updatedemployee);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteEmployee = async(req, res) =>{
    try {
        const {id} = req.params;
        const employee = await Employee.findByIdAndDelete(id);
        if(!employee){
            return res.status(404).json({message: `cannot find any employee with ID ${id}`})
        }
        res.status(200).json(employee);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getEmployee,
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}