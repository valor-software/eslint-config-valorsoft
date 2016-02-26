# Welcome to the most strict eslint config ever
[![npm version](https://badge.fury.io/js/eslint-config-valorsoft.svg)](http://badge.fury.io/js/eslint-config-valorsoft) [![npm downloads](https://img.shields.io/npm/dm/eslint-config-valorsoft.svg)](https://npmjs.org/eslint-config-valorsoft)
[![Build Status](https://travis-ci.org/valor-software/eslint-config-valorsoft.svg?branch=master)](https://travis-ci.org/valor-software/eslint-config-valorsoft)
[![Dependency Status](https://david-dm.org/valor-software/eslint-config-valorsoft.svg)](https://david-dm.org/valor-software/eslint-config-valorsoft)
[![devDependency Status](https://david-dm.org/valor-software/eslint-config-valorsoft/dev-status.svg)](https://david-dm.org/valor-software/eslint-config-valorsoft#info=devDependencies)

## Philosophy
- contains all rules
- almost all rules enabled
- this config is highly opinionated

## Where to use
- anywhere
- for tests better to add `env:"node"` and disable `newline-per-chained-call` rule

## What is disabled
- `no-eq-null` - duplicates `eqeqeq:smart`
- `no-restricted-imports`, `no-restricted-modules` - dependant on project requirements
- `id-match` - not found any particular use of this rule, `camelCase` is enough
- `jsx-quotes` - I don't use jsx so I don't care
- `no-plusplus` - why not `++`? It's nice to use when you know what you are doing
- `no-restricted-syntax` - duplicates `no-with` and disabled functional expressions
- `no-ternary` - why not? but not nested ternary please
- `require-jsdoc`- nice thing, but hard to follow
- `spaced-comment` - nice for meaningful comments, bad for quick code commenting
- `wrap-regex` - no need

## What is tweaked
- `indent` - 2 spaces rulezzz!
- `max-len` - extended to 120 chars
- `newline-per-chained-call` - extended `ignoreChainWithDepth` to 3
- `eqeqeq` - `smart` mode enabled
- `dot-location` - `property` mode enabled
- `no-implicit-coercion` - boolean implicit coercion enabled
- `func-style` - `declaration` only please
- `no-use-before-define` - usage of `function` before declarations are allowed
- `no-mixed-requires`- `grouping` and `allowCall` checks enabled
- `linebreak-style` - unix only
- `one-var` - `never` use one `var|let|const` per block
- `padded-blocks` - `never` add useless padding
- `quote-props` - quote properties only `as-needed` and `keywords`
- `no-magic-numbers` - enabled `ignoreArrayIndexes` and `enforceConst`

## Contribution
- what I really appreciate is configs for IDEs
- to change any rule you should have strong arguments and not only opinion
