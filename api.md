# Users

Types:

- <code><a href="./src/resources/users.ts">TokenAPIResponse</a></code>

Methods:

- <code title="post /users/login">client.users.<a href="./src/resources/users.ts">login</a>({ ...params }) -> TokenAPIResponse</code>

# FipsV2

Types:

- <code><a href="./src/resources/fips-v2.ts">FipResponse</a></code>

Methods:

- <code title="get /v2/fips">client.fipsV2.<a href="./src/resources/fips-v2.ts">list</a>() -> FipResponse</code>

# ConsentsV2

Types:

- <code><a href="./src/resources/consents-v2/consents-v2.ts">ConsentResponseV2</a></code>
- <code><a href="./src/resources/consents-v2/consents-v2.ts">RevokeConsentResponse</a></code>

Methods:

- <code title="post /v2/consents">client.consentsV2.<a href="./src/resources/consents-v2/consents-v2.ts">create</a>({ ...params }) -> ConsentResponseV2</code>
- <code title="get /v2/consents/{request_id}">client.consentsV2.<a href="./src/resources/consents-v2/consents-v2.ts">retrieve</a>(requestId, { ...params }) -> ConsentResponseV2</code>
- <code title="get /v2/consents/{consent_id}/fetch/status">client.consentsV2.<a href="./src/resources/consents-v2/consents-v2.ts">fetchStatus</a>(consentId, { ...params }) -> void</code>
- <code title="post /v2/consents/{request_id}/revoke">client.consentsV2.<a href="./src/resources/consents-v2/consents-v2.ts">revoke</a>(requestId, { ...params }) -> RevokeConsentResponse</code>

## Collection

Types:

- <code><a href="./src/resources/consents-v2/collection.ts">MultiConsentResponse</a></code>

Methods:

- <code title="post /v2/consents/collection">client.consentsV2.collection.<a href="./src/resources/consents-v2/collection.ts">create</a>({ ...params }) -> MultiConsentResponse</code>
- <code title="get /v2/consents/collection/{id}">client.consentsV2.collection.<a href="./src/resources/consents-v2/collection.ts">retrieve</a>(id, { ...params }) -> MultiConsentResponse</code>

# SessionsV2

Types:

- <code><a href="./src/resources/sessions-v2.ts">FiDataFetchResponseV2</a></code>

Methods:

- <code title="post /v2/sessions">client.sessionsV2.<a href="./src/resources/sessions-v2.ts">create</a>({ ...params }) -> FiDataFetchResponseV2</code>
- <code title="get /v2/sessions/{session_id}">client.sessionsV2.<a href="./src/resources/sessions-v2.ts">retrieve</a>(sessionId, { ...params }) -> FiDataFetchResponseV2</code>
