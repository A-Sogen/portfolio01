window.addEventListener('load', () => {

  document.body.classList.add('is-show');

  /**
 * 
 */
  function link() {
    document.querySelectorAll('.c-link').forEach(link => {
      link.addEventListener('click', function (e) {
        const url = this.getAttribute('href');
        if (!url || url === '#') return;
        e.preventDefault();
        document.body.classList.remove('is-show');
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
    const btn = document.querySelector('.js-menuToggle');
    const nav = document.querySelector('.p-headerMenu--body');

    btn.addEventListener('click', function (e) {
      e.preventDefault();

      this.classList.toggle('is-open');
      nav.classList.toggle('is-open');
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
   * フッターの画像」
   */
  link();
  changeButtonText();
});

