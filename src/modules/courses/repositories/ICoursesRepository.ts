import { ICreateCoursesDTO } from "../dtos/ICreateCoursesDTO";
import { Course } from "../entities/Course";


interface ICoursesRepository{
    create(data: ICreateCoursesDTO): Promise<Course>
    findByCode(cod: string): Promise<Course>
    listAll(): Promise<Course[]>
}

export { ICoursesRepository }