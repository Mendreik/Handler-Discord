module.exports.run = async (bot, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
    let messagecount = parseInt(args[0]);

    if (isNaN(messagecount))
      return message.channel.send(
        "Insira a quantidade de mensagem que deseja limpar"
      );

    if (messagecount > 100) {
      message.channel.send("A quantidade maxima é **100**");
    } else if (messagecount < 2) {
      message.channel.send("A quantidade minima é **2**");
    } else {
    }
    {
      message.channel
        .fetchMessages({ limit: messagecount })
        .then(messages => message.channel.bulkDelete(messages, true));
      message.channel.send("As mensagens foram limpas");
    }
  } else {
    return message.reply("Você não tem permissão para este comando");
  }
};
