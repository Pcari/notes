console.log('Staring notes.js');

//arrow function  = function () to arrow function
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString); //take the string we read and parse it to an array
    
    }   catch (e) { //if one of the errors from try occurs
        return []; 
    }

};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    // console.log('Adding note', title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    //incase notes-data.json does not exist


    //check for duplicate titles
    var duplicateNotes = notes.filter((note) => note.title === title);
         //if title is equal it will be true otherwise false
    if (duplicateNotes.length === 0) {
        notes.push(note); // add note to notes array
        saveNotes(notes);
    }
};



var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    //console.log('Getting note', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title); 
    return filteredNotes[0];
};

var removeNote = (title) => {
    //console.log('Removing note', title);
    //fetch notes
    var notes = fetchNotes(); 

    //filter notes, removing the one with title
    var filteredNotes = notes.filter((note) => note.title !== title);

    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

};

//have to export the functions so they can be used
module.exports = {
    addNote: addNote, // equal to just addNote points to addNote function
    getAll,
    getNote,
    removeNote,
    logNote
};

// module.exports.add = (a, b) => {
//     return a + b;
// };