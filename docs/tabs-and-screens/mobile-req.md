# Mobile Requests

Use the **Mobile requests** tab to view and interact with the list of KYC verification requests from mobile users.

## Accessibility

By default, this tab is only accessible by users with the [Administrator](../roles.md#administrator) role.

## On this tab

- **Waiting for approval (Mobile)** table — contains a list of all KYC verification requests from mobile users. The table contains the following fields:
  - **View** — contains the **Details** button for each record. Selecting **Details** opens the **User Info** screen containing the account details of a user.
  - **Full name** — the first and last name of a user.
  - **Account ID** — the unique identification number of a user in the `username@domain` format (e.g., `james_mae@auki`).
  - **Phone number** — the phone number of a user.
  - **Email** — the email address of a user.
  - **Address** — the actual residential address of a user.
  - **Registered Date** — the date and time on which a user registered.
  - **Requested Date** — the date and time on which a user sent a KYC verification request.
- **Export** button — allows to export the contents of the **Waiting for Approval (Mobile)** table as a `.csv` file.
- **Search** bar — allows to search the contents of the **Waiting for Approval (Mobile)** table.\
  The bar supports letters, numeric values, and dates in the YYYY-MM-DD format (e.g., 2022-10-31).

## Viewing record details

To view record details of a particular KYC verification request from a mobile user, find a record that you are interested in and select the **Details** button next to it.

## Exporting table contents

To export the contents of the **Waiting for Approval (Mobile)** table, perform the following steps:
1.  Select **Export**.\
    The **Export a report** window appears.
2.  Select **Start Date**.\
    The **Calendar** window appears.
3.  Scroll through the calendar to find the starting date of the time period that you are interested in and select it (e.g., 11/01/2022).\
    The chosen date is input into the **Start Date** field; the **End Date** field is now active.
4.  Scroll through the calendar to find the ending date of the time period that you are interested in and select it (e.g., 11/11/2022).\
    The chosen date is input into the **End Date** field; the **Calendar** window disappears.
5.  Select **Export CSV**.\
    The resulting `.csv` file is downloaded to your computer.
