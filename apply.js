const uploadTrigger = document.querySelector("[data-upload-trigger]");
const proofFileInput = document.querySelector("#proof-file");
const fileNameText = document.querySelector("[data-file-name]");

if (uploadTrigger && proofFileInput) {
  uploadTrigger.addEventListener("click", () => {
    proofFileInput.click();
  });

  proofFileInput.addEventListener("change", () => {
    const selectedFile = proofFileInput.files?.[0];
    if (!selectedFile || !fileNameText) {
      return;
    }

    fileNameText.textContent =
      selectedFile.name.length > 28
        ? `${selectedFile.name.slice(0, 25)}...`
        : selectedFile.name;
  });
}

const levelTabs = document.querySelectorAll(".level-tab");

levelTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    levelTabs.forEach((otherTab) => {
      otherTab.classList.remove("is-active");
      otherTab.setAttribute("aria-selected", "false");
    });

    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
  });
});

const providerCards = document.querySelectorAll("[data-provider]");

const selectProviderCard = (selectedCard) => {
  providerCards.forEach((card) => {
    const radio = card.querySelector('input[type="radio"]');
    const isSelected = card === selectedCard;
    card.classList.toggle("is-selected", isSelected);
    if (radio) {
      radio.checked = isSelected;
    }
  });
};

providerCards.forEach((card) => {
  card.addEventListener("click", () => {
    selectProviderCard(card);
  });

  const radio = card.querySelector('input[type="radio"]');
  if (radio) {
    radio.addEventListener("change", () => {
      selectProviderCard(card);
    });
  }
});
