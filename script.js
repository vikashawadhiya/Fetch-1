function saveUserData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    if (name && age) {
        const userData = { name, age };
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Data saved successfully!');
    } else {
        alert('Please enter both name and age');
    }
}

function retrieveAndDisplay() {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
        const userData = JSON.parse(userDataString);
        const userDataDisplay = document.getElementById('userDataDisplay');
        userDataDisplay.innerHTML = `
            <h2>Stored User Data:</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>${userData.name}</td>
                    <td>${userData.age}</td>
                </tr>
            </table>
        `;
    } else {
        alert('No data found');
    }
}
