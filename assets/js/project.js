document.addEventListener("DOMContentLoaded", () => {
  const galleryEl = document.querySelector(".gallery");
  if (!galleryEl) return;

  const imgEl = galleryEl.querySelector(".gallery__image");
  const prevBtn = galleryEl.querySelector(".gallery__arrow--prev");
  const nextBtn = galleryEl.querySelector(".gallery__arrow--next");

  const viewAllBtn = document.querySelector(".gallery__viewall");
  const counterEl = document.querySelector(".gallery__counter");
  const expandedEl = document.querySelector(".gallery-expanded");

  // 👉 Datos por página (inyectados desde el HTML)
  const images = window.PROJECT_GALLERY?.images?.length
    ? window.PROJECT_GALLERY.images
    : [
        {
          src: "https://picsum.photos/id/1018/1600/1000",
          alt: "Placeholder 1",
        },
        {
          src: "https://picsum.photos/id/1025/1600/1000",
          alt: "Placeholder 2",
        },
      ];

  let index = 0;
  let expanded = false;

  function renderMain() {
    const item = images[index];
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    imgEl.decoding = "async";
    imgEl.referrerPolicy = "no-referrer";
    counterEl.textContent = `${index + 1} / ${images.length}`;
  }

  function goNext() {
    index = (index + 1) % images.length;
    renderMain();
  }

  function goPrev() {
    index = (index - 1 + images.length) % images.length;
    renderMain();
  }

  function buildExpanded() {
    expandedEl.innerHTML = "";
    images.forEach((item, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gallery-thumb";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.loading = "lazy";
      img.decoding = "async";
      img.referrerPolicy = "no-referrer";

      btn.appendChild(img);

      btn.addEventListener("click", () => {
        index = i;
        renderMain();
      });

      expandedEl.appendChild(btn);
    });
  }

  function toggleExpanded() {
    expanded = !expanded;
    if (expanded) {
      buildExpanded();
      expandedEl.hidden = false;
      viewAllBtn.textContent = "OCULTAR";
    } else {
      expandedEl.hidden = true;
      viewAllBtn.textContent = "VER TODO";
    }
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
  viewAllBtn.addEventListener("click", toggleExpanded);

  renderMain();
});
