# Notifications

Use the **Notifications** tab to view and interact with the list of all notifications sent to Bokolo Mobile users since the establishment of the network, as well as [create new custom notifications](#creating-new-notifications) that could be sent to either all users or to specific groups of users (e.g., users of a specific bank on the network).

## Accessibility

By default, this tab is only accessible by users with the [Manager](../roles.md#manager) role.

## On this tab

The **Notifications** tab consists of the following UI elements:
- **Start Date** and **End Date** fields — allow you to filter the contents of the **Notifications** table by a specific date.
- **Create new notification** button — allows you to create a new notification.\
  For instructions, see [Creating new notifications](#creating-new-notifications).
- **Notifications** table — displays the list of all notifications that has ever been sent out to Bokolo Mobile users since the establishment of the network.\
  Each entry in the table has the following structure:
  - **View** button — allows you to see the full text of a selected notification in a pop-up window.  
  - **Recipient** — the recipient(s) of a notification.\
  Can be `everyone` or can list all of the individual users or groups of users.
  - **Message** — the **Notification text** of a notification.\
  For details, see [Creating new notifications](#creating-new-notifications), Step 3).
  - **Message Date and Time** — the exact date and time of when the message was sent out.\
  Format: YYYY-MM-DD local time in 24-hour time format (e.g., 2023-10-30 20:12:49)

### Creating new notifications

To create a new notification, perform the following steps:
1. On the **Notifications** tab, select **Create new notification** button.\
   **New notification** window appears.
2. Depending on who the recipients of your new notification are going to be, do one of the following:
   - If you intend to send out the notification to all of the Bokolo Mobile users, stay on the **To everyone** filter at the top of the window.
   - If you intend to send out the notification to specific users, <abbr title="See INFO below">groups of users</abbr> or users of a specific bank, select the **To specific users/groups** filter at the top of the window; then do one of the following:
     - To send notification to all users of a specific bank, input their **Account ID** into the **Recipient ID(s)** field.
     - To send notification to a specific user, input either their **Account ID** or any part of their name to look them up and select from the search results.

      > If necessary, perform multiple times for a number of banks and/or users.

3. Input relevant data into the following fields:
   - **Notification title** — the title of the new notification; it is shown in **bold text** in the push notification that users receive; can be up to 50 symbols.
   - **Notification text** — the short text that is shown in the push notification that users receive; can be up to 200 symbols.
   - **Full text** — the long text that is shown if users tap the push notification; can be up to 500 symbols.
4. When ready, select **Create and send notification**.

A **Success** notification appears, a new notification is sent out to the specified recipients and is added to the **Notifications** table.

::: tip

In the **Full text** of your notification, any part of the text (individual and/or multiple words and/or sentences) can be formatted to be **bold**, _italic_, <u>underlined</u> and/or contain a [web link](https://www.cbsi.com.sb/).

:::

::: info

Creating custom groups of users that can receive notifications is currently under development and has not been implemented yet.

:::
