export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "দপ্তরের ড্যাশবোর্ড",
        route: "/dashboard",
        keenthemesIcon: "home",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "প্রতিবেদনসমূহ",
        route: "/dashboard1",
        keenthemesIcon: "graph-up",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "দপ্তরের অভিযোগ ব্যবস্থাপনার চিত্র",
        route: "/dashboard2",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "দপ্তরের আপিল ব্যবস্থাপনার চিত্র",
        route: "/dashboard3",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "আওতাধীন দপ্তরের চিত্র",
        route: "/dashboard4",
        keenthemesIcon: "element-equal",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "আপিলকৃত অভিযোগসমূহের তালিকা",
        route: "/dashboard5",
        keenthemesIcon: "element-8",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "তাগিদ তালিকা",
        route: "/dashboard6",
        keenthemesIcon: "element-8",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "পরামর্শের তালিকা",
        route: "/dashboard7",
        keenthemesIcon: "messages",
        bootstrapIcon: "bi-app-indicator",
      },
      
    ],
  },
];

export default MainMenuConfig;
