const SUPABASE_URL =
    "https://sycergkkkuseodgzojqd.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_LYnKDSk4GTNrnJ4ygDrX3w_zvUb7hs7"; // use your full key here

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


const form =
    document.getElementById("registrationForm");

const fullNameInput =
    document.getElementById("fullName");

const emailInput =
    document.getElementById("email");

const message =
    document.getElementById("formMessage");

const registerBtn =
    document.getElementById("registerBtn");



/*
    If this browser has already registered,
    skip the registration page.
*/

if (
    localStorage.getItem(
        "bahire_hassab_registered"
    ) === "true"
) {

    window.location.replace("holyday.html");

}



/*
    Registration
*/

form.addEventListener("submit", async function (event) {

    event.preventDefault();


    const fullName =
        fullNameInput.value.trim();

    const email =
        emailInput.value.trim().toLowerCase();


    if (!fullName || !email) {

        message.textContent =
            "Please enter your full name and email.";

        return;
    }


    registerBtn.disabled = true;

    message.textContent =
        "Registering...";


    const { error } =
        await supabaseClient
            .from("registrations")
            .insert({
                full_name: fullName,
                email: email
            });


    /*
        Email already exists.

        We still allow the person to continue,
        because they have already registered.
    */

    if (error) {

        if (error.code === "23505") {

            localStorage.setItem(
                "bahire_hassab_registered",
                "true"
            );

            localStorage.setItem(
                "bahire_hassab_name",
                fullName
            );

            localStorage.setItem(
                "bahire_hassab_email",
                email
            );

            window.location.replace(
                "holyday.html"
            );

            return;
        }


        console.error(error);

        message.textContent =
            "Something went wrong. Please try again.";

        registerBtn.disabled = false;

        return;
    }


    /*
        Registration successful.
    */

    localStorage.setItem(
        "bahire_hassab_registered",
        "true"
    );

    localStorage.setItem(
        "bahire_hassab_name",
        fullName
    );

    localStorage.setItem(
        "bahire_hassab_email",
        email
    );


    window.location.replace(
        "holyday.html"
    );

});