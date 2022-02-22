import { getRepository, Repository } from "typeorm";
import { ICreateCoursesDTO } from "../dtos/ICreateCoursesDTO";
import { Course } from "../entities/Course";
import { ICoursesRepository } from "./ICoursesRepository";


class CoursesRepository implements ICoursesRepository{
    private repository: Repository<Course>

    constructor(){
        this.repository = getRepository(Course)
    }
    
    
    async create({
        cod,
        title
    }: ICreateCoursesDTO): Promise<Course> {
        
        const course = this.repository.create({
            cod,
            title
        })

        await this.repository.save(course)

        return course
    }

    async findByCode(cod: string): Promise<Course> {
        const course = await this.repository.findOne({ cod })

        return course
    }

    async listAll(): Promise<Course[]> {
        
        const courses = await this.repository.find()

        return courses
    }
}

export { CoursesRepository }