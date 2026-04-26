<script>
  (function() {
    const storageKey = 'myAppData';

    function getStoredData() {
      return JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    }

    function setStoredData(data) {
      sessionStorage.setItem(storageKey, JSON.stringify(data));
    }

    function hideParentIfNeeded(input) {
      let parent = input.parentElement;
      while (parent) {
        if (parent.classList && parent.classList.contains('hide-if-filled')) {
          parent.style.display = 'none';
          break;
        }
        parent = parent.parentElement;
      }
    }

    // 1️⃣ קריאת query params ושמירתם
    const urlParams = new URLSearchParams(window.location.search);
    const currentData = getStoredData();
    urlParams.forEach((value, key) => {
      currentData[key] = value;
    });
    setStoredData(currentData);

    document.addEventListener('DOMContentLoaded', () => {
      const data = getStoredData();
      const forms = document.querySelectorAll('form');

      forms.forEach(form => {
        const existingNames = new Set();
        const inputs = form.querySelectorAll('[name]');

        inputs.forEach(input => {
          const name = input.name;
          existingNames.add(name);
          if (data[name] !== undefined) {
            input.value = data[name];

            // ✅ אם השדה התמלא אוטומטית → בודקים אם יש לו parent עם hide-if-filled
            hideParentIfNeeded(input);
          }
        });

        form.addEventListener('submit', () => {
          const updatedData = getStoredData();

          // הוספת hidden fields רק לפרמטרים שחסרים בטופס הזה
          Object.keys(updatedData).forEach(key => {
            if (!existingNames.has(key)) {
              const hiddenInput = document.createElement('input');
              hiddenInput.type = 'hidden';
              hiddenInput.name = key;
              hiddenInput.value = updatedData[key];
              form.appendChild(hiddenInput);
            }
          });

          // עדכון storage עם הנתונים מהטופס
          const formData = new FormData(form);
          for (const [key, value] of formData.entries()) {
            updatedData[key] = value;
          }
          setStoredData(updatedData);
        });
      });
    });
  })();
</script>
