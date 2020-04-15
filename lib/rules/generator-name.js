/**
 * @fileoverview generator name must end in Generator
 * @author Isabella HU
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "generator name must end in Generator",
      category: "warn",
      recommended: false,
    },
    fixable: "code", // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // give me methods
      FunctionDeclaration(node) {
        context.report({
          node,
          message: "Generator name must end with 'Generator'",

          fix(fixer) {
            console.log(fixer, node);
            if (node.generator && !/Generator$/.test(node.id.name)) {
              return [
                fixer.replaceTextRange(
                  node.id.range,
                  `${node.id.name}Generator`
                ),
              ];
            }
          },
        });
      },
    };
  },
};
