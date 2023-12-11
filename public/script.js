const openAccordionButtons = document.querySelectorAll("[data-accordion-button]");
openAccordionButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        handleClick(index);
    });
});

function handleClick (index) {
    const accordionBody = document.querySelectorAll("[data-card-body]");
    const minusIcons = document.querySelectorAll("[data-minus-icon]");
    const plusIcons = document.querySelectorAll("[data-plus-icon]");

    toggleVisibleElements(accordionBody, "none", "block", index);
    toggleVisibleElements(minusIcons, "none", "block", index);
    toggleVisibleElements(plusIcons, "block", "none", index);
}

function toggleVisibleElements(elements, property, property2, index) {
    elements.forEach((element) => {
        element.style.display = property;
    });
    elements[index].style.display = property2;
}