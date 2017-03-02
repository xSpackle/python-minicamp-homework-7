$(function() {
	$.ajax({
		url: '/posts'
	}).done(function(response) {
		var template = $('#post-format').html();

		response.forEach(function(post) {
			var newPost = $(template).clone();
			$(newPost).find('.title').html(post[1]);
			$(newPost).find('.author').html(post[0]);
			$(newPost).find('.body').html(post[2]);
			$(newPost).find('.likes').html(post[3]);
			$(newPost).find('.like-button').on('click', function(){
				$.ajax({
					url: '/like/' + post[4]
				}).done(function(response) {
					$(newPost).find('.likes').html(++post[3])
				});
			});
			$('#post-list').append(newPost)
		});

	});
});

console.log('hello world!');