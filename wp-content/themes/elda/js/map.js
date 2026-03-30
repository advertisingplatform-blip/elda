(function($) {
    function new_map( $el ) {
        var $markers = $el.find('.marker');
		zoomLevel = $el.get(0).hasAttribute('data-zoom') ? parseInt($el.attr('data-zoom')) : 16;
		var args = {
            zoom		: zoomLevel,
            center		: new google.maps.LatLng(0, 0),
            mapTypeId	: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            //styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
            //navigationControl: false,
            //mapTypeControl: false,
            //scaleControl: false,
            //draggable: false
        };
        var map = new google.maps.Map( $el[0], args);
        map.markers = [];
        $markers.each(function(){
            add_marker( $(this), map);
        });
        center_map( map );
        return map;
    }
    function add_marker( $marker, map ) {
        var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
        var marker = new google.maps.Marker({
            position	: latlng,
            map			: map,
            icon        : $marker.attr('data-marker')
        });
        map.markers.push( marker );
        if( $marker.html() )
        {
            var infowindow = new google.maps.InfoWindow({
                content		: $marker.html()
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open( map, marker );
            });
        }
    }
    function center_map( map ) {
        var bounds = new google.maps.LatLngBounds();
        $.each( map.markers, function( i, marker ){
            var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
            bounds.extend( latlng );
        });
        if( map.markers.length == 1 )
        {
            map.setCenter( bounds.getCenter() );
				map.setZoom( 12 );
        }
        else
        {
            map.fitBounds( bounds );
        }
    }
    var map = null;
    $(document).ready(function(){
        $('.map-canvas').each(function(){
            map = new_map( $(this) );
        });
    });
})(jQuery);