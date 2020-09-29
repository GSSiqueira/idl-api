import { EntityRepository, Repository } from 'typeorm';
import { Category, CategoryDTO } from '../../entities/Category';

@EntityRepository(Category)
export class TOCategoryRepository extends Repository<Category> {
  addNewCategory(newCategoryData: CategoryDTO): Promise<Category> {
    const newCategory = new Category();
    newCategory.name = newCategoryData.name;
    newCategory.type = newCategoryData.type;

    return this.save(newCategory);
  }

  getCategoryById(id: number): Promise<Category> {
    return this.findOneOrFail(id);
  }
  getAllCategories(): Promise<Category[]> {
    return this.find();
  }

  getCategoriesByType(type: number): Promise<Category[]> {
    return this.find({ type });
  }

  removeCategory(id: number): Promise<any> {
    return this.createQueryBuilder('category')
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}
