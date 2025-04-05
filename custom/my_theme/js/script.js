console.log("Theme JS is loaded.");
// Back to Top Button
window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (btn) {
      btn.style.display = window.scrollY > 300 ? "block" : "none";
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("backToTop");
    if (btn) {
      btn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    }
  });
  