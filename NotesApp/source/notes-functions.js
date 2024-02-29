'use strict'
import { v4 as uuidv4 } from 'uuid';
import moment from "moment/moment"
import { filters,noteObj } from "./index"
//Read existing notes from local storage
export const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try{
        return (notesJSON) ? JSON.parse(notesJSON) : []
    } catch(e){
        return []
    }
    }

//Generate the DOM structure for new note
const addNoteToDom = (note) => {
        const noteElement = document.createElement('div')
        noteElement.classList.add('note-container')
        const noteTitle = document.createElement('a')
        noteTitle.classList.add('note-title')
        const noteBody = document.createElement('a')
        noteBody.classList.add('note-body')
        const titleLabel = document.createElement('label')
        titleLabel.classList.add('label')
        const bodyLabel = document.createElement('label')
        bodyLabel.classList.add('label');
        noteTitle.textContent  = note.title
        noteBody.textContent = note.body

        //set attribute for label
        titleLabel.setAttribute("for", "myInput")
        titleLabel.textContent = "Title: "
        titleLabel.style.color = '#007bff';
        titleLabel.style.textDecoration = 'none';
        bodyLabel.setAttribute("for", "myInput")
        bodyLabel.textContent = "Body: "
        bodyLabel.style.color = '#007bff';
        bodyLabel.style.textDecoration = 'none';
        titleLabel.style.fontWeight = "bold"
        bodyLabel.style.fontWeight = "bold"

        //append
        noteElement.innerHTML  += "<br>"
        noteElement.appendChild(titleLabel)
        noteTitle.classList.add('spacer')
        titleLabel.appendChild(noteTitle)
        noteElement.appendChild(bodyLabel)
        noteBody.classList.add('spacer')
        bodyLabel.appendChild(noteBody)
        noteBody.setAttribute('href', 'editNote.html' + '#' + note.id)
        document.querySelector('#notes').appendChild(noteElement)
}

//clear all notes 
export const clearAllNotes = () => {
    document.querySelector('#notes').innerHTML = ''
    localStorage.removeItem('notes')
    localStorage.clear()
}

//Add new note to Array 
export const addNewNoteToArray =(e) => {
    const newTitle = e.target.elements.addTitle.value
    const newBody = e.target.elements.addDetails.value
    //to get timestamp 
    const timestamp = moment().valueOf()

    if(newTitle != '' && newBody != ''){
        //Add it to Todo Array 
        noteObj.push({
            id: uuidv4(),
            title: `${newTitle}`, 
            body: `${newBody}`, 
            createdAt: timestamp, 
            updatedAt: timestamp
        })
    }
     //Add it to the local storage as string 
     localStorage.setItem('notes', JSON.stringify(noteObj))
     //Display it on the page
     console.log(localStorage.getItem('notes'))
}

//Display notes to the page
export const renderNotes = (notes, filters) => {
    let sortedNotes = sortNotes(notes)
    const filteredNotes = sortedNotes.filter((note) =>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase()) ||
        note.body.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //clear everytime 
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note)=>{
        addNoteToDom(note)
    })
}

//Stripe id 
export const stripId = () => location.hash.substring(1)


//update the array
export const updateNote = (oldNote, newTitle, newBody) => {
    const timestamp = moment().valueOf()
    if(newTitle != '' && newBody != ''){
        //remove old note
        let noteObjList = getSavedNotes()
        noteObjList = noteObjList.filter(e => e.id !== oldNote.id)
        //push new note
        noteObjList.push({
            id: oldNote.id,
            title: newTitle, 
            body: newBody, 
            createdAt : oldNote.createdAt, 
            updatedAt : timestamp 
        })
    //Add it to the local storage as string 
     localStorage.setItem('notes', JSON.stringify(noteObjList))
     //Display it on the page
     console.log(localStorage.getItem('notes'))
    }
}

//generate last edited
export const generateLastEdited = (timestamp) =>  `Last Edited: ${moment(timestamp).fromNow()}`

//Sort Notes 
export const sortNotes = (notes) => {
    if(filters.sortBy == 'byEdited'){
        return notes.sort((a,b) => {
            if(a.updatedAt > b.updatedAt){
                return -1
            } else if(a.updatedAt < b.updatedAt){
                return 1
            } else {
                return 0
            }
        })
    }
    else if(filters.sortBy == 'byCreated'){
        return notes.sort((a,b) => {
            if(a.createdAt > b.createdAt){
                return 1
            } else if(a.createdAt < b.createdAt){
                return -1
            } else {
                return 0
            }
        })
    }
    else if(filters.sortBy == 'alphabetical'){
        return notes.sort((a,b) => {
            if(a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else {
                return 0
            }
        })
    }
    else{
        return notes
    }
}


