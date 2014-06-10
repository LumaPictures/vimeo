if( Meteor.isClient ) {
  UI.body.rendered = function () {
    $('body').css('font-family','Oswald');
  }

  Template.download.rendered = function () {
    Session.set("showDownloads", false);
  }

  Template.download.events({
    "click .toggle_download": function( event, template ) {
      event.preventDefault();
      $(".info_download").toggle();
    }
  });
}