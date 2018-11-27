## An isomorphic javascript sdk for - CommerceWebservicesV2

This package contains an isomorphic SDK for CommerceWebservicesV2.

### Currently supported environments

- Node.js version 6.x.x or higher
- Browser JavaScript

### How to Install

```
npm install occ-client
```

### How to use

#### nodejs - Authentication, client creation and getBaseStore  as an example written in TypeScript.

##### Install @azure/ms-rest-nodeauth

```
npm install @azure/ms-rest-nodeauth
```

##### Sample code

```ts
import * as msRest from "@azure/ms-rest-js";
import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";
import { CommerceWebservicesV2, CommerceWebservicesV2Models, CommerceWebservicesV2Mappers } from "occ-client";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

msRestNodeAuth.interactiveLogin().then((creds) => {
  const client = new CommerceWebservicesV2(creds, subscriptionId);
  const baseStoreUid = "testbaseStoreUid";
  const baseSiteId = "testbaseSiteId";
  const fields = "BASIC";
  client.getBaseStore(baseStoreUid, baseSiteId, fields).then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.error(err);
});
```

#### browser - Authentication, client creation and getBaseStore  as an example written in JavaScript.

##### Install @azure/ms-rest-browserauth

```
npm install @azure/ms-rest-browserauth
```

##### Sample code

See https://github.com/Azure/ms-rest-browserauth to learn how to authenticate to Azure in the browser.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>occ-client sample</title>
    <script src="node_modules/@azure/ms-rest-js/dist/msRest.browser.js"></script>
    <script src="node_modules/@azure/ms-rest-browserauth/dist/msAuth.js"></script>
    <script src="node_modules/occ-client/dist/occ-client.js"></script>
    <script type="text/javascript">
      const subscriptionId = "<Subscription_Id>";
      const authManager = new msAuth.AuthManager({
        clientId: "<client id for your Azure AD app>",
        tenant: "<optional tenant for your organization>"
      });
      authManager.finalizeLogin().then((res) => {
        if (!res.isLoggedIn) {
          // may cause redirects
          authManager.login();
        }
        const client = new OccClient.CommerceWebservicesV2(res.creds, subscriptionId);
        const baseStoreUid = "testbaseStoreUid";
        const baseSiteId = "testbaseSiteId";
        const fields = "BASIC";
        client.getBaseStore(baseStoreUid, baseSiteId, fields).then((result) => {
          console.log("The result is:");
          console.log(result);
        }).catch((err) => {
          console.log("An error occurred:");
          console.error(err);
        });
      });
    </script>
  </head>
  <body></body>
</html>
```

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)
