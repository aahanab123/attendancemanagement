document.getElementById('attendanceForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input value
  var name = document.getElementById('name').value;

  // Create list item
  var li = document.createElement('li');
  li.textContent = name + ' - ' + getCurrentDateTime();

  // Append list item to the list
  document.getElementById('list').appendChild(li);

  // Clear input field
  document.getElementById('name').value = '';
});

function getCurrentDateTime() {
  var now = new Date();
  var date = now.toDateString();
  var time = now.toLocaleTimeString();
  return date + ' ' + time;
}
