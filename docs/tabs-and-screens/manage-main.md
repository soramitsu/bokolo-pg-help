# Manage Main Account

Use the **Manage Main Account** tab to make a custom transaction to an account registered under the bank’s domain in the Bokolo network.

## Accessibility

By default, this tab is only accessible by users with the [Manager](../roles.md#manager) role.

## On this tab

The **Transfer from: \<bank_name\> Main Account** panel has the following fields:
- **Transfer to** — the receiver of the transaction; a user’s phone number or their unique identification number in the `username@domain` format (e.g., `james_mae@iroha`) could be input into the field.
- **Transfer from (phone)** — the phone number of a specified sender of the transaction; the receiver of the transaction will see the specified phone number as the sender of the transaction.
- **Transfer from (name)** — the name of a specified sender of the transaction; the receiver of the transaction will see the specified full name as the sender of the transaction.
- **Choose currency** — the currency of the transaction.

  ::: tip Note

  Since international transfers are currently unavailable, the currency is locked at SBD and cannot be changed.

  :::

- **Amount** — the exact amount to transfer.
- **External Reference (ID)** — an ID number of a third-party document serving as a reason for the transaction.
- **Description** — a custom text commentary.

## Creating custom transactions

To make a custom transaction from a bank’s main account to a user in the Bokolo network, perform the following steps:
1. Input relevant data into the following fields:
   - **Transfer to**: must be in the `username@domain` format.
   - **Transfer from (phone)**: must include the Solomon Islands country code (**+677**).
   - **Transfer from (name)**.
2. Specify the required amount in the **Amount** field.
3. If required, fill in the optional **External Reference (ID)** and **Description** fields.
4. When ready, select **Send**. The **Confirmation** panel appears allowing you to revaliade the input data.
5. If the input data is correct, select **Send**, then select **Yes** in the **Are you sure?** window that appears.\
   A **Success** notification appears.
