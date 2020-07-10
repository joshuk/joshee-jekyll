---
layout: post
type: work
title: The Rowan Suite
date: 2019/04
description: A website published in April 2019 for The Rowan Suite at the Liverpool
  Heart and Chest Hospital. I did the majority of the front end development for this
  website.
image_small: "/assets/img/post/rowan/therowansuite_sm.png"
image_large: "/assets/img/post/rowan/therowansuite_lg.png"

---
<h3><span>the basics</span></h3>

The Rowan Suite website is a website that I helped to create while working for [Cube Creative](https://www.cubecreative.co.uk). It was designed in house and developed by myself and another web developer using Cube's bespoke CMS software, CubeCore.

The website uses a PHP and MySQL back-end, in addition to jQuery on the front-end. My role during development was mostly working on the front-end, as I created the majority of all CSS and Javascript on the site.

<h3><span>the good</span></h3>

Overall I'm rather happy with this website. It's responsive, it works on a variety of devices (including Internet Explorer) and is overall fit for purpose.

Something, albeit small, that I'm rather proud of can be seen in the 'News' section.

The news page displays articles in chunks of three, loading more whenever the user presses the 'Load More...' button.

Something that I've found on some setups like these is that all progress is lost when the user navigates away from the page, meaning that all of the articles have to be loaded again until the user gets back to where they were.

To try and stop this from happening, I used [history.pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) to add a GET parameter to the URL noting how many extra articles are loaded.

<video class="lazy" data-src="/assets/img/post/rowan/url_update.webm" muted autoplay controls loop></video>
<noscript>
<video src="/assets/img/post/rowan/url_update.webm" muted autoplay controls loop></video>
</noscript>

I then use some PHP to load the correct number of articles on the page once the user navigates back to the articles list, meaning they can pick up where they left off.

This is something that's fairly small, but I believe makes a genuine difference to anyone wanting to read older news stories.