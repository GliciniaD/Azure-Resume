window.addEventListener('DOMContentLoaded', (event) => {
    getVisitorCount();
});
const functionApi = ' ';

const getVisitorCount = () => {
    let count = 30; // Default value
    fetch(functionApi)
        .then(response => {
            return response.json(); // Parse the response as JSON
        })
        .then(response => {
            console.log("Website called function API.");
            count = response.count; // Correctly get the count from the API response
            document.getElementById("counter").innerText = count; // Update the webpage
        })
        .catch(function(error) {
            console.log(error); // Log any errors
        });
    return count; // This may return the default value (30) if fetch hasn't completed
};
