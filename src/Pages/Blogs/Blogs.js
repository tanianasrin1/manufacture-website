import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='mx-16 my-8'>

            <p className='font-bold'>What are the different ways to manage a state in a React application?</p>
               <div className='icon-box my-6'>
                <p className='p-6' >A state object is built-in to React components. The state is encapsulated data that allows you to store assets that are persistent between component renderings.A JavaScript data structure is referred to as a state. If a user changes state as a result of engaging with your app, the UI may seem entirely different as a result of the new state being represented rather than the old one.Here's a basic e-commerce application in which the state of various components changes when a product is purchased.
                Add that item to your shopping list.
                Add the product to the customer's shopping cart.
                a count of all goods purchased
              </p>

               </div>
               <p className='font-bold'>How does prototypical inheritance work?</p>
               <div className='icon-box  my-6'>
                <p className='p-6' >Prototypal Inheritance is a javascript feature that allows you to add methods and attributes to objects. It's a technique that allows one object to inherit the attributes and methods of another. Object is traditionally used to retrieve and set the [[Prototype]] of an object. Object and getPrototypeOf. Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming. </p>
               </div>
               
               <p className='font-bold' >How will you improve the performance of a React Application?</p> 
               <div className='icon-box  my-6 p-6'>
                <ul>
                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>Keeping component state local where necessary.</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React.</li>
                    <li>Lazy loading images in React.</li>
                </ul>
               </div>
               <p className='font-bold' >What is a unit test? Why should write unit tests?</p> 
               <div className='icon-box  my-6'>
                <p className='p-6' >Unit testing is a software development technique in which the smallest testable pieces of a program, referred to as units, are examined separately and independently for correct functioning. Software developers and, on occasion, QA employees use this testing approach during the development process. Before any code is deployed, it is subjected to unit testing to ensure that it fulfills quality criteria. This promotes a dependable engineering environment that prioritizes quality. Unit testing helps developers produce better code and saves time and money during the product development life cycle.</p>
               </div>

               <p className='font-bold' > You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name? </p>
               <div className='icon-box my-6'>
                <p className='p-6' >A product description is a type of marketing writing that explains and describes the features and benefits of your product. In other words, it gives your ecommerce site all of the information and facts about your goods. These product specifications might be in the form of a single sentence, a brief paragraph, or a list of bullets. They might be serious, amusing, or odd. 
                create an empty variable. ( product)
                Initialize it with 1.
                In a loop traverse through each element (or get each element from user) multiply each element to product.
                Print the product.
                </p>
               </div>
               
            </div>
    );
};

export default Blogs;