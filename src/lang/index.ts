/* Langage Base English US  */

export class LangBase {
  LOADING(type: string): string {
    return `Loading ${type}...`;
  }
  BOT_READY = 'Ready to Go!';
  COMMAND_DIR_FILE_WARN =
    "Files cannot be placed directly under 'commands' folder";
  WRONG_ARGGUMENT(type: string, message: string): string {
    return `${message}\nPlease enter the ${type} again`;
  }
  MISSING_ARGUMENT = 'Missing argument';
  INVALID_ARGUMENT = (type: string) => {
    return `The ${type} passed in the argument is invalid`;
  };
  TIME_OUT_ARGUMENT = 'Accepting arguments has timed out';
}
