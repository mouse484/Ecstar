import { Client } from '../../src';
import LangJA from '../../src/lang/ja';

const client = new Client({
  prefix: 'e!',
  owner: '444754554517454848',
  lang: new LangJA(),
});

client.login(process.env.TOKEN);
