import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { EntryDTO } from '../entities/Entry';
import { TOEntryRepository } from '../repositories/implementations/TOEntryRepository';

export class EntryController {
  findEntryById(request: Request, response: Response) {
    getCustomRepository(TOEntryRepository)
      .getEntryById(request.params.entryId)
      .then((entry) => {
        let entryJSON = JSON.stringify(entry);
        response.status(200).send(entryJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: 'Entry not found!',
        });
      });
  }

  listDailyEntriesByDate(request: Request, response: Response) {
    getCustomRepository(TOEntryRepository)
      .getDailyEntriesByDate(request.body.date)
      .then((entry) => {
        if (entry.length) {
          let entryJSON = JSON.stringify(entry);
          response.status(200).send(entryJSON);
        } else {
          response.status(400).send({
            message: 'No entries found!',
          });
        }
      })
      .catch((error) => {
        response.status(400).send({
          message: 'Error while searching the entries.',
        });
      });
  }

  listRegularExpenseEntriesByMonth(request: Request, response: Response) {
    response.status(200).send({
      message: `Finding entries with the month: ${request.body.month}`,
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
          message: 'Error while adding new entry.',
        });
      });
  }

  removeEntry(request: Request, response: Response) {
    response.status(200).send({
      message: `Removing an entry with the ID: ${request.body.id}`,
    });
  }
}
