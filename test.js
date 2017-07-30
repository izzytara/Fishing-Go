$(document).ready(function(){
	//get the information from the dataset with api
	function initMap() {
		var uluru = {lat: -25.363, lng: 131.044};
		var brisbane = {lat: -25.363, lng: 144.044 };

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: uluru
		});
		var a = new google.maps.Marker({
			position: uluru,
			map: map
		});

		var marker2 = new google.maps.Marker({
			position: brisbane,
			map: map
		});

	}
	initMap()

	$.ajax({

		url: 'https://data.qld.gov.au/api/action/datastore_search?resource_id=3362e437-b0a1-467f-8331-2a051322c4b6',

		success: function(data) {

    	var records = data["result"]["records"]; // a list including 100 objects that state location, fish and amount

			// for(var i = 0; i < records.length; i++){
			// 	$('#test').append(
			// 	  $('<div/>').attr("id", "marker" + i).addClass("marker").css({'border':'0.1em black solid','padding-left':'2em','margin':'1em','display':'block'}).append("<p>").html("<p>Location :" + records[i]['Location stocked'] + "</p> <p>Fish Specie : "+ records[i]['Species stocked'] + "</p> <p>Number : "+ records[i]['Number stocked'] +" </p>")
			// 	);
			//
			// 				console.log($("div#marker" + i));
			//
			// }

			var location_dict = {};
			var species_dict = {};
			for (var i = 0; i < records.length; i++){
			    if (records[i]['Location stocked'] in location_dict){
						location_dict[records[i]['Location stocked']].push(records[i]['Species stocked']);
					}else{
						location_dict[records[i]['Location stocked']] = [records[i]['Species stocked']];
					}

					if (records[i]['Species stocked'] in species_dict){
						species_dict[records[i]['Species stocked']].push(records[i]['Location stocked']);
					}else{
						species_dict[records[i]['Species stocked']] = [records[i]['Location stocked']];
					}
			}
			console.log(location_dict);
			console.log(species_dict);
    }
  });

	$('#')

});
