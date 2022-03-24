const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log("Connected as " + client.user.tag)
})

client.login("OTUzNDMxNjQzNTEzODQ3ODI4.YjEeaQ.kfAOPPeKHDpnLhi8tLY-xag5dmU");

//message Activit
client.on('ready', () => {
  client.user.setActivity("HayashilO3 play | 大家好:> ")
})

//message $play
client.on('message', async message => {
  if (!message.guild) return;

  if(message.content.startsWith("HayashilO3 play"))
  {
    const args = message.content.slice(6).split(/ +/);

    const streamOptions = { seek: 0, volume: 1 };
      var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            console.log("joined channel");
            console.log(args[0]);
            const stream = ytdl(args[0], { filter : 'audioonly' });
            const dispatcher = connection.play(stream,streamOptions);
            dispatcher.on("end", end => {
                console.log("left channel");
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
  }
})

//message $stop

//message $join
client.on('message', async message => {
    if (!message.guild) return;
    if (message.content === 'HayashilO3 join') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  })

//message $leave
  client.on('message', async message => {
    if (!message.guild) return;
    if (message.content === 'HayashilO3 leave') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.leave();
      } else {
        message.reply('You need to leave a voice channel first!');
      }
    }
  })


