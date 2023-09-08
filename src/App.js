import "./App.css";
import Image from "./Imagecompoennt";
function App() {
  return (
    <div className="App">
      <section>
        <p class="name">Get to Know Us</p>
        <h2 class="title">Our Team</h2>
        <p class="description">
          Providing clients with ultimate bespoke representation, customized
          marketing strategy, and white-glove service. Excelling in exceeding
          expectations for buyers, sellers, investors, and beyond.
        </p>
        <div className="grid">
          {[1, 2, 3, 4, 5, 6].map(() => {
            return <Image />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
