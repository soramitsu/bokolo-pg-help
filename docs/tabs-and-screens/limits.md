# Limits

Use the **Limits** tab to view and interact with the list of daily limits.

## Accessibility

By default, this tab is only accessible by users with the [Administrator](../roles.md#administrator) role.

## On this tab

- **Custom Limits** table — contains a list of all transaction limits for Bokolo Mobile users.\
  The table contains the following fields:
  - **Edit** — contains the **Edit** button for each record. Selecting **Edit** opens the **Edit limit** screen.
  - **Limit name** — the name of a limit.
  - **SBD limit** — the maximum amount in SBD that a user with the limit is able to spend daily.
  - **Type** — indicates the type of users based on their KYC status that the limit is set for.
  - **Description** — the custom description of a limit.
- **Export** button — allows to export the contents of the **Mobile Limits** table as a `.csv` file.
- **Add New Limit** button — allows to create a new daily transaction limit for Bokolo Mobile users.\
  For instructions, see [Adding a new limit](#adding-a-new-limit) below.

## Adding a new limit

To add a new limit, perform the following steps:
1. On the **Limits** tab, select **Add New Limit**.\
   The **Add Limit** screen appears.
2. Input data into the following fields:
   - **Limit name** — the name of the new daily transaction limit.
   - **Amount in SI dollars** — the maximum amount in SBD that the users will be able to spend daily.
3. From the <abbr title="See INFO below">**KYC Type**</abbr> dropdown menu, choose the type of the new limit.
4. If necessary, input a custom description into the **Description** field.
5. When ready, select **Submit**.\

A **Success** notification appears and the new limit is added to the **Custom Limits** table.

::: info

**KYC Type** determines the group of users that the limit is applied to:
- `FULL_KYC` for verified users;
- `PARTIAL_KYC` for unverified users.

:::

## Editing an existing limit

::: tip NOTE

The default limits can only be edited by the central bank.

Existing custom limits can only have their **Name** and **Amount in SBD** edited.

:::

To edit an existing transaction limit, perform the following steps:
1. Find the limit that you are interested in and select the **Edit** button. The **Edit limit** screen appears.
2. Edit the limit details as required.
3. When ready, select **Submit**. The **Success** notification appears.

To return to the **Custom Limits** screen, select **Back**.

## Exporting table contents

To export the contents of the **Custom Limits** table, select **Export**, then select **Export CSV** in the **Export a report** window that appears.
