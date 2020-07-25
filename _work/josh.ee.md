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
My portfolio website was created in June 2020, and was designed to house both my work as a developer as well as any other little things that I wanted to show off or talk about.

It's built as a [Jekyll](https://jekyllrb.com/) site using vanilla CSS and Javascript. It's hosted with [Netlify](https://www.netlify.com/), and uses [Forestry](https://forestry.io/) for content population.

<h3><span>the design</span></h3>

I had a few main things in mind when I thought about how I wanted this site to look.

* I wanted it to be minimal
* I wanted it to have a fairly basic colour scheme
* I wanted it to have a big focus on typography

<h4>Minimality</h4>

The idea behind it being minimal is mainly due to what the site is for, which is showing off my work. I _could_ make the website all-singing, all-dancing but I feel like it would just distract from that point.

Another benefit of minimalism is that it makes it really easy to make tight. I like to think that this site is built pretty well and looks good on most devices, which I feel mostly owes to it being simple.

<h4>Colours</h4>

The colour scheme was hugely inspired by a website I worked on while at work (which never ended up seeing the light of day). The original colour scheme I picked used two light colours, a main colour (pink), and two dark colours.

<figure>  
<img src="/assets/img/colours_original.png" alt="An image showing the original colour scheme of Josh.ee"/>  
<figcaption>The original colour scheme of Josh.ee</figcaption>  
</figure>

The idea behind this being that from that colour scheme I could pick out the colours for the default light theme, as well as a dark mode version. However, that didn't quite end up working as well as I thought, so I instead opted to go for two separate colour schemes for both light and dark.

<figure><img src="/assets/img/colours_comp.png" alt="An image showing the two current of Josh.ee"/><figcaption>The (current) light and dark colour schemes of Josh.ee</figcaption></figure>

<h4>Typography</h4>

Since the main purpose of this site is to house text, I knew that I had to try to make the typography as nice as possible.

I started with finding a clean, readable font that I liked the look of (and was free, of course). This ended up being [Raleway](https://fonts.google.com/specimen/Raleway).

In order to make my longer articles of text easier to read, I decided to use a rather large font size, increase the line-height to stop everything being squished together, and limit the width of the actual article so that it didn't span the whole page.

In addition, while writing I would use line breaks and paragraphs liberally, mainly to try and prevent huge walls of text that can be hard to digest.

Finally, I noticed that pure white text on a dark background can be somewhat jarring and hard to look at for long periods of time. After reading [this article](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) on CSS-Tricks, I changed the text's colour to be a pale shade of blue, which I believe helps lessen this effect.

<h3><span>the build</span></h3>

Something that I wanted to mirror from the design to the build of this site was minimalism.

A common theme I saw while lurking around web development communities online was people using Javascript libraries like [React](https://reactjs.org/) or [Vue](https://vuejs.org/) to create their portfolio websites. While this certainly works, I can't help but feel they're massively over-engineering it.

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