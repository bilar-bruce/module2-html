import { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);

    return (
        <section>

            
            <section className="card" id="skillsSection">
            <button onClick={() => setVisible(!visible)}>
                Show/Hide Skills
            </button>
                <h2>Skills</h2>
            {visible && (
                <><ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>MySQL</li>
                </ul>

                <ul>
                    <li>Web Development
                        <ul>
                            <li>Frontend
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </li>
                            <li>Backend
                                <ul> 
                                    <li>MySQL</li>
                                </ul>
                            </li>
                        </ul>
                    </li> 
                </ul>
                </>
            )}

            </section>
        </section> 
    );
}

export default Skills;