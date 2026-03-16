function About() {
    return (
        <section className="text-[var(--light-color)] flex flex-col justify-center items-center gap-6 mt-20">
            <h1 className="title text-3xl font-medium">Education</h1>
            <div className="flex gap-10 my-6 flex-col sm:flex-row">
                <div className="card">
                    <h2>Technical Degree in Systems Development</h2>
                    <h3>Etec Sales Gomes — 2023 - 2025</h3>
                </div>
                <div className="card">
                    <h2>Systems Analysis and Development — Associate Degree</h2>
                    <h3>IFSP — present - 2028</h3>
                </div>
            </div>
        </section>
    )
}

export default About