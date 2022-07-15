const employee = {
    name: 'Eddie',
    streetAddress : "Arnold st"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = Object.assign({},employee);
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key) {
    const newObject = Object.assign({},employee);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
}

console.log(updateEmployeeWithKeyAndValue(employee,'name',"Sam"));
console.log(updateEmployeeWithKeyAndValue(employee,'streetAddress',"11 Broadway"));
