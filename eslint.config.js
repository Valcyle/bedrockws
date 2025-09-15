export default [
  {
    files: ["src/**/*.js", "test/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly"
      }
    },
    rules: {
      "semi": ["error", "always"],       // セミコロン必須
      "quotes": ["error", "double"],     // ダブルクオート
      "no-unused-vars": ["warn"],        // 未使用変数警告
      // "indent": ["error", 4]             // インデント 2 スペース
    }
  }
];
