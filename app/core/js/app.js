// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';

if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App


var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  
   photoBrowser: {
    type: 'popup',
  },
  
   touch:{
    tapHold:true
  },

  template7Pages: true,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});


var mainView = app.views.create('.view-main');


var myPhotoBrowserPopup = app.photoBrowser.create({
    photos : [
        './img/btp1.jpg',
        './img/btp2.jpg',
		'./img/btp3.jpg',
		'./img/btp4.jpg',
    ],
    type: 'popup'
});






var messages = app.messages.create({
  el: '.messages',

  // First message rule
  firstMessageRule: function (message, previousMessage, nextMessage) {
    // Skip if title
    if (message.isTitle) return false;
    /* if:
      - there is no previous message
      - or previous message type (send/received) is different
      - or previous message sender name is different
    */
    if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true;
    return false;
  },
  // Last message rule
  lastMessageRule: function (message, previousMessage, nextMessage) {
    // Skip if title
    if (message.isTitle) return false;
    /* if:
      - there is no next message
      - or next message type (send/received) is different
      - or next message sender name is different
    */
    if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
    return false;
  },
  // Last message rule
  tailMessageRule: function (message, previousMessage, nextMessage) {
    // Skip if title
    if (message.isTitle) return false;
      /* if (bascially same as lastMessageRule):
      - there is no next message
      - or next message type (send/received) is different
      - or next message sender name is different
    */
    if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
    return false;
  }
});

// Init Messagebar
var messagebar = app.messagebar.create({
  el: '.messagebar'
});

// Response flag
var responseInProgress = false;

// Send Message

	
	$(document).on('click', '.send-link', function (e) {

  var text = messagebar.getValue().trim();
  // return if empty message
  if (!text.length) return;

  // Clear area
  messagebar.clear();

  // Return focus to area
  messagebar.focus();

  // Add message to messages
  messages.addMessage({
    text: text,
  });

  if (responseInProgress) return;
  // Receive dummy message
  receiveMessage();
});

// Dummy response
var answers = [
  'Yes!',
  'No',
  'Hm...',
  'I am not sure',
  'And what about you?',
  'May be ;)',
  'Lorem ipsum dolor sit amet, consectetur',
  'What?',
  'Are you sure?',
  'Of course',
  'Need to think about it',
  'Amazing!!!'
]
var people = [
  {
    name: 'Kate Johnson',
    avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg'
  },
  {
    name: 'Blue Ninja',
    avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg'
  }
];
function receiveMessage() {
  responseInProgress = true;
  setTimeout(function () {
    // Get random answer and random person
    var answer = answers[Math.floor(Math.random() * answers.length)];
    var person = people[Math.floor(Math.random() * people.length)];

    // Show typing indicator
    messages.showTyping({
      header: person.name + ' is typing',
      avatar: person.avatar
    });

    setTimeout(function () {
      // Add received dummy message
      messages.addMessage({
        text: answer,
        type: 'received',
        name: person.name,
        avatar: person.avatar
      });
      // Hide typing indicator
      messages.hideTyping();
      responseInProgress = false;
    }, 4000);
  }, 1000);
}




	$(document).on('click', '.pb-popup', function (e) {
    myPhotoBrowserPopup.open();
});


	$(document).on('click', '.tab-link', function (e) {

   $( ".tab-link" ).each(function( index ) {
$(this).css("color", "#0000008a");
});

   $(this).css("color", "#4554bf");
   
});




function closepanel(){
  if(app.panel.left.opened===true){
    app.panel.close('left',true);
  }
}



$(document).on('page:init', '.page[data-name="team"]', function (e) {


	
	app.preloader.show();
var k='reda';
	 jQuery.ajax({
        type: 'POST',
        url: 'http://labseo.net/controller/index.php',
            data: {email: k},

        success: function(response) 
		{   
	$('.result').html(response);
	
	app.preloader.hide()
        }

    });  


	
});



$(document).on('click', ".idprofil", function() {	
var k = $(this).attr('id');
localStorage.setItem('user', k);
});




$(document).on('page:init', '.page[data-name="profil"]', function (e) {
// app.preloader.show();
// setTimeout(function(){
// var k=localStorage.getItem('user');


	 // jQuery.ajax({
        // type: 'POST',
        // url: 'http://labseo.net/controller/index.php',
            // data: {email3: k},

        // success: function(response) 
		// {   
	// $('.result3').html(response);
	// app.preloader.hide();

        // }

    // });  
	
	// }, 100);
	
});



$(document).on('page:init', '.page[data-name="tachejour"]', function (e) {
	
	app.preloader.show();
var k=localStorage.getItem('user');
	 jQuery.ajax({
        type: 'POST',
        url: 'http://labseo.net/controller/index.php',
            data: {email2: k},

        success: function(response) 
		{   
	$('.result2').html(response);
	
	app.preloader.hide()
        }

    });  


	
});




$(document).on('page:init', '.page[data-name="tacheprojet"]', function (e) {
	
	app.preloader.show();
var k=localStorage.getItem('user');
	 jQuery.ajax({
        type: 'POST',
        url: 'http://labseo.net/controller/index.php',
            data: {email4: k},

        success: function(response) 
		{   
	$('.resultprojet').html(response);
	
	app.preloader.hide()
        }

    });  


	
});





$(document).on('page:init', '.page[data-name="projets"]', function (e) {
	
	app.preloader.show();
var k="reda";
	 jQuery.ajax({
        type: 'POST',
        url: 'http://labseo.net/controller/index.php',
            data: {email5: k},

        success: function(response) 
		{   
	$('.resultprojetall').html(response);
	
	app.preloader.hide()
        }

    });  


	
});