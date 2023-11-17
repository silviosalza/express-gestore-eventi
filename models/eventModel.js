const fs = require("fs")
const path = require("path");

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


      }
    }
  
  
  module.exports = Event;