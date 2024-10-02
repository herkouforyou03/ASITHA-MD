const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=XJNEXYpQ#PN_p4cr_5ZLrVBsG1WbckxlXUK1YOXew51BhwOPpcbc",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
