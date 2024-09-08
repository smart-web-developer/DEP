document.addEventListener('DOMContentLoaded', function () {
    const year = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${year} Web Developer Portfolio. All rights reserved.`;
});
