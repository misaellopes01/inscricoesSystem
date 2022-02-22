import { ISubscriptionsRepository } from "../../../../modules/subscriptions/repositories/ISubscriptionsRepository";
import { inject, injectable } from "tsyringe";
import { OperationType } from "../../../../modules/subscriptions/entities/Subscription";


@injectable()
class ConfirmSubscriptionUseCase{

    constructor(
        @inject("SubscriptionsRepository")
        private subscriptionsRepository: ISubscriptionsRepository
    ){}

    async execute(id: string){

        await this.subscriptionsRepository.confirmSubscription({id, state: OperationType.COMPLETED})

        return 
    }
}

export { ConfirmSubscriptionUseCase }