import { getRepository, Repository } from "typeorm";
import { ICreateSubscriptionsDTO } from "../dtos/ICreateSubscriptionsDTO";
import { IUpdateSubscriptionsDTO } from "../dtos/IUpdateSubscriptionDTO";
import { OperationType, Subscription } from "../entities/Subscription";
import { ISubscriptionsRepository } from "./ISubscriptionsRepository";



class SubscriptionsRepository implements ISubscriptionsRepository{
    
    private repository: Repository<Subscription>

    constructor(){
        this.repository = getRepository(Subscription)
    }
    
   

    async create({ 
        bi, 
        certificate, 
        course_id, 
        picture, 
        user_id,
        state
    }: ICreateSubscriptionsDTO): Promise<Subscription> {

        const subscription = this.repository.create({
            bi,
            certificate,
            course_id,
            picture,
            user_id,
            state
        })

        await this.repository.save(subscription)

        return subscription
    }

    async findByUserID(user_id: string): Promise<Subscription> {

        const subscription = await this.repository.findOne({user_id})

        return subscription
    }

    async findAll(): Promise<Subscription[]> {
        const all = await this.repository.query("SELECT users.name, courses.title, subscriptions.id, subscriptions.bi, subscriptions.certificate, subscriptions.picture, subscriptions.state FROM subscriptions, users, courses WHERE subscriptions.user_id = users.id AND subscriptions.course_id = courses.id")
        
        return all
    }

    async confirmSubscription({ id, state }: IUpdateSubscriptionsDTO): Promise<void> {
        return await this.repository.query(`UPDATE subscriptions SET state='${state}' WHERE id='${id}'`)
    }

}

export { SubscriptionsRepository }