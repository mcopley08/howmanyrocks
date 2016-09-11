// These are helper functions for rendering the data from MongoDB into the webpage

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
			'October', 'November', 'December'];

numbers = ['one', 'two', 'three', 'four', 'five', 'six'];

function render_most_popular_rocks(rock_list) {

	var stopping_value = 6;
	if (rock_list.length < 6) {
		stopping_value = rock_list.length;
	}

	rock_html = '<div class="carousel">';

	current_rock_html = '';

	for (var i = 0; i < stopping_value; i++) {

		// if (i % 3 == 0 && i != 0) {
		// 	rock_html = '</div><div class="row">';
		// }

		current_rock = rock_list[i];

		current_rock_html += '<a class="carousel-item" href="#' + numbers[i] + '!">';
		// current_rock_html += '<div class="col s12 m6 l4">';
		current_rock_html += '<div class="card hoverable"> \
						        <div class="card-image waves-effect waves-block waves-light">';
		current_rock_html += '<img class="activator" src="' + current_rock['image'] + '">';
		current_rock_html += '</div><div class="card-content left-align">';
		current_rock_html += '<span class="card-title activator grey-text text-darken-4"> \
								<div class="row valign-wrapper" style="margin-bottom: 0px !important"> \
                      				<div class="col s3 valign">';
        current_rock_html += '<img class="circle responsive-img" src="' + current_rock['owner']['image'] + '">';
        current_rock_html += '</div><div class="col s9"> \
                        		<span class="black-text"> \
                        			<div class="discovered-by">Discovered by:</div>';
        current_rock_html += current_rock['owner']['username'] + '</span>';
        current_rock_html += '<i class="material-icons right">more_vert</i> \
                      			</div></div></span></div>';
        current_rock_html += '<div class="card-reveal"> \
				                  <span class="card-title grey-text text-darken-4 left-align"> \
				                    <div class="col s3 valign">';
        current_rock_html += '<img class="circle responsive-img" src="' + current_rock['owner']['image'] + '"></div>';
        current_rock_html += '<div class="col s7"> \
		                        <span class="black-text"> \
		                          <div class="discovered-by">Discovered by:</div>';
		current_rock_html += current_rock['owner']['username'] + '</span></div>';
		current_rock_html += '<div class="col s2"> \
		                        <i class="material-icons right">close</i> \
		                      </div></span>';

		current_rock_html += '<table class="bordered popular-rocks"> \
			                    <tbody> \
			                      <tr> \
			                        <td class="uppercase">Rock No.</td>';

        current_rock_html += '<td>000000000' + current_rock['id'] + '</td>';
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Location</td>';
        current_rock_html += '<td>' + 'New York, New York, USA' + '</td>';
        // current_rock['location']
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Coordinates</td>';
		latitude = String(Math.round(parseFloat(current_rock['lat']) * 100) / 100);
		longitude = String(Math.round(parseFloat(current_rock['lng']) * 100) / 100);
        current_rock_html += '<td>' + latitude + ', ' + longitude + '</td>';
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Discovered</td>';
        current_rock_html += '<td>' + date_helper(current_rock['created_at']) + '</td>';
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Nickname</td>';
        current_rock_html += '<td>' + current_rock['nickname'] + '</td>';
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Notes</td>';
        current_rock_html += '<td>' + current_rock['comment'] + '</td>';
        current_rock_html += '</tbody></table></div></div>';

	}

	rock_html += current_rock_html;


    rock_html += '</div></div>';

    // Updating the webpage with our new information.
    $('#most_popular_content').append(rock_html);
}

function date_helper(string_date) {
	date = new Date(string_date);
	console.log(date.getDay());
	return String(months[date.getMonth()]) + ' ' + String(date.getDate()) + ', ' + String(date.getFullYear());
}

function profile_modal(index, rocks) {

	// clear the contents of the modal
	$('#google_maps_rock').empty();

	current_rock = rocks[index];

	current_rock_html = '';

	current_rock_html += '<div class="card hoverable"> \
					        <div class="card-image waves-effect waves-block waves-light">';
	current_rock_html += '<img class="activator" src="' + current_rock['image'] + '">';
	current_rock_html += '</div><div class="card-content left-align">';
	current_rock_html += '<span class="card-title activator grey-text text-darken-4"> \
							<div class="row valign-wrapper" style="margin-bottom: 0px !important"> \
                  				<div class="col s3 valign">';
    current_rock_html += '<img class="circle responsive-img" src="' + current_rock['owner']['image'] + '">';
    current_rock_html += '</div><div class="col s9"> \
                    		<span class="black-text"> \
                    			<div class="discovered-by">Discovered by:</div>';
    current_rock_html += current_rock['owner']['username'] + '</span>';
    current_rock_html += '<i class="material-icons right">more_vert</i> \
                  			</div></div></span></div>';
    current_rock_html += '<div class="card-reveal"> \
			                  <span class="card-title grey-text text-darken-4 left-align"> \
			                    <div class="col s3 valign">';
    current_rock_html += '<img class="circle responsive-img" src="' + current_rock['owner']['image'] + '"></div>';
    current_rock_html += '<div class="col s7"> \
	                        <span class="black-text"> \
	                          <div class="discovered-by">Discovered by:</div>';
	current_rock_html += current_rock['owner']['username'] + '</span></div>';
	current_rock_html += '<div class="col s2"> \
	                        <i class="material-icons right">close</i> \
	                      </div></span>';

	current_rock_html += '<table class="bordered popular-rocks"> \
		                    <tbody> \
		                      <tr> \
		                        <td class="uppercase">Rock No.</td>';

    current_rock_html += '<td>000000000' + current_rock['id'] + '</td>';
    current_rock_html += '</tr><tr> \
	                        <td class="uppercase">Location</td>';
    current_rock_html += '<td>' + 'New York, New York, USA' + '</td>';
    // current_rock['location']
    current_rock_html += '</tr><tr> \
	                        <td class="uppercase">Coordinates</td>';
	latitude = String(Math.round(parseFloat(current_rock['lat']) * 100) / 100);
	longitude = String(Math.round(parseFloat(current_rock['lng']) * 100) / 100);
    current_rock_html += '<td>' + latitude + ', ' + longitude + '</td>';
    current_rock_html += '</tr><tr> \
	                        <td class="uppercase">Discovered</td>';
    current_rock_html += '<td>' + date_helper(current_rock['created_at']) + '</td>';
    current_rock_html += '</tr><tr> \
	                        <td class="uppercase">Nickname</td>';
    current_rock_html += '<td>' + current_rock['nickname'] + '</td>';
    current_rock_html += '</tr><tr> \
	                        <td class="uppercase">Notes</td>';
    current_rock_html += '<td>' + current_rock['comment'] + '</td>';
    current_rock_html += '</tbody></table></div>';

    // append contents to the modal, display
    $('#google_maps_rock').append(current_rock_html);
    $('#google_maps_rock').openModal();

}