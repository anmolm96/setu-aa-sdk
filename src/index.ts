// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

const environments = {
  production: 'https://fiu-sandbox.setu.co/',
  environment_1: 'https://fiu.setu.co',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://fiu-sandbox.setu.co/`
   * - `environment_1` corresponds to `https://fiu.setu.co`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['SETU_AA_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Setu Aa SDK API.
 */
export class SetuAaSDK extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Setu Aa SDK API.
   *
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['SETU_AA_SDK_BASE_URL'] ?? https://fiu-sandbox.setu.co/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('SETU_AA_SDK_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.SetuAaSDKError(
        'Ambiguous URL; The `baseURL` option (or SETU_AA_SDK_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  users: API.Users = new API.Users(this);
  fipsV2: API.FipsV2 = new API.FipsV2(this);
  consentsV2: API.ConsentsV2 = new API.ConsentsV2(this);
  sessionsV2: API.SessionsV2 = new API.SessionsV2(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static SetuAaSDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static SetuAaSDKError = Errors.SetuAaSDKError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  SetuAaSDKError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace SetuAaSDK {
  export import RequestOptions = Core.RequestOptions;

  export import Users = API.Users;
  export import TokenAPIResponse = API.TokenAPIResponse;
  export import UserLoginParams = API.UserLoginParams;

  export import FipsV2 = API.FipsV2;
  export import FipResponse = API.FipResponse;

  export import ConsentsV2 = API.ConsentsV2;
  export import ConsentResponseV2 = API.ConsentResponseV2;
  export import RevokeConsentResponse = API.RevokeConsentResponse;
  export import ConsentsV2CreateParams = API.ConsentsV2CreateParams;
  export import ConsentsV2RetrieveParams = API.ConsentsV2RetrieveParams;
  export import ConsentsV2FetchStatusParams = API.ConsentsV2FetchStatusParams;
  export import ConsentsV2RevokeParams = API.ConsentsV2RevokeParams;

  export import SessionsV2 = API.SessionsV2;
  export import FiDataFetchResponseV2 = API.FiDataFetchResponseV2;
  export import SessionsV2CreateParams = API.SessionsV2CreateParams;
  export import SessionsV2RetrieveParams = API.SessionsV2RetrieveParams;
}

export default SetuAaSDK;