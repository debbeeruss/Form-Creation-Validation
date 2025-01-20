document.addEventListener('DOMContentLoaded', function () {
    // Define an asynchronous function to fetch user data
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // Select the container where the API data will be displayed
        const dataContainer = document.getElementById('api-data');
        
        // Clear existing content (e.g., "Loading user data..." message)
        dataContainer.innerHTML = 'Loading user data...';
        
        try {
            // Fetch the user data from the API
            const response = await fetch(apiUrl);
            
            // Check if the response is okay (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Convert the response to JSON
            const users = await response.json();
            
            // Clear the "Loading..." message
            dataContainer.innerHTML = '';
            
            // Create a <ul> element to display the user names
            const userList = document.createElement('ul');
            
            // Loop through the users and create a <li> for each user
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;  // Display the user's name
                userList.appendChild(li);    // Append the <li> to the <ul>
            });
            
            // Append the <ul> with the user list to the container
            dataContainer.appendChild(userList);
        } catch (error) {
            // In case of an error, display a failure message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Fetch error:', error); // Log the error to the console for debugging
        }
    }

    // Invoke fetchUserData once the DOM is fully loaded
    fetchUserData();
});
