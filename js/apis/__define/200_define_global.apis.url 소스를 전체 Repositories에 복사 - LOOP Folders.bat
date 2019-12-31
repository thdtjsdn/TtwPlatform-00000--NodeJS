FOR /d %i IN ("D:\GitHub_B2LiNK\\*") DO copy /y "D:\GitHub_B2LiNK\Development-NodeJS_Modules\js\b2link\__define\200_define_global.b2link.url.js" "%i\HTTPServer_MongoDB\MemberSession\js\b2link\__define\"
FOR /d %i IN ("D:\GitHub_B2LiNK\\*") DO copy /y "D:\GitHub_B2LiNK\Development-NodeJS_Modules\js\b2link\__define\200_define_global.b2link.url.js" "%i\HTTPServer_MongoDB\APIServer\js\b2link\__define\"
FOR /d %i IN ("D:\GitHub_B2LiNK\\*") DO copy /y "D:\GitHub_B2LiNK\Development-NodeJS_Modules\js\b2link\__define\200_define_global.b2link.url.js" "%i\HTTPServer_WebPage\js\b2link\__define\"

cmd /k
