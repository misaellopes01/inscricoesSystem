import multer from "multer";
import uploadConfig from "../config/upload"
import { Router } from "express";
import { ensureAuthenticated } from "../shared/infra/http/middlwares/ensureAuthenticated";
import { CreateSubscriptionsController } from "../modules/subscriptions/useCases/createSubscriptions/CreateSubscriptionsController";
import { ensureAdmin } from "../shared/infra/http/middlwares/ensureAdmin";
import { ListAllSubscriptionsController } from "../modules/subscriptions/useCases/listAllSubscriptions/ListAllSubscriptionsController";
import { ConfirmSubscriptionController } from "../modules/subscriptions/useCases/confirmSubscription/ConfirmSubscriptionController";


const subscriptionRoutes = Router()

const upload = multer(uploadConfig.upload("./tmp/files"));

subscriptionRoutes.post(
    "/create/:course_id",
    ensureAuthenticated,
    upload.array("files"),
    new CreateSubscriptionsController().handle
  );

subscriptionRoutes.get('/all', ensureAuthenticated, ensureAdmin, new ListAllSubscriptionsController().handle)
subscriptionRoutes.post('/confirm/:id', ensureAuthenticated, ensureAdmin, new ConfirmSubscriptionController().handle)

export { subscriptionRoutes }