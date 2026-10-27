// types/snowflake-id.d.ts
declare module 'snowflake-id' {
    export interface SnowflakeIdOptions {
        /** 机器 ID (0-1023) */
        mid?: number;
        /** 纪元偏移 (毫秒) */
        offset?: number;
    }

    // 直接使用 export default，完美适配你的业务代码 import
    export default class SnowflakeId {
        constructor(options?: SnowflakeIdOptions);
        /** 生成雪花 ID 字符串 */
        generate(): string;
    }
}