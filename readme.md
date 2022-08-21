# Discord.JS v14 Events Cheat Sheet

A quick guide for all available events can be obtained from here: https://discord.js.org/#/docs/main/stable/class/Client


## Requirements

- Basic knowledge on JavaScript
- Basic knowledge on Discord.JS (v14)
- Basic knowledge on Node.JS


## Initializing the Client (Optional)

Install the packages listed below to follow this part.
- discord.js
- dotenv

After successful installation, create the client like this,
```js
const { Client, Partials } = require("discord.js")
require("dotenv").config()
const { Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent } = Partials
const client = new Client({
    intents: 131071,
    partials: [Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent],
    allowedMentions: { parse: ["everyone", "users", "roles"] }
})
```


## Cheat-Sheet

```js
<details>
<summary>How do I dropdown?</summary>
<br>
This is how you dropdown.
</details>
```