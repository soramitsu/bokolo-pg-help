import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Help for Bokolo Payment Gateway",
  description: "This Help provides extensive overview of all features and actions possible with Bokolo Payment Gateway",

  srcDir: "docs",
  base: process.env.PUBLIC_PATH ?? "/",

  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "Getting Started",
          items: [
            {
              link: "getting-started/add-bank",
              text: "Adding a new bank",
            },
            {
              link: "getting-started/activate-bank",
              text: "Activating a new bank",
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
          items: [],
        },
        {
          text: "Tabs and Screens",
          items: [
            {
              link: "tabs-and-screens/dashboard",
              text: "Dashboard",
            },
            {
              link: "tabs-and-screens/total-accounts",
              text: "Total Accounts",
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
              link: "tabs-and-screens/incoming-trx",
              text: "Incoming Transactions",
            },
            {
              link: "tabs-and-screens/outgoing-trx",
              text: "Outgoing Transactions",
            },
            {
              link: "tabs-and-screens/history",
              text: "History",
            },
            {
              text: "Waiting for Approval",
              items: [
                  {
                    link: "tabs-and-screens/mobile-req",
                    text: "Mobile Requests",
                  },
              ],
            },
            {
              link: "tabs-and-screens/mobile-users",
              text: "Mobile Users",
            },
            {
              link: "tabs-and-screens/desktop-users",
              text: "Desktop Users",
            },
            {
              link: "tabs-and-screens/key-req",
              text: "Key Recovery Requests",
            },
            {
              link: "tabs-and-screens/limits",
              text: "Limits",
            },
            {
              link: "tabs-and-screens/change-phone",
              text: "Change Phone Requests",
            },
            {
              link: "tabs-and-screens/bank-contact",
              text: "Bank Contact Information",
            },
            {
              text: "Terms & Conditions",
              items: [
                  {
                    link: "tabs-and-screens/mobile-terms",
                    text: "Mobile Terms",
                  },
              ],
            },
            {
              link: "tabs-and-screens/bank-mobile",
              text: "Bank Mobile Users",
            },
            {
              link: "tabs-and-screens/search-mobile",
              text: "Search Mobile Users",
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
