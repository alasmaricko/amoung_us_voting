let voteCount = {
    Khufra : 0,
    Atlas : 0,
    Balmond : 0,
    Tigreal : 0,
    Lolita : 0,
    Gatotkaca : 0,
    Belerick : 0,
    Grock : 0,
    Uranus : 0,
    Minotaur : 0
};

$(document).ready(
    function(){
        $("#div1").click(
            function(){
                $("#tank").val("Khufra");
                voteCount.Khufra++;
                $("#p1vote").html(voteCount.Khufra);            
            }
        );

        $("#div2").click(
            function(){
                $("#tank").val("Atlas");
                voteCount.Atlas++;
                $("#p2vote").html(voteCount.Atlas);            
            }
        );

        $("#div3").click(
            function(){
                $("#tank").val("Balmond");
                voteCount.Balmond++;
                $("#p3vote").html(voteCount.Balmond);            
            }
        );

        $("#div4").click(
            function(){
                $("#tank").val("Tigreal");
                voteCount.Tigreal++;
                $("#p4vote").html(voteCount.Tigreal);            
            }
        );

        $("#div5").click(
            function(){
                $("#tank").val("Lolita");
                voteCount.Lolita++;
                $("#p5vote").html(voteCount.Lolita);            
            }
        );

        $("#div6").click(
            function(){
                $("#tank").val("Gatotkaca");
                voteCount.Gatotkaca++;
                $("#p6vote").html(voteCount.Gatotkaca);            
            }
        );

        $("#div7").click(
            function(){
                $("#tank").val("Belerick");
                voteCount.Belerick++;
                $("#p7vote").html(voteCount.Belerick);            
            }
        );

        $("#div8").click(
            function(){
                $("#tank").val("Grock");
                voteCount.Grock++;
                $("#p8vote").html(voteCount.Grock);            
            }
        );

        $("#div9").click(
            function(){
                $("#tank").val("Uranus");
                voteCount.Uranus++;
                $("#p9vote").html(voteCount.Uranus);            
            }
        );

        $("#div10").click(
            function(){
                $("#tank").val("Minotaur");
                voteCount.Minotaur++;
                $("#p10vote").html(voteCount.Minotaur);            
            }
        );
    }
)

