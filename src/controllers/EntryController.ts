import { Request, Response } from 'express';

import { EntryDTO } from '../entities/Entry';

export class EntryController {
  findEntryById(request: Request, response: Response) {
    response.status(200).send({
      message: `Finding an entry with the ID: ${request.body.id}`,
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
