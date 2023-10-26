# Incoming Transactions

## Functionality

Use the **Incoming Transactions** tab to view and interact with the list of incoming transactions.

## Accessibility

By default, this tab is only accessible by users with the [Manager](../roles.md#manager) role.

## On this tab
- **Incoming Transactions** table — contains a list of all incoming transactions to the bank’s main account. The table contains the following fields:
  - **View** — contains the **Details** button for each record. Selecting **Details** opens the **Transaction Details** screen containing all the available information on the transaction.
  - **Trx Hash** — the unique hash ID of a transaction in the Iroha network.
  - **External Reference** — an ID number of a third-party document serving as a reason for the transaction.
  - **Entry Date** — the exact time and date of when a transaction occurred.
  - **From Account** — the Account ID of an account that is specified as a sender.
  - **To Account** — the Account ID of an account that is specified as a receiver.
  - **CCY** — the currency of a transaction.
  - **Amount** — the exact amount that has been transfered.
  - **Status** — the current status of a transaction at the moment of observing.
- **Calendar** bar — allows to filter the results of the **Incoming Transactions** table by dates.
- **Export** button — allows to export the contents of the **Mobile Users** table as a `.csv` file.
- **Search** bar — allows to search the contents of the **Mobile Users** table.  
  The bar supports letters, numeric values, and dates in the YYYY-MM-DD format (e.g., 2022-10-31).

## Exporting table contents

To export the contents of the **Mobile Users** table, perform the following steps:
1. Select **Export**. The **Export a report** window appears.
2. Select **Start Date**. The **Calendar** window appears.
3. Scroll through the calendar to find the starting date of the time period that you are interested in and select it (DD/MM/YYYY; e.g., 11/01/2022).\
   The chosen date is input into the **Start Date** field; the **End Date** field is now active.
4. Scroll through the calendar to find the ending date of the time period that you are interested in and select it (DD/MM/YYYY; e.g., 11/11/2022).\
   The chosen date is input into the **End Date** field; the **Calendar** window disappears.
5. Select **Export CSV**.\
   The resulting `.csv` file is downloaded to your computer.

## Accessing transaction details

To see detailed information on a transaction, select **Details** in the **View** field next to the required record. After that, the **Transaction Details** screen appears. The screen contains the following data:
- **Transaction ID** — internal ID of a transaction.
- **Source Account ID** — Account ID of a sender.
- **Destination Account ID** — Account ID of a receiver.
- **Destination Full name** — full name of the receiver as he is registered in Bokolo.
- **Source Bank Participant Code** — unique Participant Code of the sender’s bank in Bokolo network.
- **Source Bank Name** — full name of the sender’s bank in Bokolo Network.
- **Destination Bank Participant Code** — unique Participant Code of the receiver’s bank in Bokolo network.
- **Destination Bank Name** — full name of the receiver’s bank in Bokolo Network.
- **Currency Name** — name of the currency used in the transaction.
- **Creation Time** — the exact date and time of when a transaction occurred (server’s time).
- **Transaction Daytime** — the exact date and time of when a transaction occurred (GMT time).
- **Source Phone number** — phone number of the sender.
- **Destination Phone number** — phone number of the receiver.
- **Source Wallet Type** — the type of the wallet that the sender has used for the transaction.
- **Destination Wallet Type** — the type of the wallet of the receiver.
- **Status** — the current status of a transaction at the moment of observing.
- **Hash of Transaction** — the unique hash ID of a transaction in the Iroha network.
- **Asset ID** — the unique ID of the currency in the Iroha network.
- **Amount** — the exact amount that was transfered.
- **Transfer from (phone)** — the phone number of a specified sender of the transaction; the receiver of the transaction will see the specified phone number as the sender of the transaction.
- **Transfer from (name)** — the name of a specified sender of the transaction; the receiver of the transaction will see the specified full name as the sender of the transaction.
- **Transaction Type** — the type of a transaction (e.g., **Send**/**Pay**).
