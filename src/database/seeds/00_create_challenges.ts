import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('challenges').insert([
        { option: 'pergunta', description: 'Você já ficou com uma pessoa do sexo oposto?' },
        { option: 'desafio', description: 'Beba um copo de cerveja sem usar as mãos' },
        { option: 'pergunta', description: 'Tem crush por algum colega de trabalho?' },
        { option: 'desafio', description: 'Levante e dance uma música aleatória' },
        { option: 'pergunta', description: 'Já ficou com algum colega de trabalho?' },
        { option: 'desafio', description: 'Peça um copo de cerveja na mesa ao lado' },
        { option: 'desafio', description: 'Chaveque uma pessoa usando um produto AMBEV'},
        { option: 'desafio', description: 'Tente sair do bar sem pagar a conta'},
        { option: 'desafio', description: 'Levante e dance um trechinho de Macarena' },
        { option: 'desafio', description: 'Das pessoas na mesa, com quem você mais gostaria de ficar?'},
        { option: 'desafio', description: 'Deixe que alguém do grupo envie uma foto que ele escolher para algum contato.'}
    ])
}
