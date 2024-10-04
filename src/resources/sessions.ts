// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SessionsAPI from './sessions';

export class Sessions extends APIResource {
  /**
   * This API is used to initiate a data fetch for FI data.
   */
  create(params: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<FiDataFetchResponseV2> {
    const { Authorization, 'x-product-instance-id': xProductInstanceId, ...body } = params;
    return this._client.post('/v2/sessions', {
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
    sessionId: string,
    params: SessionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FiDataFetchResponseV2> {
    const { Authorization, 'x-product-instance-id': xProductInstanceId } = params;
    return this._client.get(`/v2/sessions/${sessionId}`, {
      ...options,
      headers: {
        Authorization: Authorization,
        'x-product-instance-id': xProductInstanceId,
        ...options?.headers,
      },
    });
  }
}

export interface FiDataFetchResponseV2 {
  /**
   * Request identifier to fetch the status and data.
   */
  id: string;

  /**
   * Consent identifier for this data fetch request.
   */
  consentId: string;

  /**
   * Time range for which the data is being requested
   */
  dataRange: FiDataFetchResponseV2.DataRange;

  /**
   * Array of accounts for a particular fip
   */
  fips: Array<FiDataFetchResponseV2.Fip> | null;

  /**
   * Format of decrypted data
   */
  format: 'xml' | 'json';

  /**
   * Status for this data fetch session
   */
  status: 'ACTIVE' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'FAILED' | 'PARTIAL';
}

export namespace FiDataFetchResponseV2 {
  /**
   * Time range for which the data is being requested
   */
  export interface DataRange {
    /**
     * Selects the starting date-time from where the financial information is to be
     * start. It is a mandatory field only if consentTypes includes ENUM TRANSACTIONS
     * in consent parameters.
     */
    from: string;

    /**
     * Selects the ending date-time from where the financial information is to be end.
     * It is a mandatory field only if consentTypes includes ENUM TRANSACTIONS in
     * consent parameters.
     */
    to: string;
  }

  export interface Fip {
    accounts: Array<Fip.Account>;

    fipID: string;
  }

  export namespace Fip {
    export interface Account {
      /**
       * Contains the decrypted financial information
       */
      data:
        | Account.DepositJson
        | Account.TermDepositJson
        | Account.RecurringDepositJson
        | Account.InsurancePoliciesJson
        | Account.InsurancePoliciesJson
        | Account.EquitiesJson
        | Account.MutualFundsJson
        | Account.MutualFundsJson
        | Account.Gst
        | Account.Etfjson
        | Account.Xml;

      FIstatus: string;

      linkRefNumber: string;

      maskedAccNumber: string;
    }

    export namespace Account {
      export interface DepositJson {
        account?: DepositJson.Account;
      }

      export namespace DepositJson {
        export interface Account {
          linkedAccRef?: string;

          maskedAccNumber?: string;

          profile?: Account.Profile;

          summary?: Account.Summary;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            holders?: Profile.Holders;
          }

          export namespace Profile {
            export interface Holders {
              holder?: Array<Holders.Holder>;

              type?: string;
            }

            export namespace Holders {
              export interface Holder {
                address?: string;

                ckycCompliance?: string;

                dob?: string;

                email?: string;

                landline?: string;

                mobile?: string;

                name?: string;

                nominee?: string;

                pan?: string;
              }
            }
          }

          export interface Summary {
            balanceDateTime?: string;

            branch?: string;

            currency?: string;

            currentBalance?: string;

            currentODLimit?: string;

            drawingLimit?: string;

            exchgeRate?: string;

            facility?: string;

            ifscCode?: string;

            micrCode?: string;

            openingDate?: string;

            pending?: Summary.Pending;

            status?: string;

            type?: string;
          }

          export namespace Summary {
            export interface Pending {
              amount?: string;

              transactionType?: string;
            }
          }

          export interface Transactions {
            endDate?: string;

            startDate?: string;

            transaction?: Array<Transactions.Transaction> | null;
          }

          export namespace Transactions {
            export interface Transaction {
              amount?: string;

              currentBalance?: string;

              mode?: string;

              narration?: string;

              reference?: string;

              transactionTimestamp?: string;

              txnId?: string;

              type?: string;

              valueDate?: string;
            }
          }
        }
      }

      export interface TermDepositJson {
        account?: TermDepositJson.Account;
      }

      export namespace TermDepositJson {
        export interface Account {
          linkedAccRef?: string;

          maskedAccNumber?: string;

          profile?: Account.Profile;

          summary?: Account.Summary;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            holders?: Profile.Holders;
          }

          export namespace Profile {
            export interface Holders {
              holder?: Array<Holders.Holder>;

              type?: string;
            }

            export namespace Holders {
              export interface Holder {
                address?: string;

                ckycCompliance?: string;

                dob?: string;

                email?: string;

                landline?: string;

                mobile?: string;

                name?: string;

                nominee?: string;

                pan?: string;
              }
            }
          }

          export interface Summary {
            accountType?: string;

            branch?: string;

            compoundingFrequency?: string;

            currentValue?: string;

            description?: string;

            ifsc?: string;

            interestComputation?: string;

            interestOnMaturity?: string;

            interestPayout?: string;

            interestPeriodicPayoutAmount?: string;

            interestRate?: string;

            maturityAmount?: string;

            maturityDate?: string;

            openingDate?: string;

            principalAmount?: string;

            recurringAmount?: string;

            recurringDepositDay?: string;

            tenureDays?: string;

            tenureMonths?: string;

            tenureYears?: string;
          }

          export interface Transactions {
            endDate?: string;

            startDate?: string;

            transaction?: Array<Transactions.Transaction> | null;
          }

          export namespace Transactions {
            export interface Transaction {
              amount?: string;

              currentBalance?: string;

              mode?: string;

              narration?: string;

              reference?: string;

              transactionTimestamp?: string;

              txnId?: string;

              type?: string;

              valueDate?: string;
            }
          }
        }
      }

      export interface RecurringDepositJson {
        account?: RecurringDepositJson.Account;
      }

      export namespace RecurringDepositJson {
        export interface Account {
          linkedAccRef?: string;

          maskedAccNumber?: string;

          profile?: Account.Profile;

          summary?: Account.Summary;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            holders?: Profile.Holders;
          }

          export namespace Profile {
            export interface Holders {
              holder?: Array<Holders.Holder>;

              type?: string;
            }

            export namespace Holders {
              export interface Holder {
                address?: string;

                ckycCompliance?: string;

                dob?: string;

                email?: string;

                landline?: string;

                mobile?: string;

                name?: string;

                nominee?: string;

                pan?: string;
              }
            }
          }

          export interface Summary {
            accountType?: string;

            branch?: string;

            compoundingFrequency?: string;

            currentValue?: string;

            description?: string;

            ifsc?: string;

            interestComputation?: string;

            interestOnMaturity?: string;

            interestPayout?: string;

            interestPeriodicPayoutAmount?: string;

            interestRate?: string;

            maturityAmount?: string;

            maturityDate?: string;

            openingDate?: string;

            principalAmount?: string;

            recurringAmount?: string;

            recurringDepositDay?: string;

            tenureDays?: string;

            tenureMonths?: string;

            tenureYears?: string;
          }

          export interface Transactions {
            endDate?: string;

            startDate?: string;

            transaction?: Array<Transactions.Transaction> | null;
          }

          export namespace Transactions {
            export interface Transaction {
              amount?: string;

              currentBalance?: string;

              mode?: string;

              narration?: string;

              reference?: string;

              transactionTimestamp?: string;

              txnId?: string;

              type?: string;

              valueDate?: string;
            }
          }
        }
      }

      export interface InsurancePoliciesJson {
        account?: InsurancePoliciesJson.Account;
      }

      export namespace InsurancePoliciesJson {
        export interface Account {
          linkedAccRef?: string;

          maskedAccNumber?: string;

          profile?: Account.Profile;

          summary?: Account.Summary;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            holders?: Profile.Holders;

            riders?: Profile.Riders;
          }

          export namespace Profile {
            export interface Holders {
              holder?: Array<Holders.Holder>;

              type?: string;
            }

            export namespace Holders {
              export interface Holder {
                address?: string;

                ckycCompliance?: string;

                dob?: string;

                email?: string;

                landline?: string;

                mobile?: string;

                name?: string;

                nominee?: string;

                pan?: string;

                rank?: string;
              }
            }

            export interface Riders {
              rider?: Array<Riders.Rider>;
            }

            export namespace Riders {
              export interface Rider {
                policyEndDate?: string;

                policyStartDate?: string;

                premiumAmount?: string;

                riderType?: string;

                sumAssured?: string;

                tenureMonths?: string;

                tenureYears?: string;
              }
            }
          }

          export interface Summary {
            contractClauses?: Summary.ContractClauses;

            coverAmount?: string;

            covers?: Summary.Covers;

            coverType?: string;

            eiaNumber?: string;

            maturityBenefit?: string;

            maturityDate?: string;

            moneyBacks?: Summary.MoneyBacks;

            policyName?: string;

            policyNumber?: string;

            policyStartDate?: string;

            policyType?: string;

            premiumAmount?: string;

            premiumFrequency?: string;

            premiumPaymentMonths?: string;

            premiumPaymentYears?: string;

            sumAssured?: string;

            tenureMonths?: string;

            tenureYears?: string;
          }

          export namespace Summary {
            export interface ContractClauses {
              contractClause?: Array<ContractClauses.ContractClause>;
            }

            export namespace ContractClauses {
              export interface ContractClause {
                amount?: string;

                conditions?: string;

                description?: string;

                exlcusions?: string;

                subLimit?: string;

                title?: string;
              }
            }

            export interface Covers {
              cover?: Array<Covers.Cover>;
            }

            export namespace Covers {
              export interface Cover {
                cover?: Array<unknown>;
              }
            }

            export interface MoneyBacks {
              MoneyBack?: Array<MoneyBacks.MoneyBack>;
            }

            export namespace MoneyBacks {
              export interface MoneyBack {
                MoneyBack?: Array<unknown>;
              }
            }
          }

          export interface Transactions {
            endDate?: string;

            startDate?: string;

            transaction?: Array<Transactions.Transaction> | null;
          }

          export namespace Transactions {
            export interface Transaction {
              amount?: string;

              narration?: string;

              txnDate?: string;

              txnId?: string;

              type?: string;
            }
          }
        }
      }

      export interface InsurancePoliciesJson {
        account?: InsurancePoliciesJson.Account;
      }

      export namespace InsurancePoliciesJson {
        export interface Account {
          linkedAccRef?: string;

          maskedAccNumber?: string;

          profile?: Account.Profile;

          summary?: Account.Summary;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            holders?: Profile.Holders;

            riders?: Profile.Riders;
          }

          export namespace Profile {
            export interface Holders {
              holder?: Array<Holders.Holder>;

              type?: string;
            }

            export namespace Holders {
              export interface Holder {
                address?: string;

                ckycCompliance?: string;

                dob?: string;

                email?: string;

                landline?: string;

                mobile?: string;

                name?: string;

                nominee?: string;

                pan?: string;

                rank?: string;
              }
            }

            export interface Riders {
              rider?: Array<Riders.Rider>;
            }

            export namespace Riders {
              export interface Rider {
                policyEndDate?: string;

                policyStartDate?: string;

                premiumAmount?: string;

                riderType?: string;

                sumAssured?: string;

                tenureMonths?: string;

                tenureYears?: string;
              }
            }
          }

          export interface Summary {
            contractClauses?: Summary.ContractClauses;

            coverAmount?: string;

            covers?: Summary.Covers;

            coverType?: string;

            eiaNumber?: string;

            maturityBenefit?: string;

            maturityDate?: string;

            moneyBacks?: Summary.MoneyBacks;

            policyName?: string;

            policyNumber?: string;

            policyStartDate?: string;

            policyType?: string;

            premiumAmount?: string;

            premiumFrequency?: string;

            premiumPaymentMonths?: string;

            premiumPaymentYears?: string;

            sumAssured?: string;

            tenureMonths?: string;

            tenureYears?: string;
          }

          export namespace Summary {
            export interface ContractClauses {
              contractClause?: Array<ContractClauses.ContractClause>;
            }

            export namespace ContractClauses {
              export interface ContractClause {
                amount?: string;

                conditions?: string;

                description?: string;

                exlcusions?: string;

                subLimit?: string;

                title?: string;
              }
            }

            export interface Covers {
              cover?: Array<Covers.Cover>;
            }

            export namespace Covers {
              export interface Cover {
                cover?: Array<unknown>;
              }
            }

            export interface MoneyBacks {
              MoneyBack?: Array<MoneyBacks.MoneyBack>;
            }

            export namespace MoneyBacks {
              export interface MoneyBack {
                MoneyBack?: Array<unknown>;
              }
            }
          }

          export interface Transactions {
            endDate?: string;

            startDate?: string;

            transaction?: Array<Transactions.Transaction> | null;
          }

          export namespace Transactions {
            export interface Transaction {
              amount?: string;

              narration?: string;

              txnDate?: string;

              txnId?: string;

              type?: string;
            }
          }
        }
      }

      export interface EquitiesJson {
        account?: EquitiesJson.Account;
      }

      export namespace EquitiesJson {
        export interface Account {
          linkedAccRef?: string;

          maskedAccNumber?: string;

          profile?: Account.Profile;

          summary?: Account.Summary;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            holders?: Profile.Holders;
          }

          export namespace Profile {
            export interface Holders {
              holder?: Array<Holders.Holder>;

              type?: string;
            }

            export namespace Holders {
              export interface Holder {
                address?: string;

                boId?: string;

                brokerName?: string;

                ckycCompliance?: string;

                dematId?: string;

                dob?: string;

                dpId?: string;

                email?: string;

                landline?: string;

                mobile?: string;

                name?: string;

                nominee?: string;

                pan?: string;

                rank?: string;
              }
            }
          }

          export interface Summary {
            currentValue?: string;

            investment?: Summary.Investment;

            investmentValue?: string;
          }

          export namespace Summary {
            export interface Investment {
              holdings?: Investment.Holdings;

              type?: string;
            }

            export namespace Investment {
              export interface Holdings {
                holding?: Array<Holdings.Holding>;
              }

              export namespace Holdings {
                export interface Holding {
                  holding?: Array<unknown>;
                }
              }
            }
          }

          export interface Transactions {
            endDate?: string;

            startDate?: string;

            transaction?: Array<Transactions.Transaction> | null;
          }

          export namespace Transactions {
            export interface Transaction {
              companyName?: string;

              equityCategory?: string;

              exchange?: string;

              instrumentType?: string;

              isin?: string;

              narration?: string;

              optionType?: string;

              orderId?: string;

              otherCharges?: string;

              rate?: string;

              shareHolderEquityType?: string;

              strikePrice?: string;

              symbol?: string;

              totalCharge?: string;

              tradeValue?: string;

              transactionDateTime?: string;

              txnId?: string;

              type?: string;

              units?: string;
            }
          }
        }
      }

