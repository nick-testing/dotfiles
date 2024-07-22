// Overrides file appended to Arkenfox's user.js

// Override letterbox (4504)
user_pref("privacy.resistFingerprinting.letterboxing", false);

// Disable location bar using search
user_pref("keyword.enabled", true);

// Enable webGL
user_pref("webgl.disabled", false);

// 0600 - Override link prefetching
user_pref("network.dns.disablePrefetch", false);
user_pref("network.predictor.enabled", true);
user_pref("network.prefetch-next", true);

// Disable the Twitter/Reddit ads in the URL bar:
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]

// Disable the pocket antifeature:
user_pref("extensions.pocket.enabled", false);

// Disable Firefox sync and its menu entries
user_pref("identity.fxaccounts.enabled", false);

// Fix the issue where right mouse button instantly clicks
user_pref("ui.context_menus.after_mouseup", true);

// This could otherwise cause some issues on bank logins and other annoying sites:
user_pref("network.http.referer.XOriginPolicy", 0);

// Keep cookies until expiration or user deletion:
user_pref("network.cookie.lifetimePolicy", 0);

// Don't autodelete cookies on shutdown:
user_pref("privacy.clearOnShutdown.cookies", false);

// Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);

// hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", false);

user_pref("browser.aboutwelcome.enabled", false); // disable Intro screens

// Only show "List all Tabs" icon when needed
user_pref("browser.tabs.tabmanager.enabled", false);

// Enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Add compact mode back to options
user_pref("browser.compactmode.show", true);
