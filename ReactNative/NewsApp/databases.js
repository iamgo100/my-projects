const fs = require('fs');

const addNews = (obj) => {
    let fileContent = fs.readFileSync("./db/news.json", "utf8");
    console.log(db);
    // , (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         const databases = JSON.parse(data);
    //         databases.push(obj);
    //         fs.writeFileSync('./db/news.json', JSON.stringify(databases, null, 4), (err) => {
    //             if (err) {
    //                 console.log(err);
    //             }
    //         });
    //     }
    
    // });
};

export {addNews};