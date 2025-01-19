# Rock, Paper, Scissor, Lizard, Spock Frontend

**Description:** Design a Rock, Paper, Scissors, Lizard, Spock game.

***Here are the requirements that are needed:***
- 1v1 or 1vCPU
- Different modes: 1 win / 3 out of 5 / 4 out of 7
- Must have a way to show the rules of the game


**Developer:** Michael Heckerman

**Date Revised:** 1/18/25

**Figma Approved By:** Jacob 1/14/25 3:50pm


## Link(s):

[Figma](https://www.figma.com/design/2xOvoB0F0DCTUDBSx30QfC/Rock%2CPaper%2CScissors%2CLizard%2CSpock?node-id=0-1&p=f&t=pJNk4w7yv4gCDthi-0)

[Github-Repo For Frontend](https://github.com/mkheck13/FrontEndRPSLS)

[Github-Repo For Backend](https://github.com/mkheck13/RPSLS)

[Vercel](https://front-end-rpsls.vercel.app/index.html)


## FeedBack/Peer Review: 

**Reviewer:** Aaron Robinson 

**Comments:** The site works as intended and functions correctly. I like your use of the .onclick = functionality, I have been using EventListeners I will need to learn more about that. There are a few things that could be condensed in the code. One that stuck out to me is that setting the p1/2points.innerText to player1/2score.ToString() will remove the need for calling a function (scoreUpdate()) to update the score each and everytime (remember to reset the score after the game is over is you choose to incldue this) All in all cool site and good job