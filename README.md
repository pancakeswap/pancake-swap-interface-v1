![pancakeswap.finance](https://pancakeswap.finance/static/media/chef2.63985e0c.png =300x)

## Intro

[PancakeSwap](https://pancakeswap.finance/) is an automated market maker (“**AMM**”) that allows two tokens to be exchanged on the [Binance Smart Chain](https://www.binance.org/en/smartChain) (BSC). It is fast, cheap, and allows anyone to participate.

##

This repo is responsible for the **exchange/pool** interfaace of the AMM: [exchange.pancakeswap.finance](https://exchange.pancakeswap.finance/)

## Run locally

Install packages

```js
yarn
```

Start application

```js
yarn start
```

## Change BSC network

To change the BSC network from test net, modify the `REACT_APP_CHAIN_ID` value in `.env`.

- MAIN NET `56`
- TEST NET `97`

## Run integration tets

Firstly, if you need to install cypress

```js
yarn cypress install
```

Then to run the Cypress suite in CLI

```js
yarn cypress run
```

Or, to run Cypress with its GUI

```js
yarn cypress open
```
