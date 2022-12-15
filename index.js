// Write your solution in this file!
const employee= {
        name:"Eric",
        streetAddress:"Langata",

};
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObj = { ...employee};
    newObj[key] = value;
    return newObj;
}

const employeeNew = updateEmployeeWithKeyAndValue(employee, "name", "Skylar");

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    delete employeeNew.name;
    return employeeNew;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employeeNew.name;
    return employee[key];
}

