export const APP_CONFIG = {
    CHAT_ID: '1593089299',

    TOKEN: '7709522793:AAHXbOJHqx-HBxz_3avxGmq89DdKu-YgV10',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
