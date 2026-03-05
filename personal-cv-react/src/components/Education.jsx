import Card from "./Card";
function Education({ education }) {
    return (
 <section className="card">
    <h2>Education</h2>
    <table>
        <thead>
            <tr>
                <th>Level</th>
                <th>Institution</th>
                <th>Year Graduated</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>College</td>
                <td>USTP CDO Campus</td>
                <td>2024 - Present</td>
            </tr>
            <tr>
                <td>Senior High School</td> 
                <td>Liceo De Cagayan University</td>     
                <td>2024</td>             
            </tr>
            <tr>
                <td>High-school</td> 
                <td>MOGCHS</td>     
                <td>2022</td>             
            </tr>
            <tr>
                <td>Elementary</td> 
                <td>ECCS</td>     
                <td>2018</td>             
            </tr>
        </tbody>
    </table>
</section>
    );
}

export default Education;