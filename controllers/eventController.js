const path = require("path");
const { log } = require("console");
const fs = require("fs");
const eventArray = require("../db/db.json");
const Event = require("../models/eventModel");

function index(req, res) {
  try {
    let events = Event.getAllEvent();
    console.log("events:", events);
    const { title, description } = req.query;

    if (title) {
      events = events.filter((event) =>
        event.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (description) {
      events = events.filter((event) =>
        event.description.toLowerCase().includes(description.toLowerCase())
      );
    }

    res.json(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function store(req, res) {
  res.format({
    default: () => {
      const eventData = req.body;
      const newEvent = new Event(
        eventData.id,
        eventData.title,
        eventData.description,
        eventData.date,
        eventData.maxSeats
      );

      try {
        Event.saveEvent(newEvent);
        res.json(newEvent);
      } catch (error) {
        res.send("Errore durante il salvataggio");
      }
    },
  });
  return;
}

function show(req, res) {
  res.format({
    default: () => {
      try {
        const events = Event.getAllEvent();
        const eventId = parseInt(req.params.id);

        if (isNaN(eventId)) {
          throw new Error("ID non valido");
        }

        const singleEvent = events.find((event) => event.id === eventId);

        if (!singleEvent) {
          throw new Error(`Evento con ID ${eventId} non trovato`);
        }

        res.json(singleEvent);
      } catch (error) {
        res.status(404).send(error.message);
      }
    },
  });
}

function update(req, res) {
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
