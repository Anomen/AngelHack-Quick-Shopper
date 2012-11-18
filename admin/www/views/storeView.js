define(['text!templates/storeTemplate.tpl', 'text!templates/rowTemplate.tpl', 'backbone'], function(storeTemplate, rowTemplate) {
    var StoreView = Backbone.View.extend({
        el: "#page",
        template: _.template(storeTemplate),
        rowTemplate: _.template(rowTemplate),
        events: {
            //'touchstart a': 'record'
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
            var self = this;
            var i, len;
            $('#log').css("display", "block");
            $('#log').html("<img src='images/ajaxloader.gif' /> Processing the video...");
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                console.log(mediaFiles[i]);
                var ft = new FileTransfer(),
                    path = mediaFiles[i].fullPath,
                    name = mediaFiles[i].name;

                ft.upload(path,
                    "http://10.10.16.207:4001/upload",
                    function(result) {
                        $('#log').css("display", "none");
                        $("#result").closest(".box").css("display", "block");
                        console.log('Upload success: ' + result.responseCode);
                        console.log(result.bytesSent + ' bytes sent');
                        console.log(JSON.stringify(result));
                        eval("var res = " + result.response);
                        var total = 0;
                        _.each(res, function(info, bc){
                            if (info.info.status.code != "404") {
                                total = total + 1;
                            }
                        });
                        var num = 1;
                        $("#result").html("");
                        _.each(res, function(info, bc){
                            if (info.info.status.code != "404") {
                                $("#result").append(_.template(rowTemplate)({
                                    info: info.info,
                                    loc: Math.floor(100 * num / total)
                                }));
                                num = num + 1;
                            }
                        });
                    },
                    function(error) {
                        $('#log').html('Error uploading file... Try again later.');
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
            $("#result").closest(".box").css("display", "none");
            $("#log").css("display", "none");
            t("inside record()");
            alert("here2");

            var thisInstance = this;
            navigator.device.capture.captureVideo(function() {
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
                        }, function(error) {
                            console.log('Error uploading file ' + path + ': ' + error.code);
                        }, {
                            fileName: name
                        }
                    );
                }

            }, function(error) {
                 var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
            });

            alert(typeof navigator);
            alert(typeof navigator.device);
            alert(typeof navigator.device.capture);
            alert(typeof navigator.device.capture.captureVideo);

        },
        render: function(){
            t("inside render()");
            this.$el.html(this.template());

            var thisInstance = this;
            $("#scanning").click(function() {
                alert("here");
                thisInstance.record();

            });


        }
    });
    
    return StoreView;
});
