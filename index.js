
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: 3276799,
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");
const { loadbMenus } = require("./Handlers/menuHandler");
const { loadModals } = require("./Handlers/modalHandler");
const { loadbButtons } = require("./Handlers/buttonHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.buttons = new Collection();
client.menus = new Collection();
client.modals = new Collection();

loadEvents(client);
loadbButtons(client);
loadbMenus(client);
loadModals(client);

// Cargamos el Anti-Crash
require("./Handlers/anti-crash.js")(client);

// Logueamos el cliente mediante su respectivo token
client.login(client.config.token);
