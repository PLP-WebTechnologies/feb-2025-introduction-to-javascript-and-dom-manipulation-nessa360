// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    const textButton = document.getElementById('text-button');
    const styleButton = document.getElementById('style-button');
    const addButton = document.getElementById('add-button');
    const removeButton = document.getElementById('remove-button');
    const resetButton = document.getElementById('reset-button');
    const dynamicContent = document.getElementById('dynamic-content');
    const elementContainer = document.getElementById('element-container');
    const body = document.body;

    // Store original text content for reset functionality
    const originalText = dynamicContent.textContent;
    let elementCount = 0;
    let isDarkMode = false;

    // Array of messages for text changes
    const messages = [
        "You've changed the text content using JavaScript!",
        "DOM manipulation is powerful!",
        "JavaScript makes websites interactive!",
        "This text was updated dynamically.",
        "You can change content without reloading the page!"
    ];

    // ---- Text Manipulation Function ----
    textButton.addEventListener('click', function() {
        // Get a random message from the array
        const randomIndex = Math.floor(Math.random() * messages.length);
        
        // Change the text content of the element
        dynamicContent.textContent = messages[randomIndex];
        
        // Add a highlight effect temporarily
        dynamicContent.style.backgroundColor = '#ffffcc';
        setTimeout(function() {
            dynamicContent.style.backgroundColor = '';
        }, 500);
    });

    // ---- Style Manipulation Function ----
    styleButton.addEventListener('click', function() {
        // Toggle dark mode by adding/removing a class to the body
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            body.classList.add('dark-mode');
            styleButton.textContent = 'Switch to Light Mode';
        } else {
            body.classList.remove('dark-mode');
            styleButton.textContent = 'Toggle Dark Mode';
        }
    });

    // ---- Add Element Function ----
    addButton.addEventListener('click', function() {
        elementCount++;
        
        // Create a new element
        const newElement = document.createElement('div');
        newElement.className = 'added-element';
        newElement.style.padding = '10px';
        newElement.style.margin = '5px 0';
        newElement.style.backgroundColor = getRandomColor();
        newElement.style.borderRadius = '4px';
        newElement.style.color = '#fff';
        newElement.textContent = `Element #${elementCount} - added dynamically!`;
        
        // Add the new element to the container
        elementContainer.appendChild(newElement);
    });

    // ---- Remove Element Function ----
    removeButton.addEventListener('click', function() {
        // Check if there are elements to remove
        if (elementContainer.children.length > 0) {
            // Remove the last added element
            elementContainer.removeChild(elementContainer.lastChild);
            if (elementCount > 0) {
                elementCount--;
            }
        }
    });

    // ---- Reset Function ----
    resetButton.addEventListener('click', function() {
        // Reset text content
        dynamicContent.textContent = originalText;
        dynamicContent.style.backgroundColor = '';
        
        // Reset dark mode
        body.classList.remove('dark-mode');
        styleButton.textContent = 'Toggle Dark Mode';
        isDarkMode = false;
        
        // Remove all added elements
        elementContainer.innerHTML = '';
        elementCount = 0;
    });

    // Helper function to generate random colors
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});