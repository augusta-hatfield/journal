const btn = document.getElementById("info");

  btn.addEventListener("mouseenter", () => {
    btn.style.cursor = "pointer";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.cursor = "default";
  });
