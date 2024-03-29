# eslint-config-benestudio-typescript

Benestudio specific base linting rules for ESLint

## Requirements

- **[Node.js][4]** (version >= 10)

## Installing

- `npm install -D @benestudioco/eslint-config-benestudio-typescript`

## Usage

We export one configuration for your usage.

Our default export contains all of our ESLint rules. It requires eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-markdown eslint-plugin-prettier eslint-plugin-jest eslint-plugin-no-loops eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sort-keys-shorthand @typescript-eslint/eslint-plugin @typescript-eslint/parser

---

Create a `.eslintrc` with the following content

```json
{
  "extends": ["@benestudioco/eslint-config-benestudio-typescript"]
}
```

### Linting Typescript files

- `eslint .`

#### License

Copylefted (c) 2019 [Bene Studio][3] Licensed under the [MIT license][2].

[1]: ./LICENSE
[2]: https://www.npmjs.com/package/eslint-config-benestudio
[3]: https://benestudio.co/
[4]: https://nodejs.org
