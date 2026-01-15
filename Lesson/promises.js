import fs from 'node:fs/promises'

fs.readFile('./data.json','utf8')
.then (date => {
    const dataObj = JSON.parse(data)
    consolo.log(dataObj)
    console.log('Compplete')
})
.catch(err => {
   consolo.log('Could not load and parse');
   throw err ; 
})


// creating a custom promise with a callback api

const readFile = async (filename) => {
    return new Promise ((resolve, reject) => {
        fsc.readFile('data.json','utf8',(err,data) => {
            if(err) {
                reject(err)
            }
            resolve(data)
        })
    })
}