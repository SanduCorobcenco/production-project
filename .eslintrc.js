module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:storybook/recommended'],
  overrides: [

  ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ['@babel/preset-env']
    },
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }

  },

  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'javascript'

  ],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    // recommended rules
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/strict-boolean-expressions': 0,
    'react/prop-types': 'off',
    'jsx-ally/no-static-element-interactions': 'off',
    'jsx-ally/click-events-have-key-events': 'off',
    'max-len': ['error', {
      ignoreComments: true,
      code: 100
    }]
  },
  globals: {
    __IS_DEV__: true
  }
}
