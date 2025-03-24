# MERN Project

## Description
This is a MERN (MongoDB, Express, React, Node.js) stack project that includes a frontend built with React and a backend using Express

## Problem Faced
When directly accessing a route like `/create` or refreshing the page, the application throws a "Not Found" error. However, navigating through the frontend works correctly without issues.

### Cause of the Problem
This issue occurs because React Router is handling routing on the client-side. When a user refreshes or directly visits a route, the request is sent to the backend, which does not recognize the route and returns a 404 error.

## Solution I tried but did not work
To fix this, configure the Express server to always serve the frontend's `index.html` for unknown routes so that React Router can handle them. Add the following code to your `server.js` or `server.ts`:

```js
const path = require("path");
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
```

## Help
Please ignore the commit message :)
Help will be very appreciated

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Run the backend:
   ```sh
   npm run server
   ```
4. Run the frontend:
   ```sh
   cd client
   npm start
   ```

## Technologies Used
- React.js
- Express.js
- MongoDB
- Node.js
- React Router

## Author
Alfredho Pranoto

