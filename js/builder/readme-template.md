# JS Guidelines

### References

- [http://eslint.org/docs/rules/](http://eslint.org/docs/rules/)
- [http://rapilabs.github.io/eslintrc-generator/](http://rapilabs.github.io/eslintrc-generator/)
- [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
- [https://github.com/google/eslint-config-google](https://github.com/google/eslint-config-google)

### Instructions to build doc

- Update `.eslintc.js` file
- Open terminal in `./builder/` folder
- Launch `node index.js`

### Add support to Node.js

- Install [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node) using `npm install --save-dev eslint-plugin-node`
- Update .eslintrc.js

```
{
    'plugins': ['node'],
    'extends': ['eslint:recommended', 'plugin:node/recommended'],
}
```

### Rules

{{rules}}

### Todo

{{todo}}