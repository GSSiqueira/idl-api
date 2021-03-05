import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { EntryDTO } from "../entities/Entry";
import { TOEntryRepository } from "../repositories/implementations/TOEntryRepository";

export class EntryController {
  findEntryById(request: Request, response: Response) {
    getCustomRepository(TOEntryRepository)
      .getEntryById(parseInt(request.params.entryId))
      .then((entry) => {
        let entryJSON = JSON.stringify(entry);
        response.status(200).send(entryJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: "Entry not found!",
        });
      });
  }

  listDailyEntriesByDate(request: Request, response: Response) {
    getCustomRepository(TOEntryRepository)
      .getEntriesByDate(request.params.date)
      .then((entry) => {
        if (entry.length) {
          let entryJSON = JSON.stringify(entry);
          response.status(200).send(entryJSON);
        } else {
          response.status(400).send({
            message: "No entries found!",
          });
        }
      })
      .catch((error) => {
        response.status(400).send({
          message: "Error while searching the entries.",
        });
      });
  }

  listEntriesByMonth(request: Request, response: Response) {
    getCustomRepository(TOEntryRepository)
      .getEntriesByMonth(request.params.month)
      .then((entry) => {
        if (entry.length) {
          let entryJSON = JSON.stringify(entry);
          response.status(200).send(entryJSON);
        } else {
          response.status(400).send({
            message: "No entries found!",
          });
        }
      })
      .catch((error) => {
        response.status(400).send({
          message: "Error while searching the entries.",
        });
      });
  }

  addNewEntry(request: Request, response: Response) {
    getCustomRepository(TOEntryRepository)
      .addNewEntry(request.body as EntryDTO)
      .then((entry) => {
        let entryJSON = JSON.stringify(entry);
        response.status(200).send(entryJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: "Error while adding new entry.",
        });
      });
  }

  removeEntry(request: Request, response: Response) {
    getCustomRepository(TOEntryRepository)
      .removeEntry(parseInt(request.params.entryId))
      .then((entry) => {
        let entryJSON = JSON.stringify(entry);
        response.status(200).send(entryJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: "Problem removing entry.",
        });
      });
  }
}
