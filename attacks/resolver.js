const https = require('https');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = message.content.split (" ")[1]
const ip = host?.split(":")[0]
const ports = host?.split(":")[1]
const port = (ports || '25565');
const config = require('../config.json');
var room = config.commandroom;

if (message.channel.id != room) {
	return;
}

if(!args[0]) {
   message.channel.send('Please enter the server address');
   message.react('❌');
   return;
}

const options = {
    hostname: 'mcapi.xdefcon.com/',
    port: 443,
    path: '/server/' + args[0] + '/full/json',
    method: 'GET'
}
const embed1 = new Discord.MessageEmbed()
	.setColor('#F1C40F')
	.setDescription("```GETTING SERVER INFO...```")

	.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif")
message.channel.send({embeds : [embed1]});
const request = https.request('https://mcapi.xdefcon.com/server/' + ip + '/full/json', response => {
    let str = '';
    response.on('data', data => {
        str += data;
    });
    response.on('end', () => {
        resp = JSON.parse(str);
        if(resp.serverStatus === 'offline') {
            const embed = new Discord.MessageEmbed()
					.setColor('#E74C3C')
					.setTitle("MCBOT V1.0")
					.setDescription("```Status: offline```")
					.setImage("https://mcapi.us/server/image?ip=" + ip + "&port=" + port + "&theme=dark&title=MCBOT")
			setTimeout(function(){ 
				message.channel.send({embeds : [embed]});
			}, 3000);
			return;
        }
		const dangcap = (resp.protocol || '');
		var miniflex = dangcap.replace("v", "");
		
        const embed = new Discord.MessageEmbed()
					.setColor('#2ECC71')
					.setTitle("MCBOT V1.0")
					.setDescription("```ip " + ip + " (" + resp.serverip + ") \nplayers: " + resp.players + '/' + resp.maxplayers + " \nmethod: " + miniflex + " \nversion: " + resp.version + "```")
					.setImage("https://mcapi.us/server/image?ip=" + ip + "&port=" + port + "&theme=dark&title=MCBOT")
        setTimeout(function(){ 
			message.channel.send({embeds : [embed]});
		}, 3000);
    });
});
//error handling
request.on('error', err => {
    console.log(err);
    message.channel.send('VPS has failed to get server info');
	message.react('❌');
})
//close request
request.end()

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['resolver'],
    permLevel: 0
  }
  
  exports.help = {
    name: 'resolver',
    description: 'resolver',
    usage: 'resolver'
  }