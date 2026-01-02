import fs from 'fs';
import promptSync from 'prompt-sync';

const prompt = promptSync();

// Prompt the user for input
const name = prompt('Enter your name: ');
const age = prompt('Enter your age: ');

// Create a JSON object
const userData = {
  name: name,
  age: age
};

// Convert JSON object to string
const jsonString = JSON.stringify(userData, null, 2);

// Write JSON string to a new file
fs.writeFileSync('user.json', jsonString, 'utf-8');

console.log('user.json has been created with your input!');
