# History

## Functionality

Use the **History** tab to view and interact with the list of all transactions under the bank’s domain in the Bokolo network.

## Accessibility

By default, this tab is only accessible by users with the following roles:
- [Manager](../roles.md#manager)
- [Auditor](../roles.md#auditor)

## On this tab

- **History** table — contains a list of all incoming transactions to the bank’s main account. The table contains the following fields:
  - **View** — contains the **Details** button for each record. Selecting **Details** opens the **Transaction Details** screen containing all the available information on the transaction.
  - **Trx Hash** — the unique hash ID of a transaction in the Iroha network.
  - **External Reference** — an ID number of a third-party document serving as a reason for the transaction.
  - **Entry Date** — the exact time and date of when a transaction occurred.
  - **From Account** — the Account ID of an account that is specified as a sender.
  - **To Account** — the Account ID of an account that is specified as a receiver.
  - **CCY** — the currency of a transaction.
  - **Amount** — the exact amount that has been transfered.
  - **Status** — the current status of a transaction at the moment of observing.
- **History** table may be filtered by the following parameters:
  - **Currency** dropdown menu — select the currency of the transactions.
  - **To Account** dropdown menu — input the Account ID of a receiver of the transactions.
  - **Dates** bar — input the time period of transactions.
  - **Transaction Status** dropdown menu — select the status of the transactions.
- **Export** button — allows to export the contents of the **Mobile Users** table as a `.csv` file.

### Exporting table contents

::: tip Note

The exporting of the table’s contents is only accessible by users with the **Manager** role.

:::

To export the contents of the **Mobile Users** table, perform the following steps:
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
