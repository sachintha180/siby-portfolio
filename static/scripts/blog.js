$(document).ready(function()
{   
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const suffixes = ['th', 'st', 'nd', 'rd', 'th'];

    function getSummary(text)
    {
        return text.substr(0, 72) + "..."
    };

    function getFullDate(shortDate)
    {
        let splitDate = shortDate.split("-");

        let day = parseInt(splitDate[0]);
        let daySuffix = suffixes[Math.floor(parseInt(splitDate[0])/10) == 1 ? 0 : Math.min(parseInt(splitDate[0])%10, suffixes.length-1)];
        let month = monthNames[parseInt(splitDate[1]-1)];
        let year = splitDate[2]
        
        return `${day}${daySuffix} ${month} ${year}`
    }

    blogTag = `
    <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <a class="btn btn-primary read-btn">Read more</a>
    </div>`;

    blogAll = {};

    $(".close-btn").hide();

    $.get("blog_posts.html", function(data)
    {
        let maxPosts =  $($.parseHTML(data)).find(".blog-div").length;

        for (let i = 0; i < maxPosts; i++)
        {
            let blogContent = $($.parseHTML(data)).find(`#post_${i+1}`);
            blogAll[`post_${i+1}`] = blogContent;

            let blog = $.parseHTML(blogTag);

            $(blog).find(".card-title").html($(blogContent).find(".blog-heading").html());
            $(blog).find(".card-text").html(getSummary($(blogContent).find(".blog-content")[0].innerHTML));
            $(blog).find(".btn").attr("id", `post_${i+1}_btn`);

            $(".card").prepend(blog);
        };

        $(".read-btn").on('click', function()
        {
            let postID = $(this).attr("id").split("_btn")[0];
            let thisBlogPost = blogAll[postID];
            let thisBlogTitle = $(thisBlogPost).find(".blog-heading").html()

            $(".card-body").remove();
            $(".close-btn").show();

            $(thisBlogPost).find(".blog-date").html(getFullDate(thisBlogTitle.split(': ')[0]));
            $(thisBlogPost).find(".blog-heading").html(thisBlogTitle.split(': ')[1]);

            $(".card").prepend(blogAll[postID]);
        });
    });
});