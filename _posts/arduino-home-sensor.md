---
title: "Arduino Home Sensor Project Write-up"
excerpt: "For our group project, we created an Arudino-based smart home device that provides the user with information about the enviorment such as the tempature and room humidity. It was not the easiest project to say the least. "
coverImage: "/assets/blog/arduino-home-sensor/PXL_20241028_145509906.jpg"
date: "2024-10-28T05:35:07.322Z"
ogImage:
  url: "/assets/blog/arduino-home-sensor/PXL_20241028_145509906.jpg"
tags: ["arduino,", "arudino project", "iot", "smart home device"]
---

This was a project... I learned a lot and also sufferred greatly making it work. Our goal for this project was to create a smart home device that can read tempature, humdiity, and barometric pressure from the room, and create a way of discerning and outputting the data to the user. We ended up not being able to implement a barometric pressure sensor, but we did get an LCD screen implemented (after many struggles). Below is a full write-up of how we got this project working and how you could replicate it if you so dare. 

## Initial Ideas and Research

The intention was create a home sensor with a full suite of features, from Carbon Monoxide measuring with alarms, door sensors, gas sensors, oxygen sensors, as well as the tempature, humdiity, and barometric pressure sensors. We wanted to create a large screen interface and maybe even remote control over WiFi to make it a "true" smart home device. 

