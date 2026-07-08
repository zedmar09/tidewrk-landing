export type ChangeLogEntry = {
  id: string;
  dateLabel: string;
  eyebrow: string;
  summary: string;
  pages: Array<{
    page: string;
    path: string;
    changes: string[];
  }>;
};

export const changeLogEntries: ChangeLogEntry[] = [
  {
    id: "2026-07-08",
    dateLabel: "July 8, 2026",
    eyebrow: "Homepage update",
    summary:
      "Detailed record of page-level updates completed for the Tidewrk site.",
    pages: [
      {
        page: "Homepage",
        path: "/",
        changes: [
          "Updated the hero fallback headline from The current behind your next move. to The current behind your work.",
          "Changed the hero headline animation from a fixed The current behind prefix with rotating suffixes to full rotating tagline lines.",
          "Set the first visible hero tagline to The Current Behind You.",
          "Placed Behind You on the second line for the primary tagline to reduce empty space below the hero headline.",
          "Added the supporting hero tagline cycle: The current behind your work, The current behind the work that flows, and The current behind your next move.",
          "Preserved the existing dark hero styling, CTAs, counters, smart execution card, and subtle wave/current animation background.",
          "Removed the 45+ Completed Projects stat from the homepage numbers band.",
          "Updated 70+ Years of Combined Experience to 70+ Years of Combined Leadership Experience.",
          "Updated 100+ Technology & Business Experts to 100+ Team Members and Growing.",
          "Replaced the non-clickable Smart execution support copy in the bottom-right hero card with Talk to Tidewrk CTA content.",
          "Preserved the original bottom-right card design while making the card a clickable primary lead-capture action.",
          "Kept Explore Services near the hero banner as the secondary exploration action.",
        ],
      },
      {
        page: "Change Logs",
        path: "/change-logs",
        changes: [
          "Created the hidden Change Logs page.",
          "Added a left sidebar that lists changelog dates.",
          "Added a July 8, 2026 changelog entry.",
          "Added page-grouped changelog content so each date shows which pages changed and what changed on each page.",
          "Kept the page hidden from the navigation, footer, homepage CTAs, and visible menu links.",
        ],
      },
      {
        page: "Contact Page",
        path: "/contact",
        changes: [
          "Created a dedicated Contact page using a Tidewrk dark gradient layout inspired by the provided two-column contact reference.",
          "Added a top contact hero with Let’s Collaborate and Get In Touch messaging.",
          "Added the client-provided project collaboration intro copy.",
          "Shortened the contact intro copy so it matches the homepage tagline direction and keeps the message easier to scan.",
          "Added USA contact details including phone number, two office addresses, and info@tidewrk.com.",
          "Added Philippines contact details including phone number, office address, and info@tidewrk.com.",
          "Added a lead capture form with Name, Company Name, Email, Contact Number, Service, and How can we help fields.",
          "Added service options for Software Development, Software Outsourcing, Staff Augmentation, Virtual Assistants / Business Administration, and Executive Advisory & Consulting.",
          "Added client-side validation for required fields and email format.",
          "Added toast-only success confirmation after valid submission.",
          "Kept Salesforce disconnected for now; no Salesforce or API request is made on submit.",
        ],
      },
      {
        page: "Global CTAs",
        path: "All lead capture links",
        changes: [
          "Updated Talk to Tidewrk links to route to the new /contact page.",
          "Updated Contact Us navigation buttons to route to the new /contact page.",
          "Updated existing page CTA links that previously pointed to #contact so they now point to /contact.",
          "Kept Explore Services unchanged as the secondary exploration path.",
        ],
      },
      {
        page: "Navigation",
        path: "Top navigation",
        changes: [
          "Collapsed the separate Services and Solutions navigation tabs into one Solutions tab.",
          "Made Solutions the higher-level navigation label for the client-facing decision tree.",
          "Nested the core service buckets under Solutions: Software Development, Staff Augmentation, and Executive Advisory Consulting.",
          "Moved detailed capability pages under the service bucket where they belong, including full-stack teams, data engineering, cloud services, and QA under Software Development.",
          "Nested Virtual Assistants under Staff Augmentation instead of presenting virtual assistants as a separate top-level Solutions item.",
          "Used the full Virtual Assistants label wherever the service appears.",
          "Removed the old dedicated remote-capacity service bucket from the customer-facing Solutions navigation.",
          "Reframed remote team capacity as a Staff Augmentation and Software Development support option, with careful Philippines-based wording.",
          "Kept the hierarchy editable so Breanne can refine the final decision-tree language and grouping.",
        ],
      },
      {
        page: "Homepage Services",
        path: "/#services",
        changes: [
          "Removed the old dedicated remote-capacity services card.",
          "Added remote-ready collaboration language to Software Development.",
          "Added Philippines-based remote support language to Staff Augmentation.",
          "Rebalanced the remaining service cards so Software Development and Staff Augmentation sit side by side and Executive Advisory Consulting spans the row below.",
        ],
      },
      {
        page: "Homepage Mid-Page Band",
        path: "/",
        changes: [
          "Added a new Where Tidewrk Fits section between Services and Solutions.",
          "Replaced the stats/callout-band direction with audience and use-case messaging that avoids locking Tidewrk into one industry.",
          "Added Founders & Lean Teams messaging for SMBs and solopreneurs who need execution support without extra overhead.",
          "Added Operations Under Pressure messaging to make Virtual Assistants and admin support more visible as a lower-risk entry point.",
          "Added Software & Data Momentum messaging for product, automation, dashboards, QA, and data support.",
        ],
      },
      {
        page: "Footer CTA",
        path: "Global footer",
        changes: [
          "Made the Ready for your next move footer CTA clickable so it routes to the /contact inquiry form.",
          "Updated the footer CTA line to Let’s start the current behind it as interim copy.",
          "Noted that BEK still needs to copy-edit the final footer CTA line.",
        ],
      },
      {
        page: "About Us Page",
        path: "/about-us",
        changes: [
          "Created a dedicated About Us page with a company-level focus.",
          "Led the page with what Tidewrk does, why Tidewrk exists, and company values instead of individual profiles.",
          "Added values for moving with purpose, building around the work, and staying accountable.",
          "Added a capability overview covering software delivery, staff augmentation, Virtual Assistants, data support, remote team capacity, advisory, and workflow improvement.",
          "Updated About Us navigation and footer links to route to /about-us.",
          "Left Careers and any Omni routing untouched until HR coordination is complete.",
        ],
      },
      {
        page: "Homepage Solutions",
        path: "/#solutions",
        changes: [
          "Removed Virtual Assistants / Business Administration as a standalone homepage solution card.",
          "Kept Virtual Assistants positioned as a service nested under Staff Augmentation in the navigation decision tree.",
        ],
      },
      {
        page: "Global Site Shortcut",
        path: "All pages",
        changes: [
          "Added a global keyboard shortcut that opens the hidden Change Logs page in a new browser tab.",
          "Enabled Ctrl + Shift + 1 for Windows and Linux users.",
          "Enabled Command + Shift + 1 for macOS users.",
          "Prevented the shortcut from triggering while users are typing in inputs, textareas, selects, or contenteditable areas.",
        ],
      },
    ],
  },
];
