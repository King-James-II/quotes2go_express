// Quotes data organized by category
const quotes = {
  "inspirational": [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll"
  ],
  "motivational": [
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs"
  ],
  "funny": [
    "I am not a vegetarian because I love animals; I am a vegetarian because I hate plants. – A. Whitney Brown",
    "A day without sunshine is like, you know, night. – Steve Martin"
  ]
};

// Import Express.js and initialize the app
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON
const use = app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log("connected");
});

// Endpoint to get a random quote
app.get('/quote', (req, res) => {
  // Get list of categories
  const categories = Object.keys(quotes);
  // Select a random category
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  // Get a random quote from the selected category
  const quote = quotes[randomCategory][Math.floor(Math.random() * quotes[randomCategory].length)];
  // Send the quote as JSON response
  res.status(200).json({
    quote: quote
  });
});

// Endpoint to get quotes by category
app.get('/quotes/:category', (req, res) => {
  // Extract category from request params
  const category = req.params.category;
  // Check if category exists
  if (quotes[category]) {
    // Send quotes of the specified category as JSON response
    res.status(200).json(quotes[category]);
  } else {
    // Send 404 error if category does not exist
    res.status(404).json({
      error: `Category '${req.params.category}' not found`
    });
  }
});

// Endpoint to add a quote to a category
app.post('/quotes', (req, res) => {
  // Extract category and quote from request body
  const category = req.body.category;
  const quote = req.body.quote;
  // Check if category exists
  if (quotes.hasOwnProperty(category)) {
    // Add quote to the specified category
    quotes[category].push(quote);
    // Send success response
    res.status(201).json({
      response: `Successfully added to '${category}'.`,
      category: category,
      quote: quote
    });
  } else {
    // Send 400 error if category does not exist
    res.status(400).json({
      error: `Category '${category}' not found`
    });
  }
});

// Endpoint to delete a category of quotes
app.delete('/quotes/:category', (req, res) => {
  // Extract category from request params
  const category = req.params.category;
  // Check if category exists
  if (quotes.hasOwnProperty(category)) {
    // Delete the category
    delete quotes[category];
    // Send success response
    res.status(200).json({
      response: `Category '${category}' sucessfully deleted.`
    });
  } else {
    // Send 404 error if category does not exist
    res.status(404).json({
      error: `Category '${category}' not found`
    });
  }
});
