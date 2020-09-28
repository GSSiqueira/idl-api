import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import { Entry, EntryDTO } from '../../entities/Entry';

@EntityRepository(Entry)
export class TOEntryRepository extends Repository<Entry> {
  getEntryById(id: number) {
    return this.findOneOrFail(id);
  }

  addNewEntry(newEntryData: EntryDTO): Promise<Entry> {
    const newEntry = new Entry();
    newEntry.date = newEntryData.date;
    newEntry.time = newEntryData.time;
    newEntry.value = newEntryData.value;
    newEntry.categoryId = newEntryData.categoryId;

    return this.save(newEntry);
  }

  getDailyEntriesByDate(dateToFilter: string): Promise<Entry[]> {
    return this.createQueryBuilder('entry')
      .leftJoinAndSelect('entry.category', 'category')
      .where('entry.date = :dateToFilter', { dateToFilter })
      .andWhere('category.type <> :type', { type: 3 })
      .getMany();
    // return this.find({ date: dateToFilter });
  }
  /*
  getRegularExpenseEntriesByMonth(month: Date): Promise<Entry[]> {}
  removeEntry(id: number): Promise<void> {} */
}
