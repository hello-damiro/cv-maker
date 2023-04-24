# cv-maker

## Warning! This is a work n progress

The Odin Project - Intermediate JS project

SEE LIVE PROGRESS [HERE](http://hello-damiro.github.io/cv-maker)

</br>

**Day 1:** Design UI with figma, keeping in mind the _item 2 of the challenges_. First time to use `create-react-app`. Edit some files in `public` and stripped everything in `src`

**Day 2:** Worked with css to layout the CV. Study in-depth what `useState` is. Since there are numerous ways to style components in react, one is forced to design while coding. Thats my current case. I guess its just because I'm still exploring react.

**Day 2/3:** Spent the whole day debugging why-tf `useState` is not giving obvious outputs. It turns out that the index of the delete button is not unique.

**Day 4:** Had to install `uuid` and use it as keys, and use previous states of `useState` to manage updates of a variable to solve that devil like code problem. Yeah, I cried. 😭 Felt like I spent too much time debbuging an obvious problem.

**Day 5:** I plan to use router to make an abouts page to display some about info. But havent studies react router, so it make another day for it. Havent started anything about that page so it may take more while.

</br>

## Project Screenshot

![Screenshot](https://github.com/hello-damiro/cv-maker/blob/main/src/assets/images/screenshot.png?raw=true)

</br>

## Challenges

</br>

1. Use `npx create-react-app`, meaning no webpack. strip all boilerplate code created in the process of creatiing a react-app.

2. Use class components.

3. Think about how to structure your application into components. Your application should include:
   a. A section to add general information like name, email, phone number.
   b. A section to add your educational experience (school name, title of study, date of study)
   c. A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)

4. Be sure to include an edit and submit button for each section or for the whole CV, your preference. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content.

5. Create a `components` folder in your `src` directory and add your components.

6. Include a `styles` folder in your `src` directory for your CSS files. You’ll need to import these in the component files to use them.

7. Upload to gh-pages. If you’re confused on how to deploy using GitHub Pages, take a look at [this article](https://blog.usejournal.com/how-to-deploy-your-react-app-into-github-pages-b2c96292b18e)
