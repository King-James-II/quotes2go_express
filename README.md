# Quote API

This is a simple RESTful API for retrieving, adding, and deleting quotes categorized by type such as inspirational, motivational, or funny.

## Endpoints

- **GET /quote**: Returns a random quote from any category.
- **GET /quotes/:category**: Returns all quotes of a specific category.
- **POST /quotes**: Adds a new quote to a specified category.
- **DELETE /quotes/:category**: Deletes a category of quotes.

## Usage

To use this API, send requests to the appropriate endpoints using HTTP methods such as GET, POST, and DELETE.

### Example Usage:

#### Get a Random Quote:
```http
GET /quote
