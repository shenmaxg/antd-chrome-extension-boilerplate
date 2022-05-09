module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true
        },
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "globale": {
        WRAPPER_CLASS_NAME: true
    },
    "rules": {
        indent: ["error", 4],
        'react/jsx-indent': ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        'linebreak-style': 'off',
        'comma-dangle': ['error', 'never'],
        "class-methods-use-this": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "no-param-reassign": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "react/jsx-props-no-spreading": "off",
        "react/self-closing-comp": "off",
        "react/prefer-stateless-function": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/no-did-mount-set-state": "off",
        "react/forbid-prop-types": "off",
        "react/destructuring-assignment": "off",
        "max-classes-per-file": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "import/prefer-default-export": "off",
        "max-len": "off",
        "react/jsx-filename-extension": "off",
        "react/prop-types": "off",
        "react/sort-comp": "off",
        "react/jsx-closing-tag-location": "off",
        "react/no-unescaped-entities": "off",
        "react/no-array-index-key": "off",
        "react/jsx-no-bind": "off"
    },
};
