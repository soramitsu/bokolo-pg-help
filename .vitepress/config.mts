import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TODO",
  description: "TODO",

  srcDir: "docs",
  base: process.env.PUBLIC_PATH ?? "/",

  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "Getting Started",
          items: [
            {
              link: "getting-started/activate-bank",
              text: "Activating a new bank",
            },
            {
              link: "getting-started/add-bank",
              text: "Adding a new bank",
            },
            {
              link: "getting-started/create-users",
              text: "Creating new users",
            },
          ],
        },
        {
          link: "roles",
          text: "Roles and Permissions",
        },
        {
          text: "Tabs and Screens",
          items: [
            {
              link: "tabs-and-screens/add-limit",
              text: "Add Limit",
            },
            {
              link: "tabs-and-screens/bank-contact",
              text: "Bank Contact Information",
            },
            {
              link: "tabs-and-screens/bank-mobile",
              text: "Bank Mobile Users",
            },
            {
              link: "tabs-and-screens/change-phone",
              text: "Change Phone Requests",
            },
            {
              link: "tabs-and-screens/dashboard",
              text: "Dashboard",
            },
            {
              link: "tabs-and-screens/desktop-limits",
              text: "Desktop Limits",
            },
            {
              link: "tabs-and-screens/desktop-req",
              text: "Desktop Requests",
            },
            {
              link: "tabs-and-screens/desktop-terms",
              text: "Desktop Terms",
            },
            {
              link: "tabs-and-screens/desktop-users",
              text: "Desktop Users",
            },
            {
              link: "tabs-and-screens/history",
              text: "History",
            },
            {
              link: "tabs-and-screens/incoming-trx",
              text: "Incoming Transactions",
            },
            {
              link: "tabs-and-screens/key-req",
              text: "Key Recovery Requests",
            },
            {
              link: "tabs-and-screens/main-account",
              text: "Main Account",
            },
            {
              link: "tabs-and-screens/manage-main",
              text: "Manage Main Account",
            },
            {
              link: "tabs-and-screens/mobile-limits",
              text: "Mobile Limits",
            },
            {
              link: "tabs-and-screens/mobile-req",
              text: "Mobile Requests",
            },
            {
              link: "tabs-and-screens/mobile-terms",
              text: "Mobile Terms",
            },
            {
              link: "tabs-and-screens/mobile-users",
              text: "Mobile Users",
            },
            {
              link: "tabs-and-screens/outgoing-trx",
              text: "Outgoing Transactions",
            },
            {
              link: "tabs-and-screens/search-mobile",
              text: "Search Mobile Users",
            },
            {
              link: "tabs-and-screens/total-accounts",
              text: "Total Accounts",
            },
          ],
        },
      ],
    },

    editLink: {
      pattern:
        "https://github.com/soramitsu/bokolo-pg-help/edit/master/docs/:path",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/soramitsu/bokolo-pg-help",
      },
    ],

    search: {
      provider: "local",
    },
  },
});
