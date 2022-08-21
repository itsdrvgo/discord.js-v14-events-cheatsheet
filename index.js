//  Discord.JS v14 Events

// A quick guide for all available events can be obtained from here: https://discord.js.org/#/docs/main/stable/class/Client

// Made by: DragoLuca#3636

const { Client, Partials } = require("discord.js")
require("dotenv").config()
const { Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent } = Partials
const client = new Client({
    intents: 131071,
    partials: [Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent],
    allowedMentions: { parse: ["everyone", "users", "roles"] }
})

// channelCreate
/* Emitted whenever a guild channel is created.
PARAMETER       TYPE               DESCRIPTION
channel         GuildChannel       The channel that was created */
client.on("channelCreate", (channel) => {
    console.log(`channelCreate: ${channel}`)
})

// channelDelete
/* Emitted whenever a channel is deleted.
PARAMETER       TYPE                        DESCRIPTION
channel         DMChannel/GuildChannel      The channel that was deleted */
client.on("channelDelete", (channel) => {
    console.log(`channelDelete: ${channel}`)
})

// channelPinsUpdate
/* Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
PARAMETER       TYPE                DESCRIPTION
channel         GuildChannel        The channel that the pins update occurred in
time            Date                The time of the pins update */
client.on("channelPinsUpdate", (channel, time) => {
    console.log(`${channel}'s pin has been updated at ${time}`)
})

// channelUpdate
/* Emitted whenever a channel is updated - e.g. name change, topic change, channel type change.
PARAMETER       TYPE                        DESCRIPTION
oldChannel      DMChannel/GuildChannel      The channel before the update
newChannel      DMChannel/GuildChannel      The channel after the update */
client.on("channelUpdate", (oldChannel, newChannel) => {
    console.log(`A channel's data has been updated`)
    console.log(`${newChannel}'s name has been updated from, ${oldChannel.name} to ${newChannel.name}`)
})

// debug
/* Emitted for general debugging information.
PARAMETER       TYPE                DESCRIPTION
info            String              The debug information */
client.on("debug", (info) => {
    console.log(`Debug logged as ${info}`)
})

// emojiCreate
/* Emitted whenever a custom emoji is created in a guild.
PARAMETER       TYPE                DESCRIPTION
emoji           GuildEmoji          The emoji that was created */
client.on("emojiCreate", (emoji) => {
    console.log(`${emoji} has been created in ${emoji.guild.name}`)
})

// emojiDelete
/* Emitted whenever a custom guild emoji is deleted.
PARAMETER       TYPE                DESCRIPTION
emoji           GuildEmoji          The emoji that was deleted */
client.on("emojiCreate", (emoji) => {
    console.log(`${emoji} has been deleted in ${emoji.guild.name}`)
})

// emojiUpdate
/* Emitted whenever a custom guild emoji is updated.
PARAMETER       TYPE                DESCRIPTION
oldEmoji        GuildEmoji          The old emoji
newEmoji        GuildEmoji          The new emoji */
client.on("emojiUpdate", (oldEmoji, newEmoji) => {
    console.log(`An emoji has been updated`)
    console.log(`${oldEmoji.name} has been updated to ${newEmoji.name}`)
})

// error
/* Emitted whenever the client's WebSocket encounters a connection error.
PARAMETER       TYPE                DESCRIPTION
error           Error               The encountered error */
client.on("error", (error) => {
    console.log(`Client encountered a connection error: ${error}`)
})

// guildBanAdd
/* Emitted whenever a member is banned from a guild.
PARAMETER       TYPE                DESCRIPTION
ban             GuildBan            The ban that occurred */
client.on("guildBanAdd", (ban) => {
    console.log(`${ban.user.tag} has been banned from ${ban.guild.name}`)
})

// guildBanRemove
/* Emitted whenever a member is unbanned from a guild.
PARAMETER       TYPE                DESCRIPTION
ban             GuildBan            The ban that was removed */
client.on("guildBanRemove", (ban) => {
    console.log(`${ban.user.tag} has been unbanned from ${ban.guild.name}`)
})

// guildCreate
/* Emitted whenever the client joins a guild.
PARAMETER       TYPE                DESCRIPTION
guild           Guild               The created guild */
client.on("guildCreate", (guild) => {
    console.log(`The bot has joined ${guild.name}`)
})

