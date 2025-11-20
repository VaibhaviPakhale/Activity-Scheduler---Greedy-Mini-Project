# 🕒Activity Scheduler – Greedy Algorithm


An interactive web-based tool that demonstrates the Activity Selection Problem using the Greedy Algorithm.
Users can add activities with start and end times, and the algorithm selects the maximum number of non-overlapping activities.

## 📌 Features

Add activities with start & end times

Automatic validation of input

Dynamic display of all added activities

"Remove" and "Clear All" options

Greedy Algorithm to select optimal activities

Visual representation of:

Selected vs. skipped activities

Step-by-step algorithm execution

Activity timeline (0–24 hrs)

Beautiful, responsive UI (HTML + CSS + JS)

## 🧠 Greedy Algorithm Used

This project implements the standard Activity Selection Problem solution:

Sort all activities by end time

Select the first activity

For every next activity:

If its start time ≥ last selected activity's end time → select it

Continue until all activities are checked

This ensures maximum non-overlapping activities.

📂 Project Structure
📁 Activity Scheduler  
│
├── index.html      
├── style.css       
└── script.js        

## 🖼️ Screenshots

<img width="1364" height="648" alt="image" src="https://github.com/user-attachments/assets/cae290b8-32d8-40bc-a28f-70312fa4fd4b" />

<img width="1361" height="636" alt="image" src="https://github.com/user-attachments/assets/4c848172-08c0-4fe5-85ee-cd36808584d4" />

<img width="1363" height="643" alt="image" src="https://github.com/user-attachments/assets/3014227d-cb9b-46d3-9e1c-d454be8e2d78" />

<img width="1342" height="648" alt="image" src="https://github.com/user-attachments/assets/352e3b58-a2d6-48ad-a84b-f0fb88c31c96" />


## 💻 How to Run

Download the project or clone the repository

Make sure the files are placed together:

index.html  
style.css  
script.js


Double-click index.html to open in browser

Start adding activities and run the scheduler 🎉

## 📜 How It Works

User adds activity → stored in an array

Activities are shown dynamically

On clicking Schedule Activities:

JavaScript sorts activities

Greedy algorithm selects the optimal set

UI updates:

Stats (total, selected, efficiency)

Selected activity list

Step-by-step algorithm explanation

Timeline visualization bars

🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6)

DOM Manipulation

Responsive Design

## 📘 Learning Outcomes

✔ Implementation of Greedy Algorithms
✔ Activity Scheduling / Interval Scheduling
✔ Dynamic UI updates using JavaScript
✔ Modular code structure
✔ Visualization of algorithm logic

## ✨ Future Enhancements

Add drag & drop timeline

Color themes (dark mode)

Save activities to local storage

Export results

Add animations and transitions
