$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/4448446.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response.courses.completed);     

      response.courses.completed.forEach(element => {
        $('#badges').append('<div class=\'course\'><h3>' + element.title +
                            '<img src=\'' + element.badge + '\' />' +
                            '<a href=\'' + element.url + '\' target=\'_blank\'' + 
                            ' class=\'btn btn-primary\'> See Course</a>' +
                            '</div>');
      });
    }
  }); 

});
