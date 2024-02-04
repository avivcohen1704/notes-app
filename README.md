
# Notes-App

##Description
The notes-app is a command-line application built with Node.js, allowing users to efficiently manage their personal notes. It supports operations such as adding, removing, listing, and reading notes, using a simple yet powerful command-line interface. This project demonstrates my capability to create practical, user-friendly applications with Node.js, emphasizing file operations and data management

##Technologies Used
Programming Language: JavaScript
Framework: Node.js
Tools: Git for version control

##Features
Add new notes with a title and body.
Remove notes based on their title.
List all the existing notes.
Read a specific note by providing its title.
Data persistence using a JSON file to store notes.

## Getting Started
###Prerequisites
Node.js installed on your machine.
###Installation
Clone the repository to your local machine:

```bash
git clone https://github.com/[YourGitHubUsername]/notes-app.git
cd notes-app
```

###Running the Project
To add a note:

```bash
node app.js add --title="Your note title" --body="Your note body"
```
To remove a note:
```bash
node app.js remove --title="Your note title"
```
Listing all notes:
```bash
node app.js list
```
Reading a specific note:
```bash
node app.js read --title="Your note title"
```
##Contributing
Feel free to fork the project and submit pull requests with improvements or new features.


#### Raed a note
In order to read a note named "note name" run 
```bash
  node app.js read --title="note name"
```
