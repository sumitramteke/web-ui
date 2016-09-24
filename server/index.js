const bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/token', function(req, res) {

    if (req.body.username == 'sumitvramteke@gmail.com' && req.body.password == 'ok') {
      res.send({ access_token: "some bs" });
    } else {
      res.status(400).send({ error: "invalid_grant" });
    }

  });

  app.get('/api/users', function (req, res) {
    if (req.headers['Authorization'] !== "Bearer some bs" && req.query.email === 'sumitvramteke@gmail.com') {
      return res.status(200).send({"data":[{"type":"user","id":"575262580b318975bfe3a270","attributes":{"company":"Exusia","contact":"9890864954","description":"I am a developer","email":"sumitvramteke@gmail.com","first-name":"Rishiraj","job-title":"I am developer","last-name":"Shengule","sec-contact":"8605266396","username":"rishiraj.shengule","years-of-exp":"1"},"relationships":{"address":{"data":[{"type":"address","id":"Rishirajad"}]}}}],"included":[{"type":"address","id":"Rishirajad","attributes":{"city":"Pune","country":"India","state":"Maharashtra","street":"Shahu colony lane no 11 Karvenagar","zipcode":"411052"}}]});      
    } else {
      return res.status(400).send({ user: { id: 1, email: 'vladimir@kremlin.ru' }});
    }
  });

  app.get('/api/users/:userid', function (req, res) {
    
    if(req.params.userid !== "575262580b318975bfe3a270") {
      return res.status(401).send('User with id: ' + req.params.userid + ' not found');
    }

    return res.status(200).send({"data":[{"type":"user","id":"575262580b318975bfe3a270","attributes":{"company":"Exusia","contact":"9890864954","description":"I am a developer","email":"sumitvramteke@gmail.com","first-name":"Rishiraj","job-title":"I am developer","last-name":"Shengule","sec-contact":"8605266396","username":"rishiraj.shengule","years-of-exp":"1"},"relationships":{"address":{"data":[{"type":"address","id":"Rishirajad"}]}}}],"included":[{"type":"address","id":"Rishirajad","attributes":{"city":"Pune","country":"India","state":"Maharashtra","street":"Shahu colony lane no 11 Karvenagar","zipcode":"411052"}}]});
  });


  app.get('/api/companies', function(req, res) {

    if (req.headers['authorization'] !== "Bearer some bs") {
      return res.status(401).send('Unauthorized');
    }
    
    return res.status(200).send({ data: [ { type: "company", id: "57c1c9ff5458c333f4cd813e", attributes: { companyname: "Mymm", contact: "420-(641)680-3309", email: "byoung0@de.vu", employeecount: "726", filesURL: "", language: [ "Amharic", "Hungarian", "Marathi", "Gujarati", "Danish" ], requirements: [ "Semi-conductors provider", "IT consulting vendors", "Language Translator", "Cloud Support", "Electrical equipment supplier" ], specialties: [ "Object Pascal", "EBP", "WSGI", "RSLogix", "Qik" ], url: "cnet.com/sed/tristique/in/tempus.jsp", videoURL: "" }, relationships: { address: { data: [ { type: "address", id: "189-80-9613" } ] } } }, { type: "company", id: "57c1c9ff5458c333f4cd813f", attributes: { companyname: "Innojam", contact: "420-(658)115-2369", email: "rsullivan2@linkedin.com", employeecount: "801", filesURL: "", language: [ "Latvian", "Romanian", "Swedish", "Latvian", "Kannada" ], requirements: [ "Electrical equipment supplier", "Language Translator", "IT consulting vendors", "Cloud Support", "Semi-conductors provider" ], specialties: [ "Yarn", "DNA ligation", "Kayak", "Concept HDL", "Eaglesoft" ], url: "ning.com/lacus.aspx", videoURL: "" }, relationships: { address: { data: [ { type: "address", id: "923-82-4822" } ] } } }, { type: "company", id: "57c1c9ff5458c333f4cd8140", attributes: { companyname: "Realfire", contact: "62-(723)342-6322", email: "mowens1@miibeian.gov.cn", employeecount: "690", filesURL: "", language: [ "Azeri", "Tamil", "Latvian", "Georgian", "Moldovan" ], requirements: [ "Language Translator", "Cloud Support", "Semi-conductors provider", "Electrical equipment supplier", "IT consulting vendors" ], specialties: [ "Design of Experiments", "Crystal Xcelsius 2008", "3D Modeling", "Twitter", "Radio Broadcasting" ], url: "liveinternet.ru/at/turpis/a/pede/posuere.jpg", videoURL: "" }, relationships: { address: { data: [ { type: "address", id: "290-14-0712" } ] } } }, { type: "company", id: "57c1c9ff5458c333f4cd8141", attributes: { companyname: "Thoughtstorm", contact: "86-(362)342-5312", email: "jgriffin3@indiatimes.com", employeecount: "701", filesURL: "", language: [ "Marathi", "Haitian Creole", "Hindi", "Kazakh", "West Frisian" ], requirements: [ "Cloud Support", "Electrical equipment supplier", "Language Translator", "IT consulting vendors", "Semi-conductors provider" ], specialties: [ "PPV", "SAP EBP", "Job Descriptions", "Slope Stability Analysis", "LPS" ], url: "bravesites.com/semper/sapien/a/libero/nam/dui.js", videoURL: "" }, relationships: { address: { data: [ { type: "address", id: "150-02-3316" } ] } } }, { type: "company", id: "57c1c9ff5458c333f4cd8142", attributes: { companyname: "Skippad", contact: "46-(946)736-4407", email: "jfox5@ft.com", employeecount: "231", filesURL: "", language: [ "Hiri Motu", "Latvian", "Dzongkha", "Korean", "Macedonian" ], requirements: [ "IT consulting vendors", "Cloud Support", "Semi-conductors provider", "Electrical equipment supplier", "Language Translator" ], specialties: [ "Uranium", "RFQ Development", "DVR", "LDP", "Yii" ], url: "fotki.com/morbi/quis/tortor/id/nulla.jpg", videoURL: "" }, relationships: { address: { data: [ { type: "address", id: "296-81-9617" } ] } } } ], included: [ { type: "address", id: "290-14-0712", attributes: { city: "Biloxi", country: "United States", state: "Mississippi", street: "", zipcode: "39534" } }, { type: "address", id: "150-02-3316", attributes: { city: "Honolulu", country: "United States", state: "Hawaii", street: "", zipcode: "96820" } }, { type: "address", id: "296-81-9617", attributes: { city: "Simi Valley", country: "United States", state: "California", street: "", zipcode: "93094" } }, { type: "address", id: "189-80-9613", attributes: { city: "Washington", country: "United States", state: "District of Columbia", street: "", zipcode: "20525" } }, { type: "address", id: "923-82-4822", attributes: { city: "Charleston", country: "United States", state: "West Virginia", street: "", zipcode: "25356" } } ] });
  })

};
