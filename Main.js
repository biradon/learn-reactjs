let addBtn = document.getElementById('submit-button');
let moneyInput = document.getElementById('money');
let categoryInput = document.getElementById('category');
let dateInput = document.getElementById('date');
let accountTypeInput = document.getElementById('account');
let noteInput = document.getElementById('note');
let errorMessage = document.getElementById("error-message");
let table = document.getElementById('table').getElementsByTagName('tbody')[0];



// Click submit button event
addBtn.addEventListener('click', (event) => {
  event.preventDefault();   

  console.log("Submit button clicked");

  transactionValidation();
  resetForm(); 

});


// Function validate data
let transactionValidation = () => {
  if ( moneyInput.value === "" ) {
      errorMessage.innerHTML = "Please fill all the field";
      console.log("Failure");
     } else {
      errorMessage.innerHTML = "";
      console.log("Success");
      acceptDate();
     }
};

// Function to add data to table
let acceptDate = () => {
  // Get the values from the form inputs
  let money = moneyInput.value;
  let category = categoryInput.value;
  let date = dateInput.value;
  let account = accountTypeInput.value;
  let note = noteInput.value;

  // Create the new row
  let row = document.createElement('tr');

  // Create the new row
  let html = '<td contenteditable="true">' + account + '</td><td contenteditable="true">' 
              + money + '</td><td contenteditable ="true">' 
              + date + '</td><td contenteditable="true">' 
              + category + '</td><td contenteditable="true">' 
              + note + '</td>' 
              + '<td>' 
              + '<i onClick="deleteTransaction(this)" class="fas fa-trash-alt"></i>' 
              + '</td>';
  
  // Add new row into the table
  row.innerHTML = html;
  table.appendChild(row);
};



let resetForm = () => {
  // Reset the form inputs to blank
  moneyInput.value = '';
  categoryInput.value = '';
  dateInput.value = '';
  accountTypeInput.value = '';
  noteInput.value = '';
};