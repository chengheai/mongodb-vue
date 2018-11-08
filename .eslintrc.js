// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // 不需要
    'space-before-function-paren': 0,  // 函数定义时括号前面要不要有空格
    'eol-last': 0,  // 文件以单一的换行符结束
    'no-extra-semi': 2, // 可以多余的冒号
    'semi': 0,  // 语句可以不需要分号结尾
    'eqeqeq': 0, // 必须使用全等
    'one-var': 0, // 连续声明
    'camelcase': [0, {'properties': 'never'}],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
