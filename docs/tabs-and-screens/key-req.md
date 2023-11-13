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
  - **Account ID** — the unique identification number of a user in the `username@domain` format (e.g., `james_mae@auki`).
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

## Authorizing recovery requests

For the convenience of Bokolo Mobile users, they can restore access to their account by using their unique Recovery QR Code that is automatically generated for every user once they register. However, if a user have lost their Recovery QR Code, they can initiate a manual recovery procedure.

Once a user initiates the procedure to restore access to their account without the Recovery QR Code, their request must be authorized by their bank's PG [Administrator](../roles.md#administrator) or [Authorizer](../roles.md#authorizer).

::: info

For details on how to restore access to a Bokolo Mobile account as a mobile user, see [Help for Bokolo Mobile: Restore access to your account](https://soramitsu.github.io/bokolo-mobile-help/account-operations/restore-account.html).

:::

To authorize a request to restore a Bokolo Mobile account, perform the following:

1. Once a Bokolo Mobile user initiates the procedure, they are prompted to visit their bank's office (see [Help for Bokolo Mobile: Restore access to your account (Step 3)](https://soramitsu.github.io/bokolo-mobile-help/account-operations/restore-account.html#:~:text=If%20you%20don%E2%80%99t%20have%20your%20Recovery%20QR%20Code%3A)) and a new entry appears on the **Key recovery requests** list.
2. Request from the person that claims to be the user their identification documents and verify whether they are the same person.
3. From the **Key recovery requests** list select the request that the user submitted.
4. Depending on your decision regarding the selected Recovery Request or multiple, do one of the following:
   - Select **Approve** from the **Actions** list to approve the request.
   - Select **Reject** from the **Actions** list to reject the request.
5. If the request has been approved, an OTP code is generated and appears in a pop-up window. Provide this code to the user that initiated the request.
6. When prompted, the user must then input the OTP code into their Bokolo Mobile app and follow the rest of the recovery procedure.
7. A Core Administrator must then approve the user's request via the Bokolo Core web UI (for details, see [Help for Bokolo Core: Recovery](https://soramitsu.atlassian.net/wiki/spaces/BD/pages/4180869864/Recovery#Reviewing-active-%E2%80%98Recovery-Requests%E2%80%99))
