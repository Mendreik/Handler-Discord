/*
 *         DISCORD BOT
 *    UM SIMPLES BOT ESCRITO EM JS
 *               BY: Mendreik#3866
 */

module.exports.run = async (client, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.author;
  }

  //SE O USUÁRIO NÃO TIVER IMAGEM NO PERFIL
  let url =
    user.avatarURL ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzPT9gb-W6sFEcyToOwso1-fA2ZSu70sjx4Yqi9c3lkFpgETMl";

  message.channel.send({
    embed: {
      image: {
        url: `${url}${user.displayavatarURL ? "?size=2048" : ""}`
      }
    }
  });
};

module.exports.help = {
  name: ["a", "A"]
};
