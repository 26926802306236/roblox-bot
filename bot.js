const Discord = require('discord.js');
const noblox = require('noblox.js');
const PREFIX = '~'

var bot = new Discord.Client();

async function run() {
  noblox.cookieLogin('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_AAFC94833D48A938B357D5D2804731ED7E2267F987279842CFE268BE3C2793439ADB8053939BF662537FF223DE115E51EABBE5600A0613F54D329A8DC7455CFCA04F15F672847F4366CB8B5809EF866CE8580F3C8B769B4152E4DD01FD1467255B37CE5CF03A002537DF7D80522758A6CD04EFF0FB9590C03A88B2945ED13273083B2A53D87B79214019E17F96ADC2260719C39BD995F5377412C05E3C5101463F37C77602DEAA34DE974014B149308633AE1D088D292114B47D27A4FA065D806A8294D34519C79A678922E6ACBE383D788ED591C00246B6952F3DB9C79EA634A089BC134E1ED0E6BA6BA7C6F045AF5F6C8D232564C8F3F3C499CE1B429D4DC5C4E97D445E3C8E3E4B848F584C687455030F229DFF8438E45D112560D115762CB0DDE68FB609F6E0AAF46DCF3733F45475456287');
}

bot.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(PREFIX))return;
  
  var args = message.content.substring(PREFIX.length).split(" ");
  var command = args[0].toLowerCase();
  
  if (command == "accept") {
    accept();
  }
});

bot.on("ready", function() {
  bot.user.setGame(``);
  console.log(`${bot.user.username} is Ready!`);
});

async function accept() {
  noblox.acceptFriendRequest(547464048);
}

run();
bot.login('NzEwOTU5NTI2Nzk0MjMxODEw.Xr8C2Q.F-UF1AncZ-bnWRvi8NOW_ud0VtU');
