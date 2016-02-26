# Welcome to the most strict eslint config ever

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
- `no-restricted-syntax` - duplicates `no-with` and `no`
- `no-ternary` - why not? but nested ternary please
- `require-jsdoc`- nice thing, but hard to follow
- `spaced-comment` - nice for meaningful comments, but hard to argue when you commenting peaces of code
- `wrap-regex` - no need

## What is tweaked
- `dot-location` - `property` mode enabled
- `eqeqeq` - `smart` mode enabled
- `no-implicit-coercion` - boolean implicit coercion enabled
- `no-use-before-define` - usage of `function` declarations before usage are allowed
- `no-mixed-requires`- `grouping` and `allowCall` checks enabled
- `func-style` - `declaration` only please
- `indent` - 2 spaces rulezzz!
- `linebreak-style` - unix only
- `one-var` - `never` use one `var|let|const` per block
- `padded-blocks` - `never` add useless padding
- `quote-props` - quote properties only `as-needed` and `keywords`

## Contribution
- what I really appreciate is configs for IDEs
- to change any rule you should have strong arguments and not only opinion
