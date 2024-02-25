module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        'airbnb-typescript',
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        'plugin:prettier/recommended'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json'
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        'prettier'
    ],
    "rules": {
        'react/react-in-jsx-scope': 0,
        "react/jsx-uses-react": 0,
        "react/jsx-props-no-spreading": ["warn"],
        "no-shadow": 0,
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
            }
        ],
        "@typescript-eslint/strict-boolean-expressions": 0,
        "react/no-children-prop": 0,
        "import/no-extraneous-dependencies": 0,
    }
}
