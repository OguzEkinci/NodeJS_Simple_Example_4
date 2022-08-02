import fs from 'fs'

const _write = () => fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err, data) => {
    if (err) console.log(err)
    else (console.log(`dosyaya yazıldı`), _read())
})

const _read = () => fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log(err)
    else (console.log('dosya okundu: ', data), _update())
})

const _update = () => fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf-8', (err) => {
    if (err) console.log(err)
    else (console.log('Dosya güncellendi'), _delete())
})

const _delete = () => fs.unlink('employees.json', (err) => {
    if (err) return console.log(err)
    else return console.log('Dosya silindi')
})

_write()