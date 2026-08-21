LEDGERLY — installable app
==========================

WHAT IS IN THIS FOLDER
  index.html            The entire app in one file (about 2 MB). This is the app.
  manifest.webmanifest  Name, icon and full-screen behaviour for the Home Screen.
  sw.js                 Offline cache (service worker).
  register-sw.js        Registers the cache and wires the Home Screen icon.
  icon-180.png          Home Screen icon for iPhone (required by iOS).
  icon-512.png          Larger icon for the manifest.
  icon.svg              Vector icon, used as a fallback.

HOW TO PUT IT ON YOUR IPHONE (free, no Apple account)
  1. Upload ALL files above, side by side, to any HTTPS host.
     GitHub Pages: new public repo named "ledgerly" -> Add file -> Upload files ->
     drag the FILES (not the folder) -> Commit -> Settings -> Pages ->
     Deploy from a branch -> main / (root) -> Save.
     You get https://<your-username>.github.io/ledgerly/
     Netlify: drag this folder onto app.netlify.com/drop
  2. On the iPhone open that address in SAFARI (not Chrome).
  3. Let it finish loading once, so the offline cache fills.
  4. Share button -> Add to Home Screen -> Add.

FIRST RUN
  The app opens on Sign in. Tap "Create an account" (below Forgot password),
  register once with your email and password, then accept Face ID.
  Every launch after that goes straight to Face ID.
  Settings -> "Import my expense tracker" loads your 2026 plan
  (3,050 EUR fixed income from April, rent, car, food, baby, ARD quarterly,
  insurance yearly).

UPDATING
  Replace index.html on the host, then force-close the app on the iPhone
  (swipe it away in the app switcher) and reopen it. Your ledger is untouched.

IMPORTANT
  - HTTPS is required. Face ID (passkeys), offline mode and full-screen all
    refuse to work over plain http://
  - Your data lives only on this iPhone, encrypted in the app's own storage.
    Deleting the Home Screen icon and clearing Safari website data erases it.
    Keep your source statements (bank exports, CAS) as your backup.
  - Bank connections are read-only by design; credentials are entered on your
    bank's own page, never in the app.
