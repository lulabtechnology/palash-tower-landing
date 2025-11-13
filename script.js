// ===============================
// NAV TOGGLE (MENÚ HAMBURGUESA)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // ===============================
  // SCROLL SUAVE A SECCIONES
  // ===============================
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        event.preventDefault();
        // Cerrar menú móvil si está abierto
        if (mainNav && mainNav.classList.contains("is-open")) {
          mainNav.classList.remove("is-open");
          navToggle && navToggle.setAttribute("aria-expanded", "false");
        }

        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Scroll suave para botones con data-scroll-target
  const scrollButtons = document.querySelectorAll("[data-scroll-target]");
  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSelector = btn.getAttribute("data-scroll-target");
      if (!targetSelector) return;
      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // ===============================
  // AÑO DINÁMICO EN EL FOOTER
  // ===============================
  const yearSpan = document.querySelector("[data-year]");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  // ===============================
  // VIDEO MODAL SIMPLE (OPCIONAL)
  // ===============================
  const videoModal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const openModalButtons = document.querySelectorAll("[data-open-video-modal]");
  const closeModalElements = document.querySelectorAll("[data-close-video-modal]");

  function openVideoModal(src, poster) {
    if (!videoModal || !modalVideo) return;
    // Establece el src del video dinámicamente
    const sourceEl = modalVideo.querySelector("source");
    if (sourceEl) {
      sourceEl.setAttribute("src", src || "");
    }
    if (poster) {
      modalVideo.setAttribute("poster", poster);
    }
    modalVideo.load();
    videoModal.classList.add("is-open");
    videoModal.setAttribute("aria-hidden", "false");
    modalVideo.play().catch(() => {
      // Si el navegador bloquea autoplay, ignoramos el error
    });
  }

  function closeVideoModal() {
    if (!videoModal || !modalVideo) return;
    videoModal.classList.remove("is-open");
    videoModal.setAttribute("aria-hidden", "true");
    modalVideo.pause();
    // Opcional: limpiar src si quieres reducir uso de memoria
    // const sourceEl = modalVideo.querySelector("source");
    // if (sourceEl) sourceEl.setAttribute("src", "");
    // modalVideo.load();
  }

  openModalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-video-src") || "";
      const poster = btn.getAttribute("data-video-poster") || "";
      openVideoModal(src, poster);
    });
  });

  closeModalElements.forEach((el) => {
    el.addEventListener("click", () => {
      closeVideoModal();
    });
  });

  // Cerrar modal con tecla ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeVideoModal();
    }
  });
});
