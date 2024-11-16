# [powerup-http-module](https://github.com/UniBreakfast/powerup-http-module)

## HTTP Request Getters *hypothetical* NPM module usage DEMO

A lightweight Node.js module that provides convenient getters for HTTP request properties. This module extends the functionality of the standard HTTP request object with easy-to-use getters for common request properties like cookies, body, query parameters, and more.

## Features

- Cookie parsing with support for multiple cookies
- Raw body handling with automatic buffering
- JSON body parsing with fallback to raw data
- Path extraction from URLs
- Query string parsing
- Query parameters as object
- Promise-based body handling

## Installation (not really)

Just make sure the `node-modules` folder includes the `http-getters` module folder with its `index.js` inside it. You can't install it from the NPM normally as it isn't published there.

![image](https://github.com/user-attachments/assets/f0e098bd-aca7-471a-b5a5-00938c304329)

## Available Getters

- `cookie`: Returns parsed cookies as an object
- `rawBody`: Returns the raw request body as a string
- `body`: Returns parsed JSON body (if valid JSON) or raw body
- `path`: Returns URL path without query parameters
- `querystring`: Returns the raw query string
- `query`: Returns parsed query parameters as an object

![image](https://github.com/user-attachments/assets/bddb6bd0-827e-42c5-b852-fb4aacb39aa9)

## Testing

You can test the module using curl commands, Postman, browser or any other way. Here are some examples:

### 1. Basic Request
```bash
curl 'http://localhost:3000/test'
```

### 2. Request with Query Parameters
```bash
curl 'http://localhost:3000/test?name=john&age=25'
```

### 3. Request with Cookies
```bash
curl -H 'Cookie: session=abc123; user=john' 'http://localhost:3000/test'
```

### 4. POST Request with JSON Body
```bash
curl -X POST \
  'http://localhost:3000/api/data?id=123' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: session=xyz789' \
  -d '{"message": "Hello World"}'
```

### Full Integration Test
This command tests all getters at once:
```bash
curl -X POST \
  'http://localhost:3000/test/path?key1=value1&key2=value2' \
  -H 'Cookie: session=abc123; user=john' \
  -H 'Content-Type: application/json' \
  -d '{"message": "Hello World"}'
```

## Expected Responses

The server will log in its console:

- Cookies will be parsed from the Cookie header
- Query parameters will be extracted and parsed into an object
- JSON bodies will be automatically parsed
- Path will be extracted without query parameters
- Raw body will be available as a string

## Error Handling

- Invalid JSON bodies will fall back to raw body content
- Missing cookies return an empty object
- Undefined query parameters return undefined
- Body parsing errors are caught and handled gracefully

## Dependencies

- `http` (Node.js built-in)
- `c4console` (for logging)

## Contributing

Feel free to submit issues and enhancement requests.

## License

MIT
