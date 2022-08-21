# Discord.JS v14 Events Cheat Sheet

A quick guide for all available events can be obtained from here: https://discord.js.org/#/docs/main/stable/class/Client


## Requirements

- Basic knowledge on JavaScript
- Basic knowledge on Discord.JS (v14)
- Basic knowledge on Node.JS

## Cheat-Sheet

<p>
<details>
<summary><strong>channelCreate</strong></summary>
<br/>

`Description:` Emitted whenever a guild channel is created.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `channel` | `GuildChannel` | The channel that was created |

```js
client.on("channelCreate", (channel) => {
    console.log(`${channel} has been created`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>channelDelete</strong></summary>
<br/>

`Description:` Emitted whenever a guild channel is deleted.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `channel` | `GuildChannel` | The channel that was deleted |

```js
client.on("channelDelete", (channel) => {
    console.log(`${channel} has been deleted`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>channelPinsUpdate</strong></summary>
<br/>

`Description:` Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `channel` | `GuildChannel` | The time of the pins update |
| `time` | `Date` | The channel that was deleted |

```js
client.on("channelPinsUpdate", (channel, time) => {
    console.log(`${channel}'s pin has been updated at ${time}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>channelUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a channel is updated - e.g. name change, topic change, channel type change.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldChannel` | `DMChannel/GuildChannel` | The channel before the update |
| `newChannel` | `DMChannel/GuildChannel` |  The channel after the update |

```js
client.on("channelUpdate", (oldChannel, newChannel) => {
    console.log(`A channel's data has been updated`)
    console.log(`${newChannel}'s name has been updated from, ${oldChannel.name} to ${newChannel.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>debug</strong></summary>
<br/>

`Description:` Emitted for general debugging information.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `info` | `String` | The debug information |

```js
client.on("debug", (info) => {
    console.log(`Debug logged as ${info}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>emojiCreate</strong></summary>
<br/>

`Description:` Emitted whenever a custom emoji is created in a guild.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `emoji` | `GuildEmoji` | The emoji that was created |

```js
client.on("emojiCreate", (emoji) => {
    console.log(`${emoji} has been created in ${emoji.guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>emojiDelete</strong></summary>
<br/>

`Description:` Emitted whenever a custom emoji is deleted in a guild.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `emoji` | `GuildEmoji` | The emoji that was deleted |

```js
client.on("emojiDelete", (emoji) => {
    console.log(`${emoji} has been deleted in ${emoji.guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>emojiUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a custom guild emoji is updated.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldEmoji` | `GuildEmoji` | The old emoji |
| `newEmoji` | `GuildEmoji` | The new emoji |

```js
client.on("emojiUpdate", (oldEmoji, newEmoji) => {
    console.log(`An emoji has been updated`)
    console.log(`${oldEmoji.name} has been updated to ${newEmoji.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>error</strong></summary>
<br/>

`Description:` Emitted whenever the client's WebSocket encounters a connection error.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `error` | `Error` | The encountered error |

```js
client.on("error", (error) => {
    console.log(`Client encountered a connection error: ${error}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildBanAdd</strong></summary>
<br/>

`Description:` Emitted whenever a member is banned from a guild.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `ban` | `GuildBan` | The ban that occurred |

```js
client.on("guildBanAdd", (ban) => {
    console.log(`${ban.user.tag} has been banned from ${ban.guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildBanRemove</strong></summary>
<br/>

`Description:` Emitted whenever a member is unbanned from a guild.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `ban` | `GuildBan` | The ban that was removed |

```js
client.on("guildBanRemove", (ban) => {
    console.log(`${ban.user.tag} has been unbanned from ${ban.guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildCreate</strong></summary>
<br/>

`Description:` Emitted whenever the client joins a guild.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `guild` | `Guild` | The created guild |

```js
client.on("guildCreate", (guild) => {
    console.log(`The bot has joined ${guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildDelete</strong></summary>
<br/>

`Description:` Emitted whenever a guild kicks the client or the guild is deleted/left.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `guild` | `Guild` | The guild that was deleted |

```js
client.on("guildDelete", (guild) => {
    console.log(`The bot has left ${guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildIntegrationsUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a guild integration is updated.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `guild` | `Guild` | The guild whose integrations were updated |

```js
client.on("guildIntegrationsUpdate", (guild) => {
    console.log(`An integration has been updated in ${guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildMemberAdd</strong></summary>
<br/>

`Description:` Emitted whenever a user joins a guild.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `member` | `GuildMember` | The member that has joined a guild |

```js
client.on("guildMemberAdd", (member) => {
    console.log(`${member.tag} has joined the server`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildMemberAvailable</strong></summary>
<br/>

`Description:` Emitted whenever a member becomes available in a large guild.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `member` | `GuildMember` | The member that became available |

```js
client.on("guildMemberAvailable", (member) => {
    console.log(`${member.tag} is now available in ${member.guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildMemberRemove</strong></summary>
<br/>

`Description:` Emitted whenever a member leaves a guild, or is kicked.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `member` | `GuildMember` | The member that has left/been kicked from the guild |

```js
client.on("guildMemberRemove", (member) => {
    console.log(`${member.tag} has left the server`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildMembersChunk</strong></summary>
<br/>

`Description:` Emitted whenever a chunk of guild members is received (all members come from the same guild).

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `members` | `Collection <Snowflake, GuildMember>` | The members in the chunk |
| `guild` | `Guild` | The guild related to the member chunk |
| `chunk` | `GuildMembersChunk` | Properties of the received chunk |

```js
client.on("guildMembersChunk", (members, guild, chunk) => {
    console.log(`${members.map(member => member.user.tag).join(", ")} (${chunk.count}) has joined from the same server, ${guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildMemberUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a guild member changes - i.e. new role, removed role, nickname.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldMember` | `GuildMember` | The member before the update |
| `newMember` | `GuildMember` | The member after the update |

```js
client.on("guildMemberUpdate", (oldMember, newMember) => {
    console.log(`A member's data has been updated`)
    console.log(`${newMember}'s nickname has been changed from ${oldMember.nickname} to ${newMember.nickname}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildScheduledEventCreate</strong></summary>
<br/>

`Description:` Emitted whenever a guild scheduled event is created.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `guildScheduledEvent` | `GuildScheduledEvent` | The created guild scheduled event |

```js
client.on("guildScheduledEventCreate", (guildScheduledEvent) => {
    console.log(`An event has been scheduled in ${guildScheduledEvent.channel} by ${guildScheduledEvent.creator} as ${guildScheduledEvent.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildScheduledEventDelete</strong></summary>
<br/>

`Description:` Emitted whenever a guild scheduled event is deleted.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `guildScheduledEvent` | `GuildScheduledEvent` | The deleted guild scheduled event |

```js
client.on("guildScheduledEventDelete", (guildScheduledEvent) => {
    console.log(`An event has been deleted in ${guildScheduledEvent.channel} by ${guildScheduledEvent.creator} as ${guildScheduledEvent.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildScheduledEventUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a guild scheduled event gets updated.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldGuildScheduledEvent` | `GuildScheduledEvent` | The guild scheduled event object before the update |
| `newGuildScheduledEvent` | `GuildScheduledEvent` | The guild scheduled event object before the update |

```js
client.on("guildScheduledEventUpdate", (oldGuildScheduledEvent, newGuildScheduledEvent) => {
    console.log(`An event's name has been updated from ${oldGuildScheduledEvent.name} to ${newGuildScheduledEvent.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildScheduledEventUserAdd</strong></summary>
<br/>

`Description:` Emitted whenever a user subscribes to a guild scheduled event.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `guildScheduledEvent` | `GuildScheduledEvent` | The guild scheduled event |
| `user` | `User` | The user who subscribed |

```js
client.on("guildScheduledEventUserAdd", (guildScheduledEvent, user) => {
    console.log(`${user} has subscribed to ${guildScheduledEvent.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildScheduledEventUserRemove</strong></summary>
<br/>

`Description:` Emitted whenever a user unsubscribes from a guild scheduled event.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `guildScheduledEvent` | `GuildScheduledEvent` | The guild scheduled event |
| `user` | `User` | The user who unsubscribed |

```js
client.on("guildScheduledEventUserAdd", (guildScheduledEvent, user) => {
    console.log(`${user} has unsubscribed to ${guildScheduledEvent.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildUnavailable</strong></summary>
<br/>

`Description:` Emitted whenever a guild becomes unavailable, likely due to a server outage.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `guild` | `Guild` | The guild that has become unavailable |

```js
client.on("guildUnavailable", (guild) => {
    console.log(`${guild.name} has become unavailable, likely due to a server outage`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>guildUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a guild is updated - e.g. name change.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldGuild` | `Guild` | The guild before the update |
| `newGuild` | `Guild` | The guild after the update |

```js
client.on("guildUpdate", (oldGuild, newGuild) => {
    console.log(`A guild has been updated`)
    console.log(`${oldGuild.name} has been changed to ${newGuild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>interactionCreate</strong></summary>
<br/>

`Description:` Emitted when an interaction is created.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `interaction` | `Interaction` | The interaction which was created |

```js
client.on("interactionCreate", (interaction) => {
    console.log(`An interaction has been created in ${interaction.guild.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>inviteCreate</strong></summary>
<br/>

`Description:` Emitted when an invite is created. <br/><br/>
`Requirements:` This event only triggers if the client has `MANAGE_GUILD` permissions for the guild, or `MANAGE_CHANNELS` permissions for the channel.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `invite` | `Invite` | The invite that was created |

```js
client.on("inviteCreate", (invite) => {
    console.log(`An invite has been created by ${invite.inviter.tag}. The code is ${invite.code}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>inviteDelete</strong></summary>
<br/>

`Description:` Emitted when an invite is deleted. <br/><br/>
`Requirements:` This event only triggers if the client has `MANAGE_GUILD` permissions for the guild, or `MANAGE_CHANNELS` permissions for the channel.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `invite` | `Invite` | The invite that was deleted |

```js
client.on("inviteDelete", (invite) => {
    console.log(`An invite has been deleted by ${invite.inviter.tag}. The code is ${invite.code}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>messageCreate</strong></summary>
<br/>

`Description:` Emitted whenever a message is created.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `message` | `Message` | The created message |

```js
client.on("messageCreate", (message) => {
    console.log(`A message has been sent in ${message.channel} as ${message.content}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>messageDelete</strong></summary>
<br/>

`Description:` Emitted whenever a message is deleted.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `message` | `Message` | The deleted message |

```js
client.on("messageDelete", (message) => {
    console.log(`A message has been deleted in ${message.channel} as ${message.content}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>messageDeleteBulk</strong></summary>
<br/>

`Description:` Emitted whenever messages are deleted in bulk.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `messages` | `Collection<Snowflake, Message>` | The deleted messages, mapped by their id |

```js
client.on("messageDeleteBulk", (messages) => {
    console.log(`A lot of messages have been deleted ${messages.map(message => message.content).join(", ")}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>messageReactionAdd</strong></summary>
<br/>

`Description:` Emitted whenever a reaction is added to a message.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `messageReaction` | `MessageReaction` | The reaction object |
| `user` | `User` | The user that applied the emoji or reaction emoji |

```js
client.on("messageReactionAdd", (messageReaction, user) => {
    console.log(`A reaction has been added to a message`)
    console.log(`${messageReaction.emoji} has been added to a message by ${user.tag}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>messageReactionRemove</strong></summary>
<br/>

`Description:` Emitted whenever a reaction is removed from a message.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `messageReaction` | `MessageReaction` | The reaction object |
| `user` | `User` | The user that removed the emoji or reaction emoji |

```js
client.on("messageReactionRemove", (messageReaction, user) => {
    console.log(`A reaction has been removed from a message`)
    console.log(`${messageReaction.emoji} has been removed from a message by ${user.tag}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>messageReactionRemoveAll</strong></summary>
<br/>

`Description:` Emitted whenever all reactions are removed from a message.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `message` | `Message` | The message the reactions were removed from |
| `reactions` | `Collection <(string \| Snowflake),MessageReaction>` | The cached message reactions that were removed |

```js
client.on("messageReactionRemoveAll", (message, reactions) => {
    console.log(`${reactions.map(reaction => reaction.emoji).join(", ")} has been removed from ${message.id}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>messageUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a message is updated - e.g. embed or content change.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldMessage` | `Message` | The message before the update |
| `newMessage` | `Message` | The message after the update |

```js
client.on("messageUpdate", (oldMessage, newMessage) => {
    console.log(`A message has been updated`)
    console.log(`${oldMessage.content} has been edited to ${newMessage.content}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>presenceUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a guild member's presence changes, or they change one of their details.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldPresence` | `Presence` | The presence before the update, if one at all |
| `newPresence` | `Presence` | The presence after the update |

```js
client.on("presenceUpdate", (oldPresence, newPresence) => {
    console.log(`${newPresence.member}'s presnece has been updated from ${oldPresence.clientStatus} to ${newPresence.clientStatus}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>ready</strong></summary>
<br/>

`Description:` Emitted when the client becomes ready to start working.

```js
client.on("ready", () => {
    console.log(`${client.user.tag} is now ready!`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>roleCreate</strong></summary>
<br/>

`Description:` Emitted whenever a role is created.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `role` | `Role` | The role that was created |

```js
client.on("roleCreate", (role) => {
    console.log(`${role} has been created`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>roleDelete</strong></summary>
<br/>

`Description:` Emitted whenever a role is deleted.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `role` | `Role` | The role that was deleted |

```js
client.on("roleCreate", (role) => {
    console.log(`${role} has been deleted`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>roleUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a guild role is updated.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldRole` | `Role` | The role before the update |
| `newRole` | `Role` | The role after the update |

```js
client.on("roleUpdate", (oldRole, newRole) => {
    console.log(`A role has been updated`)
    console.log(`${oldRole.name} has been updated to ${newRole.name}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>typingStart</strong></summary>
<br/>

`Description:` Emitted whenever a user starts typing in a channel.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `channel` | `GuildChannel` | The channel the user started typing in |
| `user` | `User` | The user that started typing |

```js
client.on("typingStart", (channel, user) => {
    console.log(`${user.tag} has started typing in ${channel}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>userUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a user's details (e.g. username) are changed. Triggered by the Discord gateway events `USER_UPDATE`, `GUILD_MEMBER_UPDATE`, and `PRESENCE_UPDATE`.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldUser` | `User` | The user before the update |
| `newUser` | `User` | The user after the update |

```js
client.on("userUpdate", (oldUser, newUser) => {
    console.log(`${oldUser.username} has been changed to ${newUser.username}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>voiceStateUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `oldState` | `VoiceState` | The voice state before the update |
| `newState` | `VoiceState` | The voice state after the update |

```js
client.on("voiceStateUpdate", (oldState, newState) => {
    console.log(`${newState.member}'s voice state has been updated`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>warn</strong></summary>
<br/>

`Description:` Emitted for general warnings. 

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `info` | `String` | The warning |

```js
client.on("warn", (info) => {
    console.log(`warn: ${info}`)
})
```

</details>
</p>

<p>
<details>
<summary><strong>webhookUpdate</strong></summary>
<br/>

`Description:` Emitted whenever a channel has its webhooks changed.

| PARAMETER | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `channel` | `TextChannel/NewsChannel/VoiceChannel` | The channel that had a webhook update |

```js
client.on("webhookUpdate", (channel) => {
    console.log(`A webhook name has been updated in ${channel}`)
})
```

</details>
</p>

<br/>

## Credits

- [DragoLuca](https://github.com/dragoluca22)


## 🔗 Links
[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](htttps://discord.gg/fAWw5QNutB) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/sarthakkundu22) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/sarthak-kundu-608479220) [![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?logo=stack-overflow&logoColor=white)](https://stackoverflow.com/users/16536353) [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white)](https://twitter.com/skk_at) [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/c/UCFTLRtd7NMfdD_R8ftqXBzQ) 
