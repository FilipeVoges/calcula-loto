console.log("controller.js was loaded successfully");

$(function() {
    $(document).ready(function(){
        $.ajax({
            url:'./data/results.json',
            type:'HEAD',
            error: function(){
                getDataResults();
            },
            success: function(){
                initAnalysis();
            }
        });
    });
});
