// var obj = {
//     name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj); //takes obj and returns stringified obj
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Ben","age": 25}';
// // to convert personString to obj/array use:
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
// originalNoteString converting object to a string
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note converting a string to an obj
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);