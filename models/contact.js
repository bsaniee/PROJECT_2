////////////////////////////////////
// import dependencies
////////////////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection")

//Create our contact model
//////////////////////////
const {Schema, model} = mongoose //destructuring Schema and Model from mongoose

//make contact Schema
const contactSchema = new Schema({
    name: String,
    number: String, 
    email: String, 
    webpage: String,
    address: String,
    username: String,
})

//Make the contact Model
const Contact = model("Contact", contactSchema)

//log to test it exists
//console.log(Contact)

///////////////////////////
// Export contact model
//////////////////////////
module.exports = Contact