'strict mode';
/**
 * Dates formats for all document are like '10/5/2015'
 * momentjs.com 'l' format
 */
var dateFormat = 'l';
/**
 * Transforms from string value to momentjs date
 * @param string stringValue
 * @return {}
 */
function makeDate(stringValue) {
  return moment(new Date(stringValue)).format(dateFormat);
}
/**
 * Transforms from 2 strings to 1 string
 * expressing dates from to
 * @param string from
 * @param string to
 */
function makeDateFromTo(from, to) {
  return makeDate(from) + ' to ' + makeDate(to);
}
/**
 * Work and experience
 */
var work = {
  /**
   * List of Jobs by time
   */
  jobs: [{
    "dates"    : makeDateFromTo("2005-09-15", "2006,05,24"),
    "employer" : "UTN",
    "title"    : "Librarian.",
    "location" : "Medrano 951 CABA, Argentina",
    "description":"Saw the chance to work in an enviroment that helps to keep on studing and learning."
  }, {
    "dates"    : makeDateFromTo("2008-08-01", "2009-04-01") ,
    "title"    : "ELT. Entry Level Trainee.",
    "employer" : "Cognizant",
    "location" : "Moreno 877 CABA, Argentina",
    "description":"I had 6 month learning Java with 2 hindi teachers and 1 argentinian teacher. Learnt Java, Oracle 9i, Javascript, XML and Html."
  }, {
    "dates"    : makeDateFromTo("2009-04-01", "2010-06-01"),
    "employer" : "Cognizant, ACE",
    "title"    : "Developer and Support",
    "location" : "Moreno 877 CABA, Argentina",
    "description":"Minor fixes and features for ACE Insurance System. Technologies: .Net 2.0 SQL Server 2008 Javascript (Mootools)."
  }, {
    "dates"    : makeDateFromTo("2010-06-01", "2011-06-01"),
    "title"    : "Product Builder",
    "employer" : "Cognizant, ACE",
    "location" : "Moreno 877 CABA, Argentina",
    "description":"Developed insurance application with .Net 3.5 SQL Server 2008 and Javascript (jquery). Linq to Entities for back end. Rest API for javascript calls. This project is to build custom products for brokers of ACE."
  }, {
    "dates"    : makeDateFromTo("2011-06-01", "2011-10-01"),
    "employer" : "Baufest, La Nación News Paper",
    "title"    : "Notables",
    "location" : "Leandro N. Alem 232 CABA, Argentina",
    "description":"Net Support for Notables. .Net 2.0 SQL Server 2008. SQL Stored Procedures and Views. This is project to include news to magazines and the news paper."
  }, {
    "dates"    : makeDateFromTo("2011-10-01", "2011-11-01"),
    "title"    : "Club benefit card",
    "employer" : "Baufest, La Nación News Paper",
    "location" : "Leandro N. Alem 232 CABA, Argentina",
    "description":"Role: Support. Technologies: .Net 3.5 SQL Server 2008. This is a project for a benefit card of the news paper."
  }, {
    "dates"    : makeDateFromTo("2011-11-01", "2012-01-01"),
    "employer" : "Baufest, La Nación News Paper",
    "title"    : "Comisiones",
    "location" : "Leandro N. Alem 232 CABA, Argentina",
    "description":"Role: Support and Implementation. Technologies: .Net 3.5 SQL Server 2008. Reports with reporting Services."
  }, {
    "dates"    : makeDateFromTo("2012-01-01", "2012-02-01"),
    "employer" : "Baufest, La Nación News Paper",
    "title"    : "GeCom",
    "location" : "Leandro N. Alem 232 CABA, Argentina",
    "description":"Role: Support and Implementation. Technologies: .Net 3.5 SQL Server 2008. This is an application to set deals with other companies and the news paper."
  }, {
    "dates"    : makeDateFromTo("2012-02-01", "2013-01-01"),
    "employer" : "Inworx ",
    "title"    : "Inbroker",
    "location" : "Belgrano 680 CABA, Argentina",
    "description":"Support, System Analyst and Developer for Insurance Services.Technologies: .Net 3.5 and 4 SQL Server 2012 Js Reporting Services. Reflection, IoC, AOP. REST Front End. Back End SOA. Database with NHibernate."
  }, {
    "dates"    : makeDateFromTo("2013-01-01", "2014-02-01"),
    "employer" : "Inworx ",
    "title"    : "Smartix",
    "location" : "Belgrano 680 CABA, Argentina",
    "description":"Support, System Analyst and Developer for Insurance Services. Technologies: .Net 3.5 and 4 SQL Server 2012 Js. Similar to Inbroker"
  }, {
    "dates"    : makeDateFromTo("2014-02-01", "2014-07-01"),
    "employer" : "Etermax",
    "title"    : "Questions Factory",
    "location" : "Capdevila 3448 CABA, Argentina",
    "description":"Support, System Analyst and Developer. Technologies: Backbone Marionette 1.6.4 Grunt. This is project to create questions, change status and translate."
  }, {
    "dates": makeDateFromTo("2014-07-01", "2014-08-01"),
    "title":"Help center",
    "employer": "Etermax",
    "location": "Capdevila 3448 CABA, Argentina",
    "description":"Support, System Analyst and Developer. Technologies: Backbone Marionette 1.6.4 Grunt. This is project to set coins, lives, gems to games."
  }, {
    "dates"    : makeDateFromTo("2014-08-01", "2014-09-01"),
    "title"    : "Susana Gimenez Trivia",
    "employer" : "Etermax",
    "location" : "Capdevila 3448 CABA, Argentina",
    "description":"Developer. Technologies: Backbone Marionette 1.6.4 Grunt NodeJs SocketIO Q Less. This is a project for TV Show Susana Gimenez, it is a Trivia by phases build for different players."
  }, {
    "dates"    : makeDateFromTo("2014-09-01", "2014-10-01"),
    "title"    : "Access",
    "employer" : "Etermax",
    "location" : "Capdevila 3448 CABA, Argentina",
    "description":"Support, System Analyst and Developer. Technologies: PHP, Zend Framework and Doctrine. This is a project for RRHH of Etermax in order to grant access to the company to employees."
  }, {
    "dates"    : makeDateFromTo("2014-11-01", "2014-12-01"),
    "title"    : "Etermax                                  : Bingo Crack",
    "employer" : "Etermax",
    "location" : "Capdevila 3448 CABA, Argentina",
    "description":"Support, System Analyst and Developer. Technologies: Backbone Marionette 1.6.4 Grunt. This is a Facebook Game for bingo."
  }, {
    "dates"    : makeDateFromTo("2014-12-01", "2015-02-01"),
    "title"    : "Trivia Crack",
    "employer" : "Etermax",
    "location" : "Capdevila 3448 CABA, Argentina",
    "description":"<p>Support, System Analyst and Developer. Technologies: Backbone Marionette 1.6.4 Grunt Promises. This is a Facebook Game for Trivia Crack.</p>"
  }, {
    "dates"    : makeDateFromTo("2015-02-01", "2015-03-01"),
    "employer" : "Etermax",
    "location" : "Capdevila 3448 CABA, Argentina",
    "title"    : "Aworded",
    "description":"Support, System Analyst and Developer. Technologies: Backbone Marionette 1.6.4 Grunt. This is a Facebook Game for Aworded."
  }, {
    "dates"    : makeDateFromTo("2015-03-01", "2015-04-01"),
    "employer" : "Etermax",
    "location" : "Capdevila 3448 CABA, Argentina",
    "title"    : "Trends",
    "description":"Developer. Technologies: Backbone Marionette 1.6.4 Grunt Less. This is a project to show trends of the questions to be translated by the Questions Factory project."
  }, {
    "dates"       : makeDateFromTo("2015-04-01", "2015-05-01"),
    "title"       : "Support",
    "employer"    : "Etermax",
    "location"    : "Capdevila 3448 CABA, Argentina",
    "description" : "Developer. Technologies: Backbone Marionette 2.4.2 Grunt Less Nodejs AmazonSes Mocha Chai. Support and Help for all client games, client view with backend of nodejs for email support services."
  }],
  /**
   * Display, shows work experience
   * starting with the most recently job to the older one
   */
  "display": function () {
    for(var i = work.jobs.length - 1; i >= 0; i--) {
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace('%data%', work.jobs[i].title))
        .append(HTMLworkDates.replace('%data%', work.jobs[i].dates))
        .append(HTMLworkLocation.replace('%data%', work.jobs[i].location))
        .append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
    }
  }
};
/**
 * Education Section
 */
