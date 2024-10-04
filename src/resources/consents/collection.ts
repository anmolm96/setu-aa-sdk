// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CollectionAPI from './collection';

export class Collection extends APIResource {
  /**
   * Create multi consent
   */
  create(
    params: CollectionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MultiConsentResponse> {
    const { Authorization, 'x-product-instance-id': xProductInstanceId, ...body } = params;
    return this._client.post('/v2/consents/collection', {
      body,
      ...options,
      headers: {
        Authorization: Authorization,
        'x-product-instance-id': xProductInstanceId,
        ...options?.headers,
      },
    });
  }

  /**
   * Get multi consent
   */
  retrieve(
    id: string,
    params: CollectionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MultiConsentResponse> {
    const { Authorization, 'x-product-instance-id': xProductInstanceId } = params;
    return this._client.get(`/v2/consents/collection/${id}`, {
      ...options,
      headers: {
        Authorization: Authorization,
        'x-product-instance-id': xProductInstanceId,
        ...options?.headers,
      },
    });
  }
}

export interface MultiConsentResponse {
  consentCollectionId: string;

  txnid: string;

  /**
   * Webview url
   */
  url: string;
}

export interface CollectionCreateParams {
  /**
   * Body param:
   */
  mandatoryConsents: Array<string>;

  /**
   * Header param: Authorization Bearer token
   */
  Authorization: string;

  /**
   * Header param: Product instance ID of FIU
   */
  'x-product-instance-id': string;

  /**
   * Body param:
   */
  optionalConsents?: Array<string>;
}

export interface CollectionRetrieveParams {
  /**
   * Authorization Bearer token
   */
  Authorization: string;

  /**
   * Product instance ID of FIU
   */
  'x-product-instance-id': string;
}

export namespace Collection {
  export import MultiConsentResponse = CollectionAPI.MultiConsentResponse;
  export import CollectionCreateParams = CollectionAPI.CollectionCreateParams;
  export import CollectionRetrieveParams = CollectionAPI.CollectionRetrieveParams;
}
