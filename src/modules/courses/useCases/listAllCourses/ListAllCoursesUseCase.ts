import { Course } from "../../../../modules/courses/entities/Course";
import { ICoursesRepository } from "../../../../modules/courses/repositories/ICoursesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllCoursesUseCase {
    
    constructor(
        @inject("CoursesRepository")
        private coursesRepository:ICoursesRepository
    ){}

    async execute(): Promise<Course[]>{

        const all = await this.coursesRepository.listAll()

        return all
    }
}

export { ListAllCoursesUseCase }