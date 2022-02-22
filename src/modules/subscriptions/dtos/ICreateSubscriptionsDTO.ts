import { OperationType } from "../entities/Subscription";

interface ICreateSubscriptionsDTO{
    user_id: string
    course_id: string
    bi: string
    certificate: string
    picture: string,
    state: OperationType
}

export { ICreateSubscriptionsDTO }