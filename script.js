// Array of sentences or phrases
const sentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ];
  
  // Function to generate a random paragraph
  function generateRandomParagraph() {
    const paragraphLength = Math.floor(Math.random() * 5) + 3; // Random length between 3 and 7 sentences
    let paragraph = "";
    
    for (let i = 0; i < paragraphLength; i++) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      paragraph += sentences[randomIndex] + " ";
    }
    
    return paragraph.trim();
  }
  
  // Function to display the generated paragraph
  function displayParagraph() {
    const paragraphElement = document.getElementById("paragraph");
    paragraphElement.textContent = generateRandomParagraph();
  }
  
  // Event listener for the generate button
  const generateBtn = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", displayParagraph);
  
  // Initial paragraph generation on page load
  displayParagraph();
  