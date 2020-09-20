import { Category, CategoryDTO } from '../entities/Category';

export interface ICategoryRepository {
  getCategoryById(id: number): Promise<Category>;
  getAllCategories(): Promise<Category[]>;
  getCategoriesByType(type: number): Promise<Category[]>;

  addNewCategory(data: CategoryDTO): Promise<void>;
  removeCategory(id: number): Promise<void>;
}
