/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var work = {
 	"jobs" : [{
 		"employer" : "Night of the Nerds",
 		"title" : "President, Producer, Promoter, Emcee",
 		"location" : "Long Island, NY",
 		"dates" : "2014-Present",
 		"description" : "Ran large-scale nerd-culture-themed shows throughout Long Island, featuring live music, burlesque, cosplay contests, video game tournaments, and more."
	},{
 		"employer" : "Music Simply Music",
 		"title" : "Piano Facilitator",
 		"location" : "Nesconset, NY",
 		"dates" : "2013-Present",
 		"description" : "Piano teacher - teaching individual lessons from students' homes"
	},{
		"employer" : "Northern Highlands Regional High School",
 		"title" : "Music Teacher",
 		"location" : "Allendale, NJ",
 		"dates" : "2008-2013",
 		"description" : "Taught Honors and AP Music Theory, General Music, and an afterschool honors choir.  Duties also included piano accompaniment for the choirs and music direction for the school's annual musical theatre production."
	}]
 };

 var projects = {
 	"projects" : [{
 		"title" : "Portfolio",
 		"dates" : "August 2016",
 		"description" : "Portfolio to showcase various projects",
 		"image" : "images/fry.jpg"
 	}]
 };

 var bio = {
 	"name" : "Gene Ryman",
 	"role" : "Front-End Web Developer",
 	"contacts" : {
 		"mobile" : "516-459-6257",
 		"email" : "gene.ryman@gmail.com",
 		"github" : "eryman",
 		"linkedin" : "gene-ryman",
 		"location" : "Centereach, NY"
 	},
 	"skills" : ["HTML5", "CSS3", "JavaScript", "Unaided Human Flight"],
 	"image" : "images/fry.jpg",
 	"welcomeMsg" : "Thanks for looking at my resume!"
 }


 var education = {
	"schools": [{
		"name": "Boston University",
		"location": "Boston, MA",
		"degree": "MM",
		"major": "Music Education",
		"dates": "2009 - 2012",
		"url" : "http://www.bu.edu"
	}, {
		"name": "SUNY Potsdam",
		"location": "Potsdam, NY",
		"degree": "BM",
		"major": "Musical Studies",
		"dates": "2002 - 2007",
		"url" : "http://www.potsdam.edu"
	}],
	"onlineCourses" : [{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "2016",
		"url" : "http://www.udacity.com"
	}]
 };

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

education.display();

 
 if(bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);
   for (skill in bio.skills) {
   		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
   		$("#skills").append(formattedSkill);
   };
 };



work.display = function(){
 for (job in work.jobs) {
 	$("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
 }
}

work.display();



projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImage);
	}
}

projects.display();

bio.display = function() {
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
 var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
 $("#skills-h3").prepend(formattedWelcomeMsg);
 $("#skills-h3").prepend(formattedBioPic);
 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedGithub);
 $("#topContacts").append(formattedLinkedin);
 $("#topContacts").append(formattedLocation);
 
}

bio.display();

/*$("#main").append(internationalizeButton);

function inName() {
    var finalName = bio.name.split(" ");
    // Your code goes here!
    var first = finalName[0].toLowerCase();
    first = first[0].toUpperCase() + first.slice(first.length-first.length+1);
    var last = finalName[1].toUpperCase();
    finalName = first + " " + last;
    // Don't delete this line!
    return finalName;
}*/

$("#mapDiv").append(googleMap);

//TO DO:
//	GET CONTACTS TO DISPLAY
//	GET MAPS TO DISPLAY
//	MAKE WELCOME MESSAGE/SKILLS H3 PRETTIER