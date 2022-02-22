import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCoursesUseCase } from "./CreateCoursesUseCase";


class CreateCoursesController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { cod, title } = request.body

        const createCoursesUseCase = container.resolve(CreateCoursesUseCase)

        const course = await createCoursesUseCase.execute({ cod, title })

        return response.status(201).json(course)

    }
}

export { CreateCoursesController }