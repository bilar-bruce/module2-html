import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <main>
            <div>
                <section className="card">
                    <h2>Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <br /><br />

                        <label htmlFor="email">Email:</label><br />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br /><br />

                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" placeholder="Message" required></textarea>
                        <br /><br />

                        <button type="submit" id="submitBtn">Send</button>
                    </form>
                </section>
            </div>
        </main>
    );

    function handleSubmit(e) {
    e.preventDefault();
    alert(`Message sent successfully! ${name}!`);
}
}

export default Contact;