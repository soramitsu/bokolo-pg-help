# Change Phone Requests

Use the **Change Phone Requests** tab to view and interact with the list of all mobile users’ requests to change their phone number.

## Accessibility

By default, this tab is only accessible by users with the following roles:
- [Administrator](../roles.md#administrator)
- [Authorizer](../roles.md#authorizer)

## On this tab

- **Change Phone Requests** table — contains a list of all mobile users. The table contains the following fields:
  - **Account** — the unique identification number of a user in the `username@domain` format (e.g., `james_mae@auki`).
  - **Phone number** — the phone number that a user has specified as a new one.
  - **Creator** — the full name of the creator of a request.
  - **Status** — the current status of a request.
  - **Reject reason** — the reason for the rejection of a recovery request.
  - **Action** — contains a dropdown list of actions that are possible to perform regarding a request.  
    The list of actions contains the following options:
      - **Verify** — authorizes a user’s request to change their phone number.
      - **Resend SMS** — initiates generation and sending of a new OTP to the user’s phone number.
      - **Cancel** — cancels a user’s request to change their phone number.
- **Status** dropdown list — choosing an option from the list allows to filter the table records by the status of requests.  
  The list contains the following options:
  - **All** — all of the requests are shown.
  - **Open** — only open requests are shown.
  - **Verified** — only verified requests are shown.
  - **Authorized** — only authorized requests are shown.
  - **Rejected** — only rejected requests are shown.
  - **Canceled** — only canceled requests are shown.
  - **Closed** — only closed requests are shown.
- **Search** bar — allows to search the contents of the **Change Phone Requests** table.  
  The bar supports letters and numeric values.
