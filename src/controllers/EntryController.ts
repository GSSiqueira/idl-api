import { Request, Response } from 'express';
import { getCustomRepository, Repository } from 'typeorm';
import { Entry } from '../entities/Entry';
import { IEntryRepository } from '../repositories/IEntryRepository';
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
    response.status(200).send({
      message: `Finding entries with the Date: ${request.body.date}`,
    });
  }

  listRegularExpenseEntriesByMonth(request: Request, response: Response) {
    response.status(200).send({
      message: `Finding entries with the month: ${request.body.month}`,
    });
  }

  addNewEntry(request: Request, response: Response) {
    response.status(200).send({
      message: `Finding an entry with the value: ${request.body.value}`,
    });
    console.log('Adding new entry.');
  }

  removeEntry(request: Request, response: Response) {
    response.status(200).send({
      message: `Removing an entry with the ID: ${request.body.id}`,
    });
  }
}
