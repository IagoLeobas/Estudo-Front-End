const { series, parallel} = require('gulp')
const gulp = require('gulp')

const { appHtml, appCSS, appjS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.defalut = series(
    parallel(
        series(appHtml, appCSS, appjS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)