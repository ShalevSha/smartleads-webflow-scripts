<script>
window.addEventListener("load", function () {

  const SESSION_KEY = "cookie_popup_closed";
  const popup = document.querySelector('[data-cookie-popup="true"]');
  const closeButtons = document.querySelectorAll('[data-cookie-close="true"]');

  if (!popup) return;

  function wasClosedInSession() {
    return sessionStorage.getItem(SESSION_KEY) === "true";
  }

  function saveClosedInSession() {
    sessionStorage.setItem(SESSION_KEY, "true");
  }

  function openPopup() {

    popup.style.display = "block"; // אם צריך אפשר לעדכן ל-flex
    popup.style.visibility = "visible";

    popup.style.opacity = "0";
    popup.style.transform = "translateY(20px)";
    popup.style.transition = "opacity 300ms ease, transform 300ms ease";

    requestAnimationFrame(() => {
      popup.style.opacity = "1";
      popup.style.transform = "translateY(0)";
    });

  }

  function closePopup() {

    popup.style.opacity = "0";
    popup.style.transform = "translateY(20px)";

    setTimeout(() => {
      popup.style.display = "none";
    }, 300);

  }

  if (!wasClosedInSession()) {
    openPopup();
  } else {
    popup.style.display = "none";
  }

  closeButtons.forEach(button => {
    button.addEventListener("click", function () {
      saveClosedInSession();
      closePopup();
    });
  });

});
</script>
