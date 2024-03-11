// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = []
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // User is prompted for employee first name
  // User is prompted for employee last name
  // User is prompted for employee salary
  // Check to make sure salary input is a number
  // User is prompted If they would like to continue
  // Employee name and salary are stored in an element
  // Element is pushed to array
  
  while(true) {
    let firstName = prompt("Enter employee's name:");
    let lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:  $");
    if (isNaN(salary)) {
      alert('Invalid salary. Please enter a valid number');
      return;
    };
  // I'm not sure how to make this go back to salary prompt if isNan true
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
  
    };
  
    employeesArray.push(employee);

    let continueAdding = confirm("Would you like to add another employee?");

    if (!continueAdding) {
      break;
    }
  }



  

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
