import React from 'react';
import './ElectionProcess.css';

const ElectionProcess = () => {
  return (
    <div className="election-container">
      <h1 className="title">Election Process Overview</h1>
      
      <section className="section">
        <h2>Steps wise Overview</h2>
        <ul>
       <a href="#step_one"><li><strong>Step 1:</strong> Primaries and Caucuses</li></a>  
        <a href="#step_two"><li><strong>Step 2:</strong> National Conventions</li></a>  
          <a href="#step_three"><li><strong>Step 3:</strong> General Election</li></a>
          <a href="#step_four"><li><strong>Step 4:</strong> Electoral College</li></a>
          <a href="#inaugration"><li>Inauguration</li></a>
        </ul>
      </section> 
   
      <section className="section">
  <h2>U.S. Constitution Requirements</h2>
  <ul className="requirements-list">
    <li>
      <strong>Natural-Born Citizen:</strong> The candidate must be born in the U.S. or born abroad to U.S. citizen parents.
      <img src="/path-to-citizenship-image.jpg" alt="Natural-Born Citizen" className="requirement-image" />
    </li>
    <li>
      <strong>Minimum Age:</strong> 35 years old
      <img src="/path-to-age-image.jpg" alt="Minimum Age" className="requirement-image" />
    </li>
    <li>
      <strong>Residency:</strong> Must have lived in the U.S. for at least 14 years
      <img src="/path-to-residency-image.jpg" alt="Residency" className="requirement-image" />
    </li>
  </ul>
</section>
<section>
<div class="accordion" id="accordionExample">
  <div class="accordion-item" id="step_one">
    <h2 class="accordion-header">
      <button class="accordion-button step_head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Step 1: Primaries and Caucuses
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>
          To choose a candidate for the general election, political parties use two key methods: <strong>Primaries</strong> and <strong>Caucuses</strong>. These processes determine which candidate will represent the party in the final election.
        </p>
        <div className="subsection">
          <h3>Primaries</h3>
          <p>Primaries are <strong>organized like regular elections</strong>, where party members cast their votes in a secret ballot for the candidate of their choice. The results of the primary determine how many delegates each candidate will receive to represent them at
          the party’s national convention.</p>
          <br/>
          <b>Types of Primaries</b>
          <ul>
            <li><strong>Open Primary:</strong> In an open primary, voters are <b>not required to be registered members</b> of a political party to participate.</li>
            <strong>Q. Who can vote?</strong>
            <p>Any eligible voter, regardless of their political affiliation.</p>
            <br/>
            <li><strong>Closed Primary:</strong> In a closed primary, only voters who are <strong>registered party members</strong> can participate.</li>
            <strong>Q. Who can vote?</strong>
            <p>Only voters registered with the specific political party.</p>
            <br/>
          </ul>
        </div>

        <div className="container">
  <div className="row text-center">
    <div className="col-12 col-md-4 d-flex justify-content-center">
      <img
        src="https://i.ytimg.com/vi/KRHRuGIiWHA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpB1XrMnPGUucPyLRTqQMKsIbbEQ"
        className="img-thumbnail img-fluid hover-zoom"
        alt="Example 1"
      />
    </div>
    <div className="col-12 col-md-4 d-flex justify-content-center">
      <img
        src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202411/6729c1617696c-us-election-055523977-16x9.jpg"
        className="img-thumbnail img-fluid hover-zoom"
        alt="Example 2"
      />
    </div>
    <div className="col-12 col-md-4 d-flex justify-content-center">
      <img
        src="https://edata.ndtv.com/feeds/liveblog/6948523/638664761917745119.jpg"
        className="img-thumbnail img-fluid hover-zoom"
        alt="Example 3"
      />
    </div>
  </div>
</div>

        <div className="subsection">
          <h3>Caucuses</h3>
          <p>
            Caucuses are a more interactive and community-driven process for selecting a candidate. Unlike a regular election, caucuses involve group discussions and votes instead of secret ballots.
          </p>
          <ul>
            <li><strong>Local Meetings:</strong>
              <p>▶ Party members gather in local precincts (e.g., schools, community centers, or town halls) for <strong>face-to-face
              discussions.</strong> </p>
            </li>
            <li><strong>Candidate Support:</strong> <p>▶ Participants form groups to show support for their preferred candidate.</p> <p>▶ They can discuss, debate, and try to convince others to join their group.</p></li>
            <li><strong>Voting:</strong>
              <p>▶ After discussions, party members vote publicly, either by a <strong>show of hands</strong> or by physically moving to
              different sections of the room. </p>
            </li>
            <li><strong>Delegate Selection:</strong> 
              <p>▶ Based on caucus results, delegates are assigned to candidates.</p>
              <p>▶ These delegates will represent the candidate at county, state, and eventually national conventions.</p>
            </li>
          </ul>
        </div>.
      </div>
    </div>
  </div>
  <div class="accordion-item" id="step_two">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed step_head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Step 2: National Conventions
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>
        After the primaries and caucuses conclude, each political party holds a significant event called
        the <strong>National Conventions</strong>. These conventions are key milestones in the U.S. election process
        where the final candidate for president is officially selected to represent the party. 
        </p>
        <br/>
        <ul>
          <li>
            Party delegates who were selected during the primaries and caucuses gather at the
            convention.
          </li>
          <li>
          Delegates formally cast their votes to confirm the party's final presidential nominee.
          </li>
          <li>The presidential candidate announces their running mate during the convention.</li>
          <li>
          The running mate is the person who will serve as <strong>Vice President</strong> if the party wins the
          general election.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="step_three">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed step_head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Step 3: General Election
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
        After the primaries, caucuses, and national conventions are complete, the final stage begins: <strong> The General Election</strong>. This
is when voters across the entire country come together to make their choice for the next President and Vice President of
the United States.
        </p>
        <div className="highlight-box">
          <p><strong>Did you know?</strong> There are 538 total electoral votes, and a candidate needs at least 270 votes to win the presidency.</p>
        </div>
        <br></br>
        <h3>How the General Election Works</h3>
        <ol>
          <li>
            <strong> Voting for the President and Vice President:</strong>
            <p>On Election Day, citizens head to polling stations to cast their votes for their preferred presidential and
            vice-presidential candidates.</p>
            <p>However, voters are not directly voting for the candidates themselves. Instead, they are voting for electors
            who are members of the Electoral College.</p>
          </li>
          <li>
            <strong> The Electoral College System:</strong>
            <p>The United States uses a system called the Electoral College to determine the winner of the presidential
            election.</p>
            <p>Each state is allocated a certain number of electors based on its representation in Congress:</p>
          </li>
          <li>
            <strong> "Winner-Takes-All" System (in Most States):</strong>
            <p>In nearly all states, the candidate who wins the majority of the popular vote in that state gets all of the
            state’s electoral votes.</p>
            <p>For example, if Candidate A wins 51% of the votes in Texas, Candidate A receives all of Texas' electoral
            votes.</p>
          </li>
        </ol>
      </div>
    </div>
  </div>

  <div class="accordion-item" id="step_four">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed step_head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Step 4: Electoral College
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          <p>The Electoral College plays a crucial role in determining who becomes the next President of the United States. While citizens vote during the general election, the actual
        selection of the president happens through this system.</p>
        <ul>
          <li><strong>Total Electoral Votes:</strong> 
            <p>There are <strong> 538 total electoral votes</strong> in the United States.</p>
            <p>This number is based on the total membership of Congress:</p>
            <p>▶  <strong> 100 Senators </strong>(2 per state)</p>
            <p>▶  <strong> 435 Representatives </strong>(varies by state population)</p>
            <p>▶  <strong> 3 electors </strong> for the District of Columbia (Washington D.C.).</p>
          </li>
          <li><strong>State Representation:</strong> 
            <p>Each state gets a specific number of electors based on its representation in Congress.</p>
            <p>The formula: State’s Electors=2 (Senators)+Number of Representatives:</p>
            <p><strong>Example</strong></p>
            <p>▶  California, the most populous state, has <strong>55 electoral votes </strong> (2 senators + 53 representatives). </p>
            <p>▶  Vermont, one of the smallest states, has <strong> 3 electoral votes </strong>(2 senators + 1 representative).</p>
          </li>
          <li><strong>Winning Electoral Votes:</strong> 
            <p>When citizens in a state vote for a presidential candidate, they are actually voting for a group of electors who have pledged to support that candidate.</p>
            <p><strong>Winner-Takes-All Rule:</strong></p>
            <p>▶  In 48 states and Washington D.C., the candidate who wins the most votes in that state receives <strong> all of the state’s electoral votes</strong>.</p>
            <p><strong>Exceptions:</strong></p>
            <p>▶  Maine and Nebraska use a <strong> proportional system</strong>, where electoral votes are split based on the outcome in each congressional district and the overall
            state winner.</p>
          </li>

          <li>
          <strong>Majority Needed to Win:</strong>
          <p> To become President, a candidate must win a <strong> majority</strong> of the electoral votes:</p> 
          <p>▶  <strong>270 out of 538 votes.</strong></p>
          <p>If no candidate reaches 270 votes, the election is decided in the <strong>House of Representatives</strong>, where each state delegation gets one vote.</p>
          </li>

        </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item" id="inaugration">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed step_head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          Inauguration
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          The Inauguration is the final step, where the winning President and Vice President are officially sworn into office on January 20th following the general election.
          </div>
        </div>
      </div>
</div>
</section>

<div className="container">
  <div className="row text-center">
    <div className="col-12 col-md-4 d-flex justify-content-center">
      <img
        src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/Rebrand/US_Election/US_Camapign_Hero_Desktop_Mobile.jpg/jcr:content/renditions/original-size.webp"
        className="img-thumbnail img-fluid hover-zoom"
        alt="Example 1"
      />
    </div>
    <div className="col-12 col-md-4 d-flex justify-content-center">
      <img
        src="https://cz.usembassy.gov/wp-content/uploads/sites/22/00Good.jpg"
        className="img-thumbnail img-fluid hover-zoom"
        alt="Example 2"
      />
    </div>
    <div className="col-12 col-md-4 d-flex justify-content-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIr5IEvKIJo2sq3tgcwR8ENjwJY3AACICAPw&s"
        className="img-thumbnail img-fluid hover-zoom"
        alt="Example 3"
      />
    </div>
  </div>
</div>


    </div>
  );
};

export default ElectionProcess;
