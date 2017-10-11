/*
resumeBuilder.js - resume project - Darren Ware
 */

// model - data =====================================================================================================
var model = {
	bio: { //bio object
	 	'name': 'Darren Ware',
	 	'role': 'Web Developer',
	 	'contacts': { // contacts object
		 	'mobile': 'tel: 0408 000000',
		 	'email': 'darren@gmail.com',
		 	'github': 'Dar77',
		 	'location': 'Australia',
		},
		'welcomeMessage': 'Placeholder text applauded no discovery in newspaper allowance am northward.',
		'skills': ['HTML', 'CSS', 'Javascript', 'Design'],
		'biopic': 'images/bio-pic-2.jpg'
	},

	education: { // education object
	 	'schools': [
	 		{
	 			'name': 'Brighton City College',
	 			'location': 'Brighton VIC',
	 			'degree': 'Graphic Design',
	 			'majors': ['Graphic Design'],
	 			'dates': '2000-2004',
	 			'url': ' http://brighton.com'
	 		},
	 		{
	 			'name': 'Melbourne University',
	 			'location': 'Melbourne VIC',
	 			'degree': 'Foundation Art & Design',
	 			'majors': ['Graphic Design', 'Art and Design', '3D Design'],
	 			'dates': '1997-1998',
	 			'url': ' http://melbourne.com'
	 		},
	 		{
	 			'name': 'Essendon College',
	 			'location': 'Essendon VIC',
	 			'degree': 'Another Course',
	 			'majors': ['Graphic Design'],
	 			'dates': '1993-1996',
	 			'url': ' http://essendon.com'
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
	 			'dates': '2016',
	 			'url': ' https://www.anotherschool.com'
	 		}
	 	]
	},

	work: { // work object
	 	'jobs': [
		 	{
		 		'employer': 'Here',
		 		'title': 'Developer',
		 		'location': 'Melbourne VIC',
		 		'dates': '2012-present',
		 		'description': 'Placeholder text applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected he me. Engaged its was evident pleased husband.'

		    },
		    {
		 		'employer': 'There',
		 		'title': 'UX design',
		 		'location': 'Geelong VIC',
		 		'dates': '2010-2012',
		 		'description': 'Placeholder text applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected he me. Engaged its was evident pleased husband.'

		    },
		    {
		 		'employer': 'Everywhere',
		 		'title': 'Web Developer',
		 		'location': 'Perth WA',
		 		'dates': '2007-2010',
		 		'description': 'Placeholder text applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected he me. Engaged its was evident pleased husband.'
		    }
	 	]

	},

	projects: { // projects object
	 	'projects': [
	 		{
	 			'title': 'Project Example 1',
	 			'dates': '2016-2017',
	 			'description': 'Placeholder text applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected he me. Engaged its was evident pleased husband.',
	 			'images': [
	 				'images/code.jpg',

	 			]
	 		}, 		{
	 			'title': 'Project Example 2',
	 			'dates': '2014-2015',
	 			'description': 'Placeholder text applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected he me. Engaged its was evident pleased husband.',
	 			'images': [
	 				'images/code.jpg',
	 				'images/keyboard.jpg',
	 				'images/lap-top.jpg'
	 			]
	 		}, 		{
	 			'title': 'Project Example 3',
	 			'dates': '2010-2012',
	 			'description': 'Placeholder text applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected he me. Engaged its was evident pleased husband.',
	 			'images': [
	 				'images/keyboard.jpg',
	 				'images/code.jpg',
	 				'images/lap-top.jpg'
	 			]
	 		},
	 	]
	}
};

// octopus ===========================================================================================================
var octopus = function() {
	init: function() { // render the resume
		viewBio.bioRender();
		viewEducation.educationRender();
		viewWork.workRender();
		viewProjects.projectsRender();
	},
	getBio = function() { // return bio object
		return model.bio;
	},
	getEducation = function() { // return education object
		return model.education;
	},


}

// view ==============================================================================================================
var viewBio = {
	bioRender: function() {
	    // header section - bio
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
		formattedPic = formattedPic.replace('%alt%', bio.name); // adds alt text using bio name
		$('#header').prepend(formattedName, formattedRole);
		$('#header-2').append(formattedPic);
		$('#header-3').append(formattedWelcomeMsg);
		// contacts section - bio
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		$('#topContacts').append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation); // string arguments together and add to page
		// add skill from skills array
		$('#header-4').append(HTMLskillsStart);
			if (bio.skills.length > 0) {
				for ( var skill = 0; skill < bio.skills.length; skill++) {
					var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
			 	    $('#skills').append(formattedSkill);
			}
		}
		// add contact information to footer
		$('#footerContacts').append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);
		// add social media icons
		$('#footerContacts').before(HTMLsocialStart);
		$('.icons-list').append(HTMLfaceBook, HTMLgooglePlus, HTMLgitHub, HTMLlinkedIn);
	};
};

var viewEducation ={
	educationRender: function() {
		for (var i = 0; i < education.schools.length; i++) {
			// add school from schools array
			$('#education').append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
			var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
			var formattedSchoolURL = HTMLschoolURL.replace('%data%', education.schools[i].url);
			$('.education-entry:last').append(formattedNameDegree, formattedSchoolDates, formattedSchoolLocation);
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
					$('.education-entry:last').append(formattedTitleSchool, formattedOnlineDates, formattedOnlineURL);
			}
		}
	};
};

var viewWork = {
	workRender: function() {
	    for(var i = 0; i < work.jobs.length; i++) {
	        // add job from jobs array
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
			$('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
	 	}
	};
};

var viewProjects = {
	projectsRender: function() {
		for (var i = 0; i < projects.projects.length; i++) {
			// add project from projects array
			$('#projects').append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
			var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
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
};

octopus.init();

// add google map
var loadMap = function() {
	$('#mapDiv').append(googleMap);
};

loadMap();

// google charts - gauges
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
    	['Label', 'Value'],
    	['HTML', 80], // bio.skills[0].toUppercase(), 80 - could use skills[] direct from object
    	['CSS', 90],
    	['JavaScript', 40],
    	['DESIGN', 90]
    ]);

	var lastScrollTop = 0;
	var options;

    if($(window).width() < 400) { //checks width of browser and then runs code below
        options = {
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
        options = {
          	width: 380, height: 120,
          	greenFrom: 70, greenTo: 100,
          	yellowFrom:60, yellowTo: 70,
          	minorTicks: 0,
          	animation:{
          	duration: 500,
          	easing: 'inAndOut'
          	}
        };
    }

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