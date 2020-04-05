/* Langage Base English US  */

export class LangBase {
  LOADING(type: string): string {
    return `Loading ${type}...`;
  }
  BOT_READY = 'Ready to Go!';
  COMMAND_DIR_FILE_WARN =
    "Files cannot be placed directly under 'commands' folder";
  WRONG_ARGGUMENT(type: string): string {
    return `The command argument is wrong, please enter the ${type} again`;
  }
}
