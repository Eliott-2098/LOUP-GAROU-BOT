const Discord = require('discord.js');
const client = new Discord.Client({disableMentions: "everyone"});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'everyone') 
    msg.channel.send('@everyone', {disableMentions: "none"});
  if (msg.content === 'noteveryone') 
    msg.channel.send('@everyone');
});

client.login('Njk0NTY5NTM1OTg2MjA0Njcy.XoSRBA.uUN_Jq3Cmueo06imH56I4T0NEF4');