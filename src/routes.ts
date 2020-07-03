import { Router } from 'express';

import ChallengeController from './controllers/ChallengeController';

const routes = Router();

const challengeController = new ChallengeController();

routes.get('/challenges', challengeController.index);

routes.get('/challenges/:option', challengeController.show);

export default routes;
