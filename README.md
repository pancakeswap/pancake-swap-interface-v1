![pancakeswap](https://pancakeswap.finance/logo.png)

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

# Localisation

_In order for the Crowdin API queries to work - you will need `REACT_APP_CROWDIN_APIKEY` & `REACT_APP_CROWDIN_PROJECTID` env variables set in your root `.env.development.local` file - please contact a dev if you need these._

### Adding translations

There are two methods for adding translations, both are valid, and it depends on the context in which you are trying to implement the translation as to which you should use.

#### 1. Using `TranslateString` within `translateTextHelpers`

If you need to translate a string that exists within another string, i.e:

```js
<span>I need to translate this bit of the span. I don't need to translate this second sentence.</span>
```

Or, a string that is being passed into a component as props, i.e.:

```js
<Component label="This text need translated" />
```

Then you should make use of the `TranslateString` method within `translateTextHelpers`.

It takes in the `translationId` (found in Crowdin) as the first argument, and a string of fallback text as the second argument, which is rendered if the translation isn't found,

```js
import { TranslateString } from '../translateTextHelpers'
;<StyledLink>🍯 {TranslateString(282, 'SYRUP Pool')}</StyledLink>
```

```js
import { TranslateString } from '../translateTextHelpers'
;<Button text={`🔓 ${TranslateString(292, 'Unlock Wallet')}`} />
```

#### 2. Using `TranslatedText` component

This is a simple abstraction of the `TranslateString` method, wrapping it within a React Component - this can be a visually simpler pattern, if you are wanting to translate standalone piece of text.

It takes in a `translationId` prop and whatever is passed as `{children}` is used for the fallback, i.e.:

```js
<StyledLink to="/farms">
    <TranslatedText translationId={278}>Farm</TranslatedText>
</StyledLink>
<StyledLink to="/staking">
    <TranslatedText translationId={280}>Staking</TranslatedText>
</StyledLink>
```

### Variables

The translation component can handle variables being passed in from Crowdin, with no code changes.

It will only work if there is only **one** variable passed in, and if that variable within Crowdin is wrapped in **%** signs, i.e.:

Translation in crowdin: `%asset% Earned` [link](https://crowdin.com/translate/pancakeswap/8/en-de#330)

Code:

```js
<Label text={TranslateString(330, 'CAKE Earned')} />
```

---
