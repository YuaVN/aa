const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle("proxies has been renewed")
var exec = require('child_process').exec

exec(`python proxyrenew.py`, (error, stdout, stderr) => {
					    
					});
message.channel.send({embeds: [embed] })
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['proxy'],

  permLevel: 0

}



exports.help = {

  name: 'proxy',

  description: 'Lệnh Tấn Công',

  usage: 'proxy'

}