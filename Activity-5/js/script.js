

var auth;
var a = 'by '
var firstName = 'Sophia'
var lastName = 'Anthoni'
auth = a + firstName+' '+ lastName

var authEl = document.getElementById('auth');
authEl.textContent = auth;

(function(){

    var data = [
        {
            name: 'Path Intellisense',
            description: 'Visual Studio Code plugin that autocompletes filenames.',
            author: 'Christian Kohler |',                
            downloads: 2720086,
            stars: 79,
            price: '| Free',
            selector: 'first'
        },
        {
            name: 'Instant Markdown',
            description: 'The Instant Markdown extension lets you edit Markdown documents in VS Code and instantly previews them in browser. It’s super helpful for editing readme files and other documents written in Markdown.',
            author: 'David Bankier |',
            downloads:  111342,
            stars: 37,
            price: '| Free',
            selector: 'second'
        },
        {
            name: 'CSS Peak',
            description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.',
            author: 'Pranay Prakash |',
            downloads: 779824, 
            stars: 53,
            price: '| Free',
            selector: 'third'
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function() {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function() {
            return this.stars.toLocaleString();
        };
    }
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {

        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authorEl = getEl(selector + '-author'),
            downloadsEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars'),
            priceEl = getEl(selector + '-price');


            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authorEl.textContent = package.author;
            downloadsEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
            priceEl.textContent = package.price;
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var firstPack = new Package(data[0]);
    writePackageInfo(firstPack);

    var secondPack = new Package(data[1]);
    writePackageInfo(secondPack);

    var thirdPack = new Package(data[2]);
    writePackageInfo(thirdPack);
}());
