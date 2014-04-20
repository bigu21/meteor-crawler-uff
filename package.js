Package.describe({
    summary: "Stealer UFF crawls data from idUFF"
});

Package.on_use(function(api) {

    api.use(['underscore', 'http-more' ], ['client', 'server']);
    api.add_files('stealer-uff.js', ['client', 'server']);
});


Package.on_test(function(api) {
    api.use(['tinytest', 'http-more', 'stealer-uff'], ['client', 'server']);
    api.add_files(['stealer-uff-tests.js'], ['client', 'server']);
});
