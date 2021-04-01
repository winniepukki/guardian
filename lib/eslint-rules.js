module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prefer-es6-class': [1, 'always'],
    quotes: [2, 'single'],
    'import/extensions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    "arrow-parens": [
      "error",
      "always"
    ],
    "sort-imports": "off",
    "import/order": "off",
    "import/no-cycle": [
      "error",
      {
        "maxDepth": 4
      }
    ],
    "no-var": "error",
    "css-rcurlyexpected": 0,
    "react/static-property-placement": [
      "error",
      "static public field"
    ],
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "no-restricted-globals": [
      "error",
      "isFinite",
      "isNaN"
    ],
    "max-len": [
      2,
      {
        "ignoreComments": true,
        "ignoreUrls": true,
        "code": 90
      }
    ],
    "no-shadow": 0,
    "class-methods-use-this": 0,
    "camelcase": 0,
    "no-underscore-dangle": "off",
    "template-curly-spacing": "off",
    "computed-property-spacing": "off",
    "import/no-unresolved": 0,
    "import/named": 0,
    "no-plusplus": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-curly-spacing": [
      2,
      {
        "when": "always",
        "allowMultiline": false,
        "children": true
      }
    ],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/jsx-no-useless-fragment": [
      2,
      {
        "max": 2
      }
    ],
    "curly": [
      2,
      "all"
    ],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "react/sort-comp": [
      2,
      {
        "order": [
          "type-annotations",
          "static-variables",
          "static-methods",
          "instance-variables",
          "__construct",
          "lifecycle",
          "everything-else",
          "render"
        ]
      }
    ],
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/button-has-type": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 2,
    "react/jsx-no-bind": [
      2,
      {
        "ignoreDOMComponents": false,
        "ignoreRefs": true,
        "allowArrowFunctions": false,
        "allowFunctions": false,
        "allowBind": false
      }
    ],
    "react/forbid-prop-types": [
      2,
      {
        "forbid": [
          "className"
        ]
      }
    ],
    "react/forbid-component-props": [
      2,
      {
        "forbid": [
          "className"
        ]
      }
    ],
    "react/forbid-dom-props": [
      2,
      {
        "forbid": [
          "className"
        ]
      }
    ],
    "react/no-deprecated": 2,
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "newIsCapExceptions": [
          "middleware"
        ]
      }
    ],
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "acc",
          "sum"
        ]
      }
    ],
    "no-magic-numbers": [
      "error",
      {
        "ignore": [
          1,
          0,
          2,
          -1
        ]
      }
    ],
    "indent": [
      "error",
      4,
      {
        "ignoredNodes": [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ]
      }
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "no-case-declarations": "off",
    "jsx-a11y/label-has-for": 0,
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": [
          "const",
          "let",
          "var"
        ]
      },
      {
        "blankLine": "always",
        "prev": [
          "block",
          "block-like",
          "multiline-block-like",
          "multiline-expression",
          "multiline-const",
          "multiline-let",
          "multiline-var"
        ],
        "next": "return"
      },
      {
        "blankLine": "any",
        "prev": [
          "singleline-const",
          "singleline-let",
          "singleline-var"
        ],
        "next": "*"
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "array": false,
        "object": true
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "no-extra-semi": "error"
  }
};
