const Discord = require('discord.js');
const MeeRcY = new Discord.Client();

console.log(".Online ");
 
MeeRcY.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` **-:heart: شوب عربي يحتاج دعمكم
-:rose: منتجات متميزة  
-:credit_card: تعامل ممتاز مع المشتريين
-:earth_americas: قيف اوايات اسبوعية
:gem: حياكم الله في سيرفركم المتواضع
♯Black Shop :flag_black:***

*[user]..**

**https://discord.gg/9f3qvmh... [ ${member}  ]
**`) 
}).catch(console.error)
})
MeeRcY.login(process.env.NSHR);