var education = {
  /**
   * Schools list
   */
  "schools": [{
    "name": 'UTN, University Technological National',
    "location": "Medrano 951 CABA, Argentina",
    "degree": 'Engineer',
    "majors": ['Information System'],
    "dates": 2015,
    "url": ''
  }],
  /**
   * Online courses list
   */
  "onlineCourses": [{
    "title"  : 'Nanodegree Front End Web Developer',
    "school" : 'Udacity',
    "dates"  : 2015,
    "url"    : 'http://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }],
  /**
   * Display Online Courses
   */
  "displayOnlineCourses": function () {
    $('#education').append(HTMLonlineClasses);
    for(var i = 0; i < education.onlineCourses.length; i++) {
      $('.education-entry:last').next().append(HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title) + HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school))
        .append(HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates))
        .append(HTMLonlineURL.replace('%data%', education.onlineCourses[i].url));
    }
  },
  /**
   * Display school education
   */
  "displaySchool": function () {
    for(var i = 0; i < education.schools.length; i++) {
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[i].name) + HTMLschoolDegree.replace('%data%', education.schools[i].degree))
        .append(HTMLschoolDates.replace('%data%', education.schools[i].dates))
        .append(HTMLschoolMajor.replace('%data%', education.schools[i].majors.toString()));
    }
  }
};
/**
 * Biography, and contact information
 */
