AngelHack - Quick Shopper
=========

http://boston2012.hackathon.io/teams/view/980

This project is a Hackthon project done in 24 hours the 17th of November in Boston.

The team is building a powerful application that helps you organize your shopping list, gives you advise on the best local stores to shop at and guides you through the store via the most efficient route telling you exactly the location of the product within the store. Our backend application populate the data for each product including location, picture and name. Today, this information is found via a web service by UPC barcode. Our app allows you to record video to discover the the barcodes. This allows for the barcodes to be imported very quickly for the merchants or our own personnel gathering this data.

Backend
-------

- `cd server && node server-admin.js` # start the server which will read the barcode.
- change the IP in `admin/www/views/storeView.js` to target the IP of the nodejs server from last step.
- `cd admin/server/android && ./cordova/BOOM` # compile for android (connect your android before)

Frontend
-------

- Open `phonegap/ios/EasyShop.xcodeproj` with xcode
- Connect your iphone
- Compile

