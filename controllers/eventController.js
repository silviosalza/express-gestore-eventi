const path = require("path");
const { log } = require("console");
const fs = require("fs");
const eventArray = require("../db/db.json");
const Event = require('../models/eventModel')


function index(req,res){

    res.format({
        html: () => {
          
          res.type("html").send("Index funziona");
        },
        json: () => {
          res.type("json").send("Index funziona");
        },
        default: () => {
          res.status(406).send("Not Acceptable");
        },
      });
      return;
    }


function store(req, res) {
        res.format({
            html: () => {
              
              res.type("html").send("store funziona");
            },
            json: () => {
              res.type("json").send("store funziona");
            },
            default: () => {
              res.status(406).send("Not Acceptable");
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
    
      res.json(event);

        
          
        }



    module.exports = {
        index,
        store,
        update,
        show,
      };