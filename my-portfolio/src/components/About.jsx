function About() {
    return (
        <section className="text-[var(--light-color)] flex flex-col justify-center items-center gap-6 mt-20">
            <h1 className="title text-3xl font-medium">My <span className="text-glow">Education</span></h1>
            <div className="flex gap-10 my-6 flex-col sm:flex-row text-xl">
                <div className="card">
                    <h2 className="font-bold">Technical Degree in Systems Development</h2>
                    <h3 className="text-lg font-medium">Etec Sales Gomes — 2023 - 2025</h3>
                </div>
                <div className="card">
                    <h2 className="font-bold">Systems Analysis and Development — Associate Degree</h2>
                    <h3 className="text-lg font-medium">IFSP — present - 2028</h3>
                </div>
            </div>
            <div className="information flex gap-10">
                <div className="topic text-center">
                    <h1 className="text-5xl font-bold mr-2 text-[var(--lightblue-color)]">+3</h1>
                    <h2 className="font-medium mt-2">Years of Experience</h2>
                </div>
                <div className="topic text-center">
                    <h1 className="text-5xl font-bold mr-4 text-[var(--lightblue-color)]">+10</h1>
                    <h2 className="font-medium mt-2">Projects Completed</h2>
                </div>
            </div>
        </section>
    )
} 

export default About