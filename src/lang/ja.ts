import { Lang } from 'ecstar';
import { strict } from 'assert';

export = class extends Lang {
  LOADING(type: string): string {
    return `${type}を読み込んでいます...`;
  }
  BOT_READY = '準備が完了しました!';
  COMMAND_DIR_FILE_WARN =
    "ファイルを'commands'フォルダの直下に置くことはできません";
  WRONG_ARGGUMENT(type: string, message: string): string {
    return `${message}\n${type}をもう一度入力してください`;
  }
  MISSING_ARGUMENT = '引数が不足しています';
  INVALID_ARGUMENT = (type: string) => {
    `引数に渡された値は${type}ではありません。`;
  };
};
