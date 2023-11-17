const path = require("path");
const { log } = require("console");
const fs = require("fs");
const eventArray = require("../db/db.json");
const Event = require('../models/eventModel')


function index(req,res){

    res.format({
        default: () => {
            events = Event.getEvent();
            res.json(events);
        },
      });
      return;
    }


function store(req, res) {
    res.format({
        default: () => {
            const eventData = req.body;
            const newEvent = new Event(eventData.id, eventData.title, eventData.description, eventData.date, eventData.maxSeats)
        
            try{
                Event.saveEvent(newEvent);
                res.json(newEvent)
            } catch(error){
                res.send("Errore durante il salvataggio")
            }
        },
      });
      return;
    }

function show(req,res){
    const eventId = req.params.id;
    const event = eventArray.find((event) => event.id == eventId);

    if (!event) {
        res.status(404).send(`Evento con slug ${eventId} non trovato`);
        return;
      }
    
      res.json(event);

}
function update(req,res){

    const eventId = req.params.id;
    const event = eventArray.find((event) => event.id == eventId);

    if (!event) {
        res.status(404).send(`Evento con slug ${eventId} non trovato`);
        return;
      }
    
      res.json(event);}



    module.exports = {
        index,
        store,
        update,
        show,
      };