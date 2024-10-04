// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SetuAaSDK from 'setu-aa-sdk';
import { Response } from 'node-fetch';

const client = new SetuAaSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource users', () => {
  test('login: only required params', async () => {
    const responsePromise = client.users.login({
      clientID: 'clientID',
      grant_type: 'client_credentials',
      secret: 'secret',
      client: 'bridge',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('login: required and optional params', async () => {
    const response = await client.users.login({
      clientID: 'clientID',
      grant_type: 'client_credentials',
      secret: 'secret',
      client: 'bridge',
    });
  });
});
