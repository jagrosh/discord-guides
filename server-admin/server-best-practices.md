# Server Best Practices
This guide has been created by the owner of a fairly successful server called Discord.FM and board member of The Crossroads.
This guide comes from experience.

## Introduction
For this tutorial, I'm going to create a new and blank server so that everyone is on the same page and all settings are as default.

Do not feel obliged to follow all of these instructions, your community might not need all of these features and limitations.
This is a guide, not a rulebook.

### Initial server settings configuration
Once you've created your server, it's best to make sure all of the configuration options are the way you want so everyone is happy.

![Server settings overview 1](http://i.imgur.com/pMU9VwH.png)

![Server settings overview 2](http://i.imgur.com/JXfbVda.png)

1. Your server's name
    - Make it short and sweet
    - No unicode or long names (sometimes known as `cancer names`)
2. Voice server region
    - Make it close to where your community is based or `US East` for global communities
3. Server icon
    - Make it convey your brand or the brand/community your server represents
    - Inside jokes aren't great - new users don't understand
    - Should not contain inside jokes, funny pictures, or anything random
4. AFK Channel settings
    - Create an AFK channel and set the timeout to 30 minutes
5. Verification level
    - Set this to `Medium` for most communities
    - This stops new accounts from typing messages for 5 minutes, and stops a lot of spam
    - `(╯°□°）╯︵ ┻━┻` is overkill for most servers
6. Notification settings
    - ALWAYS SET THIS TO `Only @mentions`
    - `Only @mentions` means that all members are not given a notification for all new messages

### Reccommended role configuration
There are also a few changes that should be done on the default roles, too. These changes will help you manage your server and allow for a better community.

![Final roles for example server](http://i.imgur.com/WiWBN0y.png)

1. `@everyone` should not have the following privileges on any server:
    - Send TTS Messages
    - Mention Everyone
2. A staff/admin/moderator role should be created for your moderators with enough permissions to manage users and messages:
    - Kick Members
    - Ban Members
    - Manage Nicknames
    - Manage Messages
    - Mention Everyone (only for high roles)
3. There should not be an `Owner` role. Owner roles show that the server owner controls everything, and although this may be true, it creates a bad image for your server. Stick the server owner in the same role as the high staff folks.
4. Hoist (`Display role members seperately from online members`) your staff roles. Let users see your staff members.
5. Create two bots roles: `Bots` and `Server Bots`.
    - `Bots` role should have regular permissions but a different colour (common bot colour is purple). All bots should be assigned this role.
    - `Server Bots` role should have all permissions and be above all except the highest group of staff members.
    - Bots roles are used to easily block bots from certain channels to prevent spam and excessive shitposting.
    - Server bots are bots that manage the server, such as [RH1-N0](https://discordapp.com/oauth2/authorize?client_id=170242612425392128&scope=bot&permissions=-1 "RH1-N0 invite link"), the automatic moderation bot.
    - These roles can be named in a different way for fun. i.e. `Boats` and `Yachts`.
6. Other suggested roles:
    - Regulars role for people who are active in the community.
    - A `root` role (non-hoisted, non-colored) at the very top of the role hierarchy with all permissions, to "bypass" the new role hierarchy system added recently.
    - If your staff want special colours, this is okay. Don't let the roles list get too congested, though.
    - A few fun roles are also nice in most cases.
7. Before creating a role, ask yourself if it's really needed. Don't let your roles get congested.

### Regularly prune members
Most big servers regularly do 30 day prunes in order to keep their server members list clean and legit.

![Prune members](http://i.imgur.com/7IhMYNG.png)

You can find the `PRUNE MEMBERS` button in the `Members` tab in the server settings panel.

### Meta channels
Most servers have some 'meta' channels with information regarding the server or other communities related to the server.

![Lock @everyone from typing in locked channels](http://i.imgur.com/jRH5J6I.png)
> Lock channels so only high-staff can talk inside, but users can view messages

1. The `welcome-and-rules` channel (LOCKED):
    - A channel with a friendly greeting and some easy-to-understand rules:
         1. Be respectful and courteous
         2. Disagreements and directed comments should only criticize ideas, and not people
    - These two rules are fairly global, but aren't a guide - customize them to suit your server. I use these rules on most of my servers.
    - Make sure to say:
         - What the server is about
         - Rules
         - What the channels are for
         - What the roles are for
         - Any server commands
         - Any very important sticky announcements
    - Use perfect grammar and spelling
2. The `announcements` channel (LOCKED):
    - Post important notifications in here
    - @everyone if necessary
    - Do not spam external event announcements - you should get an `event-announcements` channel for this
3. The `suggestions` channel:
    - Not all servers need a meta channel for suggestions, but it's a good idea for bigger servers such as `Discord.FM`
    - Users can post suggestions here (or you can have a suggestions bot like GameHub)
    - ???
    - Profit.

### Staff chat channel
Most servers also have a staff only channel, so the staff can talk in private without being disturbed.

![Staff channel](http://i.imgur.com/W4pzQbD.png)

Make sure only your staff can see in here, otherwise users may be able to see your messages.

### Chat moderation bots
There are a couple of decent chat moderator bots out there that can do a lot of the dirty work for you, and produce logs and stats for a user.

- RH1-N0: [Invite to your server](https://discordapp.com/oauth2/authorize?client_id=170242612425392128&scope=bot&permissions=-1)
    - RH1 is a heavily customizable moderation toolbox which allows you to set some basic (but powerful) chat moderation rules, which RH1 will enforce for you.
    - Any roles can be excluded from moderation or granted access to RH1's powerful commands.
    - Server setup takes place through a wizard.
    - Help command: `!!help`
- StahpDozAds: [Invite to your server](http://oauth.sda.khionu.net)
    - SDA is another heavily customizable moderation bot which allows you to block advertisements from your server
    - Server setup takes place through easy-to-use commands
    - Help command: `@StahpDozAds#6818 help`

## Conclusion
That's it! You made it! Your server is now (mostly) bullet-proof and ready for action.

Remember, this is a guide and NOT a rulebook.
