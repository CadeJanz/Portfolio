// Number of sparkles to create
const sparkleCount = 100;

// Get the container where sparkles will be added
const sparkleContainer = document.querySelector('.sparkle-container');

// Function to generate random values for the sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Randomize the size of the sparkles between 2px and 6px
    const size = Math.random() * 4 + 2; // Size between 2px and 6px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    // Randomize the position of the sparkle within the screen
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    // Add the sparkle to the container
    sparkleContainer.appendChild(sparkle);

    // Remove the sparkle after the animation ends
    setTimeout(() => {
        sparkle.remove();
    }, 1500); // Duration of the animation (1.5s)
}

// Create sparkles continuously
setInterval(createSparkle, 100); // Adjust the frequency (100ms)



// Function to calculate the new background color based on scroll position
// Function to calculate the new background color based on scroll position
// window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY; // Get current scroll position
//     var scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height

//     // Only change the background color if the scroll position is greater than 500px
//     if (scrollPosition > 200) {
//         // Calculate the percentage of scroll after 500px
//         var scrollPercentage = (scrollPosition - 200) / (scrollHeight - 200);

//         // Set a target color (white in this case)
//         var targetColor = { r: 255, g: 255, b: 255 }; // RGB for white

//         // Get the current background color as RGB (we use the current background color as a starting point)
//         var currentColor = getComputedStyle(document.body).backgroundColor;
//         var currentRGB = currentColor.match(/\d+/g); // Extract the RGB values

//         // Calculate the new color based on the scroll percentage
//         var r = Math.floor(parseInt(currentRGB[0]) + (targetColor.r - parseInt(currentRGB[0])) * scrollPercentage);
//         var g = Math.floor(parseInt(currentRGB[1]) + (targetColor.g - parseInt(currentRGB[1])) * scrollPercentage);
//         var b = Math.floor(parseInt(currentRGB[2]) + (targetColor.b - parseInt(currentRGB[2])) * scrollPercentage);

//         // Set the new background color
//         document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     } 
//     else {
//         // Revert the background color back to black (as the user scrolls back up)
//         var scrollPercentage = scrollPosition / 200; // Calculate scroll percentage for scroll position less than 500px
//         var targetColor = { r: 0, g: 0, b: 0 }; // RGB for black

//         // Get the current background color as RGB
//         var currentColor = getComputedStyle(document.body).backgroundColor;
//         var currentRGB = currentColor.match(/\d+/g);

//         // Calculate the new color based on the scroll percentage
//         var r = Math.floor(parseInt(currentRGB[0]) + (targetColor.r - parseInt(currentRGB[0])) * scrollPercentage);
//         var g = Math.floor(parseInt(currentRGB[1]) + (targetColor.g - parseInt(currentRGB[1])) * scrollPercentage);
//         var b = Math.floor(parseInt(currentRGB[2]) + (targetColor.b - parseInt(currentRGB[2])) * scrollPercentage);

//         // Set the new background color
//         document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     }
// });

// Function to calculate the new background color based on scroll position
// Function to calculate the new background color based on scroll position
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY; // Get current scroll position
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    var threshold = 500; // The scroll threshold for color change

    // Calculate the percentage of how far the user has scrolled
    var scrollPercentage = Math.min(scrollPosition / threshold, 1); // Limits to a max of 1 (100%)

    // If scrolling down, make the background gradually change to white
    if (scrollPosition < 1000) {
        // Interpolate between black (0, 0, 0) and white (255, 255, 255)
        var r = Math.floor(0 + (255 - 0) * (scrollPercentage)); // Calculate the red value
        var g = Math.floor(0 + (255 - 0) * (scrollPercentage)); // Calculate the green value
        var b = Math.floor(0 + (255 - 0) * (scrollPercentage)); // Calculate the blue value
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // Apply the color
    } else {
        // If scrolling up, make the background gradually change back to black
        var r = Math.floor(255 - (255 - 0) * (scrollPercentage)); // Reverse interpolation for red value
        var g = Math.floor(255 - (255 - 0) * (scrollPercentage)); // Reverse interpolation for green value
        var b = Math.floor(255 - (255 - 0) * (scrollPercentage)); // Reverse interpolation for blue value
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // Apply the color
    }
});





// JavaScript to track horizontal scroll and change the background color of the active website item
// window.addEventListener('scroll', function() {
//     var websiteList = document.querySelector('.website-list');
//     var items = document.querySelectorAll('.website-item');

//     items.forEach(function(item) {
//         var itemRect = item.getBoundingClientRect(); // Get the position of the item relative to the viewport
        
//         // Calculate the total width and height of the item
//         var itemWidth = itemRect.width;
//         var itemHeight = itemRect.height;

//         // Check if 80% of the item is within the viewport horizontally
//         var isVisible = itemRect.left < window.innerWidth * 0.8 && itemRect.right > window.innerWidth * 0.2;
        
//         // If 80% of the item is visible horizontally, change its background color
//         if (isVisible) {
//             item.style.backgroundColor = "#3498db";  // Highlight the currently visible item
//         } else {
//             item.style.backgroundColor = "white";  // Reset background for items that are not visible
//         }
//     });
// });


// change the color of the page when you hover over a project


var topLeft = document.querySelector('.top-left p');
var menuButton = document.querySelector('.menu-btn button');

var topContainer = document.querySelector('.top-container');
var menuBorder = document.querySelector('.menu-btn');

// Change the border color

    
    

var knocaps = document.getElementById("knocaps");
knocaps.addEventListener('mouseenter', function() {
    // Change the body's background color when hovering over an item
    knocaps.style.backgroundColor = '#443479';
    topLeft.style.color = '#443479'; // Text color for "CJ"
    menuButton.style.color = '#443479'; // Button text color
    topContainer.style.borderColor = '#443479';  
    menuBorder.style.borderColor = '#443479';
   
});

knocaps.addEventListener('mouseleave', function() {
    // Reset the body's background color when hover is removed
    knocaps.style.backgroundColor = 'white';

    topLeft.style.color = '#656363'; // Text color for "CJ"
    menuButton.style.color = '#656363'; // Button text color
    topContainer.style.borderColor = '#656363';  
    menuBorder.style.borderColor = '#656363';
    
});








