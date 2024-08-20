import React from 'react';
import '../CSS/Experience.css'; // Make sure to create this CSS file
import '../CSS/Staout.css';

function Experience() {
  return (
    <div className='experience-container'>
      <div className='experience-box'>
        <img src='bcm.jpeg' alt='Your Name' className='experience-image' />
        <div className='experience-text'>
            <center>
            <h4>University of California Berkeley, Michigan State University, Federal Reserve Bank of Chicago</h4>
            <p>2024</p>
            <p>Research assitant, adminstrating Data bases using SSH connection to a remote server and Demand estimation</p>
            <table class="fancy-table">
              <tr>
                <th colspan="2">Relevant Skills</th>
              </tr>
              <tr>
                <td>R coding</td>
                <td>Team Work</td>
              </tr>
              <tr>
                <td>Remote Programming</td>
                <td>Github Branches</td>
              </tr>
              <tr>
                <td>Problem Solving</td>
                <td>Econometrics</td>
              </tr>
            </table>
            </center>
        </div>
      </div>
      <div className='experience-box'>
        <img src='PUC.png' alt='Your Name' className='experience-image-zoom' />
        <div className='experience-text'>
            <center>
            <h4>Pontificia Universidad Católica de Chile</h4>
            <p>2023</p>
            <p>Research Assistant, working with Nicolás Figueroa and Tibor Heumann, information design, theoretical microeconomics</p>
            <table class="fancy-table">
              <tr>
                <th colspan="2">Relevant Skills</th>
              </tr>
              <tr>
                <td>Differential calculus</td>
                <td>Problem abstraction</td>
              </tr>
              <tr>
                <td>Real Analysis</td>
                <td>Writing skills</td>
              </tr>
            </table>
            </center>
        </div>
      </div>
      <div className='experience-box'>
        <img src='PUC.png' alt='Your Name' className='experience-image-zoom' />
        <div className='experience-text'>
            <center>
            <h4>Pontificia Universidad Católica de Chile and Universidad Andres Bello</h4>
            <p>2023</p>
            <p>Research Assistant with Nicolás Figueroa and Carla Guadalupi</p>
            <a href= "https://www.sciencedirect.com/science/article/abs/pii/S1062976923000947">Signaling through tests</a>
            <table class="fancy-table">
              <tr>
                <th colspan="2">Relevant Skills</th>
              </tr>
              <tr>
                <td>Problem solving</td>
                <td>Matlab coding</td>
              </tr>
              <tr>
                <td>Wolfram Alpha coding</td>
                <td>Optimization</td>
              </tr>
              <tr>
                <td>Simulation</td>
                <td>Self management</td>
              </tr>
            </table>
            </center>
        </div>
      </div>
      <div className='experience-box'>
        <img src='PUC.png' alt='Your Name' className='experience-image-zoom' />
        <div className='experience-text'>
            <center>
            <h4>Pontificia Universidad Católica de Chile and Universidad Andres Bello</h4>
            <p>2019-2023</p>
            <p>Teacher Assistant, Department of Economy and Business sciences. </p>
            <p>Macroeconomics I, Introduction to Microeconomics, Applied mathematics in Economics, Theoretical Microeconomics III</p>
            <table class="fancy-table">
              <tr>
                <th colspan="2">Relevant Skills</th>
              </tr>
              <tr>
                <td>Communication</td>
                <td>Simplification of topics</td>
              </tr>
            </table>
            </center>
        </div>
      </div>
    </div>
    
  );
}

export default Experience;
