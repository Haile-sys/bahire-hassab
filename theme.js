/* =========================================
   BAHIRE HASSAB
   Shared Theme Controller
   ========================================= */

(function () {

    const savedTheme =
        localStorage.getItem("bahire-hassab-theme") || "system";

    const systemDark =
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const actualTheme =
        savedTheme === "system"
            ? (systemDark ? "dark" : "light")
            : savedTheme;

    document.documentElement.setAttribute(
        "data-theme",
        actualTheme
    );

    document.documentElement.setAttribute(
        "data-theme-choice",
        savedTheme
    );

})();


document.addEventListener("DOMContentLoaded", function () {

    const buttons =
        document.querySelectorAll("[data-theme-option]");

    function getSystemTheme() {

        return window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
            ? "dark"
            : "light";
    }


    function applyTheme(theme) {

        const actualTheme =
            theme === "system"
                ? getSystemTheme()
                : theme;

        document.documentElement.setAttribute(
            "data-theme",
            actualTheme
        );

        document.documentElement.setAttribute(
            "data-theme-choice",
            theme
        );

        localStorage.setItem(
            "bahire-hassab-theme",
            theme
        );

        updateButtons(theme);
    }


    function updateButtons(activeTheme) {

        buttons.forEach(function (button) {

            const active =
                button.dataset.themeOption === activeTheme;

            button.classList.toggle(
                "active",
                active
            );

            button.setAttribute(
                "aria-pressed",
                active ? "true" : "false"
            );

        });
    }


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            applyTheme(
                button.dataset.themeOption
            );

        });

    });


    const systemPreference =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        );


    systemPreference.addEventListener(
        "change",
        function () {

            const current =
                localStorage.getItem(
                    "bahire-hassab-theme"
                ) || "system";

            if (current === "system") {
                applyTheme("system");
            }

        }
    );


    updateButtons(
        localStorage.getItem(
            "bahire-hassab-theme"
        ) || "system"
    );

});