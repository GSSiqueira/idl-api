import { EntityRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';

@EntityRepository(Category)
export class TOCategoryRepository extends Repository<Category> {
  getCategoryById(id: number): Promise<Category> {
    return this.findOneOrFail(id);
  }
  getAllCategories(): Promise<Category[]> {
    return this.find();
  }
}
