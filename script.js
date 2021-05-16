const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

//モーダルウィンドウ写真を開く
previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    //写真　テキスト表示変更
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./full/${originalSrc}`;
    //テキスト
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

//モーダルウィンドウ写真を閉じる
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
