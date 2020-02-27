export type commandOptions = {
  readonly name: string;
  readonly aliases?: string[];
  readonly description?: string;
  readonly ownerOnly?: boolean;
  readonly guildOnly?: boolean;
  readonly args?: { [argsName: string]: string } | boolean;
};
