import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { CategoryDTO } from '../entities/Category';
import { TOCategoryRepository } from '../repositories/implementations/TOCategoryRepository';

export class CategoryController {
  findCategoryById(request: Request, response: Response) {
    getCustomRepository(TOCategoryRepository)
      .getCategoryById(request.params.categoryId)
      .then((category) => {
        let categoryJSON = JSON.stringify(category);
        response.status(200).send(categoryJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: 'Category not found!',
        });
      });
  }

  listAllCategories(request: Request, response: Response) {
    getCustomRepository(TOCategoryRepository)
      .getAllCategories()
      .then((categories) => {
        let categoriesJSON = JSON.stringify(categories);
        response.status(200).send(categoriesJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: 'Category not found!',
        });
      });
  }

  listCategoriesByType(request: Request, response: Response) {
    response.status(200).send({
      message: `Listing the categories of a certain type`,
    });
  }

  addNewCategory(request: Request, response: Response) {
    response.status(200).send({
      message: `Adding a category with the name: ${request.body.name}`,
    });
  }

  removeCategory(request: Request, response: Response) {
    response.status(200).send({
      message: `Deleting a category.`,
    });
  }
}
