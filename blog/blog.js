const blogArray = [
  {
    title: "Clock Work",
    subtitle: "circular time, like rings of a tree",
    dateCompleted: "October 14, 2019",
    descriptionParagraph: "on the UI, the user is able to set the hour block for studying, coding, napping. When the time is during those set hours, the image and message on the “clock” div will change, which also changes the image and message, along with the text displayed on the button .",
    technologiesUsed: "html, css, javascript, date",
    soloContributor: true,
    projectHighlights: "work in progress!",
    netlifyUrl: "https://clizzock.netlify.com/",
    githubUrl: "https://github.com/sunnieray/clockwork"
  },
  {
    title: "Student Showcase",
    subtitle: "Group project utilizing agile skills and ability to work in a group and push up to master from our branches",
    dateCompleted: "October 24th, 2019",
    descriptionParagraph: "Individually created page that displayed an image routed from images folder, paraghraphs, link back to home page, from home page we created a section with clickable image that takes user to our individual page and linked pages in header",
    technologiesUsed: "html, css, javascript, github",
    soloContributor: true,
    projectHighlights: "Work in progress",
    netlifyUrl: "https://sunnieray.netlify.com/",
    githubUrl: "https://github.com/savvy-coders/nashville-2019-students"
  },
  {
    title: "To-Do List",
    subtitle: "uses CRUD to create list",
    dateCompleted: "October 28th, 2019",
    descriptionParagraph: "Interactive list with buttons appended to each element to delete individually",
    technologiesUsed: "",
    soloContributor: true,
    projectHighlights: "used unique identifiers on buttons",
    netlifyUrl: "https://to-do-listtt.netlify.com/",
    githubUrl: "https://github.com/sunnieray/to-do-list"
  },
  {
    title: "Dynamic Dogs",
    subtitle: "array of Doggos",
    dateCompleted: "October 22th, 2019",
    descriptionParagraph: "dynamically populates a page to show off prized puppers. this was a code-along with the class!",
    technologiesUsed: "html, css, javascript",
    soloContributor: true,
    projectHighlights: "template literals are literally the coolest",
    netlifyUrl: "https://dynamicdoggos.netlify.com/",
    githubUrl: "https://github.com/sunnieray/dynamic-dogs"
  },
  {
    title: "Fund Checker",
    subtitle: "Dynamic checker to display how much money we have left after paying for something",
    dateCompleted: "October 28th, 2019",
    descriptionParagraph: "uses template literals to display funds left",
    technologiesUsed: "html, css, javascript",
    soloContributor: true,
    projectHighlights: "used unique identifiers on buttons",
    netlifyUrl: "https://fund-checker.netlify.com/",
    githubUrl: "https://github.com/sunnieray/fund-checker"
  }
]

var bloggy = document.getElementById("blogDiv")

for(var indexer =0; indexer <= blogArray.length; indexer++) 
{
  var blogTitle = blogArray[indexer].title;
  var blogSubTitle = blogArray[indexer].subtitle;
  var dateCompleted = blogArray[indexer].dateCompleted;
  var descriptionParagraph = blogArray[indexer].descriptionParagraph;
  var technologiesUsed = blogArray[indexer].technologiesUsed;
  var soloContributor = blogArray[indexer].soloContributor;
  var projectHighlights = blogArray[indexer].projectHighlights;
  var netlifyUrl = blogArray[indexer].netlifyUrl;
  var githubUrl = blogArray[indexer].githubUrl;
  
  //dynamically displaying section for each project
  bloggy.innerHTML += `<div class='entryDiv'>
    <h1>${blogTitle}</h1>
    <h4>${blogSubTitle}</h4>
    <strong>${dateCompleted}</strong>
    <p>${descriptionParagraph}</p>
    <p>${technologiesUsed}</p>
    <p>${soloContributor}</p>
    <hr><p>${projectHighlights}</p>
    <hr><a href='${netlifyUrl}'>View Project</a>
    <hr><a href='${githubUrl}'>View Code</a>
 </div>`;




}
