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
###### Attribute Directives
      ```
        - Looks like a normal attribute(possibly with databinding or event binding
        - Only affect/change the element they are added to
      ```
###### Structural Directives
      ```
        - looks like a normal attribute but have a leading *(for desugaring)
        - Affect a wholle area in the DOM(elements get added/removed)
      ```
##### Steps to create a basic attribute directive
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
              - Now to be able to use this data in our class everywhere of adding PRIVATE in front of it which will make the property of this class
              - Now with that we got access to the elemnet
              -  Now we can use it with our constructor and use the nativeElement and a better way than the constructor is ngOnInit
              - in ngOnInit
                  - this.elementRef.nativeElement.style.backgroundColor= "red";
              - Now we have to go to AppModule and in Declaration we need to declare our directive and import it there
              - Now we can use it in our app
      ```
