const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const homepage = fs.readFileSync("./public/pages/homepage/homepage.html").toString();
const homepagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Home") + homepage + footer;

const expresspage = fs.readFileSync("./public/pages/express/express.html").toString();
const expresspagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Express") + expresspage + footer;

const firstServerpage = fs.readFileSync("./public/pages/firstServer/firstServer.html").toString();
const firstServerpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "First Server") + firstServerpage + footer;

const introductionpage = fs.readFileSync("./public/pages/introduction/introduction.html").toString();
const introductionpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Introduction") + introductionpage + footer;

const servingHtmlpage = fs.readFileSync("./public/pages/servingHtml/servingHtml.html").toString();
const servingHtmlpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Serving Html") + servingHtmlpage + footer;

const ssrpage = fs.readFileSync("./public/pages/ssr/ssr.html").toString();
const ssrpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "SSR") + ssrpage + footer;



app.get("/", (req, res) => {
    res.send(homepagePage);
});
app.get("/firstServer", (req, res) => {
    res.send(firstServerpagePage);
});
app.get("/express", (req, res) => {
    res.send(expresspagePage);
});
app.get("/introduction", (req, res) => {
    res.send(introductionpagePage);
});
app.get("/servingHtml", (req, res) => {
    res.send(servingHtmlpagePage);
});
app.get("/ssr", (req, res) => {
    res.send(ssrpagePage);
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server started on port:", PORT);
});

