# Key Recovery Requests

Use the **Key Recovery Requests** tab to view and interact with the list of access recovery requests from mobile users.

## Accessibility

By default, this tab is only accessible by users with the following roles:
- [Administrator](../roles.md#administrator)
- [Authorizer](../roles.md#authorizer)

## On this tab

- **Key Recovery Requests** table — contains a list of all KYC verification requests from Bokolo Mobile users.\
  The table contains the following fields:
  - **Status** — the current status of a request at the time of observing. The status can be one of the following:
    - **AUTHORIZED** — a user’s request has been reviewed by an authorizer.
    - **APPROVED** — a user’s request has been approved by the central bank via Core.
    - **SUCCESSFUL** — a user’s request has been successfully processed and their access has been recovered.
    - **CANCELED** — a user’s request has been canceled by the user before submitting it.
    - **REJECTED** — a user’s request has been rejected by the central bank via Core.
    - **OPENED** — a user’s request has just been created.
    - **CLOSED** — a user’s request was closed by their bank’s administrator or authorizer.
    - **SENT** — a user’s request has been sent to the central bank’s Core.
    - **READY** — a user’s request is waiting to be reviewed and authorized.
    - **PREPARED** — an SMS with instructions on opening a request has been sent to a user.
    - **REVOKED** — a user’s request has been revoked by the bank.
    - **VERIFIED** — a user has submitted their OTP and has a new keypair generated for them.
    - **FAILED** — the Iroha transaction committing a user’s request has failed.
  - **Account ID** — the unique identification number of a user in the `username@domain` format (e.g., `james_mae@iroha`).
  - **Name** — the first and last name of a user.
  - **Transaction hash** — the unique hash ID of a transaction in the Iroha network.
  - **TX status** — the status of a transaction in the Iroha network.
  - **Registered Date** — the date and time on which a user registered.
  - **Last Update** — the date and time on which the request status updated the latest.
  - **Reason** — the reason for a recovery request that a mobile user specified when submitting.
  - **Actions** — contains a dropdown list of actions that are possible to perform regarding a request.\
    Buttons representing possible actions may vary depending on the current status of a certain request at the time of interaction.
- **Search** bar — allows to search the contents of the **Key Recovery Requests** table.\
  The bar supports letters, numeric values, and dates in the YYYY-MM-DD format (e.g., 2022-10-31).
