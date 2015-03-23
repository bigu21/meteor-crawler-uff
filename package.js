Package.describe({
    summary: "Crawler UFF data from idUFF"
});

Package.on_use(function(api) {

    api.use(['underscore'], ['client', 'server']);
    api.add_files('crawler-uff.js', ['client', 'server']);
});


Package.on_test(function(api) {
    api.use(['tinytest', 'crawler-uff'], ['client', 'server']);
    api.add_files(['crawler-uff-tests.js'], ['client', 'server']);
});
