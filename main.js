function createScrollMoveButtons(panelID, scrollLeftID, scrollRightID) {
    const scrollPanel = document.getElementById(panelID);
    const scrollLeftBtn = document.getElementById(scrollLeftID);
    const scrollRightBtn = document.getElementById(scrollRightID);

    const scrollAmount = 350;

    scrollRightBtn.addEventListener("click", () => {
        const maxScrollLeft = scrollPanel.scrollWidth - scrollPanel.clientWidth; // Límite máximo

        if (scrollPanel.scrollLeft + scrollAmount <= maxScrollLeft) {
            scrollPanel.scrollLeft += scrollAmount;
        } else {
            scrollPanel.scrollLeft = maxScrollLeft; // Fijar el scroll al máximo posible
        }
    });

    scrollLeftBtn.addEventListener("click", () => {
        if (scrollPanel.scrollLeft - scrollAmount >= 0) {
            scrollPanel.scrollLeft -= scrollAmount;
        } else {
            scrollPanel.scrollLeft = 0; // Fijar el scroll al inicio
        }
    });
}

createScrollMoveButtons(
    "horizontalScrollPanel1",
    "horizontalScrollLeft1",
    "horizontalScrollRight1"
);

createScrollMoveButtons(
    "horizontalScrollPanel2",
    "horizontalScrollLeft2",
    "horizontalScrollRight2"
);
