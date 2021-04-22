# Space Ambush Testing

In order for Space Ambush to be a successful mini game, its code was tested extensively across browsers and different device sizes.

## Table of Contents

1. [**Code Validation**](#code-validation)

2. [**Testing Against User Stories**](#testing-against-user-stories)

3. [**Manual Testing**](#manual-testing)
    - [**Responsive Design Testing**](#responsive-design-testing)
        - [**Overview**](#overview)
            - [**Landing Page**](#landing-page)
            - [**Modals**](#modals)
            - [**Game Area**](#game-area)
                - [**Google Dev tools - Lighthouse Audit**](#google-dev-tools---lighthouse-audit)
                    - [**Desktop Audit Result**](#desktop-audit-result)
                    - [**Mobile Audit Result**](#mobile-audit-result)

    - [**Functionality Testing**](#functionality-testing)
        - [**Modal Testing Overview**](#overview)
        - [**Individual Modal Testing**](#individual-modal-testing)
        - [**Audio and Music Testing**](#audio-and-music-testing)
        - [**Game Functionality Testing**](#game-functionality-testing)
    - [**Additional Testing**](#additional-testing)

## Code Validation

All code written has been thoroughly validated and passed through the following online validators:

- HTML - All code was run through the [W3C HTML Validator](https://validator.w3.org/) to ensure it was valid code and any errors flagged were fixed.

- CSS - All styling was run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to ensure it was valid and any errors flagged were fixed.

- JavaScript - All my script was run through the [JSHint](https://jshint.com/) validator and any errors flagged were fixed.

## Testing Against User Stories

Below I test each of the user stories listed in [README.md](https://github.com/DaithShan).

**As a first time visitor, I want to:**

1. See an appealing landing page, with clear, quick pathway to gameplay
  - The landing page of the website is brightly colored menu with big blue buttons, set against a vibrant alien planet.
  - All text elements indicate clear user pathways, and stand out clearly against their background colors
  - Level selection and tutorial information are pushed together concisely, allowing for quicker gaming

2. To quickly learn the controls, and how to toggle audio and quick exit
  - The controls are intuitive and outlined at level selection, and also are explained in the ingame help menu.
  - The user can select volume before game play, and toggle audio on and off in the game
  - A quick exit button provided in-game to bring the users back to the main menu

3. Intuitively grasp the scoring system, and understand how I win and lose points
  - The baseline score system is inline with expected behaviour from older Whack-A-Mole and video games
  - The score increments when the user clicks on a quickly appearing alien in time and emits a lasergun sound
  - The score reduces when an alien turns red, shoots and emits a lasergun sound
  - The scoring system also uses visual feedback, aliens clicked on turn yellow, and aliens shooting turn red first 

**As a returning visitor, I want to:**

1. See my old score and beat it
  - Using local storage, the game retains a user's best ever score
  - This score is displayed in-game at the top of the screen and also in bold on the game-over menu

2. Choose higher difficulties, and experience genuinely harder gameplay
  - The baseline game is already harder than most Whack-A-Mole games, by using a retaliation mechanic
  - A higher difficulty is provided, adding an additional alien enemy with higher attack probability

3. Have an option to contact developers for any bugs, or for other feedback
  - The main menu to which the user returns after each game has a quick, contact form
  - The user is emailed a copy of their message after submission so they know it's been received

**As the charity benefiting from this mini game, I want to:**

1. Tie the game's premise to the charity mission after playthrough, without boring the player
  - After every game, the user is given a yes or no choice to donate to the charity
  - In the ask, the user is positioned as a space hero who can also save people on earth

2. Drive donations from players through the official charity website
  - If the user chooses to donate to The Mater Foundation, they're redirected to the official donation form

3. Capture useful feedback including bug reports and feature suggestions
  - The main menu contains a contact form for players to leave feedback
  - The text element prompts bug reports and user suggestions specifically


## Manual Testing

I have detailed the manual testing undertaken during the development stage to try reduce any bugs, and make sure the game play delivers as intended.


### Responsive Design Testing

All testing was performed using:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Desktop
- Mobile Phones - All emulated devices offered in Google Dev Tools as well as friends devices.
- Tablets - All emulated devices offered in Google Dev Tools as well as parents devices.

#### Overview

This game was intended to be responsive on all devices such as mobile phones, tablets, desktops.

To ensure the site and game board remains responsive, I tested the layout at every stage of development on the various screen sizes within the Chrome Dev tools and corrected the styling of the elements and added Media Queries so that the design will adjust to device being viewed.

This was particularly challenging given the irregular sizes of the game's main assets ; the alien bushes and the alien ambushers. 

I needed to use a blend of general and targeted css, as well as multiple media queries, to try and deliver the same experience.

##### Game Main Menu

  - Bug Identified - **Main Menu Positioning**

    - Initially, I used a mix of absolute position and left + top properties to fix where the main menu would sit. This was an error, but thankfully I had help from my mentor in fixing it.

  - Fix Applied:

   - The bug in positioning was fixed by abandoning an overly complicated positioning strategy. I removed the use of absolute positioning, and relied instead on just top positioning + automatic margin.


##### Audio Menu

- Bug Identified - **Audio Menu Button Icons Not Centred on Mobile**

  - When I asked my friends to test different aspects of the game, one of the user tasks I gave was to open the different modals on their devices. The emulations accessed via Chrome Dev Tools don't always show the errors that can display on physical device. One area that this proved true was that the volume icons on the audio menu weren't centred on screens smaller than 600px!

- Fix Applied:

  - This was one of those minor bugs that actually take a while to fix. I first tried adding text-center to the parent element (the buttons) and then tried adding center to the icon classes (recommended). Then I tried using min-width, and after that max-width. Eventually I changed the actual size of the element to 10px larger than original, and it fixed it!

##### Game Page

- Bug Identified - **Accidental Double Zoom on Game Area When Trying to Tap on Aliens**

  - This bug was probably the most frustrating for users initially, from their feedback. When users tried to quickly tap on the aliens ambushers after they popped from behind the bushes, they accidentally double zoomed in on the game area.

- Fix Applied

  - I tried a few different fixes. But the most effective was simply adding the following code to the top level body DOM element

  ```
  body{
      touch-event: manipulation;
  }
  ```


### Functionality Testing


#### Game Page

The game page contains the most important features, and my priority was to make sure that it delivered an excellent experience regardless of device or browser.

- Bug Discovered - **Aliens Freezing as Sitting Ducks on Click/Tap**

  - This was one of the most immediately obvious bugs from friends testing the game. All the aliens would pop out and ambush the user, and then hide again using a basic setTimeout. However, if the user kept clicking on the alien, they would freeze in a sitting duck position. 

- Fix Applied:

  - I added a css function on click, which made sure that the aliens went back behind the plants after you tapped them. This runs in addition to the setTimeout, as they still need to pop in and out even if you ignore them.

- Bug Discovered - **Multiple Scores by Furious Tapping/Clickingp**

  - This was one of the most SATISFYING bugs to SQUASH. Even with the identification of the bug above, and its applied fix, some of my friends were still able to cheat the game. They would tap very quickly before the css fix could be applied to score multiple points on a single alien.

  - In order to keep the visual effect of the alien turning yellow after being shot, I did not want the alien to disappear immediately on being clicked. My original goal had been to make sure he did not freeze, not to vanish him before the nice visual feedback of him turning yellow!

- Fix Applied:

  - I added isWhacked = False / True as a boolean property to every alien, and set the value to true after every tap or click on an alien. Then I reset the values to false before the aliens popped out again. I can't describe how satisfied I was to discover this fix, and eliminate the insanely high scores of some of the cheating testers!

- Bug Discovered - **Multiple Scores by Furious Tapping/Clickingp**

  - This was one of the most SATISFYING bugs to SQUASH. Even with the identification of the bug above, and its applied fix, some of my friends were still able to cheat the game. They would tap very quickly before the css fix could be applied to score multiple points on a single alien.

  - In order to keep the visual effect of the alien turning yellow after being shot, I did not want the alien to disappear immediately on being clicked. My original goal had been to make sure he did not freeze, not to vanish him before the nice visual feedback of him turning yellow!

- Fix Applied:

  - I added this.isWhacked = false / true as an attribute to every alien, and set the value to true after every tap or click on an alien. Then I reset the values to false before the aliens popped out again. I can't describe how satisfied I was to discover this fix, and eliminate the insanely high scores of some of the cheating testers!

#### Google Dev tools - Lighthouse Audit

The below screenshots have been taken use the Google Chrome Dev Tools Lighthouse Audit functionality 

##### Desktop Audit Result

##### Mobile Audit Result

### Functionality Testing

#### Menu Testing Overview

I performed manual tests on all the menus to ensure they could open and close correctly. 

- Bug Discovered - **Bug 1**:

     - Description

- Fix Applied:

    - Description

    ```
    {;}
    ```


#### Game Functionality Testing

All tests were performed multiple times using desktop, mobile and tablet. Also, they were tested on Google Chrome, Safari, Mozilla Firefox and Microsoft Edge.

1. Game Functionality

    1. **Function A**

        - Bug Discovered:

            - Description.

        - Fix Applied:

            - Description.

                ```
                {;}
                ```


### Additional Testing

I asked my friends and family to play the game on their various devices and...