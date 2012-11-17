<style>
        #loginSection {
            background: rgba(255, 255, 255, 0.05);
            width: 500px;
            border: 1px solid #000;
            margin: 0 auto;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            padding:30px;
        }

        input{
            border: 2px solid #555;
            padding: 20px 20px;
            border-radius: 10px;
            background: white;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.2);
            color: black;
            font-smoothing: subpixel-antialiased;
            margin: 5px;
        }
        #login{
            border: 2px solid #555;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.2);
            font-smoothing: subpixel-antialiased;
        }
</style>
<div id="loginSection">
        <input type="text" value="TestUser1" />
        <input type="password" value="Password" />
        <div id="login" style="background-color: white; color: black; width:100px; margin: 0 auto;
                               cursor: hand; cursor: pointer; margin-top: 25px;">
            Login
        </div>
    </div>
</div>
