
# Notes-App
A note writing application written in node.js.
The app is a command line interface that store and delete given notes and their names
The app uses the following npm packeges:
chalk - version 2.4.1
validator - version 10.8.0
yargs - 12.0.2

## Installation
1. clone repository by running
```bash
  git clone git@github.com:avivcohen1704/notes-app.git
```

2. cd to the root diractory

3. install all needed nmp packages by running
```bash
  nmp install
```



## Features

#### Add a note:
In order to add a note named "note name" with "note body" run
```bash
  node app.js add --title="note name" --body="note body"
```
#### Remove a note:
In order to add a note named "note name" run

```bash
  node app.js remove --title="note name"
```
#### List notes
In order to view a list of all the notes run
```bash
  node app.js list
```


#### Raed a note
In order to read a note named "note name" run 
```bash
  node app.js read --title="note name"
```
