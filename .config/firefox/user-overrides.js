// Overrides file appended to Arkenfox's user.js

// Override letterbox (4504)
user_pref("privacy.resistFingerprinting.letterboxing", false);

// Disable location bar using search
user_pref("keyword.enabled", true);

// Enable search suggestions (0804)
// user_pref("browser.search.suggest.enabled", true);
// user_pref("browser.urlbar.suggest.searches", true);

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
// user_pref("network.cookie.lifetimePolicy", 0);

// Don't autodelete cookies on shutdown:
// user_pref("privacy.clearOnShutdown.cookies", false);

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

// Additional tweaks - cause site breakage from my testing

// Notification interval (in microseconds to avoid layout thrashing
// user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)

// Use GPU accelerated canvas
// user_pref("gfx.canvas.accelerated.cache-items", 4096); // default=2048; alt=8192
// user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; alt=1024
// user_pref("gfx.content.skia-font-cache-size", 20); // default=5; Chrome=20
 
// Set compression level for cahced JS bytecode - less data writing to disk
// user_pref("browser.cache.jsbc_compression_level", 3);
 
// Adjust video buffering - cache vdieos 720p or lower
// user_pref("media.cache_readahead_limit", 7200); // 120 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
// user_pref("media.cache_resume_threshold", 3600); // 60 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold

// image cache
// user_pref("image.mem.decode_bytes_at_a_time", 32768); // default=16384; alt=65536; chunk size for calls to the image decoders
 
// Change the absolute number of HTTP connections
// user_pref("network.http.max-connections", 1800); // default=900
// user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
// user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3

// Disable http request pacing
// user_pref("network.http.pacing.requests.enabled", false);
 
// Adjust DNS expiration time
// user_pref("network.dnsCacheExpiration", 3600); // keep entries for 1 hour
 
// Increase TLS token caching
// user_pref("network.ssl_tokens_cache_capacity", 10240); // default=2048; more TLS token caching (fast reconnects)
 
// PREF: HTML Sanitizer API [NIGHTLY]
// user_pref("dom.security.sanitizer.enabled", true);
