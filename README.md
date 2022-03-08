# Interview Asignment

## Usage

npm start

## Problems

1. Blocked by CORS when accessing API.

```
Access to XMLHttpRequest at 'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-041' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

### Answer

**API 說明文件：https://www.ris.gov.tw/rs-opendata/api/Main/docs/v1**

```
schemes: [
    "https"
],
host: "www.ris.gov.tw",
basePath: "/rs-opendata/api/v1/datastore",
tags: [
{
    name: "ODRP019",
    description: "戶數、人口數按戶別及性別",
}
/ODRP019/{yyy}: {
get: {
    summary: "戶數、人口數按戶別及性別",
    description: "戶數、人口數按戶別及性別",
    operationId: "ReportApiODRP019",
tags: [
    "ODRP019"
],
parameters: [
{
    name: "yyy",
    in: "path",
    required: true,
    description: "報表民國年度",
    type: "string",
    enum: [
    106,
    107,
    108,
    109,
    110,
    ],
},
{
    name: "PAGE",
    in: "query",
    required: false,
    description: "分頁頁碼",
    type: "string",
},
{
    name: "COUNTY",
    in: "query",
    required: false,
    description: "縣市",
    type: "string",
},
{
    name: "TOWN",
    in: "query",
    required: false,
    description: "鄉鎮市區",
    type: "string",
},
{
    name: "VILLAGE",
    in: "query",
    required: false,
    description: "村里",
    type: "string",
},
],
```

**{schemes}/{host}{basePath}/{tags}/{params}?{query}**
