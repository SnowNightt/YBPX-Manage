// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import tseslint from 'typescript-eslint';
// import pluginVue from 'eslint-plugin-vue';

export default [
  // {
  //   languageOptions: { globals: { ...globals.browser, ...globals.node } }
  // },
  // pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  // ...pluginVue.configs['flat/essential'],
  {
    ignores: [
      'dist',
      'node_modules',
      'public',
      '.husky',
      '.vscode',
      '.idea',
      '*.sh',
      '*.md',
      '.prettierrc.json',
      '.stylelintrc.cjs'
    ]
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off'

      // 'import/no-extraneous-dependencies': 'off',
      // 对后缀的检测
      // 'import/extensions': [
      //   'error',
      //   'ignorePackages',
      //   { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
      // ],
      // 'import/order': [
      //   'error',
      //   {
      //     groups: [
      //       /*
      //         builtin ：内置模块，如 path，fs等 Node.js内置模块。
      //         external ：外部模块，如 lodash ，react 等第三方库。
      //         internal ：内部模块，如相对路径的模块、包名前缀为 @ 的模块。
      //         unknown ：未知模块，如模块名没有指定扩展名或模块路径缺失扩展名。
      //         parent ：父级目录的模块。
      //         sibling ：同级目录的模块。
      //         index ：当前目录的 index 文件。
      //         object ：使用ES6 导入的模块。
      //         type ：使用 import type 导入的模块。
      //       */
      //       ['builtin', 'external'],
      //       'internal',
      //       ['parent', 'sibling'],
      //       'index',
      //       'type',
      //       'object',
      //       'unknown'
      //     ],
      //     pathGroups: [
      //       {
      //         pattern: '../**',
      //         group: 'parent',
      //         position: 'after'
      //       },
      //       {
      //         pattern: './*.scss',
      //         group: 'sibling',
      //         position: 'after'
      //       }
      //     ],
      //     // 不同组之间是否换行。
      //     'newlines-between': 'always',
      //     // 根据字母顺序对每组内的引用进行排序。
      //     alphabetize: {
      //       order: 'asc',
      //       caseInsensitive: true
      //     }
      //   }
      // ],
    }
  },
  {
    ignores: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      // 解决 ts 全局类型定义后，eslint报错的问题
      'no-undef': 'off'
    }
  }
];
