
const {Selector} = require('testcafe');

/*
Create and export a module with name "elements". This module contains functions.
Each function is returning a Selector for a particular web element and bind to testController.
This module can be imported and called from Step Definitions to access the web elements.

*/

exports.elements = {

    searchBox: function() {

        return Selector('#twotabsearchtextbox').with({ boundTestRun: testController });
    },
    iconBttn: function() {
        return Selector('#nav-search-submit-button').with({ boundTestRun: testController });
    },
    addtocart: function() {
        return Selector('#submit.add-to-cartsubmit.add-to-cart').with({ boundTestRun: testController });
    },

    productLst:
    function() {
        return Selector('#MAIN-SEARCH_RESULTS-1').with({ boundTestRun: testController });
    },

    addtocartcontainer:
    function() {
        return Selector('#nav-cart').with({ boundTestRun: testController });
    },

    messageElement: function() {
    return Selector('#Subtotals').with({ boundTestRun: testController });
    },

    highestrating:
    function() {
        return Selector('#p_72\\/1248885011').with({ boundTestRun: testController });
    },

    brandnamecheckbx:
    function() {
        return Selector('#checkbox').with({ boundTestRun: testController });
    },

    hamburgerIcon:
    function() {
        return Selector('#nav-hamburger-menu').with({ boundTestRun: testController });
    },

    anycategory:
    function() {
        return Selector('#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(2) > a > i').with({ boundTestRun: testController });
    },

    subcategory:
    function() {
        return Selector('#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(12) > a').with({ boundTestRun: testController });
    },
}