export class Recipe {
    public name: string;/*1,2*/
    public description: string;
    public imagePath: string;
    constructor(name: string, desc: string, imagePath: string) {
        /*3,4*/
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}/*5*/

/*1.property_name : property type */
/*2.property name :(colon and then property type in this case it is a string),public is written here,
 so that we can use it as an instantiated class beacuse of this public we can use it from outside
 and it will be publically available*/
/*3.constructor is added so that we can instantiate this with new keyword and pass arguments right to the constructor*/
/*4.the constructor is simply a built in function every class has, which will be executed once we create a new instance
of the class,inside the body of the constructor we have to assign the arguments we recive here to the properties of our 
objects/class.*/
/*5.We should define how a recipe looks like for that we should create a model(recipe.model.ts)
 so that whenever we use it in any component we are always talking about the same structure about the same kind of object.
 For this we create a model,A model is simply a typeScript file,
 A model in the end should just be a bluePrint for objects we create and the typeScript class just does this job.
 A class can be instantiated so we can create new objects based on the setup we provide here in this class, so we can define
 how a recipe should lookslike in this class.*/