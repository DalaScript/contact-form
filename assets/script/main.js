const contactForm = document.querySelector(".contact-form");
const requiredInputs = document.querySelectorAll(".contact-form__required-input");
const errorMessages = document.querySelectorAll(".contact-form__error-message");
const submitBtn = document.getElementById("contact-form__submit-btn");
const successState = document.getElementById("success-state");

const radioBtns = document.querySelectorAll(".contact-form__radio-btn");
const radioBtnLabels = document.querySelectorAll(".contact-form__radio-btn-label");

radioBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const labelBtn = this.parentElement;
        const labelBtns = document.querySelectorAll(".contact-form__radio-btn-label");

        if (!labelBtn.classList.contains("contact-form__radio-btn-label--checked")) {
            labelBtns.forEach((labelBtn) => {
                if (labelBtn.classList.contains("contact-form__radio-btn-label--checked")) {
                    labelBtn.classList.remove("contact-form__radio-btn-label--checked");
                }
            });
            labelBtn.classList.add("contact-form__radio-btn-label--checked");
        }
    });
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (contactForm.checkValidity()) {
        errorMessages.forEach((errorMessage) => {
            if (errorMessage.classList.contains("contact-form__error-message--active")) {
                errorMessage.classList.remove("contact-form__error-message--active");
            }
        });
        radioBtnLabels.forEach((btn) => {
            if(btn.classList.contains("contact-form__radio-btn-label--checked")) {
                btn.classList.remove("contact-form__radio-btn-label--checked");
            }
        });
        contactForm.reset();

        successState.classList.add("success-state--active");

        setTimeout(() => {
            successState.classList.remove("success-state--active");
        }, 2000);

    } else {
        requiredInputs.forEach((input) => {
            const errorMessageClass = `.contact-form__error-message--${input.name}`;
            const errorMessageEl = document.querySelector(errorMessageClass);
            if (!input.checkValidity()) {
                errorMessageEl.classList.add("contact-form__error-message--active");
            } else {
                if (errorMessageEl.classList.contains("contact-form__error-message--active")) {
                    errorMessageEl.classList.remove("contact-form__error-message--active");
                }
            }
        });
    }
});