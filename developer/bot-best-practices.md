# Bot Best Practices for Public Bots

Over the last couple of months before this guide was created, bots have really begun to take off within Discord.
The creators of these bots often don't use common sense and create spammy or useless bots.

This guide attempts to educate bot developers to use common sense and create bots that aren't annoying and hated throughout the Discord community.
If you're looking for other Discord bot developers, you should join [Discord Bots](https://bots.discordapi.com/ "Join Discord Bots on Discord").

## TL;DR
1. Don't use symbol-based prefixes
2. Don't be a prefix "hog"
3. Don't respond to normal conversation
4. Don't respond with "insufficient permissions" or "unknown command" responses
5. Don't mention people unless necessary
6. Don't output stacktraces to chat
7. Filter ALL outgoing messages for @everyone/@here
8. Make NSFW features configurable (disabled by default)
9. Have unique ideas

## Prefixes and chat responses
### Overlaps
As you would probably be aware, practically all symbols on your keyboard are being used for a bot command invoker.
There's no need to worry, though, I have a feasible solution.

**@mentions or text prefixes!**
Everyone seems to neglect @mentions or text-based prefixes for bot command invokers.

Let's say you have a bot named `Jimmy the Boat`, right? Jimmy has a few options for a prefix:

1. Symbol-based prefix - **not a good option**
    - Will result in overlaps
    - No unique prefixes
    - ![Prefix spam](http://i.imgur.com/GgbBVPS.gif)
2. @mention based prefix
    - No overlaps whatsoever
    - ![Mention-based prefixes](http://i.imgur.com/hpPkKwf.gif)
3. Text-based prefix
    - Often the bot's name
    - Can have overlaps, but not as common
    - ![Text-based prefixes](http://i.imgur.com/nE7XLOP.gif)

> My servers list on the side there, it's amazing. I know.

Let's say we went with option 1 and gave Jimmy a command prefix of `!`.
I don't even need to explain this one.
It is possible to have decent symbol prefixes, though.
Duck Duck Go bot uses `ddg!` as a prefix, and this works very nicely.
Other bots have started adding letters to prefixes to make them unique.

Let's say we went with option 2 and made Jimmy's prefix his mention.
We'd end up with something like `@Jimmy#1234` as his mention, and with tab-completion in Discord it's easy to type this out.
There are no possible overlaps, unless another bot responds to Jimmy's mention for some reason. Probably a meme, anyways.

Let's say we went with option 3 and made Jimmy's prefix his name, `jimmy`.
Jimmy would respond to `Jimmy`, `Jimmy,`, and `jimmy`.
This is fairly unique, until you get another bot developer who named his bot Jimmy and had the same idea for a prefix...

Overall, option two is the best option.

### Different prefixes for different functions
Let's say your bot has Cleverbot functionality like `@VinylBot#3513` up there.
You'd like to use a mention for the Cleverbot functionality, and a command prefix for the rest of the functionality.
This works, however, you would need to make sure you aren't being a prefix "hog".

Some bots have modules systems, where each module has a *different* command prefix than the other modules.
For bots with low modules counts, this is mostly okay - especially if using a non-common prefix.
For bots with large amounts of modules (taking up many prefixes), **this is not okay!**

Hogging large amounts of prefixes gives you and your bot a bad reputation, and gives other developers less prefixes to choose from.
The prefix pool is slowly getting drained, and people are rushing in to claim hot prefixes.
People that claim large amounts of prefixes are inconsiderate, and need to fix this issue ASAP.

## Bot content and replies
### Responding to normal chat
Bots should not respond to normal conversation. PERIOD.
This includes those `ayy` bots.

### Reponding to "insufficient permissions" or "unknown command"
Don't. It's as simple as that.
If the arguments supplied are incorect, it's okay to give a help message guiding users in the right direction.

### Responding with mentions to the invoker
Do not respond with a mention to the invoker for instant commands.
Mentions should only be used for long operations.

### Accepting external mentions
If an argument for one of your commands accepts a mention, don't output that mention to chat.
For example, if my bot had a `rip` command that outputted a link to https://ripme.xyz, I wouldn't output a mention for the target user.

    > INCORRECT WAY
    Kojitari: !rip @deansheather#6461
    Jimmy: @deansheather#6461 is kill. https://ripme.xyz/deansheather

    > CORRECT WAY
    Kojitari: !rip @deansheather#6461
    Jimmy: deansheather is kill. https://ripme.xyz/deansheather

Outputting mentions for target users is annoying, and gets really old.

### Don't output error stacktraces to chat
Seriously, you should be logging errors somewhere else.
No one wants to see your stacktraces due to your #shitcode, so output a friendly error message instead:

> @mention#1234, an error occurred whilst running the `blah` command.
Please consult the bot owner about this issue

### Ignore bot messages
Ignore messages coming from the user the bot is running on, and other BOT accounts on Discord.
It makes things simpler.

### Filter for @everyone and @here
These mentions get annoying.
Make sure you filter your outgoing messages for these mentions before you send them.
Otherwise, `:hammer:`.

### NSFW content
Sure, if you want to cater to twelve y/o's that enjoy running the `rule34 minecraft` command, be my guest.
Keep in mind, though, that NSFW content is against [Discord's terms of service](https://discordapp.com/tos) (check the "Rules of Conduct and Usage" section).

If you're still going to put NSFW commands into your bot, make sure that these features are switched off by default **per-channel**.
This means that the server owner will need to enable the NSFW features by running a command in the desired channel.

## Unique ideas
If there's a bot that already does what your new bot idea will do, what's the point?
Make sure you have a new idea before you make a bot, otherwise we end up with a tonne of useless bots on Discord.