// guildDelete
/* Emitted whenever a guild kicks the client or the guild is deleted/left.
PARAMETER       TYPE                DESCRIPTION
guild           Guild               The guild that was deleted */
client.on("guildDelete", (guild) => {
    console.log(`The bot has left ${guild.name}`)
})

// guildIntegrationsUpdate
/* Emitted whenever a guild integration is updated.
PARAMETER       TYPE                DESCRIPTION
guild           Guild               The guild whose integrations were updated */
client.on("guildIntegrationsUpdate", (guild) => {
    console.log(`An integration has been updated in ${guild.name}`)
})

// guildMemberAdd
/* Emitted whenever a user joins a guild.
PARAMETER       TYPE                DESCRIPTION
member          GuildMember         The member that has joined a guild */
client.on("guildMemberAdd", (member) => {
    console.log(`${member.tag} has joined the server`)
})

// guildMemberAvailable
/* Emitted whenever a member becomes available in a large guild.
PARAMETER       TYPE                DESCRIPTION
member          GuildMember         The member that became available */
client.on("guildMemberAvailable", (member) => {
    console.log(`${member.tag} is now available in ${member.guild.name}`)
})

// guildMemberRemove
/* Emitted whenever a member leaves a guild, or is kicked.
PARAMETER       TYPE                DESCRIPTION
member          GuildMember         The member that has left/been kicked from the guild */
client.on("guildMemberRemove", (member) => {
    console.log(`${member.tag} has left the server`)
})

// guildMembersChunk
/* Emitted whenever a chunk of guild members is received (all members come from the same guild).
PARAMETER       TYPE                                    DESCRIPTION
members         Collection <Snowflake, GuildMember>     The members in the chunk
guild           Guild                                   The guild related to the member chunk 
chunk         	GuildMembersChunk	                    Properties of the received chunk */
client.on("guildMembersChunk", (members, guild, chunk) => {
    console.log(`${members.map(member => member.user.tag).join(", ")} (${chunk.count}) has joined from the same server, ${guild.name}`)
})

// guildMemberUpdate
/* Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
PARAMETER       TYPE                DESCRIPTION
oldMember       GuildMember         The member before the update
newMember       GuildMember         The member after the update */
client.on("guildMemberUpdate", (oldMember, newMember) => {
    console.log(`A member's data has been updated`)
    console.log(`${newMember}'s nickname has been changed from ${oldMember.nickname} to ${newMember.nickname}`)
})

// guildScheduledEventCreate
/* Emitted whenever a guild scheduled event is created.
PARAMETER                   TYPE                        DESCRIPTION
guildScheduledEvent         GuildScheduledEvent         The created guild scheduled event */
client.on("guildScheduledEventCreate", (guildScheduledEvent) => {
    console.log(`An event has been scheduled in ${guildScheduledEvent.channel} by ${guildScheduledEvent.creator} as ${guildScheduledEvent.name}`)
})

// guildScheduledEventDelete
/* Emitted whenever a guild scheduled event is deleted.
PARAMETER                   TYPE                        DESCRIPTION
guildScheduledEvent         GuildScheduledEvent         The deleted guild scheduled event */
client.on("guildScheduledEventDelete", (guildScheduledEvent) => {
    console.log(`An event has been deleted in ${guildScheduledEvent.channel} by ${guildScheduledEvent.creator} as ${guildScheduledEvent.name}`)
})

// guildScheduledEventUpdate
/* Emitted whenever a guild scheduled event gets updated.
PARAMETER                   TYPE                        DESCRIPTION
oldGuildScheduledEvent      GuildScheduledEvent         The guild scheduled event object before the update
newGuildScheduledEvent      GuildScheduledEvent         The guild scheduled event object after the update */
client.on("guildScheduledEventDelete", (oldGuildScheduledEvent, newGuildScheduledEvent) => {
    console.log(`An event's name has been updated from ${oldGuildScheduledEvent.name} to ${newGuildScheduledEvent.name}`)
})

