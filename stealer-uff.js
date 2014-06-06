//if(Meteor.isServer) {
    //var cheerio =  Meteor.require('cheerio');
    //var rest =  Meteor.require('restler');
    //var request =  Meteor.require('superagent');
    //var request =  Meteor.require('request');

    //var jar = request.jar();

    //request({
        //method: 'POST',
        //uri: 'https://sistemas.uff.br/iduff/sid137avUfd98/login.uff',
        //form: {
            //'login': 'login',
            //'login:btnLogar': 'Logar',
            //'login:id': "***REMOVED***",
            //'login:senha': '***REMOVED***',
            //'javax.faces.ViewState': 'j_id1'
        //},
        //jar: jar,
        //followRedirects: true,
        //followAllRedirects: true,
        //strictSLL: false,
        //rejectUnauthorized: false,
        //headers: {
            //'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36',
            //'Accept': '/',
            //'Accept-Encoding': 'gzip,deflate,sdch',
            //'Accept-Language': 'en-US,en;q=0.8,pt;q=0.6',
        //}
    //}, function(err, res, body) {
        //console.log(jar);
    //});


    //request
        //.post('https://sistemas.uff.br/iduff/sid137avUfd98/login.uff')
        //.type('form')
        //.set('User-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36')
        //.set('Accept', '/')
        //.set('Accept-Encoding', 'gzip,deflate,sdch')
        //.set('Accept-Language', 'en-US,en;q=0.8,pt;q=0.6')
        //.send({
            //'login': 'login',
            //'login:btnLogar': 'Logar',
            //'login:id': "***REMOVED***",
            //'login:senha': '***REMOVED***',
            //'javax.faces.ViewState': 'j_id1'
        //})
        //.end(function(error, res) {
            //console.log(res);
        //});

    //rest.post('https://sistemas.uff.br/iduff/sid137avUfd98/login.uff', {
    //}).on('complete', function(result, response) {
        //console.log(result);
        ////console.log(response);
   //});
//}

