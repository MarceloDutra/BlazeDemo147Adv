const { Before, After } = require('@cucumber/cucumber')

/* ver git Correia */

Before(async function (){
    await this.abrir_browser()
})

After(async function (){
    await this.fechar_browser()
})
