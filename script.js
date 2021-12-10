console.log('JS');

$(document).ready(onReady);

function onReady(){
    console.log('JQ');

    $('#employeeInfo').on('submit', addEmployeeInfo);
    
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
    let lastName = $('#lastNameInput').val();
    let idNum = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#salaryInput').val();

    //put data inside an object
    let employee = {
        firstName: firstName,
        lastName: lastName,
        idNum: idNum,
        title: title,
        salary: annualSalary
    }
    //test to see if the data is in the object
    console.log(employee);
    


}
