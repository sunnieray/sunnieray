import { header, nav, main, footer} from "./components";

const state = {
  home: { 
  heading: "",
  mainContent: `
<main>
  <div class="hero">
    </div>

    <div id="section-container">
  <section>
    <h2>My background</h2>
    <p>I'm a Human</p>
    <a href="#" class="btn section--btn"> Click to Learn More about my human experience</a>
  </section>
  <section>
    <h2>I love animals</h2>
    <p>Just adopted two kiddens</p>
    <a href="#" class="btn section--btn">Click for cute content</a>
  </section>
  <section>
    <h2>Hobbies</h2>
    <p>I love live music and Painting!</p>
    <a href="#" class="btn section--btn">Click for personal favorites</a>
  </section>
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