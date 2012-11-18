<style>
a.button {
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
</style>
<div class="layout-vertical">
    <div class="box">
        <div class="content">
            <ul class="list2">
                <li class="layout-horizontal">
                    <div class="flex1">Isle</div>
                    <div>
                        <select name="isle">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                    </div>
                </li>
                <li class="layout-horizontal">
                    <div class="flex1">Side</div>
                    <div>
                        <select name="isle">
                            <option>Left</option>
                            <option>Right</option>
                        </select>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div style="margin: 20px; text-align: center;">
        Hello !<br/>Hello !<br/>
        <div style="border:20px solid white; line-height:30px;" id="scanning">Scan</div>
        
    </div>

    <div id="log" style="text-align: center; display: none">
    </div>

    <div class="box" style="display: none">
        <div class="content">
            <ul class="list2" id="result">
            </ul>
        </div>
    </div>
</div>
