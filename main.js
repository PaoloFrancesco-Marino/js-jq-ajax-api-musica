$(document).ready(function() {

	//refs
	var container = $('.cds-container');  //container
	var albumApi = 'https://flynn.boolean.careers/exercises/api/array/music'; //api


	$.ajax({
		url: albumApi,
		method: 'GET',
		success: function(data) {

			var album = data.response;
			console.log(album);

			// init handlebar
			var source = $('#album-template').html(); //refs template 
			var template = Handlebars.compile(source);
			
			for (var i = 0; i < album.length; i++) {

				var copertina = album[i].poster;
				var titolo = album[i].title;
				var autore = album[i].author;
				var anno = album[i].year;
				var genere = album[i].genre;

				//object
				var albumContent = {
					poster: copertina,
					title: titolo,
					author: autore,
					year: anno,
					genre: genere
				}

				//create template
				var content = template(albumContent);

				//push in html
				container.append(content);
			}
		},
		error: function(){
			console.log('errore');	
		}
	})
	
}); // <-- End Doc Ready