module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended',
		'prettier',
		'plugin:react/recommended'
	],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	},
	plugins: ['react', 'react-hooks'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	globals: {
		JSX: true
	},
	rules: {
		'@typescript-eslint/no-require-imports': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-empty-function': 0,

		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 0,

		'react/prop-types': 'off',
		'react/display-name': 0,
		'react/jsx-indent': [0, 2],
		'react/jsx-indent-props': 'off',
		'react/no-string-refs': 'off',
		'react/self-closing-comp': 2,
		'react/jsx-max-props-per-line': [0, { maximum: 3 }],
		'react/jsx-boolean-value': [2, 'never'],
		'react/jsx-closing-bracket-location': 2,
		'react/jsx-closing-tag-location': 2,
		'react/jsx-curly-newline': 0,
		'react/jsx-equals-spacing': [2, 'never'],
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-pascal-case': 1,
		'react/jsx-props-no-multi-spaces': 2,

		'no-unused-expressions': 0, // 禁止未使用过的表达式
		'no-var': 2,
		'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
		'arrow-spacing': [
			2,
			{
				// 强制箭头函数的箭头前后使用一致的空格
				before: true,
				after: true
			}
		],
		'block-spacing': [2, 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
		'brace-style': [
			2,
			'1tbs',
			{
				// 大括号风格要求
				allowSingleLine: true
			}
		],
		'comma-spacing': [
			2,
			{
				// 逗号周围使用空格
				before: false,
				after: true
			}
		],
		'comma-style': [2, 'last'], // 逗号风格
		curly: [2, 'multi-line'], // 所有控制语句使用一致的括号风格
		// 'eol-last': 2, // 禁止文件末尾保留一行空行
		'generator-star-spacing': [
			2,
			{
				// 强制 generator 函数中 * 号周围有空格
				before: true,
				after: true
			}
		],
		'handle-callback-err': [2, '^(err|error|e)$'], // 强制回调错误处理
		'jsx-quotes': [2, 'prefer-single'], // jsx中使用单引号
		'key-spacing': [
			2,
			{
				// 在对象字面量的键和值之间使用一致的空格
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': [
			2,
			{
				// 关键词之后添加空格
				before: true,
				after: true
			}
		],
		'new-cap': [
			2,
			{
				// 构造函数首字母大写
				newIsCap: true,
				capIsNew: false
			}
		],
		'new-parens': 2, // 调用无参构造函数时带括号
		'no-array-constructor': 2, // 禁用 Array 构造函数
		'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee
		'no-empty': 1,
		'no-eval': 2,
		'no-extend-native': 2, // 禁止扩展原生类型
		'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
		'no-extra-parens': [2, 'functions'], // 禁止冗余的括号
		'no-fallthrough': 0, // case 语句落空
		'no-floating-decimal': 2, // 禁止浮点小数
		'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
		'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的语句块中出现变量或 function 声明
		'no-iterator': 2, // 禁用迭代器
		'no-label-var': 2, // 禁用与变量同名的标签
		'no-labels': [
			2,
			{
				// 禁用label语句
				allowLoop: false,
				allowSwitch: false
			}
		],
		'no-lone-blocks': 2, // 禁用不必要的嵌套块
		'no-multi-str': 2, // 禁止多行字符串
		'no-multiple-empty-lines': [
			2,
			{
				// 最多一个空行
				max: 1
			}
		],
		'no-negated-in-lhs': 2, // 禁止对关系运算符的左操作数使用否定操作符
		'no-new-object': 2,
		'no-new-require': 2, // 不允许 new require
		'no-new-wrappers': 2, // 禁止原始包装实例
		'no-path-concat': 2, // 禁止手拼路径
		'no-proto': 2,
		'no-return-assign': [2, 'except-parens'], // 禁止在返回语句中赋值
		'no-self-compare': 2,
		'no-sequences': 2, // 不允许使用逗号操作符
		'no-spaced-func': 2, // 禁止在函数标识符和其调用之间有空格
		'no-throw-literal': 2, // 限制可以被抛出的异常
		'no-trailing-spaces': 2, // 禁用行尾空白
		'no-undef-init': 2, // 不允许初始化变量值为 undefined
		'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
		'no-unneeded-ternary': [
			2,
			{
				// 禁止可以表达为更简单结构的三元操作符
				defaultAssignment: false
			}
		],
		'no-unused-vars': [
			0,
			{
				// 禁止未使用过的变量
				vars: 'all',
				args: 'all'
			}
		],
		'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
		'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
		'no-useless-constructor': 2, // 禁用不必要的构造函数
		'no-await-in-loop': 2, // 禁止在循环中出现 await
		'no-whitespace-before-property': 2, // 禁止属性前有空白
		'one-var': [
			2,
			{
				// 强制函数中的变量在一起声明或分开声明
				initialized: 'never'
			}
		],
		'operator-linebreak': [
			2,
			'after',
			{
				// 一致换行符
				overrides: {
					'?': 'before',
					':': 'before'
				}
			}
		],
		'padded-blocks': [2, 'never'], // 禁止块内填充
		'space-before-blocks': [2, 'always'], // 语句块之前的空格
		'space-before-function-paren': [0, 'never'], // 禁止函数圆括号之前有一个空格
		'space-in-parens': [2, 'never'], // 强制圆括号内的空格
		'space-infix-ops': 2, // 要求中缀操作符周围有空格
		'space-unary-ops': [
			2,
			{
				// 要求或禁止在一元操作符之前或之后存在空格
				words: true,
				nonwords: false
			}
		],
		'spaced-comment': [
			2,
			'always',
			{
				// 注释前有空白
				markers: [
					'global',
					'globals',
					'eslint',
					'eslint-disable',
					'*package',
					'!',
					','
				]
			}
		],
		'template-curly-spacing': [2, 'never'], // 禁止花括号内出现空格
		'wrap-iife': [2, 'any'], // 需要把立即执行的函数包裹起来
		'yield-star-spacing': [2, 'both'], // 强制在 yield* 表达式中 * 周围使用空格
		yoda: [2, 'never'], // 比较绝不能是 Yoda 条件
		'prefer-const': 2,
		'object-curly-spacing': [
			2,
			'always',
			{
				// 强制在花括号中使用一致的空格
				objectsInObjects: false
			}
		],
		'array-bracket-spacing': [2, 'never'], // 禁止在数组括号内出现空格
		'no-magic-numbers': [0, { ignore: [1, 2], ignoreArrayIndexes: true }],
		'require-await': 2
	}
}
