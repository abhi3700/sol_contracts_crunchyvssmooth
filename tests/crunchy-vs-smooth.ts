import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { CrunchyVsSmooth } from '../target/types/crunchy_vs_smooth';
const assert = require('assert');
const { SystemProgram } = anchor.web3;

describe('crunchy-vs-smooth', () => {
  // let account: String;

  // Configure the client to use the local cluster.
  const provider = anchor.Provider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.CrunchyVsSmooth as Program<CrunchyVsSmooth>;
  const voteAccount = anchor.web3.Keypair.generate();

  beforeEach('Initializes with 0 votes for crunchy and smooth', async () => {
      // console.log("Testing Initialize...");

    /* The last element passed to RPC methods is always the transaction options. Because voteAccount is being created here, we are required to pass it as a signers array */
    await program.rpc.initialize({
      accounts: {
        voteAccount: voteAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [voteAccount],
    });
    
    // console.log("Your transaction signature", tx);

    const account = await program.account.voteAccount.fetch(
      voteAccount.publicKey
    );
    // console.log(`Crunchy: ${account.crunchy.toString()}`);
    // console.log(`Smooth: ${account.crunchy.toString()}`);

    assert.ok(
      account.crunchy.toString() == 0 && account.smooth.toString() == 0
    );

  });

  it("Votes correctly for crunchy", async () => {
    // vote for crunchy
    await program.rpc.voteCrunchy({
      accounts: {
        voteAccount: voteAccount.publicKey,
      },
    });

    const account = await program.account.voteAccount.fetch(
      voteAccount.publicKey
    );

    // console.log("Crunchy: ", account.crunchy.toString());
    // console.log("Smooth: ", account.smooth.toString());
    // assert that the vote for crunchy == 1
    assert.ok(
      account.crunchy.toString() == 1 && account.smooth.toString() == 0
    );
  });

  it("Votes correctly for smooth", async () => {
    // vote for smooth
    await program.rpc.voteSmooth({
      accounts: {
        voteAccount: voteAccount.publicKey,
      }
    });

    const account = await program.account.voteAccount.fetch(
      voteAccount.publicKey
    );

    // console.log("Crunchy: ", account.crunchy.toString());
    // console.log("Smooth: ", account.smooth.toString());

    // assert that the vote for smooth == 1
    assert.ok(
      account.crunchy.toString() == 0 && account.smooth.toString() == 1
    );
  });

});
