const daisy_ui_themes = [
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
	'dim',
	'nord',
	'sunset',
];

const changeThemeButton = document.getElementById('change-theme');

if (localStorage.getItem('theme')) {
	setTheme(localStorage.getItem('theme'));
}

if (changeThemeButton)
	changeThemeButton.addEventListener('click', () => {
		const theme = daisy_ui_themes[Math.floor(Math.random() * daisy_ui_themes.length)];
		setTheme(theme);
	});

/**
 * Sets the theme of the document and stores it in local storage.
 * @param {string} theme - The name of the theme to set.
 * @return {void} This function does not return a value.
 */
function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
	console.log('Theme set to ' + theme);
}
