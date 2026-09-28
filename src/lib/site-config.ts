// Centralized site configuration. Owner-supplied assets live here so that
// replacing placeholder values never requires touching components.
export const siteConfig = {
  name: "yongkong",
  // TODO(owner asset, ticket 09): replace with real values before launch.
  authorRealName: "[REAL NAME]",
  // TODO(owner asset, ticket 09): hello@yongkong.dev once the domain and
  // email forwarding are set up.
  email: "[EMAIL PLACEHOLDER]",
  // TODO(owner asset, ticket 09): Cal.com booking link.
  bookCallUrl: "[CAL.COM PLACEHOLDER]",
  // TODO(owner asset, ticket 09): LinkedIn profile URL.
  linkedinUrl: "[LINKEDIN PLACEHOLDER]",
  github: "https://github.com/yongkong",
  // TODO(owner asset, ticket 09): path under public/ for the WeChat QR image.
  wechatQrImage: null,
} as const;
