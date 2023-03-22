### React ToDoList App

This is a simple ToDoList app built with React. 

#### Installation

1. Clone the repo
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000` in your browser
5. To change the port number, open `package.json` and change the `start` script to `PORT=XXXX react-scripts start`
6. To avoid Errors "error:0308010C:digital envelope routines::unsupported" when running `npm start`, either downgrade node.js to v16 or change the `start` script in package.json to `react-scripts --openssl-legacy-provider start`

#### Technologies

- React
- React Hooks
  - useState Hook
- Map function in ES6
- Spread Operator in ES6