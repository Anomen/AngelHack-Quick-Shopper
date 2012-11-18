define(['text!templates/storeTemplate.tpl', 'backbone'], function(storeTemplate) {
    var StoreView = Backbone.View.extend({
        el: "#page",
        template: _.template(storeTemplate),
        events: {
            'touchstart button': 'record'
        },
        initialize: function(){
            t("inside initialize [badgesView.js]");
        },
        uploadFile: function(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;

            ft.upload(path,
                "http://10.10.16.207",
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
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }       
        },
        captureError: function(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        },
        record: function(){
            navigator.device.capture.captureVideo(this.captureSuccess, this.captureError);
        },
        render: function(){
            t("inside render()");
            this.$el.html(this.template());
        }
    });
    
    return StoreView;
});
