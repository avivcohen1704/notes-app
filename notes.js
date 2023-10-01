const fs = require('fs')
const chalk = require('chalk')
const { log } = require('console')


const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New node added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}


const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)


    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach((note) => console.log(note.title))

}


const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (!note) {
        console.log(chalk.red.inverse('Note not found!'))
    } else {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
}


const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}


const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}


module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}