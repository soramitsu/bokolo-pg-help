# Roles and Permissions

A **permission** is a certain functionality that a user is allowed to access and use.

A **role** is a set of permissions grouped together that can be assigned to a specific user.

## Roles

In the Bokolo network, all users must have at least one role assigned to them.

By default, Bokolo has the following roles preset:

### Manager

**Manager**—`ROLE_MANAGER`—a user who manages the most of possible financial operations.\
Has the following permissions:
- [Dashboard](./tabs-and-screens/dashboard.md)
- [Total accounts](./tabs-and-screens/total-accounts.md)
- [Main account](./tabs-and-screens/main-account.md)
- [Manage main account](./tabs-and-screens/manage-main.md)
- [Incoming transactions](./tabs-and-screens/incoming-trx.md)
- [Outgoing transactions](./tabs-and-screens/outgoing-trx.md)
- [History (Manager)](./tabs-and-screens/history.md)
- [Notifications](./tabs-and-screens/notifications.md)

### Administrator

**Administrator**—`ROLE_ADMINISTRATOR`—a user who manages the most of the user-related operations.\
Has the following permissions:
- [Mobile requests](./tabs-and-screens/mobile-req.md)
- [Mobile users](./tabs-and-screens/mobile-users.md)
- [Key recovery requests](./tabs-and-screens/key-req.md)
- [Add limit](./tabs-and-screens/add-limit.md)
- [Mobile limit](./tabs-and-screens/mobile-limits.md)
- [Change phone requests (Admin)](./tabs-and-screens/change-phone.md)
- [Bank contact information](./tabs-and-screens/bank-contact.md)
- [Mobile terms](./tabs-and-screens/mobile-terms.md)

### Authorizer

**Authorizer**—`ROLE_AUTHORIZER`—a user who is only able to authorize various requests from mobile users.\
Has the following permissions:
- [Authorize change phone requests](./tabs-and-screens/change-phone.md)
- [Authorize recovery requests](./tabs-and-screens/key-req.md)

### Auditor

**Auditor**—`ROLE_AUDITOR`—a user who is only able to view and monitor mobile users and their operations.\
Has the following permissions:
- [View mobile users (Auditor)](./tabs-and-screens/bank-mobile.md)
- [Search mobile users](./tabs-and-screens/search-mobile.md)
- [History (Auditor)](./tabs-and-screens/history.md)

---

## Permissions

List of all permissions:
- **Add limit** — grants access to use the [KYC Limit Amount \> Add Limit](./tabs-and-screens/add-limit.md) tab.
- **Authorize change phone requests** — grants access to use the [Change Phone Requests](./tabs-and-screens/change-phone.md) tab as an **Authorizer**.
- **Authorize recovery requests** — grants access to use the [Key Recovery Requests](./tabs-and-screens/key-req.md) tab as an **Authorizer**.
- **Bank contact information** — grants access to use the [Bank Contact Information](./tabs-and-screens/bank-contact.md) tab.
- **Change phone requests (Admin)** — grants access to use the [Change Phone Requests](./tabs-and-screens/change-phone.md) tab as an **Administrator**.
- **Dashboard** — grants access to use the [Dashboard](./tabs-and-screens/dashboard.md) tab.
- **History (Manager)** — grants access to use the [History](./tabs-and-screens/history.md) tab as a **Manager**.
- **History (Auditor)** — grants access to use the [History](./tabs-and-screens/history.md) tab as an **Auditor**.
- **Incoming transactions** — grants access to use the [Incoming Transactions](./tabs-and-screens/incoming-trx.md) tab.
- **Key recovery requests** — grants access to use the [Key Recovery Requests](./tabs-and-screens/key-req.md) tab.
- **Main account** — grants access to use the [Main Account](./tabs-and-screens/main-account.md) tab.
- **Manage main account** — grants access to use the [Manage Main Account](./tabs-and-screens/manage-main.md) tab.
- **Mobile limit** — grants access to use the [Limits](./tabs-and-screens/limits.md) tab.
- **Mobile requests** — grants access to use the [Waiting for Approval \> Mobile Requests](./tabs-and-screens/mobile-req.md) tab.
- **Mobile terms** — grants access to use the [Terms & Conditions \> Mobile Terms](./tabs-and-screens/mobile-terms.md) tab.
- **Mobile users** — grants access to use the [Mobile Users](./tabs-and-screens/mobile-users.md) tab.
- **Notifications** — grants access to use the [Notifications](./tabs-and-screens/notifications.md) tab.
- **Outgoing transactions** — grants access to use the [Outgoing Transactions](./tabs-and-screens/outgoing-trx.md) tab.
- **Search mobile users** — grants access to use the [Search Mobile Users](./tabs-and-screens/search-mobile.md) tab.
- **Total accounts** — grants access to use the [Total Accounts](./tabs-and-screens/total-accounts.md) tab.
- **View mobile users (Auditor)** — grants access to use the [Bank Mobile Users](./tabs-and-screens/bank-mobile.md) tab.
