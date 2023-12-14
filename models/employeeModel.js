const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema(
    {
        Empname: {
            type: String,
            required: [true, "Please enter name"]
        },
        EmpDesignation: {
            type: String,
            required: true,
            default: 0
        },
        EmployeeAge: {
            type: Number,
            required: true,
        },
        EmpSkills: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Employee = mongoose.model('', EmployeeSchema);

module.exports = Employee;