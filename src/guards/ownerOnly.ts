/*
  Limitar comandos aos donos do bot,
  na lista de IDS no OWNER_ID do .env
*/
import type { CommandInteraction } from "discord.js";
import type { GuardFunction } from "discordx";

export const OwnerOnly: GuardFunction<CommandInteraction> = async (
    interaction,
    client,
    next,
) => {
    const ownerIds = process.env.OWNER_ID?.split(",") ?? [];

    if (!ownerIds.includes(interaction.user.id)) {
        await interaction.reply({
            content: "Apenas o dono do bot pode usar este comando.",
        });
        return;
    }

    await next();
};
