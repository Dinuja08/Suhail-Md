const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_28_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgMTkwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDksXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICA4NixcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjkyTlhrdm0wcnJvcmV0czVUZTVHbnhYbUpLZG83L3cyaGtHVGl6bTMwNUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTcyODY4MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdCNjA0RUJCMEU1NjIzNUMwMzZGRkEyNzNBQzhBNTMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE0NDUxNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzU3Mjg2ODMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQTFGRUU5QjVBODgxQzI1RTk2NEM5NDRBMTE3QzlBMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxNDQ1MTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia0ViUHJjRVNTc3l6VDV6QWhYZXhwUVwiLFxuICBcInBob25lSWRcIjogXCJmZjEyYWI5MC0wMDEyLTQwMjQtODUwOC1iN2YwYTI5NGJmYzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgNjgsXG4gICAgICAyMzksXG4gICAgICAyMCxcbiAgICAgIDEwMixcbiAgICAgIDE4NSxcbiAgICAgIDE0NixcbiAgICAgIDc4LFxuICAgICAgODAsXG4gICAgICAxOTMsXG4gICAgICAyMjMsXG4gICAgICAyMCxcbiAgICAgIDM3LFxuICAgICAgMTc2LFxuICAgICAgMTg5LFxuICAgICAgMTkzLFxuICAgICAgMTI3LFxuICAgICAgMTUzLFxuICAgICAgMTU1LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICA0MyxcbiAgICAgIDEzNixcbiAgICAgIDI0OCxcbiAgICAgIDEwMyxcbiAgICAgIDk5LFxuICAgICAgNzIsXG4gICAgICAxMzIsXG4gICAgICA0OCxcbiAgICAgIDE2NSxcbiAgICAgIDIzMCxcbiAgICAgIDIwNixcbiAgICAgIDMwLFxuICAgICAgMjQ0LFxuICAgICAgMTExLFxuICAgICAgMjI4LFxuICAgICAgMTQwLFxuICAgICAgMTc4LFxuICAgICAgOTAsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEJSU0U4V1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU3Mjg2ODMzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg1ODM1MzQwODczODM4OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUdTcjRFQ0VQcXRsN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQUUJNYmdXVlRuMDBhRjZzVjN2NDZjNmZCL0x3OWVsL1JSdStPejYzaUE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlNYnpEaXJ6MUxqdDRiL05lUE1GR3hiYlNPaGZTTlRhdnVKb1IrV3VCL3AyeGJzdmZoME9QQXllMUJ0VXNIb1pIRDNPY2xXN1U4c01qVFMzbHVDQUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkcxWlF0Q1FVaHNlWk02V1ZKMWo4NjFJU20rdDEyTUx4K3FtSXVlZUV6M1JHUjBOeEdlSlpOY05PZ1JDSDBERnlFQ3BMRUZ5RzB6a1NBT1NWZVk2TkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU3Mjg2ODMzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTQ0NTA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkdJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKR0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMMHNNVXBMeHBCc3ZiZmtNbU56bEp3ckQ5R1l1eDh2TC82eU9hc0wrWTFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUzOTc0MDQxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTQ0NTE1MjQ2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
