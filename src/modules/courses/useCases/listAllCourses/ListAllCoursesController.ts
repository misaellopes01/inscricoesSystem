import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCoursesUseCase } from "./ListAllCoursesUseCase";


class ListAllCoursesController {

    async handle(request: Request, response: Response): Promise<Response>{

        const listAllCoursesUseCase = container.resolve(ListAllCoursesUseCase)

        const courses = await listAllCoursesUseCase.execute()

        return response.status(200).json(courses)
    }
}

export { ListAllCoursesController }