function formatBR(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setOnlineCount() {
  const onlineEl = document.getElementById("onlineCount");
  const activeEl = document.getElementById("activeMembers");

  const value = randInt(4200, 7800);
  onlineEl.textContent = formatBR(value);
  activeEl.textContent = formatBR(value);
}

function initModals() {
  const privacyModal = document.getElementById("privacyModal");
  const termsModal = document.getElementById("termsModal");

  const openPrivacy = document.getElementById("openPrivacy");
  const openTerms = document.getElementById("openTerms");

  function open(modal) {
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close(modal) {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openPrivacy.addEventListener("click", () => open(privacyModal));
  openTerms.addEventListener("click", () => open(termsModal));

  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-close");
      const modal = document.getElementById(id);
      if (modal) close(modal);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (privacyModal.getAttribute("aria-hidden") === "false") close(privacyModal);
      if (termsModal.getAttribute("aria-hidden") === "false") close(termsModal);
    }
  });
}

function initBasics() {
  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();

  const membersEl = document.getElementById("membersCount");
  membersEl.textContent = "5.000";
}

document.addEventListener("DOMContentLoaded", () => {
  initBasics();
  initModals();

  setOnlineCount();
  setInterval(setOnlineCount, 10000);
});
