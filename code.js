$(document).ready(function () {






    $("#btn").click(function () {
        var pragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        var cutting = pragraph.split("");
        i = 0;
        var id = function () {
            var main = $("#result").text();
            $("#result").text(main + cutting[i]);

            i++;

            if (pragraph.length==i) {
                clearInterval(id);
            }

        }

        setInterval(id, 100);

    });








});