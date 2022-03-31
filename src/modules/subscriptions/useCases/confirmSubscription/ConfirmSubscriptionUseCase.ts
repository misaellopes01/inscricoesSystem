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

        return await this.subscriptionsRepository.confirmSubscription({id, state: OperationType.COMPLETED})
    }
}

export { ConfirmSubscriptionUseCase }