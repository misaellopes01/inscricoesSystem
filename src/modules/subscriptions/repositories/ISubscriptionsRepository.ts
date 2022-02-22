import { ICreateSubscriptionsDTO } from "../dtos/ICreateSubscriptionsDTO";
import { IUpdateSubscriptionsDTO } from "../dtos/IUpdateSubscriptionDTO";
import { OperationType, Subscription } from "../entities/Subscription";

interface ISubscriptionsRepository{

    create(data: ICreateSubscriptionsDTO): Promise<Subscription>
    findByUserID(id: string): Promise<Subscription>
    findAll(): Promise<Subscription[]>
    confirmSubscription(data: IUpdateSubscriptionsDTO): Promise<void>
}
 export { ISubscriptionsRepository }