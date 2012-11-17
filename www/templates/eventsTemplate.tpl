<div class="layout-vertical">
    <div class="box">
        <div class="content">
            <ul class="list2">                			
				<% _.each( res, function( item, i ){ %>
				<li class="item" >
					<div class="hand_icon">
						<img src="images/hand_icon.png" style=" width: 70px; height: 70px; margin-right: 20px;"/>
					</div>
					<div>
						<div class="item_title"><%= item.get("eventName")%></div>
						<div class="item_body"><%= item.get("eventDescription") %></div>	
						<div class="item_date"><%= item.get("eventDate").$date %></div>	
						<div><%= item.get("eventURL")%></div>	
						<div>					
							<div style="float: left; margin-right: 50px;">
								<img src="images/learn_more_icon.png"/>LEARN MORE
							</div>
							<div style="float: right; color: #1f2d7d">
								<img src="images/calendar_icon.png"/>ADD TO CALENDAR
							</div>
						</div>
					</div>					
				</li>
				<% }); %>      
			</ul>			
        </div>
    </div>
</div>
