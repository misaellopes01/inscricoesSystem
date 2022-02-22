import { CreateCoursesController } from "../modules/courses/useCases/createCourses/CreateCoursesController";
import { ensureAdmin } from "../shared/infra/http/middlwares/ensureAdmin";
import { ensureAuthenticated } from "../shared/infra/http/middlwares/ensureAuthenticated";
import { Router } from "express";
import { ListAllCoursesController } from "../modules/courses/useCases/listAllCourses/ListAllCoursesController";

const coursesRoutes = Router()

coursesRoutes.post("/", ensureAuthenticated, ensureAdmin, new CreateCoursesController().handle)
coursesRoutes.get("/", new ListAllCoursesController().handle)

export { coursesRoutes }