      export interface MutualFundsJson {
        account?: MutualFundsJson.Account;
      }

      export namespace MutualFundsJson {
        export interface Account {
          linkedAccRef?: string;

          maskedAccNumber?: string;

          maskedDematID?: string;

          maskedFolioNo?: string;

          profile?: Account.Profile;

          summary?: Account.Summary;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            holders?: Profile.Holders;
          }

          export namespace Profile {
            export interface Holders {
              holder?: Array<Holders.Holder>;

              type?: string;
            }

            export namespace Holders {
              export interface Holder {
                address?: string;

                dematId?: string;

                dob?: string;

                email?: string;

                folioNo?: string;

                kycCompliance?: string;

                landline?: string;

                mobile?: string;

                name?: string;

                nominee?: string;

                pan?: string;
              }
            }
          }

          export interface Summary {
            costValue?: string;

            currentValue?: string;

            investment?: Summary.Investment;
          }

          export namespace Summary {
            export interface Investment {
              holdings?: Investment.Holdings;

              type?: string;
            }

            export namespace Investment {
              export interface Holdings {
                holding?: Array<Holdings.Holding>;
              }

              export namespace Holdings {
                export interface Holding {
                  holding?: Array<unknown>;
                }
              }
            }
          }

          export interface Transactions {
            endDate?: string;

