// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SetuAaSDK from 'setu-aa-sdk';
import { Response } from 'node-fetch';

const client = new SetuAaSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource consentsV2', () => {
  test('create: only required params', async () => {
    const responsePromise = client.consentsV2.create({
      dataRange: { from: '2019-12-27T18:11:19.117Z', to: '2019-12-27T18:11:19.117Z' },
      vua: 'vua',
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.consentsV2.create({
      dataRange: { from: '2019-12-27T18:11:19.117Z', to: '2019-12-27T18:11:19.117Z' },
      vua: 'vua',
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
      consentDateRange: { endDate: '2019-12-27T18:11:19.117Z', startDate: '2019-12-27T18:11:19.117Z' },
      consentDuration: { unit: 'MONTH', value: 0 },
      consentMode: 'VIEW',
      consentTypes: ['PROFILE', 'SUMMARY', 'TRANSACTIONS'],
      context: [
        { key: 'accounttype', value: 'value' },
        { key: 'accounttype', value: 'value' },
        { key: 'accounttype', value: 'value' },
      ],
      dataFilter: [
        { operator: '=', type: 'TRANSACTIONTYPE', value: 'value' },
        { operator: '=', type: 'TRANSACTIONTYPE', value: 'value' },
        { operator: '=', type: 'TRANSACTIONTYPE', value: 'value' },
      ],
      dataLife: { unit: 'MONTH', value: 0 },
      fetchType: 'ONETIME',
      fiTypes: ['DEPOSIT', 'TERM_DEPOSIT', 'RECURRING_DEPOSIT'],
      frequency: { unit: 'HOUR', value: 0 },
      PAN: 'PAN',
      purpose: { category: { type: 'type' }, code: '101', refUri: 'refUri', text: 'text' },
      redirectUrl: 'redirectUrl',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.consentsV2.retrieve('x', {
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.consentsV2.retrieve('x', {
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
      expanded: true,
    });
  });

  test('fetchStatus: only required params', async () => {
    const responsePromise = client.consentsV2.fetchStatus('x', {
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fetchStatus: required and optional params', async () => {
    const response = await client.consentsV2.fetchStatus('x', {
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
    });
  });

  test('revoke: only required params', async () => {
    const responsePromise = client.consentsV2.revoke('x', {
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('revoke: required and optional params', async () => {
    const response = await client.consentsV2.revoke('x', {
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
    });
  });
});
