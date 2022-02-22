import { OperationType } from "../entities/Subscription";

interface IUpdateSubscriptionsDTO{
    id: string
    state: OperationType
}

export { IUpdateSubscriptionsDTO }