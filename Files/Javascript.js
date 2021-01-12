
    /* 1.this instruction tell that when cursor over the toggleButton it's color change to highlightedButton and when cursor remove, also remove the new color and return back to initial condition. 
    */
    $(".toggleButton").hover(function() {
        $(this).addClass("highlightedButton");
    }, function() {
        $(this).removeClass("highlightedButton");
    });

    /* 2. this instruction tell that when toggleButton click 
            -> apply a toggle class "active" on toggleButton.
            ->define a variable which is generate id of panel (i.e- htmlPanel) and action applying to the panel to change it's width according to hidden panels.
    */
    $(".toggleButton").click(function() {
        $(this).toggleClass("active");
        var panelId = $(this).attr("id") + "Panel";
        $("#" + panelId).toggleClass("hidden");
        var numberOfActivePanels = 4 - $(".hidden").length;
        $(".panel").width(($(window).width()/numberOfActivePanels) - 10);
    });

    // 3.Define the height of panels and initial width 
    $(".panel").height($(window).height() - $("#header").height() - 10);
    $(".panel").width(($(window).width()/2 - 10));

    /* 4. Function updateOutput() is use to update content in iframe by usimg given data in textarea.
    ->javascript is highly secured in browsers that's why it's not easy to update so updating javascript we used slightly different methode in function updateOutput().
    */
    function updateOutput() {
        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

        document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
    }

    updateOutput();
    // 5. this line update iframe data while we writting code in textarea.
    $("textarea").on('change keyup paste',function() {
        updateOutput();
    });
