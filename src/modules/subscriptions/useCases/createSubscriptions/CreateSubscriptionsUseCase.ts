import { ICoursesRepository } from "../../../../modules/courses/repositories/ICoursesRepository";
import { OperationType, Subscription } from "../../../../modules/subscriptions/entities/Subscription";
import { ISubscriptionsRepository } from "../../../../modules/subscriptions/repositories/ISubscriptionsRepository";
import { IUsersRepository } from "../../../../modules/users/repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest{
    user_id: string
    course_id: string
    bi: string
    certificate: string
    picture: string
}

@injectable()
class CreateSubscriptionsUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("CoursesRepository")
        private coursesRepository: ICoursesRepository,
        @inject("SubscriptionsRepository")
        private subscriptionsRepository: ISubscriptionsRepository
    ){}

    async execute({ bi, certificate, course_id, picture, user_id }: IRequest): Promise<Subscription>{

        const subscriptionExists = await this.subscriptionsRepository.findByUserID(user_id)

        if (subscriptionExists) {
            throw new AppError("There is already a subscription for this user")
        }

        const subscription = await this.subscriptionsRepository.create({
            bi,
            certificate,
            course_id,
            picture,
            user_id,
            state: OperationType.PENDING
        })

        return subscription
    }
}

export { CreateSubscriptionsUseCase }