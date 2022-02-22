import { Router } from 'express';

import { authenticationRouter } from './authentication.routes';
import { usersRouter } from './users.routes';
import { userProfileRouter } from './userProfile.routes';
import { coursesRoutes } from './courses.routes';
import { subscriptionRoutes } from './subscriptions.routes';

const router = Router();

router.use('/', authenticationRouter);
router.use('/users', usersRouter);
router.use('/profile', userProfileRouter);
router.use('/courses', coursesRoutes)
router.use('/subscription', subscriptionRoutes)



export { router };
