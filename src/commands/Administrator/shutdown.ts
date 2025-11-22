/*
  Comando temporário de finalização do cliente
*/
import { Discord, Slash, Guard } from "discordx";
import { Category } from "@discordx/utilities";
import { CommandInteraction } from "discord.js";
import { OwnerOnly } from "../../guards/ownerOnly.js";

@Discord()
@Category("Administrator")
export default class ShutdownCommand {
    @Slash({
        name: "shutdown",
        description: "Desligar bot pelo cliente {owner}",
    })
    @Guard(OwnerOnly)
    async shutdown(interaction: CommandInteraction): Promise<void> {
        await interaction.reply({ content: `Encerrando o bot.` });
        await interaction.client.destroy().catch((err) => console.log(err));
    }
}
