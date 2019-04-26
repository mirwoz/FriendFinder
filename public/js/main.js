console.log("Hello from the console")

$(document).ready(() => {
    $("button").click(() => {
        console.log("Button clicked")
        event.preventDefault();

        let userObject = {
            name: $("#firstname").val(),
            scores: [$("select[name=questionOne]").val(),
            $("select[name=questionTwo]").val(),
            $("select[name=questionThree]").val(),
            $("select[name=questionFour]").val(),
            $("select[name=questionFive]").val(),]
        };


        $.ajax({
            url: "/api/friends",
            method: "POST",
            data: userObject
        })
            .done(res => {
                console.log(res)
                $("#matchName").text(res.name);
                $("#matchPhoto").attr("src", res.img);

            })


    });










});

