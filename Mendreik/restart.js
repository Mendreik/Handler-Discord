/*
 *         DISCORD BOT
 *    UM SIMPLES BOT ESCRITO EM JS
 *               
 */

const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  message.delete();
  if (message.author.id !== config.criador) return;

  client.destroy();
  client.login(config.token);

  message.channel
    .send("Meu sistema foi reiniciado com sucesso!")
    .then(m => m.delete(5000));
};
