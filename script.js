document.getElementById('fetchButton').addEventListener('click', fetchUserData);

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', website: 'johndoe.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', website: 'janesmith.com' },
    // Add more users as needed
];

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

function displayUserData(user) {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
    `;
}
