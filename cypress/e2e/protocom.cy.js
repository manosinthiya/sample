describe("template spec", () => {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
    })
    it("Filling Personal Details", () => {
        cy.wait(5000)
        cy.get((':nth-child(1) > .form-control')).type("Manosinthiya")
        cy.get(('input[name="email"]')).type("manosenthil9184@gmail.com")
        cy.get('input[id="exampleInputPassword1"]').type("Password123")
        cy.get('input[id="exampleCheck1"]').click()
        cy.get('select[id="exampleFormControlSelect1"]').select('Female').should('have.value', 'Female')
        cy.get('input[id="inlineRadio3"]').should('be.disabled');
        cy.get('input[type="date"]').type('2024-05-20')
        cy.get('input[type="date"]').should('have.value', '2024-05-20');
        cy.get('[type*="submit"]').click()
        //string compare
        cy.get((':nth-child(1) > .form-control')).invoke(('text')).then((text1) => {
        cy.get(('input[class="ng-untouched ng-pristine ng-valid"]')).invoke(('text')).then((text2) => {
          expect(text1.trim()).to.equal(text2.trim());//trim is used to cut trailing and leading spaces
        cy.contains('Shop').click()
                //add mobiles to cart
                cy.wait(5000)     
        cy.get('button[class="btn btn-info"]').eq(0).click()
        cy.get('button[class="btn btn-info"]').eq(1).click()
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
       

// //comparing mobile prices
// const expectedTotal = 185000; 
// // Locate the web elements containing the prices
// cy.get('tbody > :nth-child(1) > :nth-child(3)').then(($prices) => {
//   // Extract the text of the prices
//   const price1Text = $prices.eq(0).text();
//   const price2Text = $prices.eq(1).text();

//   // Convert the price text into numeric values
//   const price1 = parseInt(price1Text.replace('$', '').trim());
//   cy.log(price1)
//   const price2 = parseInt(price2Text.replace('$', '').trim());
//   cy.log(price2)

//   // Calculate the sum of the prices
//   const totalPrice = price1 + price2;

//   // Perform the comparison using Cypress assertions
//   expect(totalPrice).to.equal(expectedTotal);
// });

cy.get('input[type="text"]').type("Chi")
cy.get('div[class="suggestions"]').each(($suggestions) => {
    if ($suggestions.text().includes('China')) {
        cy.wrap($suggestions).click({force:true});
        
    }
});






        




        })
        
 

                
                

            })





        })








    })







