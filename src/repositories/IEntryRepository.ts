import { Entry, EntryDTO } from '../entities/Entry';

export interface IEntryRepository {
  getEntryById(id: number): Promise<Entry>;
  getDailyEntriesByDate(date: Date): Promise<Entry[]>;
  getRegularExpenseEntriesByMonth(month: Date): Promise<Entry[]>;

  addNewEntry(data: EntryDTO): Promise<void>;
  removeEntry(id: number): Promise<void>;
}