// guildScheduledEventUserAdd
/* Emitted whenever a user subscribes to a guild scheduled event.
PARAMETER                   TYPE                        DESCRIPTION
guildScheduledEvent         GuildScheduledEvent         The deleted guild scheduled event 
user                        User                         The user who subscribed */
client.on("guildScheduledEventUserAdd", (guildScheduledEvent, user) => {
    console.log(`${user} has subscribed to ${guildScheduledEvent.name}`)
})

// guildScheduledEventUserRemove
/* Emitted whenever a user unsubscribes from a guild scheduled event.
PARAMETER                   TYPE                        DESCRIPTION
guildScheduledEvent         GuildScheduledEvent         The deleted guild scheduled event 
user                        User                         The user who unsubscribed */
client.on("guildScheduledEventUserAdd", (guildScheduledEvent, user) => {
    console.log(`${user} has unsubscribed to ${guildScheduledEvent.name}`)
})

// guildUnavailable
/* Emitted whenever a guild becomes unavailable, likely due to a server outage.
PARAMETER       TYPE                DESCRIPTION
guild           Guild               The guild that has become unavailable */
client.on("guildUnavailable", (guild) => {
    console.log(`${guild.name} has become unavailable, likely due to a server outage`)
})

// guildUpdate
/* Emitted whenever a guild is updated - e.g. name change.
PARAMETER       TYPE                DESCRIPTION
oldGuild        Guild               The guild before the update
newGuild        Guild               The guild after the update */
client.on("guildUpdate", (oldGuild, newGuild) => {
    console.log(`A guild has been updated`)
    console.log(`${oldGuild.name} has been changed to ${newGuild.name}`)
})

// interactionCreate
/* Emitted when an interaction is created.
PARAMETER           TYPE                    DESCRIPTION
interaction         Interaction             The interaction which was created */
client.on("interactionCreate", (interaction) => {
    console.log(`An interaction has been created in ${interaction.guild.name}`)
})

// inviteCreate
// This event only triggers if the client has MANAGE_GUILD permissions for the guild, or MANAGE_CHANNELS permissions for the channel.
/* Emitted when an invite is created.
PARAMETER       TYPE            DESCRIPTION
invite          Invite          The invite that was created */
client.on("inviteCreate", (invite) => {
    console.log(`An invite has been created by ${invite.inviter.tag}. The code is ${invite.code}`)
})

// inviteDelete
// This event only triggers if the client has MANAGE_GUILD permissions for the guild, or MANAGE_CHANNELS permissions for the channel.
/* Emitted when an invite is deleted.
PARAMETER       TYPE            DESCRIPTION
invite          Invite          The invite that was deleted */
client.on("inviteDelete", (invite) => {
    console.log(`An invite has been deleted by ${invite.inviter.tag}. The code is ${invite.code}`)
})

// messageCreate
/* Emitted whenever a message is created.
PARAMETER       TYPE                DESCRIPTION
message         Message             The created message */
client.on("messageCreate", (message) => {
    console.log(`A message has been sent in ${message.channel} as ${message.content}`)
})

// messageDelete
/* Emitted whenever a message is deleted.
PARAMETER       TYPE                DESCRIPTION
message         Message             The deleted message */
client.on("messageDelete", (message) => {
    console.log(`A message has been deleted in ${message.channel} as ${message.content}`)
})

// messageDeleteBulk
/* Emitted whenever messages are deleted in bulk.
PARAMETER       TYPE                                DESCRIPTION
messages        Collection<Snowflake, Message>      The deleted messages, mapped by their id */
client.on("messageDeleteBulk", (messages) => {
    console.log(`A lot of messages have been deleted ${messages.map(message => message.content).join(", ")}`)
})

// messageReactionAdd
/* Emitted whenever a reaction is added to a message.
PARAMETER               TYPE                    DESCRIPTION
messageReaction         MessageReaction         The reaction object
user                    User                    The user that applied the emoji or reaction emoji */
client.on("messageReactionAdd", (messageReaction, user) => {
    console.log(`A reaction has been added to a message`)
    console.log(`${messageReaction.emoji} has been added to a message by ${user.tag}`)
})

// messageReactionRemove
/* Emitted whenever a reaction is removed from a message.
PARAMETER               TYPE                    DESCRIPTION
messageReaction         MessageReaction         The reaction object
user                    User                    The user that removed the emoji or reaction emoji */
client.on("messageReactionRemove", (messageReaction, user) => {
    console.log(`A reaction has been removed from a message`)
    console.log(`${messageReaction.emoji} has been removed from a message by ${user.tag}`)
})

