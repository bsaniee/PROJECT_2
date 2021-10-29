# Project 2 
#### By Bijan Saniee

## Project Summary
For this project I will be making a contact directory that allows users to sign in, input contact information that is saved for the particular user, 
and sign out. 
The contact information will include: 
Full Name: 
Phone Number:
Email Address:
Webpage:
Street Address:

## Models
list models here


## Route Table
List your routes in a table

| url | method | action |
|-----|--------|--------|
| /contacts | get | View all contacts (index)|
| /contacts/:id | get | get a particular contact (show)|
| /contacts/new | get | create a new contact to add to index (new) |
| /contacts/:id/edit | get | routes user to edit form for contact |
| /contacts/ | post | creates a new contact object to add to database |
| /contacts/:id | delete | removes contact object with specific ID |
| /contacts:/id | put | updates a contact object that has been edited |

## User Stories

## Challenges

## List of Technologies
Node.js, liquid, mongoDB, mongoose, html5, css