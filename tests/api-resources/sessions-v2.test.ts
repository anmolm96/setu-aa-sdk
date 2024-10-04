// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SetuAaSDK from 'setu-aa-sdk';
import { Response } from 'node-fetch';

const client = new SetuAaSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource sessionsV2', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sessionsV2.create({
      consentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dataRange: { from: '2019-12-27T18:11:19.117Z', to: '2019-12-27T18:11:19.117Z' },
      format: 'xml',
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
    const response = await client.sessionsV2.create({
      consentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dataRange: { from: '2019-12-27T18:11:19.117Z', to: '2019-12-27T18:11:19.117Z' },
      format: 'xml',
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.sessionsV2.retrieve('x', {
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
    const response = await client.sessionsV2.retrieve('x', {
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
    });
  });
});
