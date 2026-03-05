import { useState } from "react";

function Skills({ skills }) {
    const [visible, setVisible] = useState(true);

    return (
        <section>
            <section className="card" id="skillsSection">
            <button onClick={() => setVisible(!visible)}>
                Show/Hide Skills
            </button>
                <h2>Skills</h2>
            {visible && (
                <>
                {skills.map((skill, index) => (<li key={index}>{skill}</li>
                ))}
                </>
            )}

            </section>
        </section> 
    );
}

export default Skills;