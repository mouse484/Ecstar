/* Langage Base English US  */

export class LangBase {
  LOADING(type: string): string {
    return `Loading ${type}...`;
  }
  BOT_READY = 'Ready to Go!';

  COMMAND_DIR_FILE_WARN =
    "Files cannot be placed directly under 'commands' folder";

  NON_EXISTENT_COMMAND(commandName: string): string {
    return `Non-existent command(${commandName})`;
  }

  COMMAND = {
    OWNER_ONLY: 'Owner-only command',
    GUILD_ONLY: 'Server-only command',
    NEED_PERMISSION: 'The Command require permission',
  };

  WRONG_ARGGUMENT(type: string, message: string): string {
    return `${message}\nPlease enter the ${type} again`;
  }
  MISSING_ARGUMENT = 'Missing argument';
  INVALID_ARGUMENT = (type: string) => {
    return `The ${type} passed in the argument is invalid`;
  };
  TIME_OUT_ARGUMENT = 'Accepting arguments has timed out';
}
