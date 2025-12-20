import ThemeChangerStyles from "./ThemeChanger.module.css"

export default function ThemeChanger() {
    function themeChangerClickHandler() {
        console.log('ok');
        const html = document.querySelector('html');

        if (!html.dataset.theme)
            html.dataset.theme = "light";
        else
            delete html.dataset.theme;
    }

    return <div className={ThemeChangerStyles.checkboxContainer}>
        <input className={ThemeChangerStyles.checkbox} onChange={themeChangerClickHandler} id="theme-switcher" type="checkbox"/>
        <label className={ThemeChangerStyles.switch} htmlFor="theme-switcher"></label>
    </div>
}