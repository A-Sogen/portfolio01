window.addEventListener("load", () => {
  document.body.classList.add("is-show");

  /**
   * スムーススクロール
   */
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  /**
   * ページ遷移前にフェードアウトさせる処理
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
  function scrollZoom() {
    const hero = document.querySelector(".c-img--hero");
    const subHero = document.querySelector(".c-img--subHero");

    lenis.on("scroll", () => {

      // ===== hero =====
      const heroRect = hero.getBoundingClientRect();
      const heroProgress = Math.min(
        Math.max((window.innerHeight - heroRect.top) / window.innerHeight, 0),
        1
      );

      hero.style.transform = `scale(${0.5 + heroProgress * 0.5})`;

      // ===== subHero =====
      const subRect = subHero.getBoundingClientRect();
      const subProgress = Math.min(
        Math.max((window.innerHeight - subRect.top) / window.innerHeight, 0),
        1
      );

      subHero.style.transform = `scale(${0.6 + subProgress * 0.4})`;
    });
  }

  /**
   * スクロールしたときの画像位置固定？？
   */
  function imageScrollInside() {
    const images = document.querySelectorAll(
      ".c-img--concept, .c-img--viewport, .c-img--about, .c-img--columnImage"
    );

    lenis.on("scroll", () => {
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();

        const progress = Math.min(
          Math.max((window.innerHeight - rect.top) / window.innerHeight, 0),
          1
        );

        // 上 → 下へ移動
        const positionY = progress * 200;

        img.style.objectPosition = `center ${positionY}%`;
      });
    });
  }

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

  /**
   * トップページへ飛ぶ
   */
  const backTop = document.querySelector(".c-backTop");

  backTop.addEventListener("click", (e) => {
    e.preventDefault();

    if (typeof lenis !== "undefined") {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  slideImage();
  scrollZoom();
  link();
  imageScrollInside();
});
