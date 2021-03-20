import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { CategoryDTO } from "../entities/Category";
import { TOCategoryRepository } from "../repositories/implementations/TOCategoryRepository";

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
          message: "Categoria não encontrada.",
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
          message: "Não foi possivel realizar a busca.",
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
            message: "Nenhuma categoria encontrada para esse tipo.",
          });
        }
      })
      .catch((error) => {
        response.status(400).send({
          message: "Não foi possivel realizar a busca.",
        });
      });
  }

  addNewCategory(request: Request, response: Response) {
    const { name, type } = request.body;

    if (name.length == 0) {
      response.status(400).send({
        message: "Nome inválido.",
      });
      return;
    }
    if (type.length == 0) {
      response.status(400).send({
        message: "Tipo inválido.",
      });
      return;
    }

    getCustomRepository(TOCategoryRepository)
      .addNewCategory(request.body as CategoryDTO)
      .then((category) => {
        let categoryJSON = JSON.stringify(category);
        response.status(200).send(categoryJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: "Erro ao adicionar a categoria.",
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
          message: "Não foi possivel deletar a categoria.",
          error,
        });
      });
  }
}
