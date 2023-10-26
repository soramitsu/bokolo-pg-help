# Desktop Users

## Functionality

Use the **Desktop Users** tab to view and interact with the list of all desktop users.

## Accessibility

By default, this tab is only accessible by users with the [Administrator](../roles.md#administrator) role.

## On this tab
- **Desktop Users** table — contains a list of all desktop users. The table contains the following fields:
  - **View** — contains the **Details** button for each record. Selecting **Details** opens the **User Info** screen containing the account details of a user.
  - **Organisation** — the company name of a user.
  - **Account ID** — the unique identification number of a user in the `username@domain` format (e.g., `james_mae@iroha`).
  - **Phone number** — the phone number of a user.
  - **Email** — the email address of a user.
  - **Address** — the actual business address of a user.
  - **Registered Date** — the date and time on which a user registered.
  - **Status** — the KYC status of a user.
- **KYC Status** dropdown list — choosing an option from the list allows to filter the table records by the KYC status of a user. The list contains the following options:
  - **All** — all of the users are shown.
  - **Full KYC** — only the users with Full KYC are shown.
  - **Partial KYC** — only the users with Partial KYC are shown.
- **Export** button — allows to export the contents of the **Desktop Users** table as a `.csv` file.
- **Search** bar — allows to search the contents of the **Desktop Users** table.\
  The bar supports letters, numeric values, and dates in the YYYY-MM-DD format (e.g., 2022-10-31).

## Viewing record details

To view record details of a particular desktop user, find a record that you are interested in and press the **Details** button next to it.

## Exporting table contents

To export the contents of the **Desktop Users** table, perform the following steps:
1. Select **Export**.\
   The **Export a report** window appears.
2. Select **Start Date**.\
   The **Calendar** window appears.
3. Scroll through the calendar to find the starting date of the time period that you are interested in and select it (DD/MM/YYYY; e.g., 11/01/2022).\
   The chosen date is input into the **Start Date** field; the **End Date** field is now active.
4. Scroll through the calendar to find the ending date of the time period that you are interested in and select it (DD/MM/YYYY; e.g., 11/11/2022).\
   The chosen date is input into the **End Date** field; the **Calendar** window disappears.
5. Select **Export CSV**.\
   The resulting `.csv` file is downloaded to your computer.
