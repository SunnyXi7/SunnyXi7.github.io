'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        const targetPage = this.textContent.trim().toLowerCase();

        // 移除所有页面和导航链接的 active 类
        pages.forEach(page => page.classList.remove("active"));
        navigationLinks.forEach(link => link.classList.remove("active"));

        // 为目标页面和当前导航链接添加 active 类
        const targetPageElement = Array.from(pages).find(page => page.dataset.page === targetPage);
        if (targetPageElement) {
            targetPageElement.classList.add("active");
            this.classList.add("active");
            window.scrollTo(0, 0);
        }
    });
}