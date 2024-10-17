// Array of quote objects
const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  ];
  
  // Function to generate a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Function to display the new quote
  function displayQuote() {
    const quoteObj = getRandomQuote();
    document.getElementById('quote').textContent = `"${quoteObj.quote}"`;
    document.getElementById('author').textContent = `- ${quoteObj.author}`;
  }
  
  // Event listener for the button
  document.getElementById('new-quote').addEventListener('click', displayQuote);
  