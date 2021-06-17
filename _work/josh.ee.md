---
layout: post
type: work
title: Josh.ee
date: 04/2020
description: A run down of how my portfolio website was made, what it's made with
  and how it works.
image_small: ''
image_large: ''
published: false

---
I created my portfolio website around June 2020 to house both my work as a developer as well as any other little things that I wanted to show off or talk about.

It's built as a static [Jekyll](https://jekyllrb.com/) site and is hosted on [Netlify](https://www.netlify.com/), using [Forestry](https://forestry.io/) for content population.

<h3><span>the design</span></h3>

I had a few main things in mind when I thought about how I wanted this site to look.

* I wanted it to be minimal
* I wanted it to have a fairly basic colour scheme
* I wanted it to have a big focus on typography

<h4>Minimality</h4>

My main motivation behind making the site minimal was that it was going to be holding text and not much else, so I didn't want to take much focus off of that with fancy layouts or flashy animations.

Another benefit of minimalism is that it makes it really easy to make tight. I like to think that this site is built pretty well and looks good on most devices and screen sizes, which was made much easier by not having a million moving parts.

<h4>Colours</h4>

The colour scheme was largely inspired by a website I worked on at a previous job (which never ended up seeing the light of day, so it's mine for the taking 😊).

The original colour scheme I chose used two light colours, a main colour (pink), and two dark colours.

<figure>  
<img src="/assets/img/colours_original.png" alt="An image showing the original colour scheme of Josh.ee"/>  
<figcaption>The original colour scheme of Josh.ee</figcaption>  
</figure>

My original plan was to pick out the colours for both the default light theme and a dark theme from that palette. However, that idea ended up being a bit naff in practice, so I instead opted for two slightly different colour schemes for both light and dark.

<figure><img src="/assets/img/colours_comp.png" alt="An image showing the two current of Josh.ee"/><figcaption>The (current) light and dark colour schemes of Josh.ee</figcaption></figure>

This ended up working a lot better.

<h4>Typography</h4>

Since the main purpose of this site is to house text, I knew that I had to try to make the typography as nice as possible.

I started with finding a clean, readable font that I liked the look of (and was free, of course). This ended up being [Raleway](https://fonts.google.com/specimen/Raleway).

In order to make my longer articles of text easier to read, I decided to use a rather large font size, increase the line-height to stop everything being squished together, and limit the width of the actual article so that it didn't span the whole page.

In addition, while writing I would use line breaks and paragraphs fairly liberally, mainly to try and prevent huge walls of text that are impossible to read.

<h3><span>the build</span></h3>

When I was first thinking about how to build this site I considered a few different options. 

Originally I was going to build it as a regular PHP site using a CMS like [Wordpress](https://wordpress.com/) or [CraftCMS](https://craftcms.com/), since I had a fair bit of experience building these kinds of things before.

However, not only would this mean I'd have to set up back end hosting which I couldn't be bothered doing, but I kinda wanted to try something new. So I canned that idea.

Next up I considered trying to use one of those fancy JS libraries like [React](https://reactjs.org/) or [Vue](https://vuejs.org/), since I'd never really touched one previously and they were all the rage.

Though after a bit of research I realised that I'd not only have to set up a back end for these libraries to query, but _then_ actually write an API handler to get the information and display it. This sounded like entirely too much work.

Not only that, but I'd recently developed a strange obsession with making my sites as lightweight as possible. Importing a [20-40kb](https://gist.github.com/Restuta/cda69e50a853aa64912d) JS library (and subsequently forcing people to have JS turned on) for a site that had nearly no interaction or moving parts didn't really make sense in this regard. Maybe next time.

Instead, I chose to go in the complete opposite direction and use no Javascript and CSS libraries (which, to be fair, wasn't a huge undertaking due to how I planned for the site to look).

Another decision I made was to completely throw out compatibility with older browsers, namely Internet Explorer.

This meant that I could use features such as CSS Variables without needing to use preprocessors or polyfills. This not only made fiddling with the colours of the site a thousand times easier, but made adding a dark mode option for the site a piece of cake.

<figure><img src="/assets/img/light_dark_home.png" alt="An image showing the header of the homepage of Josh.ee, with the light theme on the left and the dark theme on the right."/><figcaption>Josh.ee in both light and dark mode</figcaption></figure>

<h3><span>dark mode</span></h3>

As I'm sure you can glean from how I won't stop talking about it, I'm fairly happy with how the dark mode of the site works.

Plus, since it's the only real bit of functionality on the site, I'd like to go through how it works a bit.

To start off, I define the colour schemes in CSS using variables, which are as follows:

_--light-colour_, _--light-shadow_, _--main-colour_, _--dark-colour_, _--dark-shadow_ and a few others for social links.

These names were defined with the light scheme in mind, as that's what I built the website in first. This meant that _--light-colour_ would be _#FFFFFF_, _--light-shadow_ would be _#DADADA_ and so on.

To add the dark mode colour scheme, I essentially just swap around all the variables but the main colour. So _--light-colour_ would switch from being the brightest colour, to the darkest etc.

This makes for some kinda funky reading if you look in Inspect Element, however works pretty well in practice.

<figure><img src="/assets/img/inspect_element_colours.png" alt="An image showing the dark theme of the site in inspect element, with each variable being set to it's opposite colour."/><figcaption>Makes sense</figcaption></figure>

Next up was switching between them.

<h4>Without Javascript</h4>

Originally I implemented this only using CSS.

The body has the class _default_ applied to it, which is originally set to the light scheme. However, it switches to the dark theme if the media query _(prefers-color-scheme: dark)_ is met.

This isn't the best as it means the user has to change the settings of their browser (or entire system) to switch colour schemes, which is a bit of a ball-ache. However, considering it takes up around 3 lines of CSS, it's not worth the time or effort to remove.

<h4>With Javascript</h4>

Using Javascript allowed me to make a switch that would let the user choose which colour scheme they wanted to use, which is undoubtedly the better option.

The general idea behind this switch is extremely simple:

1. User presses the switch
2. The site checks which colour scheme it's currently using
3. The site switches to the opposite colour scheme
4. The site saves the colour scheme preference in the cookies

In practice, however, getting that working properly can be difficult.

The main issue I ran into is that due to the way the site is hosted, I don't have access to anything like PHP which I could use to set the correct class on the body before the page is loaded.

This meant that I had to use Javascript, which if done improperly will cause a sudden flash on every page load. This is because the site would be rendered initially using the light scheme until the Javascript kicks in and switches it to the dark one.

However, due to the way that browsers render pages, placing some inline JS directly after the opening body tag will cause this not to happen.