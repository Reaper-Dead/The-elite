const { EmbedBuilder } = require("discord.js");

module.exports = (title, description, color = "#ff9500") => {
  return new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(color)
    .setTimestamp();
};