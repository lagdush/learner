module.exports = (plop) => {
   plop.setGenerator("FCA", {
       description: "Create a functional component",
       prompts: [
           {
               type: "input",
               name: "name",
               message: "What is your component name",
           },
       ],
       actions: [
           {
               type: "add",
               path:"src/Components/Atoms/{{pascalCase name}}/{{pascalCase name}}.tsx",
               templateFile: "plop-template-ts/functionalComponent.tsx.hbs",
           },
           {
               type: "add",
               path:
                   "src/Components/Atoms/{{pascalCase name}}/{{pascalCase name}}-style.tsx",
               templateFile: "plop-template-ts/Component-style.tsx.hbs",
           },
       ],
   });




   plop.setGenerator("FCM", {
       description: "Create a functional component",
       prompts: [
           {
               type: "input",
               name: "name",
               message: "What is your component name",
           },
       ],
       actions: [
           {
               type: "add",
               path:"src/Components/Molecules/{{pascalCase name}}/{{pascalCase name}}.tsx",
               templateFile: "plop-template-ts/functionalComponent.tsx.hbs",
           },
           {
               type: "add",
               path:
                   "src/Components/Molecules/{{pascalCase name}}/{{pascalCase name}}-style.tsx",
               templateFile: "plop-template-ts/Component-style.tsx.hbs",
           },
       ],
   });

   plop.setGenerator("FCO", {
      description: "Create a functional component",
      prompts: [
          {
              type: "input",
              name: "name",
              message: "What is your component name",
          },
      ],
       actions: [
           {
               type: "add",
               path:"src/Components/Organisms/{{pascalCase name}}/{{pascalCase name}}.tsx",
               templateFile: "plop-template-ts/functionalComponent.tsx.hbs",
           },
           {
               type: "add",
               path: "src/Components/Organisms/{{pascalCase name}}/{{pascalCase name}}-style.tsx",
               templateFile: "plop-template-ts/Component-style.tsx.hbs",
           },
       ],
  });

  plop.setGenerator("FCT", {
   description: "Create a functional component",
   prompts: [
       {
           type: "input",
           name: "name",
           message: "What is your component name",
       },
   ],
   actions: [
       {
           type: "add",
           path: "src/Components/Templates/{{pascalCase name}}/{{pascalCase name}}.tsx",
           templateFile: "plop-template-ts/functionalComponent.tsx.hbs",
       },
       {
           type: "add",
           path: "src/Components/Templates/{{pascalCase name}}/{{pascalCase name}}-style.tsx",
           templateFile: "plop-template-ts/Component-style.tsx.hbs",
       },
   ],
});

plop.setGenerator("FCV", {
   description: "Create a functional component",
   prompts: [
       {
           type: "input",
           name: "name",
           message: "What is your component name",
       },
   ],
   actions: [
    {
        type: "add",
        path:"src/Components/View/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-template-ts/functionalComponent.tsx.hbs",
    },
    {
        type: "add",
        path:
            "src/Components/View/{{pascalCase name}}/{{pascalCase name}}-style.tsx",
        templateFile: "plop-template-ts/Component-style.tsx.hbs",
    },
   ],
});

};
