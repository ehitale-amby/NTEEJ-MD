//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtoNVpheGxHYWhTMjdXOVVBaTdGNmgySHZFZm9PaGlleVIwbGhMMDFtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHhwKzMzZkZ4SVZtQVFaRTlDTlVwMFJncDBxTm9SRG1yK3NGbHVaWGVFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQy9EU2haaUNtSko0RThzdjVWMXZDWi9qYzdpbDJOM3c0M0kyK2VtNkhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnL3R5Y0NDdEVWZmFuN3JvcXpmUko4UjhmempSWGZtczFCZGdJRGE2ZmdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtESXM4dkxSNCtIbGpXWWtIOXNoamhlYktiVGtMNlJUSm8wUTZUcGJXM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJenFRVmtSb0dRN0RvS1ljemRwSkxGU3J1TzZqRXYxZ1ZpeGpzVzJ1Qnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Y0ZXVvY3JscW9pQkhxdWZrTHFRMUZGTTh5ZWc5d20zejRjTFJNbzFHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzlvY0ppTTFZdE5lazVLSmpPUStYTmxLWFluanEvUzVmKzRHOTRDejZrWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRoeDRSTXhhQXdhdFBJZyszdHAyeG9ibUFOK05PcFd1Rnc5K21sSUJiN3VNNjEyYkRQSFhnTDhkSWtyZEo5MkFEd3Z5ZVkxZnpUa2IwSXZoUVF3QWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6IlluYXlnN3BzN0NDZElFcDZmQkE2ZnpDWnpYYjREZS9yZkozNkFGc2xJWUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE1MzMxODAzMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MDgzNTYxNjkxQ0NDRDAyREZGRDEyOEMwNzIxNTA0OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1ODMzNzIwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTUzMzE4MDMwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQwQzczRUYyQkQyRTg1QzM4QzE2QjVERTk3NTc5OTQzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU4MzM3MjB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNTMzMTgwMzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjYyMUQxNEJCM0MwMjI5Nzg3MDlBMzUyMjc3QzlENzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTgzMzcyMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE1MzMxODAzMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4RTgxMkNGRDEyMzMwQzE5NjNENDNFN0I2NkE1NDZEQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1ODMzNzIxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5QnZZSFZua1RObUNNTl9NN0lIRjJ3IiwicGhvbmVJZCI6ImE4NDNjNDQwLWYyNjItNGU3Ni1iNzcwLTRmODIxNDNhYmE0MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJma0dUcTZEcC9tcjM4a0pudThaaGdpMWNaNms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGpTL0w2S2xqSE01SFVDSFdZb1dTVUdvQXZRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ4R1pYMllFIiwibWUiOnsiaWQiOiIyMzQ5MTUzMzE4MDMwOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRWhpdGFsZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHFGLzk0RUVPancycnNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib2JZUVpKSGVPZ3V1WE5kWUI1eU5seVIyQjZvUUFHakN1RmJLS24xNktpWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTW9SUkFGeHlRU0tobmYrOUZtczZ2aEpPRzdWM1RJa2FnTFdIRnFkbWkzK2hXVHNaakM5UHgxcjFhVGZYZUdqZVhxSnJEa0RtQWhSVXB4eU9tQUZUQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlNDOGhkRlRPZllMQXRTUHN3dVlzR3lNTFl0V3B3Q0NWTG9VTE4yc2ZCbjJFRTRxMlJXOS9NS3lsODVYZ0ZIRjhoWHVWUGM3WVpOVmNobVRueUlTYWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE1MzMxODAzMDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFHMkVHU1Izam9Mcmx6WFdBZWNqWmNrZGdlcUVBQm93cmhXeWlwOWVpb20ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU4MzM3MTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRUtMIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349153318030";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NTEEJ-MD`",
  author: process.env.PACK_AUTHER || "NTEEJ-MD",
  packname: process.env.PACK_NAME || "NTEEJ",
  botname: process.env.BOT_NAME || "NTEEJ-MD",
  ownername: process.env.OWNER_NAME || "Ehitale",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ntee-j01/NTEEJ-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I";
global.website = process.env.GURL || "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7";
global.devs = "263714497545";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
