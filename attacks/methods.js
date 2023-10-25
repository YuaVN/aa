const Discord = require("discord.js");


exports.run = async (client, message, args) => {
const config = require('../config.json');
var room = config.commandroom;
var secondary_room = config.secondary_commandroom;
	if (message.channel.id != room && message.channel.id != secondary_room) {
		return;
	}
	message.reply("```Methods:\n\nJoin (1.8.X - 1.20.X)\nlegitjoin (1.8.X - 1.20.X\nlocalhost (1.8.X - 1.20.X)\ninvalidnames (1.8.X - 1.20.X)\nlongnames (1.8.X - 1.20.X)\nbotjoiner (1.8.X - 1.20.X)\nspoof (1.8.X - 1.20.X)\nbypass (1.8.X - 1.20.X)\nmultikiller (1.8.X - 1.20.X)\nhandshake (1.8.X - 1.20.X)\nmotd (1.8.X - 1.20.X)\ntcp (1.8.X - 1.20.X)\nbigpacket (1.8.X - 1.20.X)\nwaterfall (1.8.X - 1.20.X)\nrandombytes (1.8.X - 1.20.X)\nextremejoin (1.8.X - 1.20.X)\nrandom (1.8.X - 1.20.X)\nnettydowner (1.8.X - 1.20.X)\nram (1.8.X - 1.20.X)\naegis (1.8.X - 1.20.X)\nnullping (1.8.X - 1.20.X)\ntcphit (1.8.X - 1.20.X)\nqueue (1.8.X - 1.20.X)\nbotnet (1.8.X - 1.20.X)\nbungeesmasher (1.8.X - 1.20.X)\noverload (1.8.X - 1.20.X)\nnantibot (1.8.X - 1.20.X)```");
}

exports.conf = {
  aliases: []
};

exports.help = {
  name: "methods"
};