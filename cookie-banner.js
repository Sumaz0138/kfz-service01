(function () {
  var GA_ID = "G-JNFJ2NEPQ3";
  var CONSENT_KEY = "kfz-cookie-consent";

  function loadGA() {
    if (document.getElementById("ga-script")) return;
    var s1 = document.createElement("script");
    s1.id = "ga-script";
    s1.async = true;
    s1.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s1);
    var s2 = document.createElement("script");
    s2.innerHTML =
      "window.dataLayer=window.dataLayer||[];" +
      "function gtag(){dataLayer.push(arguments);}" +
      "gtag('js',new Date());" +
      "gtag('config','" + GA_ID + "',{anonymize_ip:true});";
    document.head.appendChild(s2);
  }

  function removeBanner() {
    var b = document.getElementById("kfz-cookie-banner");
    if (b) b.remove();
  }

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGA();
    removeBanner();
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    removeBanner();
  }

  function showBanner() {
    var banner = document.createElement("div");
    banner.id = "kfz-cookie-banner";
    banner.style.cssText =
      "position:fixed;bottom:16px;left:16px;right:16px;z-index:9999;" +
      "max-width:640px;margin:0 auto;background:#1a1a1a;border:1px solid rgba(255,255,255,0.1);" +
      "border-radius:16px;padding:20px 24px;box-shadow:0 8px 32px rgba(0,0,0,0.5);" +
      "font-family:system-ui,sans-serif;";

    banner.innerHTML =
      '<div style="display:flex;align-items:flex-start;gap:12px;">' +
        '<div style="flex:1;">' +
          '<p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#fff;">Diese Website verwendet Cookies</p>' +
          '<p style="margin:0 0 16px;font-size:12px;color:rgba(255,255,255,0.55);line-height:1.5;">' +
            'Wir nutzen Google Analytics zur anonymisierten Analyse des Nutzerverhaltens. ' +
            '<a href="/datenschutz.html" style="color:#e53e3e;text-decoration:none;">Datenschutzerklärung</a>' +
          '</p>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            '<button id="kfz-accept" style="background:#e53e3e;color:#fff;border:none;border-radius:999px;' +
              'padding:8px 20px;font-size:13px;font-weight:700;cursor:pointer;">Akzeptieren</button>' +
            '<button id="kfz-decline" style="background:transparent;color:rgba(255,255,255,0.6);' +
              'border:1px solid rgba(255,255,255,0.2);border-radius:999px;' +
              'padding:8px 20px;font-size:13px;cursor:pointer;">Ablehnen</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);
    document.getElementById("kfz-accept").addEventListener("click", accept);
    document.getElementById("kfz-decline").addEventListener("click", decline);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") {
      loadGA();
    } else if (!consent) {
      showBanner();
    }
  });
})();
