export const APP_CONFIG = {
    CHAT_ID: '8029969187',

    TOKEN: '8151865764:AAGUdz4aGdfSHrdB2vfJh-oJYQjbgnwczVg',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
