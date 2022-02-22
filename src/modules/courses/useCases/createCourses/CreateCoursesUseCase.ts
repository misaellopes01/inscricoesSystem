import { ICoursesRepository } from "../../../../modules/courses/repositories/ICoursesRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";


interface IRequest{
    cod: string
    title: string
}

@injectable()
class CreateCoursesUseCase {

    constructor(
        @inject("CoursesRepository")
        private coursesRepository: ICoursesRepository
    ){}

    async execute({cod, title}: IRequest){

        const courseAlreadyExists = await this.coursesRepository.findByCode(cod)

        if (courseAlreadyExists) {
            throw new AppError("Courses Already Exists")
        }

        const course = await this.coursesRepository.create({
            cod,
            title
        })

        return course

    }
}

export { CreateCoursesUseCase }