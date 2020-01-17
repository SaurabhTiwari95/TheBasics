# TheBasics

This project was generated with 
[Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.
[Bootstrap](https://getbootstrap.com/)  v3.4.1 

[Edit on StackBlitz ⚡️](https://stackblitz.com/github/SaurabhTiwari95/TheBasics?file=README.md)

##  Import Project from GitHub to Stackblitz
    You can run any public repo on Github by providing the username + repo name like so:

    ```
    stackblitz.com/github/{GH_USERNAME}/{REPO_NAME}
    ```
    
    And you can also optionally specify a branch, tag, or commit:
    
    ```
    .../github/{GH_USERNAME}/{REPO_NAME}/tree/{TAG|BRANCH|COMMIT}
    ```
#### Lecture 90
##### Understanding Directives
###### Attribute Directives**
      ```
        - Looks like a normal attribute(possibly with databinding or event binding
        - Only affect/change the element they are added to
      ```
###### Structural Directives**
      ```
        - looks like a normal attribute but have a leading *(for desugaring)
        - Affect a wholle area in the DOM(elements get added/removed)
      ```
      ```
        - create a Folder
        - create a file
        - Name the file "file-name.directive.ts"
        - export a class "file-nameDirective"
        - now add @Directive which need to be imported from '@angular/core'
        - pass an object to this decorator to configure this Directive
        - Now, How do we Configure the directive ??
              - the one thing our directive needs is a SELECTOR
              because we need to place our directive in our template to attach them to elements so we need to have some way to give angular some instructions which is through the SELECTOR which need to be unique selector.
              - selector : '[appFileName]
              - we can inject the element the directive sits on into this directive(services SECTION it is an easy way to get other classes without instantiating on our own)
              - we inject them by adding a CONSTRUCTOR(here we list a couple of arguments we want to get whenever an instance of this class is created normally we put the reference of the element by elementRef with it's TYPE) {} 
      ```
