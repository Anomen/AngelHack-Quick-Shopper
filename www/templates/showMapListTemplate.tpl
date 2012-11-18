<div id="mapObject1" style="position: absolute; top: 5px; left: 10px; display:none;"></div>
<div id="mapObject2" style="position: absolute; top: 5px; left: 10px; display:none;"></div>
<div id="mapObject3" style="position: absolute; top: 5px; left: 10px; display:none;"></div>
<div id="mapObject4" style="position: absolute; top: 5px; left: 10px; display:none;"></div>

<style>



    span{
        display: block;
        width: 100%;
        height: 90%;
        border-bottom: dashed 2px #54687a;
    }

    .wrap-list{
    	position: absolute;
    	top: 190px;
    	width: 100%;
        padding: 5px 0px;
        padding-top: 10px;
        
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
        line-height: 30px;
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
            <ol class="list">
                <li id="item1InList">
                    <input type="checkbox" id="check-1"> <!-- checked="checked"-->
                    <label for="check-1">x2 Crackers</label>
                </li>
                <li id="item2InList">
                    <input type="checkbox" id="check-2">
                    <label for="check-2">x5 Fresh croissants</label>
                </li>
                <li id="item3InList">
                    <input type="checkbox" id="check-3">
                    <label for="check-3">Water</label>
                </li>
                <li id="item4InList" onclick="if(window.isAlertDisplayed === false) {alert('You can checkout !'); window.isAlertDisplayed = true;}">
                    <input type="checkbox" id="check-4">
                    <label for="check-4">Milk</label>
                </li>
            </ol>
        </div>
    