---
title: "METAR Decoder"
excerpt: "I created a METAR decoder that takes a raw METAR from AviationWeather.gov and decodes it, determines flight category, and includes other useful information. "
coverImage: "/assets/blog/metar-decoder/image.png"
date: "2025-03-14T05:35:07.322Z"
ogImage:
  url: "/assets/blog/metar-decoder/image.png"
tags: ["test,", "test"]
---

While this was an awesome project, and I am happy with how it turned out, I'd be lying if it wasn't extremely frustrating losing all of my progres 3/4s of the way through the project due to a GitHub codespaces bug!

# Finished Product & GitHub

https://metar.fxllencode/dev/

**ALL CODE CAN BE VIEWED HERE:**
https://github.com/FxllenCode/metar-decoder

## Planning & Original Idea
I wanted to create a full-scale performance calculator for the Cessna 172 skyhawk, tailored to one of the tail numbers of the aircraft I fly, N106AF. I wanted to do this as I've been working on my Private Pilot's License and doing the Cross-Country and Solo Cross-Country part of it, and I noticed there's a lot of math involved that requires interpolation and gathering information from a bunch of different places to be put together. I think this could be made much simpler using a program online, but the issue is pre-existing ones are built specific to other aircraft, and the POH of each aircraft is very different and is regulatory, so those must be followed closely.

Here was my final scrum board (spoiler alert: the entire project got deleted and I had to switch it up):

![](/assets/blog/metar-decoder/firefox_jqe7o4gmZA.png)

Now, aside from everything being deleted, I hit another roadblock, which was that the FAA never accepted my request for API access so I could get important information for my performance calculator such as runway length, heading, etc. [They probably fired the person responsible for it 🥲](https://apnews.com/article/doge-faa-air-traffic-firings-safety-67981aec33b6ee72cbad8dcee31f3437)

## Learning Redux
One of the most difficult and time-consuming parts of this project was learning Redux. My original plan was to use Redux to have persist state be cleanly stored and fetched without using a database, but with LocalStorage integration and just better state management. This was especially important because of how much data that needed to be frequently saved and accessed during the calculations. Honestly, I am not sure why this is such an industry standard tool - the amount of boilerplate code was infuriating. I wish I had a copy of the code to show, but it was deleted with all my work. I'd rate working with Redux a 2/10, would not recommend.

# The new app!
Since all my code got deleted, I had to start fresh, and smaller. I decided to go with a METAR Decoder that still includes some of the calculations I had intended on doing in my original project. I used basic tailwind components to save time and focus on creating the actual algorithims as well as using the API. The API from the AWC was pretty easy to use, and I really like how the project ended up turning out. I would suggest exploring it yourself with different airports, KATL, KSNA, KSEA, KJFK, and EGLL (to showcase the major differences between regions as well as international airport compatibility).

All in all, this project was cool, but frustrating that I had to redo all of my work. In the future, I'd like to keep working on this so I could actually make the full performance calculator as I think it was a great original idea. 













