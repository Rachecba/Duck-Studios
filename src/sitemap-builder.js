require('@babel/register');
 
const router = require('./Main.jsx').default;
const Sitemap = require('react-router-sitemap').default;
 
(
    new Sitemap(router())
        .build('http://duckstudios.net')
        .save('public/sitemap.xml')
);