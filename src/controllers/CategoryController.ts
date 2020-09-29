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
          message: 'No Categories were found.',
        });
      });
  }

  listCategoriesByType(request: Request, response: Response) {
    getCustomRepository(TOCategoryRepository)
      .getCategoriesByType(request.params.type)
      .then((categories) => {
        if (categories.length) {
          let categoriesJSON = JSON.stringify(categories);
          response.status(200).send(categoriesJSON);
        } else {
          response.status(400).send({
            message: 'No categories found for this type.',
          });
        }
      })
      .catch((error) => {
        response.status(400).send({
          message: 'Error filtering categories by type.',
        });
      });
  }

  addNewCategory(request: Request, response: Response) {
    getCustomRepository(TOCategoryRepository)
      .addNewCategory(request.body as CategoryDTO)
      .then((category) => {
        let categoryJSON = JSON.stringify(category);
        response.status(200).send(categoryJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: 'Error adding new category.',
        });
      });
  }

  removeCategory(request: Request, response: Response) {
    getCustomRepository(TOCategoryRepository)
      .removeCategory(request.params.categoryId)
      .then((category) => {
        let categoryJSON = JSON.stringify(category);
        response.status(200).send(categoryJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: 'Category to delete not found!',
          error,
        });
      });
  }
}
