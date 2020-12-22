import type { Awaited } from '@sapphire/pieces';
import type { Message } from 'discord.js';
import type { UserError } from '../../errors/UserError';
import type { Command } from '../../structures/Command';
import type { Result } from '../Result';

export interface IPreconditionContainer {
	run(message: Message, command: Command): Awaited<Result<unknown, UserError>>;
}
