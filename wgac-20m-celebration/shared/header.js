// WGAC Shared Header — injects header HTML into the page
(function () {
  const header = document.createElement('header');
  header.className = 'wgac-header';
  header.innerHTML = `
    <div class="wgac-accent-bar"></div>
    <div class="wgac-header-inner">
      <a href="#" class="wgac-logo">
        Who Gives<span>A Crap</span>
      </a>
      <nav class="wgac-nav">
        <a href="#">Shop</a>
        <a href="#">Our Impact</a>
        <a href="#">About Us</a>
      </nav>
      <div class="wgac-utility">
        <a href="#">Account</a>
        <a href="#">Cart (0)</a>
      </div>
    </div>
  `;
  document.body.prepend(header);
})();
