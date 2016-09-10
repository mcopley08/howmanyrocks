// These are helper functions for rendering the data from MongoDB into the webpage

function render_most_popular_rocks(rock_list) {

	rock_html = '<div class="row"> \
					<div class="col s6 m4">';

	for (var i = 0; i < rock_list.length; i++) {

		if (i % 3 == 0 && i != 0) {
			rock_html = '</div></div><div class="row"> \
					<div class="col s6 m4">';
		}

		current_rock = rock_list[i];

		current_rock_html = '<div class="card hoverable"> \
						        <div class="card-image waves-effect waves-block waves-light">';
		current_rock_html += '<img class="activator" src="' + current_rock['image_url'] + '">';
		current_rock_html += '</div><div class="card-content left-align">';
		current_rock_html += '<span class="card-title activator grey-text text-darken-4"> \
								<div class="row valign-wrapper" style="margin-bottom: 0px !important"> \
                      				<div class="col s3 valign">';
        current_rock_html += '<img class="circle responsive-img" src="' + current_rock['user_profile_pic_url'] + '">';
        current_rock_html += '</div><div class="col s9"> \
                        		<span class="black-text"> \
                        			<div class="discovered-by">Discovered by:</div>';
        current_rock_html += current_rock['username'] + '</span>';
        current_rock_html += '<i class="material-icons right">more_vert</i> \
                      			</div></div></span></div>';
        current_rock_html += '<div class="card-reveal"> \
				                  <span class="card-title grey-text text-darken-4 left-align"> \
				                    <div class="col s3 valign">';
        current_rock_html += '<img class="circle responsive-img" src="' + current_rock['user_profile_pic_url'] + '">';
        current_rock_html += '<div class="col s7"> \
		                        <span class="black-text"> \
		                          <div class="discovered-by">Discovered by:</div>';
		current_rock_html += current_rock['username'] + '</span></div>';
		current_rock_html += '<div class="col s2"> \
		                        <i class="material-icons right">close</i> \
		                      </div></span>';

		current_rock_html += '<table class="bordered popular-rocks"> \
			                    <tbody> \
			                      <tr> \
			                        <td class="uppercase">Rock No.</td>';

        current_rock_html += '<td>' + current_rock['rock_num'] + '</td>';
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Location</td>';
        current_rock_html += '<td>' + current_rock['location'] + '</td>';
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Coordinates</td>';
        current_rock_html += '<td>' + current_rock['coordinates'] + '</td>';
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Discovered</td>';
        current_rock_html += '<td>' + current_rock['date_discovered'] + '</td>';
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Nickname</td>';
        current_rock_html += '<td>' + current_rock['nickname'] + '</td>';
        current_rock_html += '</tr><tr> \
		                        <td class="uppercase">Notes</td>';
        current_rock_html += '<td>' + current_rock['notes'] + '</td>';
        current_rock_html += '</tbody></table></div></div>';

		rock_html += current_rock_html;
	}

    rock_html += '</div></div>';

    // Updating the webpage with our new information.
    document.getElementById('most_popular').append(rock_html)
}