import { Request, Response } from 'express';
import { CategoryDTO } from '../entities/Category';

export class CategoryController {
  findCategoryById(request: Request, response: Response) {
    response.status(200).send({
      message: `Finding a message with the ID: ${request.body.id}`,
    });
  }

  listAllCategories(request: Request, response: Response) {
    response.status(200).send({
      message: `Finding all categories.`,
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
