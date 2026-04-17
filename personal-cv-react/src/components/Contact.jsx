import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch("http://localhost/cv-api/process.php", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name }) 
        })
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
            }
        })
        .catch(err => console.error("Error:", err));
    }

    return (
        <section className="card">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <br /><br />

                <label>Email:</label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <br /><br />

                <label>Message:</label><br />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
                <br /><br />

                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;