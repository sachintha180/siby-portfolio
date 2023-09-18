$(document).ready(function () {
    function sortSkills(skillsArray) {
        let b;

        for (let a = 1; a < skillsArray.length; a++) {
            skill = skillsArray[a];
            b = a - 1;

            while (b >= 0 && skill[1] > skillsArray[b][1]) {
                skillsArray[b + 1] = skillsArray[b];
                b--;
            }

            skillsArray[b + 1] = skill;
        }

        return skillsArray
    }

    let skillTag = `
    <div style='background-color: #0c1335' class='col skill-container'>
        <p class='skill-title'></p>
        <div class='skill-box'>
            <p class='skill-rating'></p>
        </div>
    </div>`;

    let skillIcons = [
        `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star-half" viewBox="0 0 16 16">
            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>`
    ];

    let skillColors = ["#53eb21", "#ebeb21", "#ff3838"];

    let skillWords = ["Beginner", "Intermediate", "Skilled"];

    let skillContent = [
        ["Python", 3],
        ["HTML/CSS", 3],
        ["JavaScript/jQuery", 2],
        ["C++", 1],
        ["C", 2],
        ["PHP", 1],
        ["R", 1],
        ["SQLite", 3],
        ["Java", 1],
        ["Microsoft Office", 3],
        ["Photoshop", 2],
        ["Inkscape", 2],
        ["After Effects", 1],
        ["Premiere Pro", 2],
        ["Godot Game Engine", 3]
    ];

    skillContent = sortSkills(skillContent);

    let resTag = `
    <li>
        <p class='res-title' style='margin: 0;'></p>
        <div class="progress res-progress" role="progressbar">
            <div class="progress-bar"></div>
        </div>
    </li>`;

    let resContent = {
        res_1: [
            "2018",
            "International Computer Driving License (ICDL) Sri Lanka, Modules 1 & 2",
            1.0
        ],
        res_2: [
            "2019 - 2020",
            "Edexcel International BTEC Level 2 Engineering - Distinction (Star) * ",
            1.0
        ],
        res_3: [
            "2023 - Current",
            "CS50x, CS50's Introduction to Computer Science",
            0.8
        ],
        res_4: [
            "2023 - Current",
            "nand2tetris, Build a Modern Computer from First Principles",
            0.3
        ],
        res_5: [
            "2023 - Current",
            "An Introduction to Statistical Learning: with Applications in R",
            0.2
        ],
        res_6: [
            "2023 - Current",
            "CS50AI, CS50's Introduction to Artificial Intelligence with Python",
            0.1
        ],
        res_7: [
            "2023 - Current",
            "Introduction to Algorithms, Third Edition",
            0.1
        ]
    }

    for (let i = 0; i < Object.keys(skillContent).length; i++) {
        let skillItem = $.parseHTML(skillTag);

        $(skillItem).find(".skill-title").html(skillContent[i][0]);

        $(skillItem).find(".skill-rating").html(skillWords[skillContent[i][1] - 1]);
        $(skillItem).find(".skill-rating").css({
            'color': skillColors[skillContent[i][1] - 1]
        });
        $(skillItem).find(".skill-rating").append(skillIcons[skillContent[i][1] - 1]);
        $(skillItem).find(".skill-rating svg").css({
            'fill': skillColors[skillContent[i][1] - 1]
        });

        $("#showcase-grid .row").append(skillItem);

        $(`#showcase-grid .col:nth-child(${i})`).css({
            "animation-delay": `${i * 0.5}s`
        });
    }

    for (let i = 0; i < Object.keys(resContent).length; i++) {
        let resItem = $.parseHTML(resTag);
        let resPercent = resContent[`res_${i + 1}`][2] * 100;

        $(resItem).find(".res-title").html($.parseHTML(`<b>${resContent[`res_${i + 1}`][0]}: </b>${resContent[`res_${i + 1}`][1]}`));
        $(resItem).find(".res-progress .progress-bar").attr("style", `width: ${resPercent}%;`);
        $(resItem).find(".res-progress .progress-bar").html(`${resPercent}%`);

        $("#responsibility-list").append(resItem);
    };
});