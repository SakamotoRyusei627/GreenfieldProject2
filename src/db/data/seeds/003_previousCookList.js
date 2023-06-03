/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("GF_previousCook").del();
  await knex("GF_previousCook").insert([
    {
      // id: 1,
      dishes: "ゴーヤチャンプルーザマス",
      "cooking-date": "2023-5-20",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 2,
      dishes: "豆腐炒めザマス",
      "cooking-date": "2023-5-20",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 3,
      dishes: "ザマス炒めザマス",
      "cooking-date": "2023-5-22",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 4,
      dishes: "ザマスの唐揚げザマス",
      "cooking-date": "2023-5-23",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 5,
      dishes: "刺し身ザマス",
      "cooking-date": "2023-5-23",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 6,
      dishes: "寿司ザマス",
      "cooking-date": "2023-5-23",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 7,
      dishes: "ザマスカレーザマス",
      "cooking-date": "2023-5-24",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 8,
      dishes: "The ザマス",
      "cooking-date": "2023-5-26",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 9,
      dishes: "zennkakuZAMASU",
      "cooking-date": "2023-5-27",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 10,
      dishes: "ザマスの素揚げカスピ海の風をのせてざます",
      "cooking-date": "2023-5-27",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 11,
      dishes: "ビック3の煮込みザマス",
      "cooking-date": "2023-5-28",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 12,
      dishes: "とにかくマキマキ寿司ざます",
      "cooking-date": "2023-5-30",
      "login-id_p": "sazaezamasu",
    },
    {
      // id: 13,
      dishes: "座まーすザマス",
      "cooking-date": "2023-5-30",
      "login-id_p": "sazaezamasu",
    },
  ]);
};