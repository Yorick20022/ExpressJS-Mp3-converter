<script>
    import { onMount } from "svelte";

    onMount(() => {
        let inputUrl = document.querySelector(".input");
        inputUrl.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                console.log("enter pressed");
                sendUrl(inputUrl.value);
            }
        });
    });
    const sendUrl = () => {
        window.location.href = `http://localhost:5000/download?URL=${videoUrl}`;
    }
</script>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/static/home.css" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
        <title>Converter</title>
    </head>

    <body>
        <div class="everything">
            <div class="heading">
                <h1>Youtube MP3 Converter</h1>
            </div>

            <div class="paragraph">
                <p1>Put in a URL to convert it to an MP3!</p1>
            </div>

            <div class="box">
                <form>
                    <input
                        class="input"
                        type="text"
                        placeholder="Search for YouTube URL"
                        id="url"
                        name="url"
                        required
                    />
                </form>
                <i class="fa-solid fa-magnifying-glass" />
            </div>
        </div>
    </body>
</html>

<style>
    body {
        font-family: "Open Sans", sans-serif;
        background: #4b6cb7; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to right,
            #182848,
            #4b6cb7
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to right,
            #182848,
            #4b6cb7
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    h1 {
        font-size: 40px;
        text-align: center;
        margin-top: 30vh;
        color: #fff;
    }

    .heading {
        position: relative;
        text-align: center;
    }

    .paragraph {
        position: relative;
        text-align: center;
        color: white;
    }

    p1 {
        position: relative;
        font-size: 20px;
        text-align: center;
        color: white;
    }

    .input {
        position: relative;
        background-color: #181a1b;
        border: none;
        border-radius: 100px;
        width: 68.5vh;
        padding-bottom: 3vh;
        margin-top: 6vh;
        margin-left: 67.5vh;
        padding-top: 3vh;
        padding-left: 2.08vh;
        color: white;
    }

    .input:after {
        background-color: #4b6cb7;
    }

    input[type="text"] {
        position: relative;
        color: white;
        font-size: 18px;
        text-indent: 4.3vh;
    }

    .input:focus {
        outline: none;
    }

    .fa-magnifying-glass {
        position: relative;
        color: white;
        margin-right: 136vh;
        right: -70vh;
        bottom: 5.3vh;
        font-size: 20px;
    }
</style>
