# Users

Types:

- <code><a href="./src/resources/users.ts">TokenAPIResponse</a></code>

Methods:

- <code title="post /users/login">client.users.<a href="./src/resources/users.ts">login</a>({ ...params }) -> TokenAPIResponse</code>

# Fips

Types:

- <code><a href="./src/resources/fips.ts">FipResponse</a></code>

Methods:

- <code title="get /v2/fips">client.fips.<a href="./src/resources/fips.ts">list</a>() -> FipResponse</code>

# Consents

Types:

- <code><a href="./src/resources/consents/consents.ts">ConsentResponseV2</a></code>
- <code><a href="./src/resources/consents/consents.ts">RevokeConsentResponse</a></code>

Methods:

- <code title="post /v2/consents">client.consents.<a href="./src/resources/consents/consents.ts">create</a>({ ...params }) -> ConsentResponseV2</code>
- <code title="get /v2/consents/{request_id}">client.consents.<a href="./src/resources/consents/consents.ts">retrieve</a>(requestId, { ...params }) -> ConsentResponseV2</code>
- <code title="get /v2/consents/{consent_id}/fetch/status">client.consents.<a href="./src/resources/consents/consents.ts">fetchStatus</a>(consentId, { ...params }) -> void</code>
- <code title="post /v2/consents/{request_id}/revoke">client.consents.<a href="./src/resources/consents/consents.ts">revoke</a>(requestId, { ...params }) -> RevokeConsentResponse</code>

## Collection

Types:

- <code><a href="./src/resources/consents/collection.ts">MultiConsentResponse</a></code>

Methods:

- <code title="post /v2/consents/collection">client.consents.collection.<a href="./src/resources/consents/collection.ts">create</a>({ ...params }) -> MultiConsentResponse</code>
- <code title="get /v2/consents/collection/{id}">client.consents.collection.<a href="./src/resources/consents/collection.ts">retrieve</a>(id, { ...params }) -> MultiConsentResponse</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">FiDataFetchResponseV2</a></code>

Methods:

- <code title="post /v2/sessions">client.sessions.<a href="./src/resources/sessions.ts">create</a>({ ...params }) -> FiDataFetchResponseV2</code>
- <code title="get /v2/sessions/{session_id}">client.sessions.<a href="./src/resources/sessions.ts">retrieve</a>(sessionId, { ...params }) -> FiDataFetchResponseV2</code>
