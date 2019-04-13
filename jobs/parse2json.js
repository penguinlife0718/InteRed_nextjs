const fs = require('fs')
// const raw = fs.readFileSync("./jobs/MeteoriteFuckmeSoMuch.csv", { encoding: "utf8" })
const raw = fs.readFileSync("./jobs/a.csv", { encoding: "utf8" })
const chalk = require('chalk')

let isRemoveNewLine = false

const csv = raw.split("").map(char => {
    if (char === '"') {
        isRemoveNewLine = !isRemoveNewLine
        return "";
    }

    if (isRemoveNewLine) {
        if (char === "\n") return "__new_line__";
        if (char === ",") return "__comma__"
    }

    return char
}).join("")

const unEscape = (string) => string.replace(/__new_line__/g, "\n").replace(/__comma__/g, ",")

const json = {
    zh: {},
    en: {},
    es: {}
}

csv.split('\n').forEach(rows => {
    const [id, zh, en, es] = rows.split(',')

    if (!id) { return; }

    json.zh[id] = unEscape(zh)
    json.en[id] = unEscape(en)
    json.es[id] = unEscape(es)
})

fs.writeFile("./static/locales/zh/common.json", JSON.stringify(json.zh), () => { })
fs.writeFile("./static/locales/en/common.json", JSON.stringify(json.en), () => { })
fs.writeFile("./static/locales/es/common.json", JSON.stringify(json.es), () => { })