import { Request, Response } from 'express';
import knex from '../database/connection';
import { KnexTimeoutError } from 'knex';

class ChallengeController {
    async index(request: Request, response: Response) {
        const challenges = await knex('challenges').select('*');

        return response.json(challenges);
    }

    async show(request: Request, response: Response) {
        let { option } = request.params;

        if(option === 'pergunta')
            option = 'verdade';

        const challenges = await knex.select('*')
            .from('challenges')
            .where('option', option);

        const getShuffledArr = arr => {
            const newArr = arr.slice()
            for (let i = newArr.length - 1; i > 0; i--) {
                const rand = Math.floor(Math.random() * (i + 1));
                [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
            }
            return newArr
        };

        const randomChallenges = getShuffledArr(challenges);

        const challenge = randomChallenges.shift();

        return response.json(challenge);
    }
}

export default ChallengeController;
