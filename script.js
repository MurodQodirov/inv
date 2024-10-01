// Keep track of votes for each image
let votes = {
    'Image 1': 0,
    'Image 2': 0,
    'Image 3': 0
};

// Function to handle voting
function vote(imageName) {
    // Increment the vote count for the selected image
    votes[imageName]++;
    
    // Update the vote count on the page
    document.getElementById(`vote${imageName.split(' ')[1]}`).innerText = `Umumiy ovozlar soni: ${votes[imageName]}`;
}
