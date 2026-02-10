const navToggle = document.querySelector(".nav-toggle");
const gnb = document.querySelector("#gnb");

if (navToggle && gnb) {
  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "메뉴 열기");
    gnb.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "메뉴 닫기");
    gnb.classList.add("is-open");
    document.body.classList.add("menu-open");
  };

  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMenu();
      return;
    }
    openMenu();
  });

  gnb.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 860px)").matches) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
}
