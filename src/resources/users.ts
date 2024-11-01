// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Users extends APIResource {
  /**
   * Get Token
   */
  login(params: UserLoginParams, options?: Core.RequestOptions): Core.APIPromise<TokenAPIResponse> {
    const { client, ...body } = params;
    return this._client.post('/users/login', {
      body,
      ...options,
      headers: { client: client.toString(), ...options?.headers },
    });
  }
}

export interface TokenAPIResponse {
  /**
   * Bearer token
   */
  access_token: string;

  /**
   * Bearer token
   */
  refresh_token?: string;
}

export interface UserLoginParams {
  /**
   * Body param: client_id obtained from bridge
   */
  clientID: string;

  /**
   * Body param:
   */
  grant_type: 'client_credentials';

  /**
   * Body param: client secret obtained from bridge
   */
  secret: string;

  /**
   * Header param:
   */
  client: 'bridge';
}

export declare namespace Users {
  export { type TokenAPIResponse as TokenAPIResponse, type UserLoginParams as UserLoginParams };
}
