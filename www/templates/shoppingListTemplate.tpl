<div>
    <style>
        body {
            font-family: "Helevetica", sans-serif;
            background: url(http://subtlepatterns.com/patterns/black-Linen.png);
            padding: 10px;
        }

        ul, li, blockquote {
            margin: 0;
            padding: 0;
        }

        section {
            background: rgba(255, 255, 255, 0.05);
            width: 500px;
            border: 1px solid #000;
            margin: 0 auto;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            overflow: hidden;
        }

        footer {
            padding: 10px 0;
            text-align: center;
        }

        #siri {
            opacity: 0.8;
            cursor: pointer;
            border: 1px solid #444;
            font-size: 100px;
            width: 42px;
            padding: 10px;
            height: 42px;
            border-radius: 50%;
            box-shadow: 0 0 10px #222;
        }

        #siri:hover {
            opacity: 1;
        }

        #siri:focus {
            outline: none;
        }

        #slider {
            -webkit-transition: 0.8s ease-in;
            position: relative;
        }

        #responses {
            list-style-type: none;
            margin: 0;
            height: 170px;
            font-size: 16px;
        }

        li {
            padding: 15px 10px 0;
        }

        li.user-speech {
            animation: slidein 1s ease-in-out;
        }

        @keyframes slidein {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        blockquote {
            border: 2px solid #555;
            padding: 10px 20px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.2);
            color: #fff;
            font-smoothing: subpixel-antialiased;
            text-shadow: 1px 1px #333;
        }

        .user-speech blockquote {
            font-weight: bold;
            color: #f2f2f2;
            text-transform: capitalize;
            text-indent: -24px;
            padding-left: 32px;
        }

        span {
            display: inline;
            padding: 0 3px;
            font-size: 32px;
            font-family: "Georgia";
            line-height: 0;
            vertical-align: -10px;
        }

        cite {
            display: block;
            text-align: center;
        }

        cite a {
            display: inline-block;
            padding: 25px;
            font-size: 14px;
            color: #ddd;
            text-decoration: none;
        }

        cite a:hover {
            color: #4099FF;
        }
    </style>

    <script>
        // Kill alerts, confirmations and prompts
        // window.alert   = function(){}; allowing alerts for now
        window.confirm = function () {
        };
        window.prompt = function () {
        };
        window.open = function () {
        };
        window.print = function () {
        };
    </script>
    <section>
        <div id="responses">
            <div id="slider">
                <li>
                    <blockquote>Water</blockquote>
                    <blockquote>Bread</blockquote>
                    <blockquote>Sugar</blockquote>
                    <blockquote>Speak to add items to list</blockquote>
                </li>
            </div>
        </div>

        <footer><input id="siri" x-webkit-speech/></footer>
    </section>
    <script src="http://code.jquery.com/jquery-latest.js"></script>

    <script>
        (function () {

    // Prevent focusing on the Siri button input
            $("#siri").focus(function () {
                $(this).blur();
            });

            $("#siri").bind('webkitspeechchange', function () {
                var speech = $(this).val();
                $('#slider').append('<li class="user-speech"><blockquote><span>&ldquo;</span>' + speech + '<span>&rdquo;</span></blockquote></li>');

                var total = 0;
                $('.user-speech').each(function () {
                    total += $(this).outerHeight(); // Get the height of every .user-speech
                });

                $("#slider").delay(1600).queue(function (next) {
                    $(this).css("top", "-" + total + "px"); // Slide the slider up

                    next();
                });

                $('#siri').val(''); // Empty the Siri button input
            });

        })();
    </script>
</div>