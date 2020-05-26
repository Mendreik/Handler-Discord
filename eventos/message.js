/*
 *         DISCORD BOT
 *    UM SIMPLES BOT ESCRITO EM JS
 *
 */

const config = require("../config.json");

module.exports = (client, message) => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefixo) !== 0) return;
  const args = message.content
    .slice(config.prefixo.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (!client.commands.has(command)) {
    message.delete();
    return message.channel.send(
      "Esse comando não existe, verifique a ortografia e tente novamente"
    );
  }

  if (!cmd) return;
  cmd.run(client, message, args);
};
