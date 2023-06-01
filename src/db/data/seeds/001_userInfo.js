/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('GF_userInfo').del()
  await knex('GF_userInfo').insert([
    {"login-id": "sazaezamasu", password: 'passwordzamasu', "first-name":"きくち", "last-name":"さざえ", birthday: "1990-1-1", gender:"F", refrigerator:"きくち"},
    {"login-id": "kotaro", password: 'kotarozamasu', "first-name":"宮城", "last-name":"こーたろ", birthday: "1996-5-31", gender:"T", refrigerator:"みやぎ"},
    {"login-id": "kuba", password: 'tomohirozamasu', "first-name":"kuba", "last-name":"tomohiro", birthday: "1985-4-3", gender:"T", refrigerator:"久場"},
    {"login-id": "aragaki", password: 'aragakiyui', "first-name":"新垣", "last-name":"結衣", birthday: "1991-11-16", gender:"F", refrigerator:"tanabe"}
  ]);
};
