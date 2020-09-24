import { response } from 'express';
import { EntityRepository, Repository } from 'typeorm';
import { Entry } from '../../entities/Entry';
import { IEntryRepository } from '../IEntryRepository';

@EntityRepository(Entry)
export class TOEntryRepository extends Repository<Entry> {
  getEntryById(id: number) {
    return this.findOne(id);
  }

  /*   getDailyEntriesByDate(date: Date): Promise<Entry[]> {}
  getRegularExpenseEntriesByMonth(month: Date): Promise<Entry[]> {}

  addNewEntry(data: EntryDTO): Promise<void> {}
  removeEntry(id: number): Promise<void> {} */
}
