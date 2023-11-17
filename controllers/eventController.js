const path = require("path");
const { log } = require("console");
const fs = require("fs");


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

    module.exports = {
        index,
      };