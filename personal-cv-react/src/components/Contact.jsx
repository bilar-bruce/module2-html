import { useState } from "react";

function Contact() {
    // 1. Setup our State (React's memory)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); // Added state for your textarea

    // 2. The Submit Function (The bridge to PHP)
    function handleSubmit(e) {
        e.preventDefault(); // Stop the page from reloading
        
        // Fetch sends the data to your local PHP server
        fetch("http://localhost/cv-api/process.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // We package up the 'name' and send it over
            body: JSON.stringify({ name: name })
        })
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
            } else {
                alert("Unexpected error occurred.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to connect to the server.");
        });
    }

    // 3. The UI (Your custom form)
    return (
        <main>
            <div>
                <section className="card">
                    <h2>Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <br /><br />

                        <label htmlFor="email">Email:</label><br />
                        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <br /><br />

                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" value={message} placeholder="Message" required onChange={(e) => setMessage(e.target.value)}></textarea>
                        <br /><br />

                        <button type="submit" id="submitBtn">Send</button>
                    </form>
                </section>
            </div>
        </main>
    );
}

export default Contact;