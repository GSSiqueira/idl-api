import { EntityRepository, Repository } from "typeorm";
import { Entry, EntryDTO } from "../../entities/Entry";

@EntityRepository(Entry)
export class TOEntryRepository extends Repository<Entry> {
  addNewEntry(newEntryData: EntryDTO): Promise<Entry> {
    const newEntry = new Entry();
    newEntry.date = newEntryData.date;
    newEntry.value = newEntryData.value;
    newEntry.categoryId = newEntryData.categoryId;

    return this.save(newEntry);
  }

  getEntryById(id: number) {
    return this.findOneOrFail(id);
  }

  getEntriesByDate(dateToFilter: string): Promise<Entry[]> {
    return (
      this.createQueryBuilder("entry")
        .leftJoinAndSelect("entry.category", "category")
        .where("entry.date = :dateToFilter", { dateToFilter })
        //.andWhere("category.type <> :type", { type: "Receitas" })
        .getMany()
    );
  }

  getEntriesByMonth(month: string): Promise<Entry[]> {
    return (
      this.createQueryBuilder("entry")
        .leftJoinAndSelect("entry.category", "category")
        .where("MONTH(entry.date) = MONTH(:month)", { month }) //Needs to check the year also
        //.andWhere("category.type <> :type", { type: "Receitas" })
        .getMany()
    );
  }

  removeEntry(id: number): Promise<any> {
    return this.createQueryBuilder("entry")
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
