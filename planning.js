// Define an array to store the crops
let crops = [];

// Get the form and table elements from the HTML
const form = document.querySelector('form');
const tableBody = document.querySelector('#crop-table');

// Add an event listener to the form for when it is submitted
form.addEventListener('submit', function(event) {
  // Prevent the form from actually submitting and refreshing the page
  event.preventDefault();
  
  // Get the values from the form inputs
  const cropType = document.querySelector('#crop-type').value;
  const plantDate = document.querySelector('#plant-date').value;
  const harvestDate = document.querySelector('#harvest-date').value;
  const quantityPlanted = document.querySelector('#quantity-planted').value;
  
  // Create a new crop object with the form values and add it to the crops array
  const crop = {
    type: cropType,
    plantDate: plantDate,
    harvestDate: harvestDate,
    quantityPlanted: quantityPlanted,
    quantityHarvested: 0,
    notes: ''
  };
  crops.push(crop);
  
  // Clear the form inputs
  document.querySelector('#crop-type').value = '';
  document.querySelector('#plant-date').value = '';
  document.querySelector('#harvest-date').value = '';
  document.querySelector('#quantity-planted').value = '';
  
  // Update the table to display the new crop
  updateTable();
});

// Add an event listener to the table for when a delete button is clicked
tableBody.addEventListener('click', function(event) {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains('delete-button')) {
    // Get the index of the crop to delete
    const index = event.target.dataset.index;
    
    // Remove the crop from the crops array and update the table
    crops.splice(index, 1);
    updateTable();
  }
});

// Function to update the table to display the crops array
function updateTable() {
  // Clear the table body
  tableBody.innerHTML = '';
  
  // Loop through the crops array and add each crop to the table
  crops.forEach(function(crop, index) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${crop.type}</td>
      <td>${crop.plantDate}</td>
      <td>${crop.harvestDate}</td>
      <td>${crop.quantityPlanted}</td>
      <td>${crop.quantityHarvested}</td>
      <td>${crop.notes}</td>
      <td><button class="btn btn-danger delete-button" data-index="${index}">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}
