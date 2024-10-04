// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as FipsAPI from './fips';

export class Fips extends APIResource {
  /**
   * This API is used to get the list of FIPs.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FipResponse> {
    return this._client.get('/v2/fips', options);
  }
}

export interface FipResponse {
  data?: Array<FipResponse.Data>;
}

export namespace FipResponse {
  export interface Data {
    /**
     * ID of the FIP
     */
    fipId: string;

    fiTypes: Array<
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
      | 'OTHER'
      | 'GSTR1_3B'
    >;

    /**
     * Type of FIP
     */
    institutionType:
      | 'BANK'
      | 'NBFC'
      | 'CRA'
      | 'RTA'
      | 'DEPOSITORY'
      | 'INSURER'
      | 'PENSION_SCHEME'
      | 'MUTUAL_FUND'
      | 'TAX_AUTHORITY';

    /**
     * Name of the FIP
     */
    name: string;

    /**
     * Current status of the FIP
     */
    status: 'ACTIVE' | 'INACTIVE' | 'TEMPORARILY_INACTIVE';
  }
}

export namespace Fips {
  export import FipResponse = FipsAPI.FipResponse;
}