// messageReactionRemoveAll
/* Emitted whenever all reactions are removed from a message.
PARAMETER       TYPE                                                DESCRIPTION
message         Message                                             The message the reactions were removed from
reactions       Collection <(string |Snowflake), MessageReaction>   The cached message reactions that were removed */
client.on("messageReactionRemoveAll", (message, reactions) => {
    console.log(`${reactions.map(reaction => reaction.emoji).join(", ")} has been removed from ${message.id}`)
})

// messageUpdate
/* Emitted whenever a message is updated - e.g. embed or content change.
PARAMETER       TYPE                DESCRIPTION
oldMessage      Message             The message before the update
newMessage      Message             The message after the update */
client.on("messageUpdate", (oldMessage, newMessage) => {
    console.log(`A message has been updated`)
    console.log(`${oldMessage.content} has been edited to ${newMessage.content}`)
})

// presenceUpdate
/* Emitted whenever a guild member's presence changes, or they change one of their details.
PARAMETER       TYPE                DESCRIPTION
oldPresence     Presence            The presence before the update, if one at all
newPresence     Presence            The presence after the update */
client.on("presenceUpdate", (oldPresence, newPresence) => {
    console.log(`${newPresence.member}'s presnece has been updated from ${oldPresence.clientStatus} to ${newPresence.clientStatus}`)
})

// ready
/* Emitted when the client becomes ready to start working. */
client.on("ready", () => {
    console.log(`${client.user.tag} is now ready!`)
})

// roleCreate
/* Emitted whenever a role is created.
PARAMETER       TYPE                DESCRIPTION
role            Role                The role that was created */
client.on("roleCreate", (role) => {
    console.log(`${role} has been created`)
})

// roleDelete
/* Emitted whenever a guild role is deleted.
PARAMETER       TYPE                DESCRIPTION
role            Role                The role that was deleted */
client.on("roleDelete", (role) => {
    console.log(`${role} has been deleted`)
})

// roleUpdate
/* Emitted whenever a guild role is updated.
PARAMETER       TYPE                DESCRIPTION
oldRole         Role                The role before the update
newRole         Role                The role after the update */
client.on("roleUpdate", (oldRole, newRole) => {
    console.log(`A role has been updated`)
    console.log(`${oldRole.name} has been updated to ${newRole.name}`)
})

// typingStart
/* Emitted whenever a user starts typing in a channel.
PARAMETER       TYPE                DESCRIPTION
channel         GuildChannel        The channel the user started typing in
user            User                The user that started typing */
client.on("typingStart", (channel, user) => {
    console.log(`${user.tag} has started typing in ${channel}`)
})

// userUpdate
/* Emitted whenever a user's details (e.g. username) are changed. Triggered by the Discord gateway events USER_UPDATE, GUILD_MEMBER_UPDATE, and PRESENCE_UPDATE.
PARAMETER       TYPE                DESCRIPTION
oldUser         User                The user before the update
newUser         User                The user after the update */
client.on("userUpdate", (oldUser, newUser) => {
    console.log(`${oldUser.username} has been changed to ${newUser.username}`)
})

// voiceStateUpdate
/* Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
PARAMETER       TYPE                DESCRIPTION
oldMember       GuildMember         The member before the voice state update
newMember       GuildMember         The member after the voice state update */
client.on("voiceStateUpdate", (oldMember, newMember) => {
    console.log(`${newMember}'s voice state has been updated`)
})

// warn
/* Emitted for general warnings. 
PARAMETER       TYPE                DESCRIPTION
info            String              The warning  */
client.on("warn", (info) => {
    console.log(`warn: ${info}`)
})

// webhookUpdate
/* Emitted whenever a channel has its webhooks changed.
PARAMETER       TYPE                                        DESCRIPTION
channel         TextChannel/NewsChannel/VoiceChannel        The channel that had a webhook update  */
client.on("webhookUpdate", (channel) => {
    console.log(`A webhook name has been updated in ${channel}`)
})

client.login(process.env.DISCORD_TOKEN)