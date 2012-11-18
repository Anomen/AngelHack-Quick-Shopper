define(['text!templates/storeTemplate.tpl', 'backbone'], function(storeTemplate) {
    var StoreView = Backbone.View.extend({
        el: "#page",
        template: _.template(storeTemplate),
        events: {
            'touchstart a': 'record'
        },
        initialize: function(){
            t("inside initialize [badgesView.js]");
            _.bindAll(this);

            ////////////////////////////////////////////////////
            // to test /mnt/sdcard/DCIM/Camera/MOV025.3gp
            /*
            var ft = new FileTransfer(),
                path = "/mnt/sdcard/DCIM/Camera/MOV025.3gp",
                name = "MOV025.3gp";

            ft.upload(path,
                "http://10.10.16.207:4001/upload",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { 
                    fileName: name 
                }
            );
            ///////////////////////////////////////////////////*/

        },
        uploadFile: function(mediaFile) {
            f("inside uploadFile()");

            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;

            ft.upload(path,
                "http://10.10.16.207:4001/upload",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { 
                    fileName: name 
                }
            );   
        },
        captureSuccess: function(mediaFiles) {
            t("inside captureSuccess()");
            console.log(mediaFiles);
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                console.log(mediaFiles[i]);
                //this.uploadFile(mediaFiles[i]);
                var ft = new FileTransfer(),
                    path = mediaFiles[i].fullPath,
                    name = mediaFiles[i].name;

                ft.upload(path,
                    "http://10.10.16.207:4001/upload",
                    function(result) {
                        console.log('Upload success: ' + result.responseCode);
                        console.log(result.bytesSent + ' bytes sent');
                        console.log(result);
                    },
                    function(error) {
                        console.log('Error uploading file ' + path + ': ' + error.code);
                    },
                    { 
                        fileName: name 
                    }
                );   
            }       
        },
        captureError: function(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        },
        record: function(){
            t("inside record()");
            navigator.device.capture.captureVideo(this.captureSuccess, this.captureError);
        },
        render: function(){
            t("inside render()");
            this.$el.html(this.template());
        }
    });
    
    return StoreView;
});
