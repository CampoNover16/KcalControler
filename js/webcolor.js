const html = document.querySelector('html');
html.dataset.theme = `theme_light`;

function switchTheme(theme) {
  html.dataset.theme = `theme_${theme}`;
}