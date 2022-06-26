export default {
  title: "Header",
  sideMenu: [
    { link: "/", icon: "home" },
    { link: "/completed", icon: "check" },
    { link: "/logout", icon: "logout" },
  ],
  navigation: {
    home: [
      { link: "#", label: "organization", type: "heading" },
      { link: "#", label: "Org 1", type: "link" },
      { link: "#", label: "Org 2", type: "link" },
      { link: "#", label: "Org 3", type: "link" },
      { link: "#", label: "Org 4", type: "link" },
      { link: "#", label: "Org 5", type: "link" },
      { link: "#", label: "settings", type: "heading" },
      { link: "#", label: "Setting 1", type: "link" },
      { link: "#", label: "Setting 2", type: "link" },
      { link: "#", label: "Setting 3", type: "link" },
    ],
    completed: [
      { link: "#", label: "VIP", type: "heading" },
      { link: "#", label: "Org 1", type: "link" },
      { link: "#", label: "Org 2", type: "link" },
    ],
  },
};
