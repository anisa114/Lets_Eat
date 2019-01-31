module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-newline": "error",
        "array-bracket-spacing": "error",
        "array-callback-return": "error",
        "array-element-newline": "error",
        "arrow-body-style": "error",
<<<<<<< HEAD
        "arrow-parens": "error",
        "arrow-spacing": "error",
=======
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "callback-return": "error",
        "camelcase": "error",
        "capitalized-comments": "error",
        "class-methods-use-this": "error",
        "comma-dangle": "error",
<<<<<<< HEAD
        "comma-spacing": "error",
        "comma-style": [
            "error",
            "last"
        ],
=======
        "comma-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "comma-style": "error",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "complexity": "error",
        "computed-property-spacing": "error",
        "consistent-return": "error",
        "consistent-this": "error",
        "curly": "error",
        "default-case": "error",
<<<<<<< HEAD
        "dot-location": "error",
=======
        "dot-location": [
            "error",
            "property"
        ],
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
<<<<<<< HEAD
        "func-names": "error",
=======
        "func-names": "off",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "func-style": "error",
        "function-paren-newline": "error",
        "generator-star-spacing": "error",
        "global-require": "error",
        "guard-for-in": "error",
        "handle-callback-err": "error",
        "id-blacklist": "error",
        "id-length": "error",
        "id-match": "error",
<<<<<<< HEAD
        "implicit-arrow-linebreak": "error",
=======
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "indent": "off",
        "indent-legacy": "off",
        "init-declarations": "error",
        "jsx-quotes": "error",
<<<<<<< HEAD
        "key-spacing": "off",
=======
        "key-spacing": "error",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "keyword-spacing": "error",
        "line-comment-position": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": "error",
        "lines-around-directive": "error",
        "lines-between-class-members": "error",
        "max-classes-per-file": "error",
        "max-depth": "error",
        "max-len": "error",
        "max-lines": "error",
        "max-lines-per-function": "error",
        "max-nested-callbacks": "error",
        "max-params": "error",
        "max-statements": "error",
        "max-statements-per-line": "error",
        "multiline-comment-style": "error",
        "multiline-ternary": "error",
        "new-cap": "error",
        "new-parens": "error",
        "newline-after-var": "error",
        "newline-before-return": "error",
<<<<<<< HEAD
        "newline-per-chained-call": "error",
=======
        "newline-per-chained-call": "off",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-confusing-arrow": "error",
        "no-continue": "error",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "error",
        "no-misleading-character-class": "error",
        "no-mixed-operators": "error",
        "no-mixed-requires": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
<<<<<<< HEAD
        "no-multiple-empty-lines": "error",
=======
        "no-multiple-empty-lines": "off",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "no-native-reassign": "error",
        "no-negated-condition": "error",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-path-concat": "error",
        "no-plusplus": "error",
<<<<<<< HEAD
        "no-process-env": "off",
=======
        "no-process-env": "error",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "error",
        "no-sync": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "error",
        "no-throw-literal": "error",
<<<<<<< HEAD
        "no-trailing-spaces": "error",
=======
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-underscore-dangle": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-use-before-define": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": "error",
        "object-property-newline": "error",
        "object-shorthand": "error",
        "one-var": "error",
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": "error",
<<<<<<< HEAD
        "padded-blocks": "error",
=======
        "padded-blocks": "off",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "padding-line-between-statements": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-reflect": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
<<<<<<< HEAD
        "prefer-template": "off",
        "quote-props": "off",
=======
        "prefer-template": "error",
        "quote-props": "error",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "quotes": [
            "error",
            "single"
        ],
        "radix": "error",
        "require-atomic-updates": "error",
        "require-await": "error",
        "require-jsdoc": "error",
        "require-unicode-regexp": "error",
        "rest-spread-spacing": "error",
<<<<<<< HEAD
        "semi": "error",
=======
        "semi": "off",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "semi-spacing": "error",
        "semi-style": [
            "error",
            "last"
        ],
        "sort-imports": "error",
<<<<<<< HEAD
        "sort-keys": "off",
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": "error",
=======
        "sort-keys": "error",
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": "off",
>>>>>>> e32146e4b79c0c9cda65f757effc7464ca5dad7d
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "strict": "error",
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": [
            "error",
            "never"
        ],
        "valid-jsdoc": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        "wrap-regex": "error",
        "yield-star-spacing": "error",
        "yoda": "error"
    }
};