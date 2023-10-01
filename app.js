const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customiz yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler(){
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'reading the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
// add, remove, read, list
//console.log(yargs.argv)