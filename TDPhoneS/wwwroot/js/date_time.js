// Function to update clock
function updateClock() {
    var now = new Date();

    var dayOfMonth = now.getDate();
    var month = now.getMonth() + 1; // getMonth() returns zero-based month (0 = January)
    var year = now.getFullYear();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if necessary
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    var timeString = dayOfMonth + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;

    // Update clock text
    document.getElementById('clock').textContent = timeString;

    // Update the clock every second
    setTimeout(updateClock, 1000);
}

// Call updateClock() when the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    updateClock(); // Start the clock
});