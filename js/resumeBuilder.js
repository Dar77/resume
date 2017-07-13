/*
resumeBuilder.js - resume project - Darren Ware
 */

var bio = { //bio object
 	'name': 'Darren Ware',
 	'role': 'Web Developer',
 	'contacts': { // contacts object
	 	'mobile': 'tel: 0408 000000',
	 	'email': 'darren@gmail.com',
	 	'github': 'Dar77',
	 	'location': 'Australia',
	},
	'welcomeMessage': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab similique in eaque, asperiores, expli.',
	'skills': ['HTML', 'CSS', 'Javascript', 'Design'],
	'biopic': 'images/bio-pic-2.jpg'
};

var education = { // education object
 	'schools': [
 		{
 			'name': 'Southampton City College',
 			'location': 'Southampton UK',
 			'degree': 'BTEC Dental Technology',
 			'majors': ['Dental Technology', 'Crown and Bridge'],
 			'dates': '2000-2004',
 			'url': ' http://southampton.com'
 		},
 		{
 			'name': 'Kingston University',
 			'location': 'Kingston UK',
 			'degree': 'BTEC Foundation Art & Design',
 			'majors': ['Graphic Design', 'Art and Design', '3D Design'],
 			'dates': '1997-1998',
 			'url': ' http://kingston.com'
 		},
 		{
 			'name': 'Spelthorne College',
 			'location': 'Ashford UK',
 			'degree': 'A-level',
 			'majors': ['Graphic Design'],
 			'dates': '1993-1996',
 			'url': ' http://spelthorne.com'
 		}
 	],

 	'onlineCourses': [
 		{
 			'title': 'Frontend Nano Degree',
 			'school': 'Udacity',
 			'dates': '2017 - present',
 			'url': ' https://www.udacity.com'
 		},
 		{
 			'title': 'HTML Basics',
 			'school': 'Another School',
 			'dates': '2017',
 			'url': ' https://www.anotherschool.com'
 		}
 	]
};

var work = { // work object
 	'jobs': [
	 	{
	 		'employer': 'Here',
	 		'title': 'Developer',
	 		'location': 'Melbourne VIC',
	 		'dates': '2012-present',
	 		'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quam modi sed, ullam veniam vero ea aliquam aut, magni dolorem voluptates tenetur officia optio. Sint amet, voluptatibus nobis animi dolores!'

	    },
	    {
	 		'employer': 'There',
	 		'title': 'UX design',
	 		'location': 'Geelong VIC',
	 		'dates': '2010-2012',
	 		'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quaerat assumenda et eius, quam sapiente provident placeat, odio obcaecati, earum sequi id perspiciatis nihil aperiam accusantium reiciendis voluptates doloribus nam!'

	    },
	    {
	 		'employer': 'Everywhere',
	 		'title': 'Web Developer',
	 		'location': 'Perth WA',
	 		'dates': '2007-2010',
	 		'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quaerat amet harum doloribus praesentium, sed facere rerum labore obcaecati natus, cum accusamus odio, possimus ut aliquid, ad libero dolores. Numquam.'
	    }
 	]

};

var projects = { // projects object
 	'projects': [
 		{
 			'title': 'Project Example 1',
 			'dates': '2016-2017',
 			'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus repudiandae, officiis deserunt hic natus explicabo maiores assumenda asperiores, nemo alias quisquam laborum eligendi amet id aliquam, culpa eum odio similique.',
 			'images': [
 				'images/code.jpg',

 			]
 		}, 		{
 			'title': 'Project Example 2',
 			'dates': '2014-2015',
 			'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quis earum quae eum est veniam, quisquam voluptas delectus laudantium? Illo accusantium vel nobis eveniet minima perspiciatis corporis aliquam, unde est.',
 			'images': [
 				'images/lap-top.jpg',
 				'images/code.jpg',
 				'images/keyboard.jpg'
 			]
 		}, 		{
 			'title': 'Project Example 3',
 			'dates': '2010-2012',
 			'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nulla iusto, cum vitae, modi hic praesentium, error fugit ut quasi expedita, quia delectus eius excepturi? Vel at id tempore, consectetur.',
 			'images': [
 				'images/keyboard.jpg',
 				'images/code.jpg',
 				'images/lap-top.jpg'
 			]
 		},
 	]
};

