window.addEventListener("load", () => {
  document.body.classList.add("is-show");

  /**
   *
   */
  function link() {
    document.querySelectorAll(".c-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        const url = this.getAttribute("href");
        if (!url || url === "#") return;
        e.preventDefault();
        document.body.classList.remove("is-show");
        setTimeout(() => {
          window.location.href = url;
        }, 500);
      });
    });
  }

  /**
   * ハンバーガーメニューコンテンツボタン制御処理
   */
  function changeButtonText() {
    const openBtn = document.querySelector(".js-menu-open");
    const closeBtn = document.querySelector(".js-menu-close");
    const nav = document.querySelector(".js-menu-content");

    openBtn.addEventListener("click", function () {
      nav.classList.add("is-open");
    });

    closeBtn.addEventListener("click", function () {
      nav.classList.remove("is-open");
    });
  }

  /**
   * スクロールで画像拡大
   */

  /**
   * スムーススクロールの実装
   */
  

  /**
   * スクロールしたときの画像位置固定？？
   */

  /**
   * フッターの画像
   */
  function slideImage() {
    const track = document.querySelectorAll('.js-footerImage__row');

    track.forEach((item) => {

      item.innerHTML += item.innerHTML;

      let y = 0;
      const speed = 1;

      function animate() {
        y += speed;

        if (y >= item.scrollHeight / 2) {
          y = 0;
        }

        item.style.transform = `translateY(-${y}px)`;
        requestAnimationFrame(animate);
      }
      animate();
    })
  }

  slideImage();
  link();
  changeButtonText();
});
