const Discord = require("discord.js");

const shell = require('shelljs');

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



exports.run = async (client, message, args) => {

const config = require('../config.json');

var room = config.commandroom;

var secondary_room = config.secondary_commandroom;



// var url = "https://api.mcstorm.net/stop_attack";



// var xhr = new XMLHttpRequest();

// xhr.open("POST", url);



// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");



// xhr.onreadystatechange = function () {

// if (xhr.readyState === 4) {

//  console.log(xhr.status);

//  console.log(xhr.responseText);

// }};

  

  if (message.channel.id != room && message.channel.id != secondary_room) {

		return;

	}

  

	

 

   console.log('Stop sent by:' +  message.guild.id)

	const embed = new Discord.MessageEmbed()

		.setColor('RANDOM')

		.setTitle("You stopped all attacks!")

	 message.channel.send({embeds : [embed]});

	 message.react('✅');

 

	var exec = require('child_process').exec

		exec(`pkill java`, (error, stdout, stderr) => {

	});

	 attack_1 = 0;

	 attack_2 = 0;

	 cooldown = 0;

     exec(`cd /root/flexbot_linux/machines && screen -dmS minecraft_server timeout 10 ./dedv1.sh stop`)

	 exec(`cd /root/flexbot_linux/machines && screen -dmS minecraft_server timeout 10 ./dedv2.sh stop`)

	 exec(`cd /root/flexbot_linux/machines && screen -dmS minecraft_server timeout 10 ./dedv3.sh stop`)

     exec(`cd /root/flexbot_linux/machines && screen -dmS minecraft_server timeout 10 ./dedv1.sh stop`)

   

   // var data = "storm_code=15L4YHUR9ANB9AQQAL98OPVZLTZSDK831RD4BLLUJ0NVTLKGFV0FQZLYTELZF967";

						

	 // xhr.send(data);

}



exports.conf = {

  aliases: []

};



exports.help = {

  name: "stop"

};

