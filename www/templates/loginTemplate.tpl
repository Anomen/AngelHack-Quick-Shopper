<style>
.wrapper {
    width:272px;
    margin:0 auto;
    margin-top:5%;
    height: 100%;
}

.field1 {
    border:1px solid #c0c3c8;
    border-top-style: solid;
    border-top-width: 1px;
    -webkit-background-clip: padding-box;
    -webkit-border-top-left-radius: 8px;
    -webkit-border-top-right-radius: 8px;
    -webkit-border-bottom-left-radius: 0px;
    -webkit-border-bottom-right-radius: 0px;
    padding: 20px;
    width: 100%;
    outline: none;
    background-color: white;
}

.field2 {
    margin-top:-3px;
    border:1px solid #c0c3c8;
    -webkit-background-clip: padding-box;
    -webkit-border-bottom-left-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -webkit-border-top-left-radius: 0px;
    -webkit-border-top-right-radius: 0px;
    padding: 20px;
    width: 100%;
    -webkit-box-shadow: inset 0 1px 0 rgba(0, 0, 0, .07);
    margin-bottom:10px;  
    outline:none;
    background-color: white;
}

.button {
    background-color: #ffb94b;
    background-image: -webkit-gradient(linear, left top, left bottom,      from(#fddb6f), to(#ffb94b));
    background-image: -webkit-linear-gradient(top, #fddb6f, #ffb94b);
    background-image: -moz-linear-gradient(top, #fddb6f, #ffb94b);
    background-image: -ms-linear-gradient(top, #fddb6f, #ffb94b);
    background-image: -o-linear-gradient(top, #fddb6f, #ffb94b);
    background-image: linear-gradient(top, #fddb6f, #ffb94b);
    width: 92%;
    -webkit-border-radius: 8px;
    border-radius:8px;

    border: 1px solid #cd9337;
    -webkit-box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.33) inset;
    -webkit-background-clip: padding-box;
    -webkit-box-sizing: border-box;

    display: inline-block;
    font-weight: bold;
    line-height: 27px;
    min-width: 50px;
    overflow: hidden;
    padding: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:#fff;
}

p {
    color: gray;
    font-family:Arial, Helvetica, sans-serif;
    font-size:14px;
    text-align:left;
    font-weight: bold;
}

a {
    color: #cd9337;
    text-decoration:none;
}

.line {
    background:#ccc;
    
    width:100%;
    height:1px;
}

.pointlessfooter {
    position:absolute;
    left:0px;
    width:100%;
    height:60%;
    background:#fff;
}

.button:hover,.button:focus {
    background-color: #fddb6f;
    background-image: linear-gradient(top, #ffb94b, #fddb6f);
}
.button:active{        
    outline: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;
}

.button::-moz-focus-inner{
  border: none;
}

</style>



<body>

  
<div class="wrapper">
    <input class="field1" autocorrect="off" name="email" placeholder="Username" type="text">
    <input class="field2" autocorrect="off" name="pass" placeholder="Password" type="password">
    <button class="button">Log in</button>

    <br/><br/>
    <p style=""> 
        <a href="#">Forgot Password?</a>
    </p>
    <br/><br/><br/><br/><br/><br/>
    <div class="line"></div>
    <p style="margin-top: 8px;">Need a EasyShopping Account?</p>
    <br/>
    <p>
        <a href="#">Sign up here.</a>
    </p>
</div>
<div class="pointlessfooter"></div>

