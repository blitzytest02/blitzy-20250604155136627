# blitzy-20250604155136627
Auto-created public repository with README

## Project Description

Node.js Tutorial Project demonstrating HTTP server implementation using Express.js framework with multiple endpoints. This project serves as an educational resource for developers learning Node.js web development, showcasing modern framework patterns while maintaining code simplicity and beginner accessibility.

### Features

- **Express.js 4.x Integration**: Modern web application framework providing robust HTTP server capabilities
- **Multiple Endpoint Routing**: Demonstrates declarative route definitions for multiple API endpoints
- **Environment-based Port Configuration**: Flexible port configuration supporting environment variable overrides
- **Console Logging**: Request activity logging for observability and debugging
- **Educational Code Structure**: Clean, well-documented code suitable for learning purposes
- **Zero External Service Dependencies**: Standalone server requiring no databases or external APIs

## Technology Stack

This project is built with the following technologies:

- **Node.js**: >=14.0.0 (JavaScript runtime environment)
- **Express.js**: ^4.19.2 (Web application framework)

### Dependencies

- **express** (^4.19.2): Fast, unopinionated, minimalist web framework for Node.js providing:
  - HTTP server abstraction and middleware support
  - Declarative routing capabilities
  - Simplified request/response APIs
  - Automatic content-type handling

## Installation

Follow these steps to set up the project locally:

1. **Ensure Node.js is installed**: Verify you have Node.js v14.x or higher installed on your system
   ```bash
   node --version
   ```

2. **Clone this repository**:
   ```bash
   git clone <repository-url>
   cd blitzy-20250604155136627
   ```

3. **Install dependencies**: Run npm install to download and install Express.js and its dependencies
   ```bash
   npm install
   ```

This will create a `node_modules/` directory and install Express.js as specified in `package.json`.

## Usage

### Starting the Server

You can start the server using either of these methods:

**Method 1: Using npm start command (recommended)**:
```bash
npm start
```

**Method 2: Direct Node.js execution**:
```bash
node server.js
```

The server will start and bind to **http://localhost:3000** by default. You should see a confirmation message in the console:
```
Server listening on http://localhost:3000
```

### Custom Port Configuration

To use a different port, set the `PORT` environment variable:

```bash
PORT=8080 npm start
```

Or:

```bash
PORT=8080 node server.js
```

The server will then be accessible at **http://localhost:8080**.

## API Endpoints

The server provides the following HTTP GET endpoints:

### GET /hello

Returns a "Hello world" greeting message.

**Request**:
```
GET http://localhost:3000/hello
```

**Response**:
```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

Hello world
```

### GET /evening

Returns a "Good evening" greeting message.

**Request**:
```
GET http://localhost:3000/evening
```

**Response**:
```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

Good evening
```

### GET /

Returns endpoint documentation and available routes (if implemented).

**Request**:
```
GET http://localhost:3000/
```

## Testing

### Testing with curl

You can test the endpoints using curl commands from your terminal:

**Test the /hello endpoint**:
```bash
curl http://localhost:3000/hello
```

Expected output:
```
Hello world
```

**Test the /evening endpoint**:
```bash
curl http://localhost:3000/evening
```

Expected output:
```
Good evening
```

### Testing with a Web Browser

You can also test the endpoints by opening these URLs in your web browser:
- http://localhost:3000/hello
- http://localhost:3000/evening

### Expected Behavior

- Each request should return a 200 OK status code
- Response content type is automatically set to `text/html; charset=utf-8` by Express.js
- Server logs each request to the console with timestamp and endpoint path
- Requests to undefined routes return a 404 error (if 404 handler is implemented)

## Project Structure

```
blitzy-20250604155136627/
├── README.md           # Project documentation (this file)
├── package.json        # Node.js project manifest and dependency declarations
├── package-lock.json   # Dependency version lock file (auto-generated)
├── server.js           # Main HTTP server implementation using Express.js
├── .gitignore          # Version control exclusion patterns
└── node_modules/       # Installed dependencies (excluded from version control)
```

## Educational Notes

This project demonstrates several important concepts for Node.js developers:

1. **Framework Migration**: Shows the transition from native `http` module to Express.js framework
2. **Dependency Management**: Illustrates proper use of package.json and npm for managing project dependencies
3. **Declarative Routing**: Demonstrates Express.js's route definition pattern replacing manual URL parsing
4. **Environment Configuration**: Shows best practices for port configuration using environment variables
5. **Middleware Patterns**: Foundation for understanding Express.js middleware architecture
6. **HTTP Response Handling**: Demonstrates simplified response APIs (`res.send()`) versus native methods

## License

MIT