bio.display = function() {
    // header section - bio
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
	formattedPic = formattedPic.replace('%alt%', bio.name); // adds alt text using bio name
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#header-2').append(formattedPic);
	$('#header-3').append(formattedWelcomeMsg);
	// contacts section - bio
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedGitHub);
	$('#topContacts').append(formattedLocation);
	// add skill from skills array
	$('#header-4').append(HTMLskillsStart);
		if (bio.skills.length > 0) {
			for ( var skill = 0; skill < bio.skills.length; skill++) {
				var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
		 	    $('#skills').append(formattedSkill);
		}
	}
};

bio.display();

education.display = function() {
	for (var i = 0; i < education.schools.length; i++) {
		// add school from schools array
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
		var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
		var formattedSchoolURL = HTMLschoolURL.replace('%data%', education.schools[i].url);
		$('.education-entry:last').append(formattedNameDegree);
		$('.education-entry:last').append(formattedSchoolDates);
		$('.education-entry:last').append(formattedSchoolLocation);
            //add major from majors array
			if (education.schools[i].majors.length > 0) {
				for ( var major = 0; major < education.schools[i].majors.length; major++) {
					var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors[major]);
					$('.education-entry:last').append(formattedSchoolMajor);
		    }
		$('.education-entry:last').append(formattedSchoolURL);
		}
	}
	if (education.onlineCourses.length > 0) {//TODO
		//add online courses
		$('#education').append(HTMLonlineClasses);
			for (var c = 0; c < education.onlineCourses.length; c++) {
				$('#education').append(HTMLonlineStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[c].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[c].school);
				var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
				var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[c].dates);
				var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[c].url);
				$('.education-entry:last').append(formattedTitleSchool);
				$('.education-entry:last').append(formattedOnlineDates);
				$('.education-entry:last').append(formattedOnlineURL);
		}
	}
};

education.display();

work.display = function() {
    for(var i = 0; i < work.jobs.length; i++) {
        // add job from jobs array
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDescription);
 	}
};

work.display();

projects.display = function() {
	for (var i = 0; i < projects.projects.length; i++) {
		// add project from projects array
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDates);
		$('.project-entry:last').append(formattedProjectDescription);
            //add project images from images array
			if (projects.projects[i].images.length > 0) {
				for ( var pic = 0; pic < projects.projects[i].images.length; pic++) {
				var formattedProjectImages = HTMLprojectImage.replace('%data%', projects.projects[i].images[pic]); //requires both indexes [i] and [pic] - array in array
				formattedProjectImages = formattedProjectImages.replace('%alt%', projects.projects[i].title); // add alt text to images using project title
				$('.project-entry:last').append(formattedProjectImages);
		    }
		}
  	}
};

projects.display();

// add google map
var loadMap = function() {
	$('#mapDiv').append(googleMap);
};

loadMap();

bio.FooterContacts = function() {
	// add contact information to footer
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGitHub);
	$('#footerContacts').append(formattedLocation);
	// add social media icons
	$('#footerContacts').before(HTMLsocialStart);
	$('.icons-list').append(HTMLfaceBook);
	$('.icons-list').append(HTMLgooglePlus);
	$('.icons-list').append(HTMLgitHub);
	$('.icons-list').append(HTMLlinkedIn);
};

bio.FooterContacts();

// google charts - gauges
      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['HTML', 80],
          ['CSS', 90],
          ['JavaScript', 50],
          ['DESIGN', 90]
        ]);

		var lastScrollTop = 0;

	    if($(window).width() < 400) { //checks width of browser and then runs code below
	        var options = {
	          width: 290, height: 100,
	          greenFrom: 70, greenTo: 100,
	          yellowFrom:60, yellowTo: 70,
	          minorTicks: 0,
	          animation:{
	          duration: 500,
	          easing: 'inAndOut'
	          }
	        };
	    } else {
	        var options = {
	          width: 380, height: 120,
	          greenFrom: 70, greenTo: 100,
	          yellowFrom:60, yellowTo: 70,
	          minorTicks: 0,
	          animation:{
	          duration: 500,
	          easing: 'inAndOut'
	          }
	        };
	    };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 500);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 600);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 700);
        setInterval(function() {
          data.setValue(3, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 800);
      }

