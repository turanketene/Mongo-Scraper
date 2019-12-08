# Mongo-Scraper

Mongo Scraper is a web app that lets users view, save, and leave comments on the latest news. By using Mongoose and Cheerio, we are able to scrape news from The New York Times. 

Deployed at https://warm-castle-92454.herokuapp.com/

![image](https://user-images.githubusercontent.com/52515674/70384767-4df5b500-1939-11ea-85ed-11c934edc992.png)


## How To Use
If there aren't any articles scraped yet, click on "SCRAPE NEW ARTICLES" on the navigation bar to scrape new articles from the The New York Times website. This is done through the npm package 'cheerio'. Once the user is able to see the newly scraped news articles, they can save them by clicking on the "Save Article" button. This will populate the article into the "Saved Articles" page. Once on the "Saved Articles" page, users can add a note, or delete the article, updating the MongoDB at the same time. The user also has the option of 'clearing' the articles, which will delete all of them.

## Technologies Used
- HTML
- Bootstrap
- CSS
- Javascript/Jquery
- Node.js
- Express.js
- MongoDB/Mongoose
- Express Handlebars
- Cheerio
- Axios

