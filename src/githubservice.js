const fetchGithubInfo = (criteria) => {
  
  let mainURL = "https://api.github.com/users/";
  let gitName = criteria;
  return fetch(mainURL.concat(gitName),{ method: 'GET' });      
        
};

const responseHandling = (response) => {
  if (response.status >= 400) return 'error'; 
  return response.json() 
}


export { fetchGithubInfo, responseHandling }