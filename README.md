# WebDevUdemy
The Complete 2020 Web Development
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Personal Informations</title>
  </head>
  <body>
    <h1>Meine Kontaktdaten</h1>
    <p>Peter-Anders-Straße 1</p>
    <p>12057 Berlin</p>
    <p>015786433333</p>
    <hr />

    <form action="mailto:thong44@hotmail.de" method="post" enctype="text/plain">
      <label> Your Name:</label>
      <input type="text" name="yourName" value="" /><br />
      <label>Your Email:</label>
      <input type="email" name="yourEmail" value="" /><br />
      <label for="">Your Message:</label><br />
      <textarea name="yourMessage" id="" cols="30" rows="10"></textarea><br />
      <input type="submit" name="" />
    </form>

    <hr />
    <h2>Links</h2>
    <a href="https://github.com/vitrh"
      ><img src="Images/githubicon.png" alt="github"
    /></a>
    <br />
    <a href="https://www.instagram.com/vnhtrnh/"
      ><img src="Images/instagramicon.png" alt="instagram" /></a
    ><br />

    <a href="https://twitter.com/vnhtrh"
      ><img src="Images/twittericon.png" alt="twitter"
    /></a>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=2, initial-scale=1.0" />
    <title>My Hobbies</title>
  </head>
  <body>
    <h1>Meine Hobbies</h1>
    <ol>
      <li>Hobblylos</li>
      <li>Hobbylos</li>
      <li>Hobbylos</li>
    </ol>
  </body>
</html>

<html>
  <head>
    <meta charset="utf-8" />
    <!-- Ganzer Text in der Website ist in UTF-8 encoded  -->
    <title>Vinhs personal Site</title>
  </head>
  <body>
    <table cellspacing="20">
      <tr>
        <td>
          <img src="Images/circle-cropped.png" alt="Beelzebub baby" />
        </td>
        <td>
          <h1>Vinh Thong Trinh</h1>
          <p>
            <em>Founder and CTO of <strong>Trinh</strong> House</em>
          </p>
          <p>
            Yo ich bin 20 Jahre alt, mache um 3 Uhr morgens den web-dev Udemy
            Kurs auf Englisch.
          </p>
          <h3>Education</h3>
          <ul>
            <!-- mit ul bekommt man "Bullet points"-->
            <li>Udemy</li>
            <li>Youtube</li>
            <li>Uni</li>
            <li>blabla</li>
          </ul>
          <p>
            <br />
            <a href="hobbies.html"><strong>Hobbies</strong></a>
            <br />
            <br />
            <a href="contacts.html"><strong>Contact me</strong></a>
            <br />
            <br />
            <a href="input.html">Inputs</a>
          </p>
        </td>
      </tr>
    </table>

    <hr />
    <h3>Work Experience</h3>

    <table cellspacing="10">
      <thead>
        <tr>
          <th>Dates</th>
          <th>Work</th>
          <th>test</th>
        </tr>
      </thead>
      <tbody></tbody>
      <tfoot></tfoot>
      <tr>
        <td>2000-2018</td>
        <td>1maschin</td>
      </tr>
      <tr>
        <td>2020</td>
        <td>web dev tech lead</td>
      </tr>
    </table>
    <hr />

    <h2>Skills</h2>
    <table cellspacing="10">
      <tr>
        <td>
          <table cellspacing="10">
            <tr>
              <td>C#</td>
              <td><p>⭐⭐⭐⭐</p></td>
            </tr>
            <tr>
              <td>Python</td>
              <td>⭐⭐⭐</td>
            </tr>
            <tr>
              <th>HTML</th>
              <td>⭐⭐</td>
            </tr>
            <tr>
              <td>SPS</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
          </table>
        </td>
        <td>
          <table cellspacing="10">
            <tr>
              <td>C++</td>
              <td><p>⭐⭐</p></td>
            </tr>
            <tr>
              <td>Inventor</td>
              <td>⭐⭐⭐</td>
            </tr>
            <tr>
              <td>Notion</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>Calisthenic</td>
              <td>⭐</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <hr />
  </body>
</html>
