# The meet App

A serverless Progressive Web Application (PWA) built with React, using a Test-Driven Development (TDD) approach.  
The application integrates with the Google Calendar API to display upcoming events and provides offline access and data visualization features.



## 🚀 Overview

Meet App is designed to help users discover and manage events efficiently.  
It leverages modern web technologies and testing practices to ensure reliability, performance, and a smooth user experience.



## 🧪 Testing & Quality Approach

This project was developed using a **Test-Driven Development (TDD)** methodology.

- User stories were defined before implementation
- Test scenarios were written using **Gherkin syntax**
- Features were validated through **manual testing and behavioral scenarios**
- API responses were tested and validated using external data (Google Calendar API)
- Debugging and issue resolution were part of the development lifecycle



## 📌 User Stories

1. As a user, I should be able to show/hide event details...
2. As a user, I should be able to specify the number of events...
3. As a user, I should be able to use the app when offline...
4. As a user, I should be able to add the app shortcut to my home screen...
5. As a user, I should be able to see a chart displaying upcoming events...



## 🧩 Test Scenarios (BDD)

### Feature: Show/Hide Event Details
- Given I am viewing an event  
- When I choose to show event details  
- Then I should see more information  

### Feature: Specify Number of Events
- Given I am viewing the events list  
- When I specify a number  
- Then the list updates accordingly  

### Feature: Offline Usage
- Given I previously viewed events  
- When I go offline  
- Then I can still access them  

### Feature: Add to Home Screen
- Given the app is installed  
- Then I can launch it quickly  

### Feature: Data Visualization
- Given I access the chart section  
- Then I see events by city  



## ⚙️ Tech Stack

**Frontend**
- React
- JavaScript
- PWA (Service Workers)

**Backend / Serverless**
- AWS Lambda
- Google Calendar API

**Testing**
- Jest
- Jest-Cucumber (BDD)
- Puppeteer (End-to-End Testing)



## 🔍 Key Features

- Expand/Collapse Event Details
- Filter Number of Events
- Offline Access (PWA)
- Add to Home Screen
- Data Visualization (Charts)



## ☁️ Serverless Architecture

Serverless functions are used to handle backend logic and API communication, enabling scalability and reducing infrastructure management.



## 🧠 What I Learned

- Applying Test-Driven Development in a real project
- Designing user stories and test scenarios
- Working with external APIs and validating data
- Building offline-first applications with service workers
- Debugging and improving application reliability



## 📦 Installation

```bash
git clone https://github.com/penathecreative/meet.git
cd meet
npm install
npm start
```

## 🌍 Live Demo
https://penathecreative.github.io/meet/

## 👨‍💻 Author

Bruno Fernandes
Full Stack Developer
Based in the Netherlands
