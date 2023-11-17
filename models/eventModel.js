const fs = require("fs")
const path = require("path");
const eventArray = require("../db/db.json")

class Event {
    constructor(id, title, description, date, maxSeats) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.date = date;
      this.maxSeats = maxSeats;
    }
    static getEvent() {
        const filePath = path.resolve(__dirname, '..', 'db', 'db.json');
    
        try {
          const fileData = fs.readFileSync(filePath, 'utf8');
          const events = JSON.parse(fileData);
          return events;

        } catch (error) {
          throw new Error(`Errore durante la lettura del file: ${error.message}`);
        }
      }

      static saveEvent(){

        const filePath = path.resolve(__dirname, '..', 'db', 'db.json');
        try {
            const fileData = fs.readFileSync(filePath, 'utf8');
            const events = JSON.parse(fileData);
      
            events.push(eventArray);
      
            fs.writeFileSync(filePath, JSON.stringify(events, null, 2), 'utf8');
            console.log('evento salvato');

          } catch (error) {
            throw new Error(`errore durante il salvataggio dell'evento: ${error.message}`);
          }
      }
    }
  
  
  module.exports = Event;