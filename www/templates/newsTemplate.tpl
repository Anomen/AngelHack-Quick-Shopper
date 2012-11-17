<div class="layout-vertical">
    <div class="box">
        <div class="content">
            <ul class="list2">
                <% _.each(res , function(item, i) { %>
					<li class="item">
						<div class="hand_icon">
							<img src="images/hand_icon.png" style=" width: 70px; height: 70px; margin-right: 20px;"
/>
						</div>
						<div>
							<div class="item_title"><%= item.get("newsTitle") %></div>
							<div class="item_body"><%= item.get("newsBody").substring(0,200) + ("...")%></div>
							<div class="postedby">Posted by <%= item.get("postedBy") %></div>
							<div class="item_date">Posted on <%= item.get("postedDate").$date %></div>
						</div>
					</li>
				<% }); %>
            </ul>
        </div>
    </div>
</div>
