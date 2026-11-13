GHANA SCHOOL FINDER - STARTER PROJECT

FILES
- index.html: home page, search, school cards and Education Hub
- about.html: separate About Us page
- style.css: design and responsive layout
- script.js: home-page search suggestions, filters and clickable school links
- school.html and school.js: individual school information/profile page
- schools.js: shared sample school data used by search and profile pages

HOW TO OPEN
1. Extract this ZIP file.
2. Open the extracted "Ghana_School_Finder" folder in VS Code.
3. Right-click index.html and choose "Open with Live Server".
4. If the browser does not open, look at the Live Server address shown in VS Code and open that exact address in your browser.
5. Click About Us to open the separate page.

IMPORTANT ABOUT THE SCHOOL LIST
This is a functional starter catalogue, not a complete directory of 1,175 SHSs or all universities. It currently contains sample entries to demonstrate the features. Search suggestions search the entries currently in script.js only.
The official GES website has a school directory: https://ges.gov.gh/schools.php
A GES SHS/TVET register PDF is available at: https://ges.gov.gh/wp-content/uploads/2020/08/SHSTVET_SCHOOLS.pdf
Please verify each record and logo before publishing. The logo badges in this starter project are initials placeholders, not official logos.

HOW TO ADD A SCHOOL
Open script.js and add another object inside the schools array, following this pattern:
{name:"School Name",type:"SHS",region:"Eastern",location:"Town, District",description:"Short verified description.",website:"https://example.edu.gh"}

Allowed type values used by the filters:
- SHS
- University
- Technical University

The website uses plain HTML, CSS and JavaScript, so no installation is needed.


CLICKING A SCHOOL
On the home page, click any school card or a search suggestion. It opens school.html with that school's profile and information. The URL uses a school record number so each sample entry opens its own profile.

To add or correct school information, edit the shared array in schools.js. Both the search page and individual profile pages use that same data.
