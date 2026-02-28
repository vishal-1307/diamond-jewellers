export function injectThemeSwitcher() {
    const switcherHTML = `
    <div id="theme-switcher" style="
        position: fixed; 
        bottom: 20px; 
        right: 20px; 
        background: var(--color-bg); 
        border: 1px solid var(--color-border);
        padding: 15px; 
        border-radius: 8px; 
        box-shadow: 0 5px 20px rgba(0,0,0,0.2); 
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
    ">
        <h4 style="margin: 0 0 5px 0; font-family: var(--font-heading); color: var(--color-text);">Select Theme</h4>
        <button onclick="document.body.removeAttribute('data-theme')" style="padding: 8px; cursor: pointer; border: 1px solid #ddd; background: #fdfcf9; color: #333;">👑 Royal Classic</button>
        <button onclick="document.body.setAttribute('data-theme', 'midnight')" style="padding: 8px; cursor: pointer; border: 1px solid #333; background: #0a0a0a; color: #F7E7CE;">🌑 Midnight Luxury</button>
        <button onclick="document.body.setAttribute('data-theme', 'modern')" style="padding: 8px; cursor: pointer; border: 1px solid #eee; background: #fff; color: #B76E79;">✨ Modern Rose</button>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', switcherHTML);
}
