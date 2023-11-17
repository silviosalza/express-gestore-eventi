const path = require("path");
const { log } = require("console");
const fs = require("fs");
const eventArray = require("../db/db.json");


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
    const eventSlug = req.params.slug;
    const event = eventArray.find((event) => event.slug == eventSlug);

    if (!event) {
        res.status(404).send(`Evento con slug ${eventSlug} non trovato`);
        return;
      }
    
      res.json(event);

}
function update(req,res){

        
          return;
        }



    module.exports = {
        index,
        store,
        update,
        show
      };