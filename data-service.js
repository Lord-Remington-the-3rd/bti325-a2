var departments = [];
var employees = [];

exports.initialize = () => {
    const fs = require('fs');

    fs.readFile('./data/employees.json',(err,data)=>{
        if (err) {
            rej("Failure to read file employees.json!");
        } else {
            employees = JSON.parse(data);
        }
    });

    fs.readFile('./data/departments.json',(err,data)=>{
        if (err) { 
            rej("Failure to read file departments.json!");
        } else {
            departments = JSON.parse(data);
        }
    });

    return new Promise((res, rej) => {
        console.log("initialize called");
        res("Data succesfully initialized!");
    });
}

exports.getAllEmployees = () => {
    return new Promise((res, rej) => {
            console.log("getAllEmployees called");

            res(employees);
            rej(reason);
    });
}

exports.getManagers = () => {
    return new Promise((res, rej) => {
        console.log("getManagers called");
        const managers = [];

        for(e of employees){
            if(e.isManager){
                managers.push(e);
            }
        }

        res(managers);
        rej(reason);
    });
}

exports.getDepartments = () => {
    return new Promise((res, rej) => {
            console.log("getDepartments called");

            res(departments);
            rej(reason);
    });
}