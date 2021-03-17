

const examplePage = require('../support/pages/example_pageObjects.js');
const {Given, When, Then} = require('cucumber');
const { Selector } = require('testcafe'); 

        
Given('user goes to URL {string}', async function (string) {
    await testController.navigateTo('https://www.amazon.com/');
    });

When('user enters {string} in the search field', async function (string) {
      const searchBox =  examplePage.elements.searchBox();
      await testController.typeText(searchBox, string);
         });

 When('user clicks on Search Icon', async function () {
          const iconBttn =  examplePage.elements.iconBttn();
          await testController.click(iconBttn);
         });

When('user clicks on product', async function () {
          const productLst =  examplePage.elements.productLst();
          await testController.click(productLst);
});

Then('user clicks on add to cart', async function () {
          const addtocart =  examplePage.elements.addtocart();
          await testController.click(addtocart);
         });

         
Then('user checks the add to cart container', async function () {
  const addtocartcontainer =  examplePage.elements.addtocartcontainer();
  await testController.click(addtocartcontainer);
 });

 Then('user clicks the highest star rating', async function () {
        const highestrating =  examplePage.elements.highestrating();
        await testController.click(highestrating);
   });

  Then('user clicks the brand name checkbox', async function () {
        const brandnamecheckbx =  examplePage.elements.brandnamecheckbx();
        await testController.click(brandnamecheckbx);
  });

 Then('{string} message should be displayed', async function (string) {
        const messageElement = examplePage.elements.messageElement();
        await testController.expect(messageElement.innerText).contains(string);
  });

  Then('user clicks the hamburger icon', async function () {
      const hamburgerIcon =  examplePage.elements.hamburgerIcon();
      await testController.click(hamburgerIcon);
});

Then('user selects any category', async function () {
      const anycategory =  examplePage.elements.anycategory();
      await testController.click(anycategory);
});


Then('user selects any subcategory', async function () {
      const subcategory =  examplePage.elements.subcategory();
      await testController.click(subcategory);
});
