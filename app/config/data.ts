export const APP_CONFIG = {
    CHAT_ID: '7876774239',

    TOKEN: '7726439130:AAFl-GLhZUcQI9nWk-b-Xapb4gVfqwdbGMs',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
