# project tag: *highlighter*

![in active development](https://img.shields.io/badge/status%3A-in%20development-orange?style=for-the-badge) ![absolute baby alpha version](https://img.shields.io/badge/version%3A-1.0.0--alpha-red?style=for-the-badge) [![development branch: flagfixing](https://img.shields.io/badge/development%20branch%3A-flagfixing-blueviolet?style=for-the-badge)](https://github.com/cyrusae/highlighter-public/tree/flagfixing)

![GitHub commit activity (main)](https://img.shields.io/github/commit-activity/m/cyrusae/highlighter-public?style=for-the-badge) ![GitHub last commit (main)](https://img.shields.io/github/last-commit/cyrusae/highlighter-public?style=for-the-badge) ![Maintenance](https://img.shields.io/maintenance/yes/2022?style=for-the-badge) [![GitHub issues](https://img.shields.io/github/issues/cyrusae/highlighter-public?style=for-the-badge)](https://github.com/cyrusae/highlighter-public/issues?q=is%3Aopen+is%3Aissue+-label%3A%22Priority%3A+-%22+-label%3A%22Priority%3A+%2B%22)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat-square&logo=express&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat-square&logo=SASS&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=flat-square&logo=sqlite&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white)

---

***Note:*** `highlighter` v1 is currently under development. In order to understand what that means for this repo, [see the first section](#whylighter) below. For what it is meant to do, [see the second](#great-but-what-does-it-actually-do). 

Or you can just skip [to the third section for installation instructions](#set-up-highlighter-on-your-own-machine) *(tk)*. 

**tl;dr:** It's a GUI for coding qualitative data, but initial setup on a new dataset requires some edits to adapt it to your data. [Click here if you want it](#set-up-highlighter-on-your-own-machine).

For code that hasn't been integrated all the way yet but exists, see [noodle.tsx](noodle.tsx) and [noodle_harder.md](noodle_harder.md). For things I need to do once `highlighter` is working in order for it to be more human-friendly to people who aren't me, see [cleanup_steps.md](cleanup_steps.md).

## ***Why***lighter

This is a bit of a weird one! *(Skip this section if you just want to know about features; this is about philosophy.)*

`highlighter` exists because I couldn't find other qualitative data analysis software that would do what I wanted in time for me to finish finals on a quarter system. (Yes this app exists because I didn't have the patience to find software that suited my purposes so I wrote it. I have a problem.) This repository consists of a limited subset of the `highlighter` project that I can publish without involving the database itself.

### What this means:
You're welcome to clone the repository if you think it'd help you, but `highlighter` is not going to run out of the box on your data if you have data of your own already; importing your own database requires some editing the code, albeit mostly search and replace (see ["what does it do"](#great-but-what-does-it-actually-do)). Part of the reason for making there be one at all is because I want the exercise of documenting what you'd need to do in order to make it work for you.

### You might still benefit if...
- You have qualitative data in need of coding that you've stored in, or can import into, a SQLite database
- You're comfortable with editing small to medium amounts of JavaScript and CSS[^1] with step-by-step instructions 
- You're doing data analysis in RStudio or similar software and can't find a good way to reference your qualitative data coding there 

If that sounds like you, *please* be my guest, it would be nice for making this public to benefit someone other than my need for thought exercises.

### This README seems to be targeted towards a non-technical audience.
Yep.

### I'm a technical audience.
Cool! If that means you're interested in extending `highlighter`'s functionality to be easier to set up and/or do more things once set up, I would be absolutely elated; I'm interested in a universe where `highlighter` is usable without the caveats, but as long as I'm the sole or primary user my effort has to go towards meeting class deadlines first.

(If that means you're frustrated that my documentation is intended partly as an educational tool, I will have to kindly request that you deal with it.)

### Wait, not that technical. 
Attempt at standoffishness aside, I'm still happy to entertain [comments, suggestions, and even feature requests](https://github.com/cyrusae/highlighter-public/issues).

## Great, but what does it actually *do*?
`highlighter` provides a GUI for coding qualitative data, as stored in a SQLite database, that does the following:

- Loads individual observations from your database and assigns a code to a selected fragment of text
- Highlights displayed text with a color specific to that assigned code, including if you navigate back to that observation later 
- Saves the highlighted phrase, its assigned code, and a relationship to the full observation in your database
- Navigates between different observations in a table so you can do the same thing with the next set
- *(Currently a stretch goal)* Saves comments on the observation as a whole or a specific phrase coded within it

In other words: have you ever wanted to print out all your observations to go through them in hard copy with color-coded highlighters, while knowing that's not worth it because how on Earth are you going to reference all that coding work once you've done it? 

That. It does that.

> *`[Screenshots TK]`*

### Important elements that still have to be manually configured:
- Hooking Prisma up to your actual database, putting your own variable names into the code (search every time the 'canonical' ones in this version occur), and adding a table for `highlighter` output
- Styling for codes (copy and paste output of the Sass map generator into the relevant .scss file)
- Any troubleshooting if that doesn't go as planned

But! The good news is: that's about it.

### Known and potential accessibility issues
- **Use of colors:** `highlighter` can be manually configured with colorblind-safe colors, but does not support alternate means of showing what the code given to a text fragment is out of the box. (If that's a concern for you, you could--for example--add dotted/dashed/etc. borders, and configure the highlighting function to add a tooltip listing the code given to a highlight when made.) 
- **Screenreader support:** Qual coding isn't a part of my workflow I use my screenreader for right now, so `highlighter` does not have a default means of announcing coding out loud yet. If you're interested in implementing one, you may need to adjust your verbosity settings, because codes are stored as `<mark>` tags and may be skipped over.
- *(potential)* I don't know how the highlighting interacts with a keyboard-only UI (if you find out or have suggestions for avoiding issues in advance, [please let me know](https://github.com/cyrusae/highlighter-public/issues))
- *(potential)* I use `highlighter` in OSX Safari, Chrome on OSX, and Microsoft Edge on Windows 11. It may not perform as expected on your machine.
- *(idiosyncratic)* If you find my text size frustrating you'll have to edit it yourself.

## I would like an alternative.
[qcoder](https://github.com/ropenscilabs/qcoder) is filling a similar niche (potential con: RStudio-specific; potential pro: much less idiosyncratic) but is also in development. Other than that, I'm afraid I can't make any recommendations, or I wouldn't have written this in the first place.

## Set up `highlighter` on your own machine

> ***[INSTRUCTIONS TK]***

***

[^1] The end version of `highlighter` is planned to use Sass, but a) editing Sass is a lot like editing CSS and b) if that's still outside your comfort zone, you can delete the `.scss` files and edit their compiled `.css` files to suit your needs instead.

---

[![Twitter](https://img.shields.io/badge/chrysopoetics-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/chrysopoetics) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cyrusae/) [![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://patreon.com/eosphoros)
