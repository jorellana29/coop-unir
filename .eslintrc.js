module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
  },
  plugins: [
    'vue',
  ],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/comment-directive': 0,
    'vue/multi-word-component-names': ['error', {
      ignores: ['consultas']
    }]
  },
};
