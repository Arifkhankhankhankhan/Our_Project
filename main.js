document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const btn = document.querySelector(".contact-button3");
  const span = document.querySelector(".close");

  btn.onclick = () => {
      modal.style.display = "block";
  }

  span.onclick = () => {
      modal.style.display = "none";
  }

  window.onclick = (event) => {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});
