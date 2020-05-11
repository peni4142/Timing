import { ICommand } from "./ICommand";


export class ListCommand implements ICommand {
    private commands: { [key: string]: ICommand } = {};

    constructor(public readonly Name: string) { }

    /** Adds or overrides command with the same name */
    public Add(command: ICommand): void {
        this.commands[command.Name] = command;
    }

    public Execute(): void {
        Object.keys(this.commands).forEach((command: string) => {
            this.commands[command].Execute();
        });
    }
}