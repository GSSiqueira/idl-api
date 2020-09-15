import { CategoryDTO } from '../entities/Category';

export class CategoryController {
  findCategoryById(data: { id: number }) {
    console.log('Finding category by id.');
  }

  listAllCategories() {
    console.log('Listing categories from DB.');
  }

  listCategoriesByType(data: { type: number }) {
    console.log('Finding categories by type.');
  }

  addNewCategory(data: CategoryDTO) {
    console.log(data);
  }

  removeCategory(data: { id: number }) {
    console.log('Removing category');
  }
}
