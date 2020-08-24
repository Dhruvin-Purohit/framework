import type { Message } from 'discord.js';
import { UserError } from '../lib/errors/UserError';
import { Precondition } from '../lib/structures/Precondition';
import { Result } from '../lib/utils/Result';
import type { Awaited } from '../lib/utils/Types';
export declare class CorePrecondition extends Precondition {
    run(message: Message): Awaited<Result<unknown, UserError>>;
}
//# sourceMappingURL=DMOnly.d.ts.map