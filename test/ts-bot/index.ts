import * as Ecstar from '../../src';

const client = new Ecstar.Client({ prefix: 'e!', owner: '444754554517454848' });

client.login(process.env.TOKEN);
