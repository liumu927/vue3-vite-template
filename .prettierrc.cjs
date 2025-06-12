/**
 * Prettier 配置文件
 * 用于统一代码格式化风格
 */
module.exports = {
    semi: false, // 行尾不使用分号
    singleQuote: true, // 使用单引号而不是双引号
    trailingComma: "all", // 多行时尾随逗号的处理方式："all" 表示所有可能的地方都加逗号
    arrowParens: "avoid", // 箭头函数参数括号：单参数时省略括号，例如 x => x + 1
    printWidth: 120, // 一行最大宽度，超出将自动换行
    tabWidth: 2, // 缩进使用2个空格
    useTabs: false, // 不使用Tab缩进，使用空格缩进
    endOfLine: "auto", // 行尾换行符处理：auto自动识别，适应不同操作系统
};
