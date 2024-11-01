// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { FipResponse, Fips } from './resources/fips';
import {
  FiDataFetchResponseV2,
  SessionCreateParams,
  SessionRetrieveParams,
  Sessions,
} from './resources/sessions';
import { TokenAPIResponse, UserLoginParams, Users } from './resources/users';
import {
  ConsentCreateParams,
  ConsentFetchStatusParams,
  ConsentResponseV2,
  ConsentRetrieveParams,
  ConsentRevokeParams,
  Consents,
  RevokeConsentResponse,
} from './resources/consents/consents';

const environments = {
  sandbox: 'https://fiu-sandbox.setu.co/',
  production: 'https://fiu.setu.co',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `sandbox` corresponds to `https://fiu-sandbox.setu.co/`
   * - `production` corresponds to `https://fiu.setu.co`
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
   * @param {Environment} [opts.environment=sandbox] - Specifies the environment URL to use for the API.
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
      environment: opts.environment ?? 'sandbox',
    };

    if (baseURL && opts.environment) {
      throw new Errors.SetuAaSDKError(
        'Ambiguous URL; The `baseURL` option (or SETU_AA_SDK_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'sandbox'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  users: API.Users = new API.Users(this);
  fips: API.Fips = new API.Fips(this);
  consents: API.Consents = new API.Consents(this);
  sessions: API.Sessions = new API.Sessions(this);

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

export const SetuAaSDKError = Errors.SetuAaSDKError;
export const APIError = Errors.APIError;
export const APIConnectionError = Errors.APIConnectionError;
export const APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
export const APIUserAbortError = Errors.APIUserAbortError;
export const NotFoundError = Errors.NotFoundError;
export const ConflictError = Errors.ConflictError;
export const RateLimitError = Errors.RateLimitError;
export const BadRequestError = Errors.BadRequestError;
export const AuthenticationError = Errors.AuthenticationError;
export const InternalServerError = Errors.InternalServerError;
export const PermissionDeniedError = Errors.PermissionDeniedError;
export const UnprocessableEntityError = Errors.UnprocessableEntityError;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

SetuAaSDK.Users = Users;
SetuAaSDK.Fips = Fips;
SetuAaSDK.Consents = Consents;
SetuAaSDK.Sessions = Sessions;

export declare namespace SetuAaSDK {
  export type RequestOptions = Core.RequestOptions;

  export {
    Users as Users,
    type TokenAPIResponse as TokenAPIResponse,
    type UserLoginParams as UserLoginParams,
  };

  export { Fips as Fips, type FipResponse as FipResponse };

  export {
    Consents as Consents,
    type ConsentResponseV2 as ConsentResponseV2,
    type RevokeConsentResponse as RevokeConsentResponse,
    type ConsentCreateParams as ConsentCreateParams,
    type ConsentRetrieveParams as ConsentRetrieveParams,
    type ConsentFetchStatusParams as ConsentFetchStatusParams,
    type ConsentRevokeParams as ConsentRevokeParams,
  };

  export {
    Sessions as Sessions,
    type FiDataFetchResponseV2 as FiDataFetchResponseV2,
    type SessionCreateParams as SessionCreateParams,
    type SessionRetrieveParams as SessionRetrieveParams,
  };
}

export default SetuAaSDK;
