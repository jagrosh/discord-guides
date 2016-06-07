#Inviting a bot account to your server
In the past, bots joined a server by either processing an invite link that was PMed to them, or their owner manually logging in and joining the server. Now, you can authorize the bot yourself and control what bots enter your server.

##Required permissions
In order to invite any bot to a server, you require Manage Server permissions. This stops any random users from inviting a bot to your server.

##Getting the link
First, we will need the invite link for the bot. If the bot doesn't belong to you, you will need to get it's oauth invite link. You can find this through asking the creator, a friend, the bot itself, or through a bot listing service.

>Example link: https://discordapp.com/oauth2/authorize?client_id=170242612425392128&scope=bot

If the bot belongs to you, you can generate the link yourself. Simply replace `<CLIENT ID>` in the following link with the Client/Application ID of your application.

```https://discordapp.com/oauth2/authorize?&client_id=<CLIENT ID>&scope=bot```

>The client ID can be found at https://discordapp.com/developers/applications/me

Do not use the Token. Do not use the Bot ID. Do not use the Secret. You want to use the Client/Application ID that is highlighted in this picture

![Client ID](http://i.imgur.com/vSj2IZX.png)

If you would like, you can also append needed permissions to the end of your link. This is not a requirement, and will simply create a role for the bot with these permissions when it is invited.

>Further information on permissions:  https://discordapp.com/developers/docs/topics/permissions

>Example oauth link with permissions: https://discordapp.com/oauth2/authorize?client_id=170242612425392128&scope=bot&permissions=536083519

##Inviting the bot
Once you have the link, click on it. You will see a screen similar to this.

![Inviting the bot](http://i.imgur.com/kdoTF7p.png)

**1.** Select your server you want to add them to. Remember, you need Manage Server permission for the server to even show up here.

**2.** Choose what permissions you want to give the bot by default. I trust RH1-N0, so I gave him all of them.

**3.** Authorize the bot to join your server.

The bot should now be in your server! If you gave it added permissions, it should have it's own role with those permissions that you can then edit or delete.
