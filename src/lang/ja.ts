import { Lang } from '../index';

export = class extends Lang {
  LOADING(type: string): string {
    return `${type}を読み込んでいます...`;
  }
  BOT_READY = '準備が完了しました!';
  COMMAND_DIR_FILE_WARN =
    "ファイルを'commands'フォルダの直下に置くことはできません";
};
