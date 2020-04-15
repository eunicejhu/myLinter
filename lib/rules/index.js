/**
 * @fileoverview Warn when declaring interface with typescript
 * @author Isabella HU
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "problem",

    docs: {
      description: "force interface name beginning with Inter",
      category: "Possible Errors",
      recommended: false,
      url: "https://eslint.org/docs/rules/force-interface-name",
    },

    schema: [],

    messages: {
      unexpectedTemplateExpression: "Unexpected interface name.",
    },
  },

  create(context) {
    return {
      InterfaceDeclaration(node) {
        const sourceCode = context.getSourceCode();
        const tokensAndComments = sourceCode.tokensAndComments;
        console.log(sourceCode, context, tokensAndComments);
        for (let token of tokensAndComments) {
          if (token.type === "Identifier" && token.value === "interface") {
            const nextNode = sourceCode.getTokenAfter(token);
            const name = nextNode.value;
            if (!String.prototype.match.call(name, /^Inter/g)) {
              context.report({
                node,
                message: "Interface name should begin with Inter",

                fix(fixer) {
                  return [
                    fixer.replaceTextRange(
                      [nextNode.start, nextNode.start],
                      "Inter"
                    ),
                  ];
                },
              });
            }
          }
        }
      },
    };
  },
};
