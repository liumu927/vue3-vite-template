/**
 * @file commitlint配置文件
 * @description 验证提交信息是否符合规范
 */

const types = require('./.cz-config.cjs').types;
const scopes = require('./.cz-config.cjs').scopes || [];
const subjectLimit = require('./.cz-config.cjs').subjectLimit || 100;

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 类型枚举：0表示禁用规则，1表示警告，2表示错误
        'type-enum': [
            2, // 错误级别
            'always',
            types.map((type) => type.value),
        ],
        // 类型大小写
        'type-case': [2, 'always', 'lower-case'],
        // 类型不能为空
        'type-empty': [2, 'never'],
        // 作用域可以为空
        'scope-empty': [0, 'never'],
        // 作用域大小写
        'scope-case': [0],
        // 作用域枚举 - 如果配置了scopes，则使用配置的作用域，否则允许自定义
        'scope-enum': scopes.length > 0 ? [1, 'always', scopes] : [0],
        // 主题不能为空
        'subject-empty': [2, 'never'],
        // 主题不以.结尾
        'subject-full-stop': [2, 'never', '.'],
        // 主题大小写，0表示不限制
        'subject-case': [0],
        // 主题长度
        'subject-max-length': [2, 'always', subjectLimit],
        // 头部最大长度
        'header-max-length': [2, 'always', 100],
        // body开始不能有空行
        'body-leading-blank': [1, 'always'],
        // footer开始不能有空行
        'footer-leading-blank': [1, 'always'],
    },
};

