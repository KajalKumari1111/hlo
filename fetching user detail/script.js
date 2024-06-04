
document.getElementById('fetchButton').addEventListener('click', fetchUserData);
let users = [
    {id:1, name:"Rohan", phone: '245543'},
    {id:2,name:"himesh", phone: '9890743'},
    {id:3, name:"nhusrat", phone: '2499083'}
]


function fetchUserData() {
  const userId = parseInt(document.getElementById('userId').value, 10);
  const userDataDiv = document.getElementById('userData');
  const errorDiv = document.getElementById('error');

 
  userDataDiv.innerHTML = '';
  errorDiv.innerHTML = '';

  if (!userId) {
      errorDiv.textContent = 'Please enter a valid user ID.';
      return;
  }

  const user = users.find(user => user.id === userId);

  if (user) {
      displayUserData(user);
  } else {
      errorDiv.textContent = 'User not found.';
  }
}

function displayUserData(user){
  let userDataDiv = document.getElementById('userData');
  userDataDiv.innerHTML = `<h2>Name:</h2> ${user.name}
  <h2>Phone:</h2> ${user.phone}`
}