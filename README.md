# project tag: *highlighter*

![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

***Note:*** This README is accurate to a version of the software that has not yet been synced with this repository. `highlighter` v1 is currently under development. In order to understand what that means and how much of it will be visible in this repo, see the first section below. For what it is meant to do, see the second.

## Why~~lighter~~ 

This is a bit of a weird one! *(Skip this section if you just want to know about features; this is about philosophy.)*

`highlighter` exists because I couldn't find other qualitative data analysis software that would do what I wanted in time for me to finish finals on a quarter system. (Yes this app exists because I didn't have the patience to find software that suited my purposes so I wrote it. I have a problem.) This repository consists of a limited subset of the `highlighter` project that I can publish without involving the database itself.

### What this means:
You're welcome to clone the repository if you think it'd help you, but `highlighter` is not going to run out of the box in its public form. Part of the reason for making there be one at all is because I want the exercise of documenting what you'd need to do in order to make it work for you.

### You might still benefit if...
- You have qualitative data in need of coding that you've stored in, or can import into, a SQLite database
- You're comfortable editing JavaScript and CSS[^1] with step-by-step instructions 
- You're doing data analysis in RStudio or similar and can't find a good way to reference your qualitative data coding there 

If that sounds like you, *please* be my guest, it would be nice for making this public to benefit someone other than my need for thought exercises.

### This README seems to be targeted towards a non-technical audience.
Yep.

### I'm a technical audience.
Cool! If that means you're interested in extending `highlighter`'s functionality to be easier to set up and/or do more things once set up, I would be absolutely elated; I'm interested in a universe where `highlighter` is usable without the caveats, but as long as I'm the sole or primary user my effort has to go towards meeting class deadlines first.

(If that means you're frustrated that my documentation is written as an educational tool, I will have to kindly request that you deal with it.)

## Great, but what does it actually *do*?
`highlighter` provides a GUI for coding qualitative data stored in a SQLite database that does the following:

- Loads individual observations from your database and assigns a code to a selected fragment of text
- Highlights displayed text with a color specific to that assigned code, including if you navigate back to that observation later 
- Saves the highlighted phrase, its assigned code, and a relationship to the full observation in your database
- Navigates between different observations in a table so you can do the same thing with the next set
- *(Currently a stretch goal)* Saves comments on the observation as a whole or a specific phrase coded within it

> [Screenshots TK]

Elements that have to be manually configured by editing the code at this time include:
- Hooking Prisma up to your actual database and adding a table for `highlighter` output
- Metadata to display about individual observations, if any
- Your list of codes and their respective color-coding 

### Known and potential accessibility issues
- **Use of colors:** `highlighter` can be manually configured with colorblind-safe colors, but does not support alternate means of showing what the code given to a text fragment is out of the box 
- **Screenreader support:** Qual coding isn't a part of my workflow I use my screenreader for right now, so `highlighter` does not have a default means of announcing coding out loud yet. If you're interested in implementing one, you may need to adjust your verbosity settings, because codes are stored as `<mark>` tags and may be skipped over.
- *(potential)* I use `highlighter` in OSX Safari, Chrome on OSX, and Microsoft Edge on Windows 11. It may not perform as expected on your machine.
- *(idiosyncratic)* If you find my text size frustrating you'll have to edit it yourself.

***

[^1]`highlighter` uses Sass, but a) editing Sass is a lot like editing CSS and b) if that's still outside your comfort zone, you can delete the `.sass` files and edit their compiled `.css` files to suit your needs instead.