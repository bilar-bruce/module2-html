import Card from "./Card";
import profilePic from '../assets/images/profile.jpeg';

function About() {
    return (
    <main>
        <div className="container"></div>
        
        <section className="card">
            <Card title="About Me">
            <div className="about-content">
                <img id="profile-pic" src={profilePic} alt="Profile photo" />
                <p>My name is Bruce, and I am a 2nd-year BSIT student. I am 19 years old and an avid fan of Terraria. 
                    I named my favorite AI assistant 'Jarvis'; he helps me understand complex code and provides nuggets of knowledge from time to time.
                    Looking ahead, I aspire to become a full-stack developer.</p>
            </div>
            </Card>
        </section>

        <section className="card">
            <h2>Contact Information</h2>
            <p>Facebook: <a href="https://www.facebook.com/bruce.bilar.2024" target="_blank">https://www.facebook.com/bruce.bilar.2024</a></p>
            <p>Email: <a href="mailto:bilar.bruce@gmail.com" target="_blank">bilar.bruce@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/bilar-bruce" target="_blank">https://github.com/bilar-bruce</a></p>
        </section>
    </main>
    );
}

export default About;