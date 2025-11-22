import { type ArgsOf, Client, Discord, On } from "discordx";
import { container } from "tsyringe";
import { UsersRepository } from "../repositories/UsersRepository.js";

@Discord()
export default class MessageCreateEvent {
    protected usersRepository: UsersRepository;

    constructor() {
        this.usersRepository = container.resolve(UsersRepository);
    }

    @On({ event: "messageCreate" })
    async onMessage([message]: ArgsOf<"messageCreate">, _client: Client) {
        if (!Client || !_client) return; // só para o LINT não encher o saco
        if (message.content.toLowerCase() == "kaznir")
            return message.reply("O Kaznir é um membro vergonhoso!");
    }
}
