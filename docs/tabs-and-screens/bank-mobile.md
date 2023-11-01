# Bank Mobile Users

## Functionality

Use the **Bank Mobile Users** tab to view the list of all mobile users and their details.

## Accessibility

By default, this tab is only accessible by users with the [Auditor](../roles.md#auditor) role.

## On this tab

- **Mobile Users** table — contains a list of all mobile users. The table contains the following fields:
  - **View** — contains the **Details** button for each record. Selecting **Details** opens the **User Info** screen containing the account details of a user.
  - **Full name** — the first and last name of a user.
  - **Account ID** — the unique identification number of a user in the `username@domain` format (e.g., `james_mae@iroha`).
  - **Phone number** — the phone number of a user.
  - **Email** — the email address of a user.
  - **Address** — the actual residential address of a user.
  - **Registered Date** — the date and time on which a user registered.
  - **Status** — the KYC status of a user.
- **KYC Status** dropdown list — choosing an option from the list allows you to filter the table records by the KYC status of a user.\
  The list contains the following options:
  - **All** — all of the users are shown.
  - **Full KYC** — only the users with Full KYC are shown.
  - **Partial KYC** — only the users with Partial KYC are shown.
- **Search** bar — allows to search the contents of the **Mobile Users** table.\
  The bar supports letters, numeric values, and dates in the YYYY-MM-DD format (e.g., 2022-10-31).
