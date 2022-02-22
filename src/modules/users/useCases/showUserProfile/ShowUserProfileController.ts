import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ProfileMap } from '../../mappers/ProfileMap';
import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

export class ShowUserProfileController {
  async execute(request: Request, response: Response) {
    const { id } = request.user;

    const showUserProfile = container.resolve(ShowUserProfileUseCase);

    const data = await showUserProfile.execute(id);

    const profileDTO = ProfileMap.toDTO(data.user);

    const show = profileDTO

    return response.json([show, data.subscription]);
  }
}
