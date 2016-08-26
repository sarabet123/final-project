$(document).on("ready",function(){
$(".link").on("click",function(e){
    e.preventDefault();
        var scrollTime= 500
        if( $(this).hasClass("link_home") ){
            $.scrollTo("#section1",scrollTime,{
                offset: -100
            });
        };
    });
});
 function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 40.7912097, lng: -73.6736317},
        zoom: 16
    });
    var marker_home = new google.maps.Marker({
        position: { lat:40.7912097, lng:-73.6736317 },
        map: map,
        title: "Christian's Home"
    });
}