### Supplies
* [Arduino Uno R3](https://store.arduino.cc/products/arduino-uno-rev3?srsltid=AfmBOorgjUQN_I6mTssyxnmxWMVFvtd-S3LGl5Cz1NuyK4eTtcNCJOYB)
* [Arduino Prototyping Shield + Cables](https://www.amazon.com/AIHJCNELE-Breadboard-ProtoShield-Prototyping-ATMEGA328P/dp/B0B7BSZJN7?th=1)
* [Large Arduino Breadboard](https://www.amazon.com/EL-CP-003-Breadboard-Solderless-Distribution-Connecting/dp/B01EV6LJ7G)
* [DHT11 Humidity and Tempature Sensor](https://www.adafruit.com/product/386)
* [LCD1602 Module](https://www.amazon.com/SunFounder-Serial-Module-Display-Arduino/dp/B071Y6JX3H)
* [Arduino USB Connection Cable](https://store-usa.arduino.cc/products/usb-2-0-cable-type-a-b?srsltid=AfmBOopmfJ0v0nbqi-pbsx5yRw78yKXUgC4Db6zRZrEi-I0pZW8-YLaO)

### Software
* [Arduino IDE](https://www.arduino.cc/en/software)

### Libraries
* [DHT11](https://github.com/dhrubasaha08/DHT11)
* [LCD1602 (Direct Download)](http://wiki.sunfounder.cc/images/b/b2/LCD1602_for_Arduino.rar)



## Failures 
This project was defined by failure, so I think it's important to start there. While our original plan was bold, we ended up having to significantly downsize our project in scale after trying (and failing) to implement many other modules. 

### IR Receiver 
The kit that we used included an IR receiever and remote control module. We planned on using this module to control what is displayed on the screen. For example, we considered using the remote to switch between different measurements such as tempature or humidity. We could have also used it to switch units from Celsius to Farenheight.

However, we encoutered a lot of issues with this module. First off, there was almost no documentation with the specific module we have. I still do not know the exact model number or unit type of the module because it was not documented in the kit or on the module. This made it difficult to find answers and results for why it wasn't working. Once I finally figured out how to make the circuit, I noticed that there was a red LED on the side of the module that was lit. After doing some research, I found that indicates that the module is receiving an IR signal. However, the module should not have been receiving any signals, and there was no known interferance to my knowledge. I left it plugged in to attempt to debug it on the code side, and started to notice a smoke smell. The module was also hot to the touch. I beleive that we were sent a malfunctioning IR receiever module, and the issue was neither code or circuit, but just a bad module.

### Gas Sensor and Barometric Pressure
This was a failure for the simple reason of us not having this module on hand, and ordering the module took too long. I do not think this would be difficult to implement in the future or if you tried to add it yourself to this project, but I can't confirm as we never got to this part of the project.

### DHT11 and a bad library 
When we first got our DHT11 module on hand and began trying to get it working, we turned to Google to help us find a tutorial and circuit diagram that showed us how to implement this module. We followed [this](https://projecthub.arduino.cc/arcaegecengiz/using-dht11-12f621) tutorial. While this tutorial was fantastic and helped us figure out the circuit, there was one problem: the age of the article. We did not notice that this tutorial was written in 2018, 6 years from now. Furthermore, the library that was used in that tutorial had not been updated since 2015 (!) and only had 6 total commits. While it appeared that it worked at the time of writing the tutorial, updates to the module and Arduino itself made the module not work as intended. 

We followed all sample code and used this library, and what we found was that while we would get an initial tempature/humidity reading, it would never update, even though the code would have indicated otherwise. For example, we would run the code and get a reading of 43% humidity and 22 degrees Celsius, but it would never change regardless of stimuli (such as putting a hand on the sensor or blowing on it). Frustrated, I turned to the GitHub page of the library we had downloaded. There, I realized that the library was almost 10 years old, and was no longer maintained. The GitHub issues page had multiple open issues indicating there were many unresolved issues including one that seemed similar to our error. 

To solve this, I did some research into alternative libraries for the DHT11 sensor, and found an almost drag-and-drop replacement for the library: https://github.com/dhrubasaha08/DHT11. After refactoring the code, it started working as intended. 

### LCD1602 :(
This was *really* annoying to implement. First off, the circuit diagram is.. well... it's this:

![really annyoing diagram](/assets/blog/arduino-home-sensor/image.png)

So that was annoying. But we got it working, kind of. The kit with the LCD screen came with a potentiometer, which was needed in the diagram. However it was both poorly designed (why were the pins split in that manner?!?) and did not have the right resistance we needed, making it completely useless. So we reworked the circuit to not need a potentiometer. This worked, but it basically created this strange effect that made it so you could only read the text at a non-90 degree angle. This was annoying but at least it worked, right? 

Kind of. The problem is that we did not want to make this project permanent, so we just used breadboards and prototyping modules to test it out and get it working. The problem with this is that the connections between the cables and data transmissions are not always a perfectly strong connection. This resulted in any tiny movement caused the LCD screen to completely break or have the text data being completely corrupted, and we would have to run the program from scratch all over again to fix it.

![Corrupted](/assets/blog/arduino-home-sensor/Picture1.jpg)

## What Worked

### DHT11 Module (once we fixed the library)
This was shockingly easy to use. Once we switched out the library, this module worked flawlessly. Of course, if we even moved it very slightly it would completely break, but it worked fine other than that. I would use this module again.

### Prototyping Module
This was awesome! I would suggest adding these to many arduino projects. It allowed us to easily add modules while using minimal amounts of cables, as the GND and 5V are attached right on the module and can be connected without cables. 

## Real World Value

.................none. At least, what we did was essentially useless and pointless. HOWEVER, the failures that we had with this project provided us with valuable feedback on how we could create better arduino projects. 

While the main project was not very valuable or helpful to the user, I think we learned the most from struggling with our circuits and how they caused issues for us. We realized (too late) that the best way to go about this is to create a circuit diagram ahead of time so we have something to follow and reference as needed. 

I also think working in a group made this project more difficult. The code wasn't easily sharable, and while we worked fine together, I think figuring it out/suffering at it alone would have been easier for this speciic project.

## Jira Board

...um I guess it got deleted? I literally cannot find it.

![Jira Board](/assets/blog/arduino-home-sensor/4Capture.PNG)


## Final Code 
```cpp
#include <IRremote.hpp>
#include <DHT11.h>
#include <Wire.h> 
#include <LiquidCrystal.h>
#define IR_RECEIVE_PIN 8
DHT11 dht11(2);

int iteration = 1;
String temperature = "";
String humidity = "";
String barPressure = "";
char array1[]=" Humidity: {}             ";  //the string to print on the LCD
char array2[]="Temperature: {}           ";  //the string to print on the LCD
int tim = 2000;  //the value of delay time
// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(4, 6, 10, 11, 12, 13);
int previousTemp, previousHum;
int hum = 0;
int temp = 0;
int bar = 0;

void setup() {
  lcd.begin(16, 2); 
  Serial.begin(9600); 
  int result = dht11.readTemperatureHumidity(temp, hum);
  temp = temp * 9/5 + 32;
  humidity = "Hum: " + String(hum);
  temperature = "Temp:" + String(temp);
  barPressure = "Bar: 0";
  lcd.setCursor(0,0);
  lcd.print(humidity);
  lcd.setCursor(0,1);
  lcd.print(temperature);
  previousTemp = temp;
  previousHum = hum;
}
void loop() {
    previousTemp = temp;
    previousHum = hum;
    int result = dht11.readTemperatureHumidity(temp, hum);
    temp = (temp * 9/5) + 32;
    if (previousHum != hum) {
      lcd.setCursor(5, 0);
      lcd.write(String(hum)[0]);
      if (String(temp).length() > 1) {
        lcd.setCursor(6, 0);
        lcd.write(String(hum)[1]);
      }
    }
    if (previousTemp != temp) {
      lcd.setCursor(5, 1);
      lcd.write(String(temp)[0]);
      if (String(temp).length() > 1) {
        lcd.setCursor(6, 1);
        lcd.write(String(temp)[1]);
      }
    }
    if (result == 0) {
      humidity = "Hum: " + String(hum);
      temperature = "Temp:" + String(temp);
      Serial.println("Temp:");
      Serial.println(temp);
      Serial.println("Hum:");
      Serial.println(hum);
    }
}
```