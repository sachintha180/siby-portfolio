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