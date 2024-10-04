#!/usr/bin/env -S yarn tsn

import SetuAaSDK from 'setu-aa-sdk';

const client = new SetuAaSDK();

async function main() {
  const tokenAPIResponse = await client.users.login({
    clientID: 'clientID',
    grant_type: 'client_credentials',
    secret: 'secret',
    client: 'bridge',
  });

  console.log(tokenAPIResponse.access_token);
}

main();
