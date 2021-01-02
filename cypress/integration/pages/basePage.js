const basePage = {
    baseUrl: 'https://gorest.co.in/',
  
    /**
     * wrapper for visit so we can use relative urls and append them to baseUrl
     *
     * @param {*} relativeUrl 
     */
    goto(relativeUrl) {
      cy.visit(`${this.baseUrl}${relativeUrl}`);
    }
  };
  export default basePage;