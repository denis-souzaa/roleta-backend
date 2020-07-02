import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('challenges').insert([
        { name: 'Desafio 01', description: 'Descrição do desafio 01' },
        { name: 'Desafio 02', description: 'Descrição do desafio 02' },
        { name: 'Desafio 03', description: 'Descrição do desafio 03' },
        { name: 'Desafio 04', description: 'Descrição do desafio 04' },
        { name: 'Desafio 05', description: 'Descrição do desafio 05' },
        { name: 'Desafio 06', description: 'Descrição do desafio 06' },
        { name: 'Desafio 07', description: 'Descrição do desafio 07' },
        { name: 'Desafio 08', description: 'Descrição do desafio 08' },
        { name: 'Desafio 09', description: 'Descrição do desafio 09' },
    ])
}
