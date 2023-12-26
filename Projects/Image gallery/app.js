// Declare a variable currentIndex and initialize it with the value 0
let currentIndex = 0;

// Declare a function named updateImageSize
function updateImageSize() {
    // Select all 'img' elements inside the element with the ID 'gallery'
    const galleryImages = document.querySelectorAll('#gallery img');

    // Iterate over each image in the galleryImages NodeList using forEach
    galleryImages.forEach((img, index) => {
        // Check if the current index matches the currentIndex
        if (index === currentIndex) {
            // If true, set the width of the image to '250px' for the first image
            img.style.width = '250px'; // Adjust the size as needed for the first image
        } else {
            // If false, set the width of the image to '150px' for other images
            img.style.width = '50px'; // Adjust the size as needed for other images
        }
    });
}

// Declare a function named previousImage
function previousImage() {
    // Check if currentIndex is greater than 0
    if (currentIndex > 0) {
        // If true, decrement currentIndex by 1 and call updateImageSize
        currentIndex--;
        updateImageSize();
    }
}

// Declare a function named nextImage
function nextImage() {
    // Select all 'img' elements inside the element with the ID 'gallery'
    const galleryImages = document.querySelectorAll('#gallery img');

    // Check if currentIndex is less than the last index in galleryImages
    if (currentIndex < galleryImages.length - 1) {
        // If true, increment currentIndex by 1 and call updateImageSize
        currentIndex++;
        updateImageSize();
    }
}

// Initial call to set the initial sizes
updateImageSize();