var bio = {
  "name": 'Juan José García',
  "role": 'Front End Developer',
  "contacts": {
    "mobile"  : '11-3325-2904',
    "email"   : 'garcia_juan_j@yahoo.com.ar',
    "github"  : 'jotaoncode',
    "twitter" : '@Juancho_1985_',
    "location": 'Marcelo T. Alvear 474 CABA, Argentina'
  },
  "welcomeMessage": 'Bienvenido',
  "skills": ['Open minded', 'Research', 'Hard worker'],
  "biopic": 'images/fry.jpg',
  /**
   * Displays Contact information
   * @param {} container
   */
  "displayContact": function ($container) {
    $container.append(HTMLmobile.replace('%data%', bio.contacts.mobile))
              .append(HTMLemail.replace('%data%', bio.contacts.email))
              .append(HTMLtwitter.replace('%data%', bio.contacts.twitter))
              .append(HTMLgithub.replace('%data%', bio.contacts.github))
              .append(HTMLlocation.replace('%data%', bio.contacts.location));
  },
  /**
   * Displays contact information
   */
  "displayTopContact": function () {
    this.displayContact($('#topContacts'));
  },
  /**
   * Show contact information in the footer
   */
  "displayFooterContact": function () {
    this.displayContact($('#footerContacts'));
  },
  /**
   * Displays header and skills
   */
  "displayHeader": function () {
    var header = $('#header');
    header.prepend(HTMLheaderRole.replace('%data%', bio.role))
          .prepend(HTMLheaderName.replace('%data%', bio.name))
          .append(HTMLbioPic.replace('%data%', bio.biopic))
          .append(HTMLwelcomeMsg.replace('%data%' , 'Welcome to my site!'))
          .append(HTMLskillsStart);
    for(var i = 0 ; i < bio.skills.length; i++) {
      $('#skills').prepend(HTMLskills.replace('%data%', bio.skills[i]));
    }
  }
};
/**
 * Projects
 */
var projects = {
  /**
   * List of projects
   */
  "projects" : [{
    "title": 'Trends',
    "dates": makeDateFromTo('2015-08-30', '2015-09-15'),
    "description": 'This is an application developed for cards that will be showing results of the latest trends. I refactored all the code to use Sass, Browserify, Gulp, and Marionette 2.4.x. Also changed responsabilities in the different objects and organized the code in a more clear way to understand and mantain. Also I make it more cross browser.',
    "images": []
  }],
  /**
   * Displays projects
   */
  "display": function () {
    for(var i = 0; i < projects.projects.length; i++) {
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[i].title))
        .append(HTMLprojectDates.replace('%data%', projects.projects[i].dates))
        .append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));
    }
    return this;
  }
};
/**
 * Appends google map in container
 */
$('#mapDiv').append(googleMap);

bio.displayHeader();
bio.displayTopContact();
work.display();
projects.display();
education.displaySchool();
education.displayOnlineCourses();
bio.displayFooterContact();
