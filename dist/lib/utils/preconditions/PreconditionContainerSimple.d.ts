import type { Client, Message } from 'discord.js';
import type { Command } from '../../structures/Command';
import type { Precondition, PreconditionContext } from '../../structures/Precondition';
import type { IPreconditionContainer } from './IPreconditionContainer';
export declare type PreconditionContainerSingleResolvable = string | {
    entry: string;
    context: PreconditionContext;
};
export declare class PreconditionContainerSingle implements IPreconditionContainer {
    readonly client: Client;
    readonly context: PreconditionContext;
    readonly entry: string;
    constructor(client: Client, data: PreconditionContainerSingleResolvable);
    get precondition(): Precondition;
    run(message: Message, command: Command): import("../Types").Awaited<import("../Result").Result<unknown, import("../../..").UserError>>;
}
//# sourceMappingURL=PreconditionContainerSimple.d.ts.map