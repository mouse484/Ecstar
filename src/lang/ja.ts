import { Lang } from 'ecstar';

export = class extends Lang {
  LOADING(type: string): string {
    return `${type}を読み込んでいます...`;
  }
  BOT_READY = '準備が完了しました!';

  COMMAND_DIR_FILE_WARN =
    "ファイルを'commands'フォルダの直下に置くことはできません";

  NON_EXISTENT_COMMAND(commandName: string): string {
    return `存在しないコマンドです(${commandName})`;
  }
  
  WRONG_ARGGUMENT(type: string, message: string): string {
    return `${message}\n${type}をもう一度入力してください`;
  }
  MISSING_ARGUMENT = '引数が不足しています';
  INVALID_ARGUMENT = (type: string) => {
    return `引数に渡された値は${type}ではありません。`;
  };
  TIME_OUT_ARGUMENT = '引数の受付はタイムアウトしました';
};
