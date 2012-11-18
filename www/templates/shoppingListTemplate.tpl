<!--<div>
    <style>

        ul, li, blockquote {
            margin: 0;
            padding: 0;
        }

        section {
            background: rgba(255, 255, 255, 0.05);
            /*width: 500px;*/
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
            background: white;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.2);
            color: black;
            font-smoothing: subpixel-antialiased;
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
        <footer ><input id="siri" x-webkit-speech/></footer>
    </section>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <div style="position:absolute; botton:0px;"><input id="siri" x-webkit-speech/></div>

    <script>
        (function () {
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
</div>-->
<style>



    span{
        display: block;
        width: 100%;
        height: 90%;
        border-bottom: dashed 2px #54687a;
    }

    .wrap-list{
        height: 85%;
        padding: 20px 0px;
        box-shadow: inset 0 0px 5px black;
        background-image: linear-gradient(transparent 97%, gray 100%);
    }

    input[type="checkbox"] {
        position: absolute;
        right: -210px;
    }
    input[type="checkbox"]:checked + label {
        text-decoration: line-through;
        color: rgba(0,0,0,.3);
    }
    .list {
        list-style: none;
        color: rgba(0,0,0,.7);
    }
    .list li:nth-child(odd){
        background: rgba(0,0,50,.1);
    }
    .list li{
        line-height: 32px;

        position: relative;
        float: left;
        width: 100%;
    }
    label {
        position: relative;
        display: inline;
        border: 0px solid black;
        padding: 10px;
        cursor: pointer;
        float: left;
        width: 70%;
        transition: all .3s ease;
    }
  </style>




  
    
        <div class="wrap-list" style="background-color: white;">
            <ol class="list" id="itemList">
                <li>
                    <input type="checkbox" id="check-1">
                    <label for="check-1">x2 Crackers</label>
                </li>
                <li>
                    <input type="checkbox" id="check-2">
                    <label for="check-2">x5 Fresh croissants</label>
                </li>
                <li>
                    <input type="checkbox" id="check-3">
                    <label for="check-3">Water</label>
                </li>
            </ol>
        </div>
        <div id="inputBubble" style="background-image: url(./images/bubble.png); width: 130px; height: 80px; position: absolute; bottom: 70px; background-repeat: no-repeat; left: 60px; display:none; z-index: 9; border-radius: 5px; border: 0px solid red;">
            
            <input id="itemInput" value="Milk" style="background-color: white; color:black; width: 120px; z-index: 10; position: relative; left: 5px; top: 5px; line-height:30px;" readonly />
            <input type="button" id="addItemButton" value="ADD" style="background-color: white; color:black; width: 60px; z-index: 10; position: relative; left: 35px; top: 10px; line-height:16px; margin: 0px; padding: 0px; font-size: 13px; height:26px;" />
        </div>
    
