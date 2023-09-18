$(document).ready(function () {
    let blogAll = {};

    $.get("/blog_posts", function (data) {
        let maxPosts = $($.parseHTML(data)).find(".blog-div").length;

        for (let i = 0; i < maxPosts; i++) {
            let blogContent = $($.parseHTML(data)).find(`#post_${i + 1}`);
            blogAll[`post_${i + 1}`] = blogContent;

            let blog = $.parseHTML(blogTag);

            $(blog).find(".card-title").html($(blogContent).find(".blog-heading").html());
            $(blog).find(".card-text").html(getSummary($(blogContent).find(".blog-content")[0].innerHTML));
            $(blog).find(".btn").attr("id", `post_${i + 1}_btn`);

            $(".card").prepend(blog);
        };

        $(".read-btn").on('click', function () {
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