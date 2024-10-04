// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SetuAaSDK from 'setu-aa-sdk';
import { Response } from 'node-fetch';

const client = new SetuAaSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource collection', () => {
  test('create: only required params', async () => {
    const responsePromise = client.consentsV2.collection.create({
      mandatoryConsents: ['string', 'string', 'string'],
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
    const response = await client.consentsV2.collection.create({
      mandatoryConsents: ['string', 'string', 'string'],
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
      optionalConsents: ['string', 'string', 'string'],
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.consentsV2.collection.retrieve('x', {
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
    const response = await client.consentsV2.collection.retrieve('x', {
      Authorization: 'Authorization',
      'x-product-instance-id': 'x',
    });
  });
});
