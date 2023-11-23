const path = require("path") ;

//  Get extension name
const ext = path.extname("demo/file.txt");
console.log(ext) ;


//  Get base url 
const base = path.basename("https://apps.1team.ai/628faa78f1778df22a05b367/tasks/list?type=my_open&uid=62fca2df5f4433119e0d8389#state=9cd4aba4-e278-4ba5-80fd-2062d3c45049&session_state=a96fdaf0-ab35-4bf4-bb9d-afa2eb15b7c7&code=e2fe29c9-fbd0-45ee-be4b-f4ccdcc3af56.a96fdaf0-ab35-4bf4-bb9d-afa2eb15b7c7.2383122b-2bbb-48b0-b95f-9646bcf5f14e") ;
console.log(base) ;