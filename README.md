# Space Ambush

**[Live demo](https://daithishan.github.io/milestoneproject1/)**

## Index



## Context

Space Ambush is a mini game developed as part of a fundraising strategy for The Mater Foundation, the official charity of The Mater Public Hospital. Space ambush is a form of rich content for the charity's subscriber list, and redirects at different points to the donation page for the hospital. It's based off Whack-A-Mole, formerly an extremely popular arcade and today browser based game type, which tests the players reflexes by challenging them to hit multiple disappearing targets within a set time limit. 

## Project Goals

1. To positively engage the subscriber list of The Mater Foundation with a new, fun and unexpected form of outbound marketing - the branded mini game!

2. To generate donations for The Mater Foundation through new and return visits and playthroughs of the game from existing and potentially also from new supporters.

## User Experience (UX)

### Overview

This mini game has been designed to streamline the visitor's path to play, and funnel players towards The Mater Foundation's donation page.

- Mobile-first
- Streamlined
- Intuitive navigation
- Intuitive controls
- Continuous feedback
- Replayability

### User Stories

-   #### As a first time visitor, I want to:

1. See evidence that the mini game is the charity's product
2. Quickly get involved in gameplay to assess it, with minimal set up
3. Have option to toggle succint help rather than mandatory instructions
4. Experience intuitive gameplay, with simple controls, and clear scoring

-  #### As a returning visitor, I want to:

1. See my old score and beat it, without having to write yet another password
2. Choose higher difficulties, and find them genuinely more challenging
3. See a path to skipping the redirect to charity website if I've already donated 

-  #### As a frequent visitor, I want to: 

1. See if there are any mods or changes planned, or any related news
2. See a clearly indicated place to provide player feedback
3. Let my followers know about this game, and my highest score on it!

-  #### As the charity benefiting from this mini game, I want to 

1. Tie the game's premise to the charity mission, without boring the user
2. Drive donations from players through the official charity website
3. Capture useful feedback including bug reports and feature suggestions
4. Generate buzz around this mini game on social media to raise awareness

### Design

#### Design Choices - Inspirations

The major inspiration for this mini game (also listed in credits) is from an Irish craft beer company that developed a video game as part of their outbound marketing [Hop Rocket by Yellowbelly Beer](https://www.youtube.com/watch?v=i7G-gFBJzVk)

While this game is no longer available for play, it was an inspired way of engaging potential customers beyond the world of product shots, and behind-the-scenes marketing.

The craft beer company had minimum impact on Space Ambush in terms of functionality and presentation, but a big impact in terms of design concept.

![Mater Foundation Original Home Page](./mater-foundation/assets/images/materfoundation-original.jpg)

The other major inspiration for this project was from a fellow student from the Code Institute diploma. Their name is Dovile Krasnickaite, and their project was similarly based on the Whack-A-Mole game.

Their project showed how great user experience could revitalise a game from 1970s arcades.

![RNLI Home Page Hero Image](./mater-foundation/assets/images/rnli-hero.jpg)

A further inspiration came from Memory Improvement Tips and their browser version of Whack-A-Mole; especially in terms of game logic and game rule designs.

I loved how they introduce a penalty click with the mole-bomb, and force the user to make choices between different, simultaneously appearing moles on the basis of scopre points.

https://www.memory-improvement-tips.com/whack-a-mole-game-window.html

#### Color Scheme

- The theme of the game is futuristic, alien fun and quick reflexes. So the color palette includes bright, vibrant colors to promote light entertainment and good eye-hand coordination.

##### Space Ambush - Planet Colors:

- ![#A8FFFD](https://via.placeholder.com/15/A8FFFD/000000?text=+) #a8fffd (Celeste Blue)
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) #ffffff (White)
- ![#FF55DD](https://via.placeholder.com/15/FF55DD/000000?text=+) #ff55dd (Pizzazz Purple)
- ![#668286](https://via.placeholder.com/15/668286/000000?text=+) #668286 (Steel Teal)

##### Space Ambush - Monster One Colors:

- ![#A8FFFD](https://via.placeholder.com/15/A8FFFD/000000?text=+) #a8fffd (Aqua Blue)
- ![#ffff00](https://via.placeholder.com/15/ffffff/000000?text=+) #ffff00 (Lemon Glacier)
- ![#ff6464](https://via.placeholder.com/15/FF55DD/000000?text=+) #ff6464(Bittersweet)

##### Space Ambush - Monster Two Colors:

- ![#1eefba](https://via.placeholder.com/15/A8FFFD/000000?text=+) #1eefba (Sea Green Crayola)
- ![#ffde00](https://via.placeholder.com/15/ffffff/000000?text=+) #ffde00 (Yellow Pantone)
- ![#be0000](https://via.placeholder.com/15/FF55DD/000000?text=+) #be0000(International Orange Engineering)

The Space Ambush color palette listed above is derived from digital assets designed by artist Robert Brooks, and purchased with Pro License on https://www.gamedevmarket.net

#### Typography
- Roboto Slab is the main body font used throughout the website, with Sans-Serif as the fallback font. The thick cut, futuristic design helps create the setting for this arcade-based, space game.

- Exo 2 is used for headings, and is similarly a thick cut, futuristic font. Perfect for a slightly retro-arcade, space game feel!

#### Imagery

- All digital assets used in this 2D Whack-A-Mole game were originally designed by Robert Brooks, and purchased with Pro Liense on https://www.gamedevmarket.net

- These assets have been revised in Adobe Illustrator to remove the appearance of facing sideways, and to provide Whack-A-Mole style animations!

## Features

<span id="features-current"></span>

### Current

**1. Menu screens**

| Menu    | Description                                                                                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Main Menu | Requests user nickname, provides access to options and leaderboard menus                                                                                                                                     |
| Options | Provides choice on difficulty levels to the player                                                                                                                                              |
| Scoreboard  | Shows a list of my highest 5 scores.

**2. Difficulty Levels**

- Space Ambush can be played in easy, normal or hard mode.
    * In easy mode, players must click or tap a randomly appearing monster. If they don't, they are attacked and lose points.
    * In normal mode, players are presented with two monsters; the first provides more points if hit, the second cost more points if not hit.
    * In hard mode, players are presented with two monsters and a bomb. They face the same conundrum as normal mode, but if they click the bomb they lose all their points.

**3. Scoreboard and Use of Cookies**

The player's nickname and high scores are saved to their local storage and will display on the scoreboard on return to game, providing cookies are not deleted.

A player will not be actively asked to make a donation after they are first asked at the end of their first playthrough, but the donate button in nav bar will remain as a passive ask on the home screen and game over screen.

**4. Score Generated Comments**

- Every time a player reaches a certain threshold with their score, they unlock a score generated comment. This feature is to encourage replay value, as scores deemed of low value generate a tease comment, and as the score climbs, the tone changes gradually to one of increased admiration.

**5. Visual effects**

EVery time a player makes a menu choice, clicks on an alien monster, or fails to click on a monster in time a visual effect is programmed as a result. Monsters turn red when they attack, and yellow when they're hit, and a modal generates when the game is over. At every stage of user experience, visual effects are used to give feedback.

**7. Responsive/intuitive input**

- The game can be controlled with either a mouse or touch-screen tap gestures

- When the game loses focus (e.g. when the player clicks on another browsing tab or switches apps), it pauses to prevent a frustrating end to the game.

**8. Audio**

The Web Audio API (via HowlerJS) provides reliable, lag-free sound effects on all devices.


**9. Minigame Marketing**

- The business goal for the mini game is to generate donations from subscribers and supporters of The Mater Foundation.

- On initial completion of the game, users will be prompted to consider making a donation to The Mater Foundation. On clicking yes, they're redirected the charity's donation form.

- Returning players will not be actively solicited for further donations, but the donate button will remain as a passive ask in nav bar on home page and game over screen.

- The core game (including the current score and high score) exists entirely in an HTML canvas element and could appear as a standalone element in another environment. Allowing it for closer integration with the main charity website, and for it to be used on charity partner websites!

**10. Object Oriented Programming**

To improve the syntax of the code, Object Oriented Programming has been used as far as possible. The game is built with the following objects:

| Object     | Role                                                                                                                        |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------- |
| gameCanvas  | Handles the canvas and its resizing                                                                                         |
| Snake      | Constructor to handle the snake's location, trajectory and size                                                             |
| Food       | Constructor to handle the food's location                                                                                   |
| Spark      | Constructor to handle spark generation and randomisation (separate functions handle the spark array population and updates) |
| Game       | Handles game state changes, DOM element styling, game settings, collision detection, move validity and updates              |
| Stopwatch  | Handles game time played (used only for stats updates)                                                                      |
| Stats      | Handles local storage of statistics                                                                                         |
| Scoreboard | Handles session scores and the score award text passed to the DOM                                                           |

**11. Customisation**

Rather than being hard-coded, visual and gameplay variables have been extracted to facilitate tweaks to the look and feel of the game. This enables much easier customisation on the developer's part.

<span id="features-future"></span>

### Future

**Improved score-keeping system**

- Recording walls on/off and game speed alongside scores. After all, 200 points on slow with no walls is less of an achievement than 200 on fast with walls enabled

**Online leaderboard**

- A global/regional leaderboard to give a true sense of competition

**Gameplay modes/customisation**

- Special food changing playstyle - e.g. speed, points multiplier, extra food objects, altering size of snake body
- Different game modes - e.g. obstacles within the play area, a maze
- Graphical options - e.g. choice of snake colour, themes, particle effects

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="technologies"></span>

## Technologies Used

### Languages

- HTML
- CSS
- Javascript
  - [HammerJS](https://hammerjs.github.io/) - mobile gesture recognition for responsive controls
  - [HowlerJS](https://howlerjs.com/) - handling of audio elements using Web Audio API

### Project management

- [Figma](https://www.figma.com) - Wireframe creation tool
- [GitHub](https://github.com/) - Version control and deployment
- [GitPod](https://gitpod.io/) - IDE used to code the game

### Style and theme

- [Autoprefixer](https://autoprefixer.github.io/) - a PostCSS plugin which parses CSS and adds vendor prefixes
- [Favicon & App Icon Generator](https://www.favicon-generator.org/) - to generate the game's favicons for a variety of devices
- [Google Fonts](https://fonts.google.com/) - Eso 2 and Roboto
- [Game Developer Market](https://www.gamedevmarket.net) - Digital assets including original virus monster and alien planet artwork

### Online resources

- [FreeConvert](https://www.freeconvert.com/) - to convert audio file types
- [Am I Responsive?](http://ami.responsivedesign.is/) - to produce the README showcase image

### Wireframes

- #### Mobile Home Page Wireframe

![Mobile Home Page Wireframe](./mater-foundation/wireframes/mobile-homepage.jpg)

- #### Tablet Home Page Wireframe

![Tablet Home Page Wireframe](./mater-foundation/wireframes/tablet-homepage.jpg)

- #### Desktop Home Page Wireframe
![Desktop Home Page Wireframe](./mater-foundation/wireframes/desktop-homepage.jpg)


## Features

### General Features

- Responsive on all devices, so users get the best, tailored experience for the specific way they access the website.
- Clearly interactive pages so that users know what actions to take, and how to take them, at every point 

### Button Styled Links

- Page links like Read More and Volunteer are styled as big buttons so users clearly see them, and can easily tap them on mobile devices, to go to the appropriate page.

### Volunteer Form

- The volunteer form allows users to input contact information, and make a selection between different areas of volunteering, so they can note their preference.
- All input fields apart from the checkbox are required, so users can avoid partial, incomplete submission of details.
- The submit button provides user feedback for hover, and click, so they know an action has been taken.

### Newsletter Modal

- The newsletter sign up modal is a quick pop up, allowing the user to input their details, and join our mailing list.
- The submit button provides user feedback for hover, and click, so they know an action has been taken.

### Content Loops

- Each news or patient story is separately hosted but links to another, similar story, so interested users can continue to read clearly communicated content.

### Downloadable Content and External Links

- Downloadable content on the About Us page, and in the footer, opens in a separate tab so the user can read it later at leisure without interrupting their visit.

## Features left to implement

### Donation Functionality

- A donation function is planned for later roll outs. It would work through use of a button styled link and form similar to the existing volunteer functionality would be enabled on the website. This would allow users to support the Mater Foundation through a once off or regular donation.

### Confirmation Emails for Volunteer Sign-Up, Newsletter Sign-Up

- Further to the user feedback elements that exist, a confirmation email feature is planned for later roll outs. It would be linked to submission of both the volunteer form, and the newsletter sign up form, and would trigger an email confirmation to users who've submitted so that they know their submission was received.

## Technologies used

### Languages used

* HTML
* CSS

### Frameworks, Libraries and Programs used

* Bootstrap v5.0.0 beta ; used to help build the core stylings, and assist with responsiveness

* jQUery ; used for the mobile version of the navbar, and for the newsletter sign-up modal

* Google Fonts; used to import 'Fire Sans' for the title font and 'Roboto' for the body font

* Git; used for version control by utilizing the Gitpod terminal to commit to Git, and push to github

* Github; used to store the project code in a repository, and to deploy the page

* Balsamiq; used to create the wireframes during the design process

* Canva; used to format and edit the website images

## Testing

### Validation
* W3C HTML validation
* W3C CSS validation

The developer used W3C HTML validation and W3C CSS validation to help debug, and check the validity of the website's code.

### Responsiveness
* The Google Chrome Responsive Viewer Plugin was used to test responsiveness across a range of devices
    * **[View the plugin here.](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en)**

### Performance
* Lighthouse from the Google Chrome Developer Tools provided an analysis of the website's performance.
    * This analysis was key in fixing a development issue around the use of pngs over jpgs for many images, detailed in bugs.

    * ![Screenshot of full performance report from Google Chrome Developer Tool Lighthouse.](./mater-foundation/assets/images/lighthouse-report.jpg)   

### User Stories Testing

Most common path through the existing Mater Foundation website:

* Home > Donate
* Home > Volunteer is the anticipated most common path based on this data.
* Home page therefore has 2 large, colourful call to action buttons to volunteer

The latest news and patient stories part of the website are the second most frequented, and offer 2 calls to action each.

* Home > Patient-1 > Patient-2 > Etc
* Home > Patient-1 > Volunteer

Similarly,

* Home > News-1 > News-2 > News-3 > Etc
* Home > News-1 > Newsletter Sign-Up

### Testing User Stories from UX Section of ReadME

#### First Time Visitor / Potential Volunteer

- As a first time visitor / potential volunteer, I want immediately to have a window or doorway on to the cause.
    * Home hero image opens on to hospital, and text + CTA position user as a potential life-saving hospital worker.

- As a new visitor / potential volunteer, I want to see a list of ways of getting involved.
    * The volunteer form has a dropdown list of different interests to choose from for this user.
    * Additionally, the footer on every page offers opportunity to join newsletter, social media, or email the charity.

- As a new visitor / potential volunteer, I want to learn how people benefit.
    * Every page provides access to multiple stories direct from patients, and news of recent patient care projects

- As a new visitor / potential volunteer, I want to be assured of charity's legitimacy
    * Footer on every page provides charity registration number, and multiple contact points.

#### Returning Visitor / Volunteer

- As a returning visitor / volunteer, I want to read news that makes me confident I made a difference
    * Latest news is accessible on every page, and shows how volunteers have enabled big projects that will make a transformative difference

- As a returning visitor / volunteer, I want to see a timeline of what the charity has achieved and get a sense of progress
    * A timeline of major achievements is accessible on the About page

- As a returning visitor / volunteer, I want to read stories from patients I'm trying to help
    * Patient stories are illustrated by photos of patients themselves, and stories are in direct quotes.
    * Each story is always linked or listed alongside another, to allow user to continue to pursue reading easily.

#### Returning Visitor / Volunteer 

- As a returning visitor / volunteer, I want to read consistently updated news and stories
    * This is a key reason for the size of this M1P, to provide a multiplicity of news (5) and stories (4)

2. To view the charity's strategy, so I feel longterm commitment is worthwhile
    * The About page features a downloadable Mater strategy with objectives benefiting patient outcomes

3. To join the newsletter, or social media, to feel a greater sense of belonging
    * This feature is accessible on every page via the footer, and is positioned in hero element on Latest News section

### Bugs Discovered & Resolved

#### Dropdown Box

![Image of first bug, which caused empty box to appear underneath dropdown menu](./mater-foundation/bug-shots/bug-one.jpg)


1. Custom Navbar Dropdown Issues
    * When I first implemented a customized css snippet for my navbar dropdown menu, I noticed that it was generating an additional empty box under right under the parent menu item.
    * To solve the problem of this empty box, I located the point it was being generated (although not the source) and targeted that point with CSS reducing it to null

```
/* Customized CSS Snippet for Navbar from https://inspirationalpixels.com/creating-a-dropdown-menu-with-html-css/ */

.navbar-nav .nav-item ul {
    position: absolute;
    top:100%;
    left:0px;
    padding: 0;
    margin: 0;
    opacity: 100%;
    z-index: 1;
}

.navbar-nav .nav-item ul li {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

/* .customized CSS Snippet from https://inspirationalpixels.com/creating-a-dropdown-menu-with-html-css/*/

/* Additional CSS required to fix bug in that snippet */

div.dropdown-menu.show {
    margin: 0;
    padding: 0;
    border: 0;
}

/* .additional CSS required to fix that snippet bug */

```

2. Custom Modal Issues

![Image of second bug, which caused empty box to appear underneath dropdown menu](./mater-foundation/bug-shots/bug-two.jpg)

    * When I initially tested my custom modal it displayed fine. However, when I tried to enter information into the fields, I couldn't click on it. In fact, clicking on it dismissed it.
    * To solve this, I spent ages reading through the potential problems and solutions. But I realized when customizing the snippet I had removed key functionality.

```
<!-- Customized modal from Bootstrap/Whiskey Drop Module -->

    <div class="modal" tabindex="-1" role="dialog" id="newsletter-modal">
        <div class="modal-dialog" role="document">
            <div class="modal-container bg-light">
                <div class="cancel-wrapper">
                  <button type="button" class="close cancel" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <form class="newsletter-modal">
                        <div class="modal-heading-wrapper">
                            <h4 class="heading">Newsletter Sign-Up Form</h4>
                        </div>
                        <div class="modal-input">
                            <label class="visually-hidden" for="modal-full-name">Full Name</label>
                            <input type="text" class="form-control" id="modal-full-name" aria-label="full-name"
                                name="modal-full-name" placeholder="Full Name" required>
                        </div>
                        <div class="modal-input">
                            <label class="visually-hidden" for="modal-email">Email address</label>
                            <input type="email" class="form-control" id="modal-email" aria-label="email-address"
                                name="modal-email" placeholder="Email address" required>
                        </div>
                        <button type="submit" class="btn btn--orange" data-dismiss="modal">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    <!-- .customized modal from Bootstrap/Whiskey Drop Module -->

```

The problem with this code is in the 3rd div from top. I had removed the class name "modal-content" and replaced it with "modal-container".
After looking through documentation on Bootstrap, I finally realized this mistake.

3. Button Styled Calls to Action
    * Originally, the button styled calls to action were anchor tags wrapping button tags, rather than pure CSS styled anchor tags
    * This caused display issues on Internet Explorer, and was flagged as an error by W3C HTML Validator
    * I resolved by deleting out the button tags on every page, and using CSS to style the anchor tags appropriately.

4. Image size
    * Originally on generating a Lighthouse report on my deployed page, it returned a performance rating of 30%
    * I had used png files instead of jpg out of concern for image quality
    * However, these files considerable slowed the load time of the website. So I converted all image files except the logo.


## Deployment

This project was developed using GitPod, committed to Git and pushed to GitHub using the built-in function within GitPod

### Deploy this project from its GitHub repository

To deploy this project to GitHub Pages from its [GitHub repository](https://github.com/DaithiShan/milestoneproject1), the following steps were taken:

1. Log into GitHub.
2. From the list of repositories, select **DaithiShan/milestoneproject1**
3. From the menu items near the top of the page, select **Settings**.
4. Scroll down to **GitHub Pages** section.
5. Under **Source** click the dropdown menu labelled **None** and select **Master Branch**
6. On selecting Master Branch, the page is automatically refreshed. The website is now deployed.
7. Scroll back down to **GitHub Pages** section to retrieve the link to the deployed website.

### How to run this project locally

To clone this project from GitHub

1. Follow this link to the [Project GitHub repository](https://github.com/DaithiShan/milestoneproject1)
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPS section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location you want the cloned directory to be made.
6. Type ` git clone ` and then press the URL you copied in Step 3
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

### Content
* All content was written by the developer in his professional capacity as Community Officer for the Mater Foundation.

### Media
* All images were created by or have been consented for use by the developer in his professional capacity as Community Officer for the Mater Foundation.

## Credits

#### General
    * The Mater Foundation website served as the starting point for my project, as I want to redesign it - [View Site Here](https://www.materfoundation.ie)
    * Bootstrap as a framework was incredibly useful to building this website
    * The Whiskey Drop Section of the Code Institute Bootstrap Module was very helpful to giving me an idea of where to begin writing, and how to begin structuring, my code.

#### Navbar Dropdown
    * I owe inspirationalpixels.com credit for the styling of the dropdown menu. [View Snippet](https://inspirationalpixels.com/creating-a-dropdown-menu-with-html-css)

#### Footer
    * I owe GitHub user kashgiricse credit for the structure of the footer. [View Template] (https://github.com/akashgiricse/templates-using-bootstrap4)

#### Acknowledgements

    * I owe my mentor Allen Varghese a lot of credit for great mentoring, and the discovery of the responsive view Chrome plugin, and cooolor.com for color palettes.
    * I owe the Slack community a great deal of credit also for their responsiveness and willingness to always help with small problems!
