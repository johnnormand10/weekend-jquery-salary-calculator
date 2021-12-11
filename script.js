console.log('JS');

//global array to push object to
let employee = [];

$(document).ready(onReady)

function onReady(){
    console.log('JQ');

    $('#employeeInfo').on('submit', addEmployeeInfo);
    
    //deletes the row of the table
    $(document).on('click', '.deleteBtn', removeEmployee);

    
    //giving each new <tr> a data value
    


}

//Function to add employee info to an object
//add that object to an array 
//append on to the DOM

function addEmployeeInfo(event){
    //make sure we are in the function
    console.log('in addEmployeeInfo');
    //stop the page from refreshing when clicking submit
    event.preventDefault();
    //Grab data from the DOM's <input>
    //assign the data to a variable
    let firstName = $('#firstNameInput').val();
    //clearing the text from the input box
    $('#firstNameInput').val('');

    let lastName = $('#lastNameInput').val();
    $('#lastNameInput').val('');

    let idNum = Number($('#idInput').val());
    $('#idInput').val('');

    let title = $('#titleInput').val();
    $('#titleInput').val('');
    
    let annualSalary = Number($('#salaryInput').val());
    $('#salaryInput').val('');

    //put data inside an object
    let employeeInfo = {
        firstName: firstName,
        lastName: lastName,
        idNum: idNum,
        title: title,
        salary: annualSalary
    }
    //test to see if the data is in the object
    console.log('object is', employeeInfo);
    
    //pushing the object data to the global arary
    employee.push(employeeInfo);
    totalSalary();

    //empty the <tbody> for reuse
    $('#employeeList').empty();

    //loop throught the array of objects 
    //render what is found to the DOM inside a table
    for(let info of employee){
        //logging what is found 
        console.log('infor of employee is', info);
        //appending 'info' to the DOM inside the <tbody>
        for(let i = 0; i < employee.length; i++ ){
            $('#employeeList').append(`
            <tr id = dataObject class = dataForObject>
                <td>${info.firstName}</td>
                <td>${info.lastName}</td>
                <td>${info.idNum}</td>
                <td>${info.title}</td>
                <td id = salary class = objectSalary>$${info.salary}</td>
                <td>
                    <button class = "deleteBtn">Delete</button>
                </td>
            </tr>`)
        }
    }

    
}

function removeEmployee(){
     //logging to check if it works
     console.log('BUH-BYE');

    $(this).parents('tr').remove();
    $('#dataObject').remove();
}

function totalSalary(){
    let totalSalary = 0;
    //loop through the global array to get the salary 
    for(let i = 0; i < employee.length; i++){
        
        totalSalary = totalSalary + employee[i].salary
    }
    console.log(totalSalary);
    $('#totalSalary').empty().append('Total Salary: $',totalSalary.toLocaleString());
    //use .toLocaleSting() to make the number appear with commas
    if(totalSalary > 20000){
        $('#totalSalary').css("background-color", "red");
    }
    
}