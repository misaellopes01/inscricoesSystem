import { container } from 'tsyringe';
import { CoursesRepository } from '../../modules/courses/repositories/CoursesRepository';
import { ICoursesRepository } from '../../modules/courses/repositories/ICoursesRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/repositories/UsersRepository';
import { ISubscriptionsRepository } from '../../modules/subscriptions/repositories/ISubscriptionsRepository';
import { SubscriptionsRepository } from '../../modules/subscriptions/repositories/SubscriptionsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ICoursesRepository>(
  'CoursesRepository',
  CoursesRepository
);

container.registerSingleton<ISubscriptionsRepository>(
  'SubscriptionsRepository',
  SubscriptionsRepository
);
