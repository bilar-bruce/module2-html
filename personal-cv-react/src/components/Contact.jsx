function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Message sent successfully!");
        event.target.reset();
    };

    return (
        <main>
            <div>
                <section className="card">
                    <h2>Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" id="name" name="name" placeholder="Name" required />
                        <br /><br />

                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" name="email" placeholder="Email" required />
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
}

export default Contact;