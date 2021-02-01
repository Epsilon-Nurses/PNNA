# Software Requirements
* What is the vision of this product?
    * Concept: During the time of the pandemic our group would like to give back to our community front line medical worker. Recent data has shown that as the spread of covid-19 rises we as a nation are falling short on the necessary medical staff needed to combat this pandemic. Statistics showed that most hospital workers come from the nation of the Philippines. We have partnered up with the President Elect of the Philippines Nursing Association of Central California to produce a website to help nurses find a community
    * Goals: Create a network for immigrating nurses from the Philippines to receive, share, and communicate available resources. 
* What pain point does this project solve?
  * It’s challenging to be in a different country and not know anyone. This is a way to create that community for Philipino American immigrant nurses
* Why should we care about your product?
  * We are supporting the recruitment of more nurses during a global pandemic. This is a public health issue and we want to be a part of the solution
* IN - What will your product do
  * Product will have a registration page so we can create a members database
  * There will be a form on the page to collect user input, and the form will populate to a membership table on the registration page
  * Our product will list social media links, and potentially a calendar, for community bonding and events
* OUT - What will your product not do
  * Is not connected to government
  * Does not share your information with outside sources
  * Does not sell personal data
  * Does not collect PII
  * Is specific to the Philipino American immigrant community 
* What will your MVP functionality be?
  * Homepage with resources  (Stretch Goal: add calendar with events)
    * Possible Event (Lumpia Making Fundraiser?!)
    * Social Media Account
  * Registration page
    * Basic information collected on form
    * Ideally have cultural/city specific connections between members to make sure they can get in touch with people from similar backgrounds. 
  * About Us
* What are your stretch goals?
  * Add an event calendar
  * Login
  * Search bar 
* List the functionality of your product:
  * Our users can become registered members
  * Our members can search for other nurses in their community
  * Our users can find relevant social media pages
  * Our uses can learn about the Philipino Nursing community in the Central Valley 
* Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. 
  * Features: Form submission - JavaScript
    * Event listener on form submission. This will log each click on the form as well as the submit button on the form. We are taking the inputs that are on the form and checking the inputs
    * Object Constructor with ‘nurseKit’ to capture data inputs from the form
    * Alert user that their inputs are correct, then let them know their information has been submitted
    * Call the object constructor and save to local storage via fancyCatArray
    * This membership information will be displayed on the page via confirmation and a table
  * Features: Calendar (stretch goal) - JavaScript
    * Build a table body. Display and reflect headcount
    * Add checkboxes within the table body
  * Features: Dynamic Images - CSS
    * Apply some sort of animation to images
    * Current ideas: when user hovers mouse over image, image flips over to share text that is related to the image
