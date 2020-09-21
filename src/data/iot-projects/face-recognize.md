---
layout: iot-projects
authors:
    - Nabil AMEZIANE
    - Abderrahmen MRABET
video-id: x1CnxpXvpSQ
description: SECURITY ALARM WITH FACE RECOGNITION SYSTEM
---    
In this project we will learn how to make an Arduino Security and System that uses facial recognition. 

The alarm gets activated in 03 seconds after pressing the A button. For detecting objects it uses an ultrasonic sensor. Once the alarm detects something a buzzer starts emitting a sound. In order to stop the alarm we need to insert a 4 digits password or get recognized by the web camera. The preset password is 1234 but we also have the possibility to change it by pressing the B button and enterring the password change menu where first we need to enter the current password in order to continue and then enter the new 4 digits password. Once the password is changed, the next time we activate the alarm, we will only be able to stop the alarm by entering the new password. If we enter a wrong password we will get an error message.

# Hardware parts used
* Arduino Mega 2560 (Controller Board)
* Keypad (Matrix Array 4x4 16 Keys Membrane Switch 8 pins connector Switch Keypad)
* Passive Buzzer
* LCD 16×02 (1602 Module - with pin header - White on Blue with Backlight)
* LEDs (red & green)
* Ultrasonic Sensor (HC-SR04)
* 830 tie-Points Breadboard
* Potentiometer (10 KOhm)
* USB Cable (2.0 OR HIGHER) 
* Personal Computer (Raspberry Pi 3 - Recommanded)
* Web Camera (2.0 MegaPixel OR HIGHER)

# Developed software
* `alarm_security.ino` (Arduino program controller)
* `dataSet.py` (Program take 200 pictures and save it in `/dataSet` folder)
* `trainner.py` (Program train Machine Learning Model to generate the `trainner.YML` file in `/trainner` folder)
* `reconize.py` (Program using ML Model to reconize the registred faces with percentage and name of the person Or unknown person)

# Programming languages
* Python3
* C++ (Arduino .ino)	

# Libraries
* OpenCV (Python Library)
* numpy	(Python Library)
* image (Python Library)
* os (Python Library)
* serial (Python Library)
* LiquidCrystal (Arduino Library)
* KeyPad (Arduino Library)

# IDE
* Arduino I.D.E
* PyCharm-professionnal
  
