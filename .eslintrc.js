module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier/@typecript-eslint',
    'plugin:prettier/recomended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': "error",
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
