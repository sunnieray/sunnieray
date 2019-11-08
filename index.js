import { header, nav, main, footer} from "./components";

const state = {
  home: { 
  heading: "",
  mainContent: `
<main>

    <div id="section-container">
  <section>
    <h3>My Coding Background</h3>
    <p>My journey started as a desire to cut down on the time it took to do my daily job and grew into a passion to simplify life through technology. My self-guided learning started on Youtube and Udemy, from there I attended SavvyCoders Bootcamp!</p>
    <a href="#" class="btn section--btn">Read my blog!</a href ="../blog/blog.html">
  </section>
  <section>
    <h3>Mission Statement</h3>
    <p>My mission is to grow daily as a developer and help to move the web forward with creative Design and Development to deliver quality solutions that create value and competitive advantages.</p>
    <a href="#" class="btn section--btn">See my projects!</a>
  </section>
  <section>
    <h3>My Coding Skills</h3>
    <p>
   HTML  
   <BR>CSS
   <BR>JavaScript
   <BR>Agile Certified
    </p>
    <a href="#" class="btn section--btn">See My Certifications!</a>
  </section>
  </div>
  </div>

    <div>
    <i class="fas fa-link"></i>
    <a href="https://github.com/sunnieray/wednesday">My gitHub</a>
    </div>
</main>`

}
}

document.querySelector('#root').innerHTML = `
${header(state.home)}
${nav()}
${main(state.home)}
${footer()} 
`;