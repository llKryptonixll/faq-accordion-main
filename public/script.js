const openAccordionButtons = document.querySelectorAll(".open_accordion_btn");
openAccordionButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        handleClick(index);
    });
});

function handleClick (index) {
    const accordionBody = document.querySelectorAll(".accordion_body_js");
    const minusIcons = document.querySelectorAll(".minus_icon_js");
    const plusIcons = document.querySelectorAll(".plus_icon_js");

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