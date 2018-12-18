//This is where the app starts
console.log('Starting app.js'); // Just to see that app is running properly

//Require -> allows us to load module

const fs = require('fs'); //fetch contents from fs module and store in fs variable
//const os = require('os');
const _ = require('lodash'); // _ is common name for lodash
const yargs = require('yargs'); // has built in parsings

const notes = require('./notes.js');

const argv = yargs.argv; //yargs library saves argv

var command = argv._[0]; //first item in array == var command = process.argv[2];
console.log('Command: ', command);
//console.log('Process', process.argv); //commandline arguments passed in
console.log('Yargs', argv);

if (command === 'add') {
    //console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        //console.log('Title: ' + note.title); // 'Title: ${note.title}'
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    //console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
    //console.log('Reading note');
    notes.getNote(argv.title);
} else if (command === 'remove') {
    //console.log('Removing note');
    notes.removeNote(argv.title);
} else {
    console.log('command not recognized');
}




// var filteredArray = _.uniq(['Ben', 1, 'Ben', 1, 2, 3, 4]);
// console.log(filteredArray);

// console.log(_.isString(true)); // false because boolean is not string
// console.log(_.isString('Ben'));


// var user = os.userInfo();
// //console.log(user);
// //fs.appendFile('greetings.txt', 'Hello world!');

// var result = notes.addNote();
// console.log(result);

// console.log('Result:', notes.add(9, -2));

//Op 1
//ES6 feature: fs.appendFile('greetings.txt', `Hello ${user.username}!`, function (err))
// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!' + ' You are ' + notes.age, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

//Op2
// fs.appendFileSync('greetings.txt', 'Hello world!');