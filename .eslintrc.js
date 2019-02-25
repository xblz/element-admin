module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
    curly: 'error', // 循环或者条件语句必须使用花括号包住
    eqeqeq: ['error', 'allow-null'], // 使用强制等===；null,undefined除外
    'max-len': ['error', 150], // 强制一行的最大长度150
    'no-console': 'warn', // 使用console时，警告
    'no-debugger': 'warn', // 使用debugger时，警告
    'no-mixed-spaces-and-tabs': 'error', // 不允许空格和 tab 混合缩进
    'no-unreachable': 'error', // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always', // 始终为箭头函数参数添加圆括号
        printWidth: 150, // 单行长度150
        singleQuote: true // 使用单引号
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
