/*
 *         DISCORD BOT
 *    UM SIMPLES BOT ESCRITO EM JS
 *               BY: Mendreik#3866
 */

// PARA CONECTAR AS BIBLIOTECAS
const Discord = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap");
const client = new Discord.Client();
const config = require("./config.json");
config.client = config;

// SISTEMA HANDLER
fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./eventos/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Carregando: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./Mendreik/", (err, files) => {
  if (err) return console.error(err);
  console.log(`[Mendreik] Carregando um total de ${files.length} comando(s)`);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./Mendreik/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Carregando: ${commandName}` + "");
    client.commands.set(commandName, props);
  });
});

fs.readdir("./comandos/", (err, files) => {
  if (err) return console.error(err);
  console.log(`[comandos] Carregando um total de ${files.length} comando(s)`);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./comandos/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Carregando: ${commandName}` + "");
    client.commands.set(commandName, props);
  });
});

// PARA FAZER O LOGIN
client.login(config.token);