import { Request, Response } from "express";
import { container } from "tsyringe";
import { ConfirmSubscriptionUseCase } from "./ConfirmSubscriptionUseCase";


class ConfirmSubscriptionController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params

        const confirmSubscriptionUseCase = container.resolve(ConfirmSubscriptionUseCase)

        await confirmSubscriptionUseCase.execute(id)

        return response.status(201).send()
    }
}

export { ConfirmSubscriptionController }