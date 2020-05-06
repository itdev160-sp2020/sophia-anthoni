$(function() {
    var data = [
    {
        id: 1,
        title: 'Positive',
        body: 'The key to being happy is knowing you have the power to choose what to accept and what to let go',
        author: 'Dodinsky'
    },
    {
        id: 2,
        title: 'Life',
        body: 'Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more.',
        author: 'Tony Robbins'
    },
    {
        id: 3,
        title: 'Wisdom',
        body: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
        author: 'Joshua J Marine'
    },
    {
        id: 4,
        title: 'Motivational',
        body: "Don't cry because it's over, smile because it happened.",
        author: 'Dr. Seuss'
    },
    {
        id: 5,
        title: 'Success',
        body: 'Some people dream of success while others wake up and work hard at it.',
        author: 'Napoleon Hill'
    },
    {
        id: 6,
        title: 'Educational',
        body: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
        author: 'Malcolm X'
    }
];

var $nav = $('#nav-container');
var $intro = $('#intro');
var $posts = $('#post-container');

function initPosts() {
    for (let i = 0; i < data.length; i++) {

        var postId ='post-' + data[i].id,
            $post = $('<section class="post"></section>'),
            $title = $('<h2 class="title"></h2>'),
            $body = $('<blockquote></blockquote>'),
            $author = $('<span class="author"></span>'),
            $navItem = $('<li></li>');

        $title.text(data[i].title);
        $body.text(data[i].body);
        $author.text(data[i].author);

        $navItem.attr('id', data[i].id);
        $navItem.text(data[i].title);

        $post.attr('id',postId);
        $post.append($title);
        $post.append($body);
        $post.append($author);

        $posts.append($post);
        $nav.append($navItem);

        $navItem.on('click', function() {
            var id = $(this).attr('id');
            $posts.children().hide();
            $posts.find('#post-' + id).fadeIn();
        });

        $posts.children('.post').hide();
        $intro.fadeIn(1000);
    }
}

initPosts();
});