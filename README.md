# crunchy-vs-smooth
Smart contract for voting on either crunchy or smooth peanut butter.

## About
* Vote on crunchy vs smooth peanut butter.
* [Instruction](./instruction.md)
 
## Installation
```console
$ npm i
```

## Usage

### Build
```console
$ anchor build
```

* Get the `program-id`
```console
$ solana address -k target/deploy/crunchy_vs_smooth-keypair.json
```

### Test
```console
$ anchor test
```

### Deploying contracts to localhost
#### localhost
```console
// on terminal-1
$ solana-test-validator

// on terminal-2
// to new program-id
$ solana program deploy target/deploy/crunchy_vs_smooth.so

// upgrade to existing program-id
$ solana upgrade target/deploy/crunchy_vs_smooth.so --program-id EGzbH5pZmHhm26PBtEYA57WsLUkGA2vqn8vhsREenfNS
```

### Deploying contracts to Devnet (Public)
> Pre-requisite: Connect to `devnet`. Verify via `$ solana config get`

* Deploy the contract to a new program-id
```console
$ solana program deploy target/deploy/crunchy_vs_smooth.so
```
* Deploy the contract to a existing program-id
```console
$ solana upgrade target/deploy/crunchy_vs_smooth.so --program-id EGzbH5pZmHhm26PBtEYA57WsLUkGA2vqn8vhsREenfNS
```

### Deploying contracts to Mainnet
> Pre-requisite: Connect to `mainnet`. Verify via `$ solana config get`

* Deploy the contract to a new program-id
```console
$ solana program deploy target/deploy/crunchy_vs_smooth.so
```
* Deploy the contract to a existing program-id
```console
$ solana upgrade target/deploy/crunchy_vs_smooth.so --program-id EGzbH5pZmHhm26PBtEYA57WsLUkGA2vqn8vhsREenfNS
```
