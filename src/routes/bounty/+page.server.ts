import { Root } from '../../contracts/root';
import { DefaultProvider, bsv } from 'scrypt-ts';
import { NeucronSigner } from 'neucron-signer';
import artifact from '../../../artifacts/root.json';
import type { Actions } from './$types';

const provider = new DefaultProvider({ network: bsv.Networks.mainnet });
const signer = new NeucronSigner(provider);
let instance: Root | null = null;

export const actions: Actions = {
  deploy: async ({ request }) => {
    const data = await request.formData();
    console.log(data.get('bounty'));

    await signer.login('sales@timechainlabs.io', 'string');
    await Root.loadArtifact(artifact);

    const square = BigInt(data.get('square') as string);
    instance = new Root(square);
    await instance.connect(signer);

    const deployTx = await instance.deploy(parseInt(data.get('bounty') as string, 10));
    console.log('smart lock deployed : https://whatsonchain.com/tx/' + deployTx.id);

    return { success: true, tx: deployTx.id };
  },
  unlock: async ({ request }) => {
    const data = await request.formData();
    console.log("this",data.get('root'))
    const root = parseInt(data.get('root') as string);

    if (instance === null) {
      throw new Error('Instance is not deployed yet.');
    }

    const {tx:callTx} = await instance.methods.unlock(root);

    console.log('contract unlocked successfully = https://whatsonchain.com/tx/' + callTx.id);

    return { success: true, tx: callTx.id };
  },
};
