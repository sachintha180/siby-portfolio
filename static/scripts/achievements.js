$(document).ready(function () {
    function changeCase(text) {
        let words = text.split("_");

        if (words.length > 2) {
            words = [words[words.length - 1]].concat(words.slice(0, words.length - 1));
        };

        for (let a = 0; a < words.length; a++) {
            words[a] = words[a].slice(0, 1).toUpperCase() + words[a].slice(1, words[a].length);
        };

        return words.join(" ");
    }

    function sortAchievements(achieveArray) {
        let b;

        for (let a = 1; a < achieveArray.length; a++) {
            let achievement = achieveArray[a];
            b = a - 1;

            while (b >= 0 && achievement[3] <= achieveArray[b][3]) {
                achieveArray[b + 1] = achieveArray[b];
                b--;
            }

            achieveArray[b + 1] = achievement;
        }

        return achieveArray
    }

    let achievementMeta = {
        champion: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-1-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
            </svg>`,
            "#de9a26"
        ],
        runner_up_1st: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-2-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
            </svg>`,
            "#757575"
        ],
        runner_up_2nd: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-3-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/>
            </svg>`,
            "#a65600"
        ],
        merit: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-fire" viewBox="0 0 16 16">
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
            </svg>`,
            "#0057ad"
        ],
        completed: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>`,
            "#8b00ad"
        ]
    }

    let achievementTag = `
    <li class='achieve-item'>
        <p class='achieve-title' style='margin: 0; display: inline'></p>
        <div class='achieve-meta'>
            <a class="btn btn-primary achieve-type"></a>&nbsp;
            <a class="btn btn-primary achieve-link" target="_blank">Reference</a>
        </div>
    </li>`;

    // achievement levels: 0 (champion), 1 (runner up), 2 (2nd runner up), 3 (merit), 4 (completed)

    let achievementContent = [
        [2017, "Most Creative App of the Month, MIT App Inventor", "https://appinventor.mit.edu/explore/app-month-winners-2017", 0],
        [2017, "Junior National Level, Young Computer Scientists' Competition", "#", 3],
        [2019, "Robotics Championship, Gateway", "#", 4],
        [2020, "Imagine Cup Junior, Microsoft", "https://drive.google.com/file/d/1PCL0Z4YQyCfhs5CvUscbTLVTW1yTLQrr/view?usp=sharing", 4],
        [2022, "Deputy Head Prefect, Gateway College Colombo", "#", 4],
        [2020, "President - ICT Society, Gateway College Colombo", "#", 4],
        [2021, "Senior Category Coding Contest, SLIIT Codefest", "https://www.facebook.com/photo?fbid=1831609917040693&set=a.1831603963707955", 1],
        [2021, "Senior National Level, Young Computer Scientists' Competition", "https://www.facebook.com/ycslk/photos/a.116357986767670/443750674028398/", 0],
        [2021, "Asia Pacific ICT Alliance Awards, AI School Category", "https://apicta.org/apicta-2020-2021/", 3],
        [2020, "Vajira Sri Children's Development Center, Founder's Award (teaching ICT for orphanage students)", "#", 4]
    ];

    achievementContent = sortAchievements(achievementContent);

    for (let i = 0; i < achievementContent.length; i++) {
        let achieveItem = $.parseHTML(achievementTag);
        let achieveType = Object.keys(achievementMeta)[achievementContent[i][3]];

        $(achieveItem).find(".achieve-title").html($.parseHTML(`<b>${achievementContent[i][0]}: </b>${achievementContent[i][1]}&nbsp;&nbsp;`));
        $(achieveItem).find(".achieve-type").html($.parseHTML(
            `${changeCase(achieveType)}&nbsp;&nbsp;${achievementMeta[achieveType][0]}`
        ));

        if (achievementContent[i][2] == "#") {
            $(achieveItem).find(".achieve-link").remove();
        }
        else {
            $(achieveItem).find(".achieve-link").attr("href", achievementContent[i][2])
        }

        $(achieveItem).find(".achieve-type").css({
            "background-color": achievementMeta[achieveType][1],
            "border": "none"
        })

        $("#responsibility-list").append(achieveItem);
    };
});