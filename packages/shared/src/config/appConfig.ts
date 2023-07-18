/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const MAX_PAGE_CONTAINER_WIDTH = 1024;

/**
 * Tokens will injected at build process. These are client token.
 */
// export const COVALENT_API_KEY = 'ckey_55983a3c667e4b2c93b424a6fe1'; // OLD
export const COVALENT_API_KEY = 'cqt_wFCrWJFBr4XW6y7xymtWTrC4vkqR'; // NEW

export const MOONPAY_API_KEY = 'pk_live_rCU1d5XwCy4RxKJfmW6mX2r6vkzKgUZs';

export const JPUSH_KEY = process.env.JPUSH_KEY!;

export const HARDWARE_SDK_IFRAME_SRC =
  process.env.HARDWARE_SDK_CONNECT_SRC || 'https://jssdk.onekey.so/0.2.27/';

export const HARDWARE_BRIDGE_DOWNLOAD_URL =
  'https://onekey.so/download/?client=bridge';

export const CERTIFICATE_URL = 'https://certificate.onekey.so/verify';
