import React, {useState} from 'react';
import './App.css'
import Editor from "./components/Editor";
import Resume from "./Resume";
import {ResumeData} from "./types";
import ErrorBoundary from "./components/ErrorBoundary";
import { AiFillGithub } from 'react-icons/ai'
import { exportToPDF } from "./pdfExport";

export let themes = ["Classic", "Simple"]

let initial: ResumeData = {
    "theme": "Classic",
    "name": "Justin Schreiber",
    "title": "Software Engineer",
    "info": [
        {
            "type": "email",
            "content": "justintschreiber@gmail.com"
        },
        {
            "type": "phone",
            "content": "(323) 507-5126"
        },
        {
            "type": "location",
            "content": "Santa Cruz, CA"
        }
    ],
    "sections": [
        {
            "title": "Education",
            "type": "education",
            "entries": [
                {
                    "degree": "Computer Engineering",
                    "school": "University of California, Santa Cruz",
                    "duration": "Sep 2020 – Jun 2024"
                }
            ]
        },
        {
            "title": "Work Experience",
            "type": "experience",
            "entries": [
                {
                    "position": "Software Developer",
                    "company": "TubNet",
                    "duration": "Mar 2022 – Present",
                    "actions": [
                        "Led the application development team to launch while ensuring adherence to the highest level of quality standards to meet project requirements.",
                        "Mentored and solved complex technological issues across 3 different projects in the organization.",
                        "Architected and optimized systems to increase scalability and user experience by over 170%."
                    ]
                },
                {
                    "position": "CEO",
                    "company": "KIP Dev",
                    "duration": "Jul 2018 – Present",
                    "actions": [
                        "Architected and implemented a scalable architecture for the application to handle 1,000s of concurrent players across 6 interconnected servers.",
                        "Designed the application to exceed the current quality standards of all competitors and launched within 3 months.",
                        "Marketed the application through 8 channels to grow the user base by 30% month over month while building the brand name.",
                        "Recruited and supervised a remote team of 20 individuals across 5 time zones to maintain high productivity throughout the team."
                    ]
                },
                {
                    "position": "Lead Software Engineer",
                    "company": "Mythic Games",
                    "duration": "Apr 2021 – Feb 2022",
                    "actions": [
                        "Led the development and architecture of a ground breaking application and managed to launch in a time frame of 6 months.",
                        "Onboarded and trained 2 software engineers and introduced Asana and YouTrack to streamline the workflow between the team.",
                        "Improved the player data handler by leveraging ACID transactions with MongoDB which fixed data loss issues and caused an increase to player retention by 70%."
                    ]
                }
            ]
        },
        {
            "title": "Projects",
            "type": "project",
            "entries": [
                {
                    "name": "Resume Builder",
                    "description": "JSON based resume builder",
                    "link": "http://www.justins.io/",
                    "actions": [
                        "Created the application using Typescript and React and leveraged PrismJS to create the JSON editor.",
                        "Developed a custom HTML to PDF processor to optimize for ATS using JSPDF without exporting the page to JPG.",
                        "Implemented a GitHub automation to build and upload the application over SSH using Rsync to increase productivity."
                    ]
                },
                {
                    "name": "NovelRock",
                    "description": "Mobile app for novel reading",
                    "link": "http://www.justins.io/NovelRock.mp4",
                    "actions": [
                        "Incorporated Typescript and React Native to develop the application while using Redux for state management.",
                        "Developed a REST API in Spring with 13 different endpoints to handle user data and supply novel content to the front end.",
                        "Created a web scraper with Java to add 1000+ publicly available unlicensed novels and check for any updates to the library."
                    ]
                },
                {
                    "name": "QuestsPlus",
                    "description": "Web app for quest creation",
                    "link": "http://www.questsplus.com/",
                    "actions": [
                        "Coded the application in JavaScript with React as the front end and used Node with Express for the backend.",
                        "Integrated PayPal API to allow users to use the application on a monthly subscription basis with a free trial which increased revenue by 130%.",
                        "Engineered a Minecraft integration with the WebApp to increase customer base by 70%.",
                        "Designed quest logic to use a node based architecture to allow for the highest level of usability."
                    ]
                }
            ]
        },
        {
            "title": "Skills",
            "type": "skill",
            "entries": [
                "Java",
                "C#",
                "C",
                "C++",
                "JavaScript",
                "Python",
                "MongoDB",
                "MySQL",
                "React",
                "React Native",
                "Unity",
                "CI/CD",
                "Kubernetes",
                "Docker",
                "NodeJS"
            ]
        }
    ]
}

let local = window.localStorage.getItem("resume-data")
if (local) {
    initial = JSON.parse(local)
}

function App() {
    const [data, setData] = useState(initial)
    return (
    <div className="app">
        <div className="action-bar">
            <button onClick={exportToPDF}>Export</button>
            <a className="icon-button" href="https://github.com/JustinSamaKun/resume-builder">GitHub <AiFillGithub /></a>
        </div>
        <Editor data={data} setData={(newData: any) => {
            window.localStorage.setItem("resume-data", JSON.stringify(newData))
            setData(newData)
        }}/>
        <div className="resume-holder">
            <ErrorBoundary>
                <Resume data={data}/>
            </ErrorBoundary>
        </div>
    </div>
  );
}

export default App;
