// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConsentsV2API from './consents-v2';
import * as CollectionAPI from './collection';

export class ConsentsV2 extends APIResource {
  collection: CollectionAPI.Collection = new CollectionAPI.Collection(this._client);

  /**
   * This API is intended for AA Client to request generation of digitally signed
   * consent artefacts. The customer has to use the AA application to select accounts
   * and approve consent generation. Once the customer approves the consent request
   * on the AA application, AA generates the digitally signed consent artefacts.
   * Note - The AA Client never sees the account of the customer or directly
   * participates in consent generation.
   *
   * Note: “Request Body Example Value” and “Responses Example Value” given below is
   * for illustrative purposes only.
   */
  create(params: ConsentsV2CreateParams, options?: Core.RequestOptions): Core.APIPromise<ConsentResponseV2> {
    const { Authorization, 'x-product-instance-id': xProductInstanceId, ...body } = params;
    return this._client.post('/v2/consents', {
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
   * This API gets consent information using request ID.
   */
  retrieve(
    requestId: string,
    params: ConsentsV2RetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsentResponseV2> {
    const { Authorization, 'x-product-instance-id': xProductInstanceId, ...query } = params;
    return this._client.get(`/v2/consents/${requestId}`, {
      query,
      ...options,
      headers: {
        Authorization: Authorization,
        'x-product-instance-id': xProductInstanceId,
        ...options?.headers,
      },
    });
  }

  /**
   * This API gets the last data fetch status for a consent
   */
  fetchStatus(
    consentId: string,
    params: ConsentsV2FetchStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { Authorization, 'x-product-instance-id': xProductInstanceId } = params;
    return this._client.get(`/v2/consents/${consentId}/fetch/status`, {
      ...options,
      headers: {
        Accept: '*/*',
        Authorization: Authorization,
        'x-product-instance-id': xProductInstanceId,
        ...options?.headers,
      },
    });
  }

  /**
   * This API revokes a consent based on request ID.
   */
  revoke(
    requestId: string,
    params: ConsentsV2RevokeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RevokeConsentResponse> {
    const { Authorization, 'x-product-instance-id': xProductInstanceId } = params;
    return this._client.post(`/v2/consents/${requestId}/revoke`, {
      ...options,
      headers: {
        Authorization: Authorization,
        'x-product-instance-id': xProductInstanceId,
        ...options?.headers,
      },
    });
  }
}

export interface ConsentResponseV2 {
  /**
   * The request identifier to fetch the status and data.
   */
  id: string;

  /**
   * List of accounts which the consent would fetch FI from. For a consent between
   * FIU & AA, this list could have accounts from multiple FIP. For a consent between
   * FIP & AA, only accounts from particular FIP must be present in this section.
   */
  accountsLinked: Array<ConsentResponseV2.AccountsLinked>;

  /**
   * Surrogate status for this consent
   */
  status: 'PENDING' | 'FAILED' | 'ACTIVE' | 'PAUSED' | 'REVOKED' | 'EXPIRED' | 'REJECTED';

  /**
   * The URL link to the consent manager app for user to complete the flow.
   */
  url: string;

  context?: Array<ConsentResponseV2.Context>;

  /**
   * The identifier of the Customer.
   */
  detail?: ConsentResponseV2.Detail;

  PAN?: string;

  /**
   * URL to redirect to after completion of consent journey
   */
  redirectUrl?: string;

  /**
   * Usage object for this consent. Defines how many times and when this consent has
   * been used for data fetch
   */
  usage?: ConsentResponseV2.Usage | null;
}

export namespace ConsentResponseV2 {
  export interface AccountsLinked {
    /**
     * Type of Account
     */
    accType?: string;

    /**
     * FIP ID
     */
    fipId?: string;

    /**
     * Type of Financial Information
     */
    fiType?: string;

    /**
     * FIP's linkRefNumber as shared by the FIP after linking
     */
    linkRefNumber?: string;

    /**
     * Masked account number
     */
    maskedAccNumber?: string;
  }

  /**
   * Specify extra data in key-value pair that might be required for custom arguments
   * or filteration
   */
  export interface Context {
    /**
     * The key of data
     */
    key:
      | 'accounttype'
      | 'fipId'
      | 'consentReviewAt'
      | 'purposeDescription'
      | 'purposeCode'
      | 'alternateNumber'
      | 'accountSelectionMode'
      | 'transactionType'
      | 'excludeFipIds';

    /**
     * Value to key data
     */
    value: string;
  }

  /**
   * The identifier of the Customer.
   */
  export interface Detail {
    /**
     * Expiry date-time for the consent
     */
    consentExpiry: string;

    /**
     * Start date-time of the consent. This field would allow for Post-Dated consent.
     */
    consentStart: string;

    /**
     * Consent Mode as defined in the AA Technical Specification
     */
    consentMode?: 'VIEW' | 'STORE' | 'QUERY' | 'STREAM';

    consentTypes?: Array<'PROFILE' | 'SUMMARY' | 'TRANSACTIONS'>;

    /**
     * rules that will be utilized by FIP to filter the data
     */
    dataFilter?: Array<Detail.DataFilter>;

    /**
     * Datalife defines for how long can the FIU/AA Application store the data
     */
    dataLife?: Detail.DataLife;

    /**
     * Data Range (Datetime) for the Financial Information Requested
     */
    dataRange?: Detail.DataRange;

    /**
     * FI Fetch type. Could be ONETIME or PERIODIC
     */
    fetchType?: 'ONETIME' | 'PERIODIC';

    fiTypes?: Array<
      | 'DEPOSIT'
      | 'TERM_DEPOSIT'
      | 'RECURRING_DEPOSIT'
      | 'SIP'
      | 'CP'
      | 'GOVT_SECURITIES'
      | 'EQUITIES'
      | 'BONDS'
      | 'DEBENTURES'
      | 'MUTUAL_FUNDS'
      | 'ETF'
      | 'IDR'
      | 'CIS'
      | 'AIF'
      | 'INSURANCE_POLICIES'
      | 'NPS'
      | 'INVIT'
      | 'REIT'
      | 'GSTR1_3B'
      | 'OTHER'
    >;

    /**
     * Defines frequency of FI data fetch within the defined time unit.
     * E.g.HOURLY,DAILY,MONTHLY,YEARLY.The maximum frequency value that can be defined
     * is 1 request per HOUR. Similaraly it will be 24 requests per DAY and so on.
     * Frequency can not be set below 1 request per hour.
     */
    frequency?: Detail.Frequency;

    /**
     * Purpose of the consent defined in the AA Technical Specification
     */
    purpose?: Detail.Purpose;

    vua?: string;
  }

  export namespace Detail {
    export interface DataFilter {
      /**
       * Operator to filter data by.
       */
      operator: '=' | '!=' | '>' | '<' | '>=' | '<=';

      /**
       * The condition to filter the data on.
       */
      type: 'TRANSACTIONTYPE' | 'TRANSACTIONAMOUNT';

      /**
       * Value to filter data
       */
      value: string;
    }

    /**
     * Datalife defines for how long can the FIU/AA Application store the data
     */
    export interface DataLife {
      /**
       * A unit of how long consumer can store the data
       */
      unit: 'MONTH' | 'YEAR' | 'DAY' | 'INF';

      /**
       * Define the value of unit of how long can consumer store the data
       */
      value: number;
    }

    /**
     * Data Range (Datetime) for the Financial Information Requested
     */
    export interface DataRange {
      /**
       * Start date for financial information
       */
      from: string;

      /**
       * End date for financial information
       */
      to: string;
    }

    /**
     * Defines frequency of FI data fetch within the defined time unit.
     * E.g.HOURLY,DAILY,MONTHLY,YEARLY.The maximum frequency value that can be defined
     * is 1 request per HOUR. Similaraly it will be 24 requests per DAY and so on.
     * Frequency can not be set below 1 request per hour.
     */
    export interface Frequency {
      /**
       * Defines the time unit of the frequency to access the financial information.
       */
      unit: 'HOUR' | 'DAY' | 'MONTH' | 'YEAR' | 'INF';

      /**
       * Define the number of times FI data can be fetched within the defined time unit.
       */
      value: number;
    }

    /**
     * Purpose of the consent defined in the AA Technical Specification
     */
    export interface Purpose {
      /**
       * Purpose Code as defined in the AA Technical Specification
       */
      code: '101' | '102' | '103' | '104' | '105' | '106';

      category?: Purpose.Category;

      /**
       * URL where the purpose is further defined
       */
      refUri?: string;

      /**
       * Textual Description
       */
      text?: string;
    }

    export namespace Purpose {
      export interface Category {
        /**
         * Category name of the Purpose code
         */
        type?: string;
      }
    }
  }

  /**
   * Usage object for this consent. Defines how many times and when this consent has
   * been used for data fetch
   */
  export interface Usage {
    /**
     * Count of the number of times data has been fetched for this consent
     */
    count: number;

    /**
     * Timestamp of last data fetch for this consent
     */
    lastUsed: string | null;
  }
}

export interface RevokeConsentResponse {
  /**
   * Surrogate status for this consent
   */
  status: 'PENDING' | 'ACTIVE' | 'PAUSED' | 'REVOKED' | 'EXPIRED' | 'REJECTED';
}

export interface ConsentsV2CreateParams {
  /**
   * Body param:
   */
  dataRange: ConsentsV2CreateParams.DataRange;

  /**
   * Body param:
   */
  vua: string;

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
  consentDateRange?: ConsentsV2CreateParams.ConsentDateRange;

  /**
   * Body param: How long consumer is allowed to store data
   */
  consentDuration?: ConsentsV2CreateParams.ConsentDuration;

  /**
   * Body param: Consent Mode as defined in the AA Technical Specification
   */
  consentMode?: 'VIEW' | 'STORE' | 'QUERY' | 'STREAM';

  /**
   * Body param:
   */
  consentTypes?: Array<'PROFILE' | 'SUMMARY' | 'TRANSACTIONS'>;

  /**
   * Body param:
   */
  context?: Array<ConsentsV2CreateParams.Context>;

  /**
   * Body param: rules that will be utilized by FIP to filter the data
   */
  dataFilter?: Array<ConsentsV2CreateParams.DataFilter>;

  /**
   * Body param: How long consumer is allowed to store data
   */
  dataLife?: ConsentsV2CreateParams.DataLife;

  /**
   * Body param:
   */
  fetchType?: 'ONETIME' | 'PERIODIC';

  /**
   * Body param:
   */
  fiTypes?: Array<
    | 'DEPOSIT'
    | 'TERM_DEPOSIT'
    | 'RECURRING_DEPOSIT'
    | 'SIP'
    | 'CP'
    | 'GOVT_SECURITIES'
    | 'EQUITIES'
    | 'BONDS'
    | 'DEBENTURES'
    | 'MUTUAL_FUNDS'
    | 'ETF'
    | 'IDR'
    | 'CIS'
    | 'AIF'
    | 'INSURANCE_POLICIES'
    | 'NPS'
    | 'INVIT'
    | 'REIT'
    | 'GSTR1_3B'
    | 'OTHER'
  >;

  /**
   * Body param: Defines frequency of FI data fetch within the defined time unit.
   * E.g.HOURLY,DAILY,MONTHLY,YEARLY.The maximum frequency value that can be defined
   * is 1 request per HOUR. Similaraly it will be 24 requests per DAY and so on.
   * Frequency can not be set below 1 request per hour.
   */
  frequency?: ConsentsV2CreateParams.Frequency;

  /**
   * Body param:
   */
  PAN?: string;

  /**
   * Body param: Purpose of the consent defined in the AA Technical Specification
   */
  purpose?: ConsentsV2CreateParams.Purpose;

  /**
   * Body param:
   */
  redirectUrl?: string;
}

export namespace ConsentsV2CreateParams {
  export interface DataRange {
    /**
     * Start date for financial information
     */
    from: string;

    /**
     * End date for financial information
     */
    to: string;
  }

  export interface ConsentDateRange {
    /**
     * Expiry date-time for the consent
     */
    endDate: string;

    /**
     * Expiry date-time for the consent
     */
    startDate: string;
  }

  /**
   * How long consumer is allowed to store data
   */
  export interface ConsentDuration {
    /**
     * A unit of how long consumer can store the data
     */
    unit: 'MONTH' | 'YEAR' | 'DAY';

    /**
     * Define the value of unit of how long can consumer store the data
     */
    value: number;
  }

  /**
   * Specify extra data in key-value pair that might be required for custom arguments
   * or filteration
   */
  export interface Context {
    /**
     * The key of data
     */
    key:
      | 'accounttype'
      | 'fipId'
      | 'consentReviewAt'
      | 'purposeDescription'
      | 'purposeCode'
      | 'alternateNumber'
      | 'accountSelectionMode'
      | 'transactionType'
      | 'excludeFipIds';

    /**
     * Value to key data
     */
    value: string;
  }

  export interface DataFilter {
    /**
     * Operator to filter data by.
     */
    operator: '=' | '!=' | '>' | '<' | '>=' | '<=';

    /**
     * The condition to filter the data on.
     */
    type: 'TRANSACTIONTYPE' | 'TRANSACTIONAMOUNT';

    /**
     * Value to filter data
     */
    value: string;
  }

  /**
   * How long consumer is allowed to store data
   */
  export interface DataLife {
    /**
     * A unit of how long consumer can store the data
     */
    unit: 'MONTH' | 'YEAR' | 'DAY' | 'INF';

    /**
     * Define the value of unit of how long can consumer store the data
     */
    value: number;
  }

  /**
   * Defines frequency of FI data fetch within the defined time unit.
   * E.g.HOURLY,DAILY,MONTHLY,YEARLY.The maximum frequency value that can be defined
   * is 1 request per HOUR. Similaraly it will be 24 requests per DAY and so on.
   * Frequency can not be set below 1 request per hour.
   */
  export interface Frequency {
    /**
     * Defines the time unit of the frequency to access the financial information.
     */
    unit: 'HOUR' | 'DAY' | 'MONTH' | 'YEAR' | 'INF';

    /**
     * Define the number of times FI data can be fetched within the defined time unit.
     */
    value: number;
  }

  /**
   * Purpose of the consent defined in the AA Technical Specification
   */
  export interface Purpose {
    category: Purpose.Category;

    /**
     * Purpose Code as defined in the AA Technical Specification
     */
    code: '101' | '102' | '103' | '104' | '105' | '106';

    /**
     * URL where the purpose is further defined
     */
    refUri: string;

    /**
     * Textual Description
     */
    text: string;
  }

  export namespace Purpose {
    export interface Category {
      /**
       * Category name of the Purpose code
       */
      type?: string;
    }
  }
}

export interface ConsentsV2RetrieveParams {
  /**
   * Header param: Authorization Bearer token
   */
  Authorization: string;

  /**
   * Header param: Product instance ID of FIU
   */
  'x-product-instance-id': string;

  /**
   * Query param: Get expanded response
   */
  expanded?: boolean;
}

export interface ConsentsV2FetchStatusParams {
  /**
   * Authorization Bearer token
   */
  Authorization: string;

  /**
   * Product instance ID of FIU
   */
  'x-product-instance-id': string;
}

export interface ConsentsV2RevokeParams {
  /**
   * Authorization Bearer token
   */
  Authorization: string;

  /**
   * Product instance ID of FIU
   */
  'x-product-instance-id': string;
}

export namespace ConsentsV2 {
  export import ConsentResponseV2 = ConsentsV2API.ConsentResponseV2;
  export import RevokeConsentResponse = ConsentsV2API.RevokeConsentResponse;
  export import ConsentsV2CreateParams = ConsentsV2API.ConsentsV2CreateParams;
  export import ConsentsV2RetrieveParams = ConsentsV2API.ConsentsV2RetrieveParams;
  export import ConsentsV2FetchStatusParams = ConsentsV2API.ConsentsV2FetchStatusParams;
  export import ConsentsV2RevokeParams = ConsentsV2API.ConsentsV2RevokeParams;
  export import Collection = CollectionAPI.Collection;
  export import MultiConsentResponse = CollectionAPI.MultiConsentResponse;
  export import CollectionCreateParams = CollectionAPI.CollectionCreateParams;
  export import CollectionRetrieveParams = CollectionAPI.CollectionRetrieveParams;
}
