---
layout: post
type: work
title: NWODN
date: 2018/10
description: A website published in October 2018 for the Lancashire and South Cumbria NHS Foundation Trust. I developed both this website's front-end and back-end.
image_small: /assets/img/post/nwodn/nwodn_sm.png
image_large: /assets/img/post/nwodn/nwodn_lg.png
---
<h3><span>the basics</span></h3>

The NWODN website is something I created for the Lancashire and South Cumbria NHS Foundation Trust. I created this website while working for [Cube Creative](https://www.cubecreative.co.uk). It was built with Cube's in-house CMS system, CubeCore.

I created this website in it's entirety, including all back-end plugins. It runs on a PHP and MySQL back-end, along with a jQuery and [Foundation](https://get.foundation/sites/docs/) front-end.

<h3><span>the good</span></h3>

This website is something that I'm overall proud of. The front face of the website is somewhat basic, however fits it's purpose and allows for customisation. However, where this website really comes into it's own is the area for logged in users.

Once a user logs in, they're given access to a forum where they can read and post both messages and topics.

This forum software was originally built by another developer at Cube in PHP, and is entirely customisable by the website administrator. I used this software as a base, where I completely redid the front-end.

<video class="lazy" data-src="/assets/img/post/nwodn/forum_posts.webm" muted autoplay controls loop></video>
<noscript>
    <video src="/assets/img/post/nwodn/forum_posts.webm" muted autoplay controls loop></video>
</noscript>

When implementing the front end I chose to load all topics using PHP, however opted to use AJAX to load any replies. I had two main reasons for choosing to do this:

* **Performance** - Browsers, especially older ones (such as IE11), tend to chug if too many HTML elements are on the page when it's initially loaded. While that bar may be quite high, a few popular topics with long-winded replies will make low-spec machines (like old phones) start to sweat. Loading replies using AJAX means that this effect is lessened as the replies are only loaded when needed.
* **Data** - While it's something that's probably not super noticable, it's a nice effect of using AJAX that only the data the user wants to see is loaded.

An unfortunate side effect of using AJAX, however, is that anyone with Javascript disabled will be unable to read the forum properly. While this isn't a massive problem due to the number of users with Javascript disabled being in the fairly extreme minority (especially for a site like this), I still like to try and ensure a fairly similar experience for everyone. Ah well.

Finally, the forum includes basic support for rich text capabilites (such as **bold** and *italics*) by implementing [CKEditor 4](https://ckeditor.com/ckeditor-4/).

<video class="lazy" data-src="/assets/img/post/nwodn/forum_reply.webm" muted autoplay controls loop></video>
<noscript>
    <video src="/assets/img/post/nwodn/forum_reply.webm" muted autoplay controls loop></video>
</noscript>

Overall, this forum is somewhat of a high point of my development career thus far. While it is certainly somewhat basic, and has some parts that could be done better, as a whole it's something I feel works great and I'm very proud of.

<h3><span>the bad</span></h3>

As proud as I am of this website, it does suffer from an issue that was fairly prevalent earlier in my development career - **overcomplication**.

A prime example of this is in regards to the sliders on the website.

<video class="lazy" data-src="/assets/img/post/nwodn/slider_example.webm" muted autoplay controls loop></video>
<noscript>
    <video src="/assets/img/post/nwodn/slider_example.webm" muted autoplay controls loop></video>
</noscript>

Every slider on this site uses bespoke code that was created by myself. While this code isn't anything too performance intensive, nor is it particularly long, it's near enough completely redundant.

And while this slider _technically_ works (and even supports swiping thanks to [Tocca.js](https://gianlucaguarini.com/Tocca.js/)), it's essentially just an extremely dumbed down version of what a library like [Slick](https://kenwheeler.github.io/slick/) could offer with no real benefits or reason for being.

