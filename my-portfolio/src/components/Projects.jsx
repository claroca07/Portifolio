import { useRef } from "react";
import ProgressBar from "./ProgressBar";

function Projects() {
  const sectionRef = useRef(null); // referência da seção inteira

  return (
    <section ref={sectionRef} style={{ display: "flex" }} className=" my-10 justify-center">
      <ProgressBar sectionRef={sectionRef} />

      <section className="items flex flex-col gap-1">

        <article className="item">
          <h1>TCC - Disalle Bolos</h1>
          <div className="topics">
            <h2> Development Time: 6 months</h2>
            <h2>Languages: PHP, JavaScript, Bootstrap, CSS, SQL</h2>
          </div>
          <p>
            A project to an independent bakery business from Tatuí-SP with the
            objective on creating a modern and efficient online presence.
          </p>
        </article>

        <article className="item">
          <h1>TCC - Disalle Bolos</h1>
          <div className="topics">
            <h2> Development Time: 6 months</h2>
            <h2>Languages: PHP, JavaScript, Bootstrap, CSS, SQL</h2>
          </div>
          <p>
            A project to an independent bakery business from Tatuí-SP with the
            objective on creating a modern and efficient online presence.
          </p>
        </article>

        <article className="item">
          <h1>TCC - Disalle Bolos</h1>
          <div className="topics">
            <h2> Development Time: 6 months</h2>
            <h2>Languages: PHP, JavaScript, Bootstrap, CSS, SQL</h2>
          </div>
          <p>
            A project to an independent bakery business from Tatuí-SP with the
            objective on creating a modern and efficient online presence.
          </p>
        </article>

        <article className="item">
          <h1>TCC - Disalle Bolos</h1>
          <div className="topics">
            <h2> Development Time: 6 months</h2>
            <h2>Languages: PHP, JavaScript, Bootstrap, CSS, SQL</h2>
          </div>
          <p>
            A project to an independent bakery business from Tatuí-SP with the
            objective on creating a modern and efficient online presence.
          </p>
        </article>

        <article className="item">
          <h1>TCC - Disalle Bolos</h1>
          <div className="topics">
            <h2> Development Time: 6 months</h2>
            <h2>Languages: PHP, JavaScript, Bootstrap, CSS, SQL</h2>
          </div>
          <p>
            A project to an independent bakery business from Tatuí-SP with the
            objective on creating a modern and efficient online presence.
          </p>
        </article>

      </section>
    </section>
  );
}

export default Projects;
