function redirectToLink() {
  if (localStorage.getItem("cookieConsent") === "true") {
    // User has already accepted cookies
    localStorage.setItem("cookieConsent", "false"); // Reset consent
    setTimeout(() => {
      window.location.href = "https://google.com";
    }, 7000); // 7 seconds
  }
}

redirectToLink();
