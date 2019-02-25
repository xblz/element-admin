# element-admin

- 基于 vue-cli3 创建，开发、构建依赖 vue-cli。
- UI 框架使用[element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation)。
- gitHooks，commit 代码时，检查、修复代码格式。

---

### 初始化，添加项目依赖

```
yarn install（推荐）
npm install
```

---

### 启动项目

```
npm run dev
```

---

### 构建项目

```
npm run build:dev  指定开发环境（.env.development）
npm run build:test 指定测试环境（.env.test）
npm run build:prod 指定生产环境（.env.production）
```

---

### 检查、修复代码格式

```
npm run lint
```

### 代码风格统一

```
eslint 配置说明（.eslintrc.js）:
  {
    'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
    curly: 'error', // 循环或者条件语句必须使用花括号包住
    eqeqeq: 'error', // 使用强制等===
    'max-len': 'off', // 取消行长度限制
    'no-console': 'error', // 禁止使用console时
    'no-debugger': 'error', // 禁止使用debugger时
    'no-mixed-spaces-and-tabs': 'error', // 不允许空格和 tab 混合缩进
    'no-unreachable': 'error', // 禁止在return、throw、continue 和 break语句之后出现不可达代码
  }
```

```
prettier 配置说明（.prettierrc.js）:

  {
    arrowParens: 'always', // 始终为箭头函数参数添加圆括号
    printWidth: 200, // 单行长度200
    singleQuote: true // 使用单引号
  }
```
