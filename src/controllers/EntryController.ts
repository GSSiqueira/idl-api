import { EntryDTO } from '../entities/Entry';

export class EntryController {
  findEntryById(data: { id: number }) {
    console.log('Finding the entry');
  }

  listEntriesByDate(data: { date: string }) {
    console.log(new Date(data.date));
  }

  listRegularExpenseEntriesByMonth(data: { month: string }) {
    console.log(new Date());
  }

  addNewEntry(entryData: EntryDTO) {
    console.log(entryData);
  }

  removeEntry(data: { id: number }) {
    console.log('Removing entry');
  }
}
