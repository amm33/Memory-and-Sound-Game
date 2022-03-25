# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Adriana Morales**

Time spent: **15** hours spent in total

Link to project: https://glitch.com/edit/#!/cautious-flash-marigold?path=README.md%3A1%3A0
                 https://cautious-flash-marigold.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] Hover feature for the buttons which allows users to see what button they are going to press 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![] ![MemoryandSoundGame1](https://user-images.githubusercontent.com/89936921/158456369-9d166f28-77f1-471d-a856-83ad3f2125c8.gif)
![] ![MemoryandSoundGame2](https://user-images.githubusercontent.com/89936921/158456492-4e83b453-b758-4551-8d04-fb192b40a1e1.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

The reference resources I used as guidance for my project are as follows. The first reference is w3schools which was used to refresh my knowledge of JavaScript syntax. The last resource I used was a video on YouTube titled "Simple Countdown Timer with JavaScript" by Florin Pop. This video provided a better understanding of how I could incorporate a timer into my memory and sound game. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge I had in creating this submission was working on the timer portion of my code. I was not sure how to have my timer displayed while counting down. I was able to show "Timer: 60" with the paragraph tag in my HTML file, but counting down from 60 secs was tricky. I looked through sources and videos to understand how setInterval and clearInterval work. Using these resources, I create two variables named timer and timeLeft. TimeLeft equals 60 secs, which is the total time given. I was also able to create a function named updateTime() that will decrease the time. It also uses an if statement to display the correct time as it decreases and if there's no time left, it will stop the game. I called this function in both my startGame() and stopGame() functions. Despite this challenging feature taking me several hours, I was able to learn much about adding timers. I found that researching such topics that I had no prior experience with and testing them, helped me understand tremendously and this was shown in my project. This was beneficial, especially for randomly generating a pattern. When I first created a function and loop to do this, I would get floating numbers. Using resources, like w3schools.com, I was able to understand how to fix this. Doing this has taught me many useful skills.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Through completing the pre-work assignment, I was able to understand the functions and uses of the web development languages, HTML, CSS, and Javascript, much better. I have had prior experience working with these languages, but was able to strengthen my knowledge through this project. I did have a few questions about web development. The first is "Is it possible to have all three languages in one file". I am not sure if doing so would be beneficial as it could be confusing, but have there been situations where programmers would so or do most separate them into three files? The last question relates to databases and how could we incorporate a database to save the game data?  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would implement several additional features. My first idea is to create a webpage that allows users to make an account and track their scores, eventually allowing them to compare their scores with their friends. I would also like to create a webpage that features a leaderboard that sorts players based on their top score. To put all this together, I would eventually create a navigation bar that would feature various links. One link would be for creating an account, another would be the memory and sound game, the third will be a profile page so users to update their profile, and the last link would be for the leaderboard. This could encourage friends to compete against each other rather than play on their own. 


## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/Ag0Ta9FhPgI)


## License

    Copyright [Adriana Morales]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.