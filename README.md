GitHub Cards
============

### An example of fetch function in React to acquire info on a specific GitHub user

There are two different designs: a light theme and a dark theme.

Around the user’s picture there is a glowing halo using keyframes animations and
generated content in CSS3.

![](public/githubthemes.JPG)

The fetch function is all a matter of promises:

-   Acquire data from API by giving the username via props

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fetchGithubInfo = (criteria) => {  
   let mainURL = "https://api.github.com/users/";
   let gitName = criteria;
   return fetch(mainURL.concat(gitName),{ method: 'GET' });
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   Handle the response

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const responseHandling = (response) => {
   if (response.status >= 400) return 'error'; 
   return response.json() 
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   Acquire the data in a state change for rerendering

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
acquireInfo = (json) => {
   if(json === 'error') {this.setState({  error: true}); return};         
   this.setState({ data: json });
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   Finally concatenate the various functions in a series of promises to be
    called in the ComponentDidMount()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
getInfo = (criteria) => { 
   fetchGithubInfo(criteria).then(responseHandling).then( this.acquireInfo);    
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
