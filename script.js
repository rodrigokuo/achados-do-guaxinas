const min = 4200;
const max = 7800;
const interval = 10000;

function updateOnlineCount() {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  const el = document.getElementById("onlineCount");
  if (el) el.textContent = value.toLocaleString("pt-BR");
}

updateOnlineCount();
setInterval(updateOnlineCount, interval);

const privacyModal = document.getElementById("privacyModal");
const termsModal = document.getElementById("termsModal");

function openModal(modal) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("openPrivacy").addEventListener("click", () => {
  openModal(privacyModal);
});

document.getElementById("openTerms").addEventListener("click", () => {
  openModal(termsModal);
});

document.querySelectorAll("[data-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    closeModal(privacyModal);
    closeModal(termsModal);
  });
});

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal(overlay);
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(privacyModal);
    closeModal(termsModal);
  }
});