            startDate?: string;

            transaction?: Array<Transactions.Transaction> | null;
          }

          export namespace Transactions {
            export interface Transaction {
              amc?: string;

              amfiCode?: string;

              amount?: string;

              isin?: string;

              isinDescription?: string;

              'lock-inDays'?: string;

              'lock-inFlag'?: string;

              mode?: string;

              narration?: string;

              nav?: string;

              navDate?: string;

              registrar?: string;

              schemeCode?: string;

              schemePlan?: string;

              transactionDate?: string;

              txnId?: string;

              type?: string;

              ucc?: string;

              units?: string;
            }
          }
        }
      }

      export interface MutualFundsJson {
        account?: MutualFundsJson.Account;
      }

      export namespace MutualFundsJson {
        export interface Account {
          linkedAccRef?: string;

          maskedAccNumber?: string;

          maskedDematID?: string;

          maskedFolioNo?: string;

          profile?: Account.Profile;

          summary?: Account.Summary;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            holders?: Profile.Holders;
          }

          export namespace Profile {
            export interface Holders {
              holder?: Array<Holders.Holder>;

              type?: string;
            }

            export namespace Holders {
              export interface Holder {
                address?: string;

                dematId?: string;

                dob?: string;

                email?: string;

                folioNo?: string;

                kycCompliance?: string;

                landline?: string;

                mobile?: string;

                name?: string;

                nominee?: string;

                pan?: string;
              }
            }
          }

          export interface Summary {
            costValue?: string;

            currentValue?: string;

            investment?: Summary.Investment;
          }

          export namespace Summary {
            export interface Investment {
              holdings?: Investment.Holdings;

              type?: string;
            }

            export namespace Investment {
              export interface Holdings {
                holding?: Array<Holdings.Holding>;
              }

              export namespace Holdings {
                export interface Holding {
                  holding?: Array<unknown>;
                }
              }
            }
          }

          export interface Transactions {
            endDate?: string;

            startDate?: string;

            transaction?: Array<Transactions.Transaction> | null;
          }

          export namespace Transactions {
            export interface Transaction {
              amc?: string;

              amfiCode?: string;

              amount?: string;

              isin?: string;

              isinDescription?: string;

              'lock-inDays'?: string;

              'lock-inFlag'?: string;

              mode?: string;

              narration?: string;

              nav?: string;

              navDate?: string;

              registrar?: string;

              schemeCode?: string;

              schemePlan?: string;

              transactionDate?: string;

              txnId?: string;

              type?: string;

              ucc?: string;

              units?: string;
            }
          }
        }
      }

      export interface Gst {
        account?: Gst.Account;
      }

      export namespace Gst {
        export interface Account {
          linkedAccRef?: string;

          maskedGstinNumber?: string;

          profile?: Account.Profile;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            businessDetails?: Profile.BusinessDetails;

            placeofBusiness?: Profile.PlaceofBusiness;
          }

          export namespace Profile {
            export interface BusinessDetails {
              apprvdt?: string;

              categoryList?: BusinessDetails.CategoryList;

              dty?: string;

              iscmp?: string;

              lgnm?: string;

              sts?: string;

              trdnm?: string;
            }

            export namespace BusinessDetails {
              export interface CategoryList {
                cat?: Array<string>;
              }
            }

            export interface PlaceofBusiness {
              address?: PlaceofBusiness.Address;

              natureOfBusinessList?: PlaceofBusiness.NatureOfBusinessList;
            }

            export namespace PlaceofBusiness {
              export interface Address {
                bnm?: string;

                bno?: string;

                dst?: string;

                flno?: string;

                loc?: string;

                pncd?: string;

                st?: string;

                stcd?: string;
              }

              export interface NatureOfBusinessList {
                ntr?: Array<string>;
              }
            }
          }

          export interface Transactions {
            endt?: string;

            gstr1Details?: Transactions.Gstr1Details;

            gstr3bDetails?: Transactions.Gstr3bDetails;

            strdt?: string;
          }

          export namespace Transactions {
            export interface Gstr1Details {
              gstr1?: Gstr1Details.Gstr1;
            }

            export namespace Gstr1Details {
              export interface Gstr1 {
                b2bDtls?: Gstr1.B2bDtls;

                dof?: string;

                filingFrequency?: string;

                retPrd?: string;

                status?: string;
              }

              export namespace Gstr1 {
                export interface B2bDtls {
                  b2b?: B2bDtls.B2b;
                }

                export namespace B2bDtls {
                  export interface B2b {
                    b2b?: unknown;
                  }
                }
              }
            }

            export interface Gstr3bDetails {
              gstr3b?: Gstr3bDetails.Gstr3b;
            }

            export namespace Gstr3bDetails {
              export interface Gstr3b {
                dof?: string;

                ecoDtls?: Gstr3b.EcoDtls;

                filingFrequency?: string;

                intrLtfee?: Gstr3b.IntrLtfee;

                inwardSup?: Gstr3b.InwardSup;

                itcElg?: Gstr3b.ItcElg;

                pdcashDtls?: Gstr3b.PdcashDtls;

                retPrd?: string;

                status?: string;

                supDetails?: Gstr3b.SupDetails;

                supInter?: Gstr3b.SupInter;

                txPmt?: Gstr3b.TxPmt;
              }

              export namespace Gstr3b {
                export interface EcoDtls {
                  ecoRegSup?: EcoDtls.EcoRegSup;

                  ecoSup?: EcoDtls.EcoSup;
                }

                export namespace EcoDtls {
                  export interface EcoRegSup {
                    ecoRegSup?: unknown;

                    ecoSup?: EcoRegSup.EcoSup;
                  }

                  export namespace EcoRegSup {
                    export interface EcoSup {
                      ecoRegSup?: unknown;

                      ecoSup?: unknown;
                    }
                  }

                  export interface EcoSup {
                    ecoRegSup?: EcoSup.EcoRegSup;

                    ecoSup?: unknown;
                  }

                  export namespace EcoSup {
                    export interface EcoRegSup {
                      ecoRegSup?: unknown;

                      ecoSup?: unknown;
                    }
                  }
                }

                export interface IntrLtfee {
                  intrDetails?: IntrLtfee.IntrDetails;

                  ltfeeDetails?: IntrLtfee.LtfeeDetails;
                }

                export namespace IntrLtfee {
                  export interface IntrDetails {
                    camt?: string;

                    csamt?: string;

                    iamt?: string;

                    samt?: string;
                  }

                  export interface LtfeeDetails {
                    camt?: string;

                    csamt?: string;

                    iamt?: string;

                    samt?: string;
                  }
                }

                export interface InwardSup {
                  isupDetailsList?: InwardSup.IsupDetailsList;
                }

                export namespace InwardSup {
                  export interface IsupDetailsList {
                    isupDetails?: Array<IsupDetailsList.IsupDetail>;
                  }

                  export namespace IsupDetailsList {
                    export interface IsupDetail {
                      inter?: string;

                      intra?: string;

                      ty?: string;
                    }
                  }
                }

                export interface ItcElg {
                  itcAvlList?: ItcElg.ItcAvlList;

                  itcInelgList?: ItcElg.ItcInelgList;

                  itcNet?: ItcElg.ItcNet;

                  itcRevList?: ItcElg.ItcRevList;
                }

                export namespace ItcElg {
                  export interface ItcAvlList {
                    itcAvl?: Array<ItcAvlList.ItcAvl>;
                  }

                  export namespace ItcAvlList {
                    export interface ItcAvl {
                      camt?: string;

                      csamt?: string;

                      iamt?: string;

                      samt?: string;

                      type?: string;
                    }
                  }

                  export interface ItcInelgList {
                    itcInelg?: Array<ItcInelgList.ItcInelg>;
                  }

                  export namespace ItcInelgList {
                    export interface ItcInelg {
                      camt?: string;

                      csamt?: string;

                      iamt?: string;

                      samt?: string;

                      type?: string;
                    }
                  }

                  export interface ItcNet {
                    camt?: string;

                    csamt?: string;

                    iamt?: string;

                    samt?: string;

                    type?: string;
                  }

                  export interface ItcRevList {
                    itcRev?: Array<ItcRevList.ItcRev>;
                  }

                  export namespace ItcRevList {
                    export interface ItcRev {
                      camt?: string;

                      csamt?: string;

                      iamt?: string;

                      samt?: string;

                      type?: string;
                    }
                  }
                }

                export interface PdcashDtls {
                  pdcashList?: Array<PdcashDtls.PdcashList>;

                  pditc?: PdcashDtls.Pditc;
                }

                export namespace PdcashDtls {
                  export interface PdcashList {
                    pdcash?: PdcashList.Pdcash;
                  }

                  export namespace PdcashList {
                    export interface Pdcash {
                      cIntrpd?: string;

                      cLfeepd?: string;

                      cpd?: string;

                      csIntrpd?: string;

                      cspd?: string;

                      iIntrpd?: string;

                      ipd?: string;

                      sIntrpd?: string;

                      sLfeepd?: string;

                      spd?: string;

                      transDesc?: string;
                    }
                  }

                  export interface Pditc {
                    cPdc?: string;

                    cPdi?: string;

                    csPdcs?: string;

                    iPdc?: string;

                    iPdi?: string;

                    iPds?: string;

                    sPdi?: string;

                    sPds?: string;

                    transDesc?: string;
                  }
                }

                export interface SupDetails {
                  isupRev?: SupDetails.IsupRev;

                  osupDet?: SupDetails.OsupDet;

                  osupNilExmp?: SupDetails.OsupNilExmp;

                  osupNongst?: SupDetails.OsupNongst;

                  osupZero?: SupDetails.OsupZero;
                }

                export namespace SupDetails {
                  export interface IsupRev {
                    camt?: string;

                    csamt?: string;

                    iamt?: string;

                    samt?: string;

                    txval?: string;
                  }

                  export interface OsupDet {
                    camt?: string;

                    csamt?: string;

                    iamt?: string;

                    samt?: string;

                    txval?: string;
                  }

                  export interface OsupNilExmp {
                    camt?: string;

                    csamt?: string;

                    iamt?: string;

                    samt?: string;

                    txval?: string;
                  }

                  export interface OsupNongst {
                    camt?: string;

                    csamt?: string;

                    iamt?: string;

                    samt?: string;

                    txval?: string;
                  }

                  export interface OsupZero {
                    camt?: string;

                    csamt?: string;

                    iamt?: string;

                    samt?: string;

                    txval?: string;
                  }
                }

                export interface SupInter {
                  compDetailsList?: SupInter.CompDetailsList;

                  uinDetailsList?: SupInter.UinDetailsList;

                  unregDetailsList?: SupInter.UnregDetailsList;
                }

                export namespace SupInter {
                  export interface CompDetailsList {
                    compDetails?: Array<CompDetailsList.CompDetail>;

                    uinDetails?: Array<CompDetailsList.UinDetail>;

                    unregDetails?: Array<CompDetailsList.UnregDetail>;
                  }

                  export namespace CompDetailsList {
                    export interface CompDetail {
                      iamt?: string;

                      pos?: string;

                      txval?: string;
                    }

                    export interface UinDetail {
                      iamt?: string;

                      pos?: string;

                      txval?: string;
                    }

                    export interface UnregDetail {
                      iamt?: string;

                      pos?: string;

                      txval?: string;
                    }
                  }

                  export interface UinDetailsList {
                    compDetails?: Array<UinDetailsList.CompDetail>;

                    uinDetails?: Array<UinDetailsList.UinDetail>;

                    unregDetails?: Array<UinDetailsList.UnregDetail>;
                  }

                  export namespace UinDetailsList {
                    export interface CompDetail {
                      iamt?: string;

                      pos?: string;

                      txval?: string;
                    }

                    export interface UinDetail {
                      iamt?: string;

                      pos?: string;

                      txval?: string;
                    }

                    export interface UnregDetail {
                      iamt?: string;

                      pos?: string;

                      txval?: string;
                    }
                  }

                  export interface UnregDetailsList {
                    compDetails?: Array<UnregDetailsList.CompDetail>;

                    uinDetails?: Array<UnregDetailsList.UinDetail>;

                    unregDetails?: Array<UnregDetailsList.UnregDetail>;
                  }

                  export namespace UnregDetailsList {
                    export interface CompDetail {
                      iamt?: string;

                      pos?: string;

                      txval?: string;
                    }

                    export interface UinDetail {
                      iamt?: string;

                      pos?: string;

                      txval?: string;
                    }

                    export interface UnregDetail {
                      iamt?: string;

                      pos?: string;

                      txval?: string;
                    }
                  }
                }

                export interface TxPmt {
                  txPyList?: Array<TxPmt.TxPyList>;
                }

                export namespace TxPmt {
                  export interface TxPyList {
                    txPy?: TxPyList.TxPy;
                  }

                  export namespace TxPyList {
                    export interface TxPy {
                      txPy?: unknown;
                    }
                  }
                }
              }
            }
          }
        }
      }

      export interface Etfjson {
        account?: Etfjson.Account;
      }

      export namespace Etfjson {
        export interface Account {
          linkedAccRef?: string;

          maskedAccNumber?: string;

          maskedDematID?: string;

          profile?: Account.Profile;

          summary?: Account.Summary;

          transactions?: Account.Transactions;

          type?: string;

          version?: string;
        }

        export namespace Account {
          export interface Profile {
            holders?: Profile.Holders;
          }

          export namespace Profile {
            export interface Holders {
              holder?: Array<Holders.Holder>;

              type?: string;
            }

            export namespace Holders {
              export interface Holder {
                address?: string;

                boId?: string;

                brokerName?: string;

                dematId?: string;

                dob?: string;

                dpId?: string;

                email?: string;

                kycCompliance?: string;

                landline?: string;

                mobile?: string;

                name?: string;

                nominee?: string;

                pan?: string;
              }
            }
          }

          export interface Summary {
            currentValue?: string;

            investment?: Summary.Investment;

            investmentValue?: string;
          }

          export namespace Summary {
            export interface Investment {
              holdings?: Investment.Holdings;

              type?: string;
            }

            export namespace Investment {
              export interface Holdings {
                holding?: Array<Holdings.Holding>;
              }

              export namespace Holdings {
                export interface Holding {
                  holding?: Array<unknown>;
                }
              }
            }
          }

          export interface Transactions {
            endDate?: string;

            startDate?: string;

            transaction?: Array<Transactions.Transaction> | null;
          }

          export namespace Transactions {
            export interface Transaction {
              amount?: string;

              brokerCode?: string;

              isin?: string;

              isinDescription?: string;

              narration?: string;

              nav?: string;

              transactionDateTime?: string;

              txnId?: string;

              type?: string;

              units?: string;
            }
          }
        }
      }

      export interface Xml {
        xml?: string;
      }
    }
  }
}

