/**
 * @fileoverview generator name must end in Generator
 * @author Isabella HU
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/generator-name"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("generator-name", rule, {
  valid: ["function *getNext() {}"],

  invalid: [
    {
      code: "function *getNextName() {}",
      errors: [
        {
          message: "Generator name must end with 'Generator'",
          type: "FunctionDeclaration",
        },
      ],
    },
  ],
});
