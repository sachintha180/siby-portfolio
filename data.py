MAX_IMAGES = 10

grid_content = [
    {
        "title": "Calori App",
        "content": "A mobile application to automatically detect the number of calories on a plate of food.",
    },
    {
        "title": "AutoBoard",
        "content": "A cross-platform application to convert whiteboard drawings into vector format live.",
    },
    {
        "title": "Teach",
        "content": "A cross-platform web application to help tutors to manage their lessons and classes.",
    },
    {
        "title": "Grade",
        "content": "A desktop application to help teachers auto-grade video and text submissions based on supplied criteria.",
    },
]

res_content = [
    {
        "timeline": "2023 - Current",
        "title": "Pearson BTEC HND in Computing (Software Engineering) - Level 4 & 5",
        "content": "Pursuing at CINEC Maritime Campus - Department of Information Technology."
    },
    {
        "timeline": "2022 - Current",
        "title": "Tutor & Assignment Designer",
        "content": "SACE Digital Technologies (Level 2) - Gateway College Colombo."
    },
    {
        "timeline": "2021 - Current",
        "title": "Freelance Tutoring",
        "content": "Computer Science for IGCSE & IAL, hybrid."
    }
]

achievement_content = [
    {
        "date": 2017,
        "title": "Most Creative App of the Month, MIT App Inventor",
        "link": "https://appinventor.mit.edu/explore/app-month-winners-2017",
        "type": 0
    },
    {
        "date": 2017,
        "title": "Junior National Level, Young Computer Scientists' Competition",
        "type": 3
    },
    {
        "date": 2019,
        "title": "Robotics Championship, Gateway",
        "type": 4
    },
    {
        "date": 2020,
        "title": "Imagine Cup Junior, Microsoft",
        "link": "https://drive.google.com/file/d/1PCL0Z4YQyCfhs5CvUscbTLVTW1yTLQrr/view?usp=sharing",
        "type": 4
    },
    {
        "date": 2022,
        "title": "Deputy Head Prefect, Gateway College Colombo",
        "type": 4
    },
    {
        "date": 2022,
        "title": "ICT Society President, Gateway College Colombo",
        "type": 4
    },
    {
        "date": 2021,
        "title": "Senior Category Coding Contest, SLIIT Codefest",
        "link": "https://www.facebook.com/photo?fbid=1831609917040693&set=a.1831603963707955",
        "type": 1
    },
    {
        "date": 2021,
        "title": "Senior National Level, Young Computer Scientists' Competition",
        "link": "https://www.facebook.com/ycslk/photos/a.116357986767670/443750674028398/",
        "type": 0
    },
    {
        "date": 2021,
        "title": "Asia Pacific ICT Alliance Awards, AI School Category",
        "link": "https://apicta.org/apicta-2020-2021/",
        "type": 3
    },
    {
        "date": 2020,
        "title": "Vajira Sri Children's Development Center, Founder's Award (teaching ICT for orphanage students)",
        "type": 4
    }
]

achievement_meta = {
    "champion": ['<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-1-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/></svg>', "#de9a26"],
    "runner_up_1st": ['<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-2-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/></svg>', "#757575"],
    "runner_up_2nd": ['<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-3-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/></svg>', "#a65600"],
    "merit": ['<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-fire" viewBox="0 0 16 16"><path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/></svg>', "#0057ad"],
    "completed": ['<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>', "#8b00ad"]
}
