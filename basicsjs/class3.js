// import React, { useState } from 'react';

// function ArrayManager() {
//     const [array, setArray] = useState([]);
//     const [inputValue, setInputValue] = useState('');

//     const addNumber = () => {
//         const num = parseFloat(inputValue);
//         if (!isNaN(num)) {
//             setArray([...array, num]);
//             setInputValue('');
//         }
//     };

//     return (
//         <div>
//             <h2>Array Manager</h2>
//             <input
//                 type="number"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Enter a number"
//             />
//             <button onClick={addNumber}>Add Number</button>
//             <ul>
//                 {array.map((num, index) => (
//                     <li key={index}>{num}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ArrayManager;
// update a specific index in an array

// remove a specific number from an array
// insert a Node. at  specific index in an array
// update all values in an array
// display the current array on screen
// provide buttons to perform these operations
// if the count is  mmore than 20, show a warning message
//npm create vite@latest react-app -- --template react


// createApp.post('/submit', (req, res) => {
//     const { name, email } = req.body;
//     res.send(`Received submission from ${name} with email ${email}`);
// });
// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });
// createApp.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });



const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    res.json({ message: 'Hello, world!' });
});
module.exports = router;


const express = require('express');
const app = express();
const dataRouter = require('./dataRouter');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
}); 
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Received submission from ${name} with email ${email}`);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});