export interface SessionCreateParams {
  /**
   * Body param: The request identifier to fetch the status and data.
   */
  consentId: string;

  /**
   * Body param: Time range for which the data is being requested (should be
   * inclusive of the consent's FIDataRange)
   */
  dataRange: SessionCreateParams.DataRange;

  /**
   * Body param: Format of decrypted data
   */
  format: 'xml' | 'json';

  /**
   * Header param: Authorization Bearer token
   */
  Authorization: string;

  /**
   * Header param: Product instance ID of FIU
   */
  'x-product-instance-id': string;
}

export namespace SessionCreateParams {
  /**
   * Time range for which the data is being requested (should be inclusive of the
   * consent's FIDataRange)
   */
  export interface DataRange {
    /**
     * Selects the starting date-time from where the financial information is to be
     * start. It is a mandatory field only if consentTypes includes ENUM TRANSACTIONS
     * in consent parameters.
     */
    from: string;

    /**
     * Selects the ending date-time from where the financial information is to be end.
     * It is a mandatory field only if consentTypes includes ENUM TRANSACTIONS in
     * consent parameters.
     */
    to: string;
  }
}

export interface SessionRetrieveParams {
  /**
   * Authorization Bearer token
   */
  Authorization: string;

  /**
   * Product instance ID of FIU
   */
  'x-product-instance-id': string;
}

export namespace Sessions {
  export import FiDataFetchResponseV2 = SessionsAPI.FiDataFetchResponseV2;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionRetrieveParams = SessionsAPI.SessionRetrieveParams;
}
