# Creating new users

By default, a newly activated bank in the DLak network has a single user—`access_manager`—**Access Manager**.

The **Access Manager** user is able to create new users, assign them roles, create new custom roles and grant specific permissions to roles.

To create a new user, an **Access Manager** must perform the following steps:
1. Open a browser and go to your bank's personal Payment Gateway address that has been provided by the central bank during registration.
2. Log in using the `username` and `password` credentials provided by the central bank during registration. The **Users** screen appears.
3. On the **Users** screen, select **Add user**.\  
   The **New User** screen appears.
4. On the **New User** screen, specify the following:
   - **Login**: the username that the user will use to log in.
   - **First name**: the user’s real first name.
   - **Last name**: the user’s real last name.
   - **Email**: the user’s email address that will receive an email with a temporary password.

   ::: tip Note

   The email address must be real. A temporary password will be sent to the specified email address.

   :::

5. From the **Roles** dropdown list choose the required role and select **Add**.\
   The added role is indicated under the **Roles** list.
6. Repeat *Step 5* if multiple roles for a single user are required.
7. When ready, select **Create user**.\
   A new entry appears in the **Users** table on the **Users** screen.

A new user can now log in using the `login` specified and the temporary password sent to their email address.

::: tip Note

By default, **Access Manager**'s credentials are as follows:

**Username**: `access_manager`

**Password**: is sent to the email address specified during the bank registration process.

:::

For information on default user roles and permissions, see [Roles and Permissions](../roles.md).

Additionally, you may also accustom yourself with the Payment Gateway [Tabs and Screens](https://www.notion.so/Tabs-and-Screens-98dcb094293f40cc8cf4b9d75cd4508f?pvs=21).
