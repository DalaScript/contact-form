const radioBtns = document.querySelectorAll(".contact-form__radio-btn");

const checkBoxBtn = document.getElementById("user-consent");

radioBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        if(btn.checked) {
            const labelBtns = document.querySelectorAll(".contact-form__radio-btn-label");
            labelBtns.forEach(labelBtn => {
                labelBtn.classList.remove("contact-form__radio-btn-label--checked")
            })

            parent.classList.add("contact-form__radio-btn-label--checked");
        }
    });
});

checkBoxBtn.addEventListener("click", () => {
    if(checkBoxBtn.checked) {
        checkBoxBtn.classList.add("contact-form__consent-input--checked");
    }else {
        checkBoxBtn.classList.remove("contact-form__consent-input--checked");
    }
});