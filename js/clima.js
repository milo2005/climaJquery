var prevId;
function loadWeather(id, city){
    if(prevId!=null){
        $("#"+prevId).toggleClass("selected");    
    }

    $("#city").html(city);

    $("#"+id).toggleClass("selected");
    prevId = id;

    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city+"%2C%20co%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.get(url, function(data, status){

        var channel = data.query.results.channel;
        var atmosphere = channel.atmosphere;
        var condition = channel.item.condition;

        $("#description").html(condition.text);
        $("#temp").html(condition.temp);
        $("#hum").html(atmosphere.humidity);
        $("#pres").html(atmosphere.pressure);


    });

}