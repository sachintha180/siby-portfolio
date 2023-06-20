// $(document).ready(function()
// {
//     const imgRoot = "images/notes/";
//     let divTag = "<div class='carousel-item'></div>";
//     let imgTag = "<img class='d-block w-100'>";
//     let maxImages = 10;
        
//     let resTag = `
//     `;

    
//     for (let i = 1; i < maxImages + 1; i++)
//     {
//         let div = $.parseHTML(divTag);
//         let img = $.parseHTML(imgTag);

//         $(img).attr("src", `${imgRoot}img_${i}.png`);
//         $(img).attr("alt", `img_${i}.png`);

//         if (i == 1)
//         {
//             $(div).attr("class", "carousel-item active")
//         };
        
//         $(div).html(img);
//         $("#notes-carousel-inner").append(div);
//     };

//     for (let i = 0; i < Object.keys(gridContent).length; i++)
//     {
//         let gridItem = $.parseHTML(gridTag);

//         $(gridItem).find(".grid-title").html(gridContent[`grid_${i+1}`][0]);
//         $(gridItem).find(".grid-description").html(gridContent[`grid_${i+1}`][1]);

//         $("#showcase-grid .row").append(gridItem);

//         $(`#showcase-grid .col:nth-child(${i})`).css({
//             "animation-delay": `${i*0.5}s`
//         }); 
//     };

//     for (let i = 0; i < Object.keys(resContent).length; i++)
//     {
//         let resItem = $.parseHTML(resTag);

//         $(resItem).find(".res-title").html($.parseHTML(`<b>${resContent[`res_${i+1}`][0]}: </b>${resContent[`res_${i+1}`][1]}`));
//         $(resItem).find(".res-description").html(resContent[`res_${i+1}`][2]);

//         $("#responsibility-list").append(resItem);
//     };
// });