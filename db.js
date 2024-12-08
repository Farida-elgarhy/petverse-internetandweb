const sqlite3= require('sqlite3').verbose();
const db= new sqlite3.Database('./database.db');
//Update API
//DATABASE TABLES
// Creating User table
const createusertable = `
  CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL,
    age INTEGER
    )`;
// creating pets table
const createpettable = `
  CREATE TABLE IF NOT EXISTS pet(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    vaccinationdates TEXT, 
    healthnotes TEXT,
    breed TEXT NOT NULL
    )`;
// services table
const createservicestable = `
  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    rating REAL NOT NULL,
    contact TEXT NOT NULL,
    location TEXT NOT NULL,
    availableslots TEXT NOT NULL
    )`
// appointments table
const createappointmentstable = `CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userid TEXT NOT NULL,
    serviceid TEXT NOT NULL,
    appointmenttime TEXT NOT NULL,
    FOREIGN KEY (userid) REFERENCES users(id),
    FOREIGN KEY (serviceid) REFERENCES services(id)
    );`
//feedback table
const createfeedbacktable = `CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userid TEXT,  
    serviceid INTEGER,  
    feedbacktype TEXT NOT NULL,
    rating INTEGER NOT NULL,
    comment TEXT,
    email TEXT, 
    FOREIGN KEY (serviceid) REFERENCES services (id),
    FOREIGN KEY (userid) REFERENCES user(id)
    );`
