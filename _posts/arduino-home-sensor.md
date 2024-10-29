---
title: "Arduino Home Sensor Project Write-up"
excerpt: "For our group project, we created an Arudino-based smart home device that provides the user with information about the enviorment such as the tempature and room humidity. It was not the easiest project to say the least. "
coverImage: "/assets/blog/lorem/IMG_0044.jpg"
date: "2024-10-28T05:35:07.322Z"
ogImage:
  url: "/assets/blog/lorem/IMG_0044.jpg"
tags: ["arduino,", "arudino project", "iot", "smart home device"]
---

This was a project... I learned a lot and also sufferred greatly making it work. Our goal for this project was to create a smart home device that can read tempature, humdiity, and barometric pressure from the room, and create a way of discerning and outputting the data to the user. We ended up not being able to implement a barometric pressure sensor, but we did get an LCD screen implemented (after many struggles). Below is a full write-up of how we got this project working and how you could replicate it if you so dare. 

## Supplies
* [Arduino Uno R3](https://store.arduino.cc/products/arduino-uno-rev3?srsltid=AfmBOorgjUQN_I6mTssyxnmxWMVFvtd-S3LGl5Cz1NuyK4eTtcNCJOYB)
* [Arduino Prototyping Shield + Cables](https://www.amazon.com/AIHJCNELE-Breadboard-ProtoShield-Prototyping-ATMEGA328P/dp/B0B7BSZJN7?th=1)
* [Large Arduino Breadboard](https://www.amazon.com/EL-CP-003-Breadboard-Solderless-Distribution-Connecting/dp/B01EV6LJ7G)
* [DHT11 Humidity and Tempature Sensor](https://www.adafruit.com/product/386)
* [LCD1602 Module](https://www.amazon.com/SunFounder-Serial-Module-Display-Arduino/dp/B071Y6JX3H)
* [Arduino USB Connection Cable](https://store-usa.arduino.cc/products/usb-2-0-cable-type-a-b?srsltid=AfmBOopmfJ0v0nbqi-pbsx5yRw78yKXUgC4Db6zRZrEi-I0pZW8-YLaO)

## Software
* [Arduino IDE](https://www.arduino.cc/en/software)

## Libraries
* [DHT11](https://github.com/dhrubasaha08/DHT11)
* [LCD1602 (Direct Download)](http://wiki.sunfounder.cc/images/b/b2/LCD1602_for_Arduino.rar)

## Failures 
This project was defined by failure. While our original plan was bold, we ended up having to significantly downsize our project in scale after trying (and failing) to implement many other modules. 

### IR Receiver 

