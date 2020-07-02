import { Request, Response } from 'express';
import knex from '../database/connection';

class ChallengeController {
  async index(request: Request, response: Response) {
    const challenges = await knex('challenges').select('*');

    return response.json(challenges);
  }

  async show(request: Request, response: Response){
    const { id } = request.params;

    const challenge = await knex('challenges')
                        .where('id', id)
                        .select('*');

    return response.json(challenge);
  }
}

export default ChallengeController;
