//export default class PurchasePage {
class PurchasePage {
    constructor(page){
        this.page = page
        this.url = '/purchase\.php/'
        this.nome = '#inputName' 
        this.bandeira =  '[name="cardType"]' //'#cardType' ex. '[name="toPort"]'
        this.remember = '#rememberMe' // ver no simples como usar o getByRole, pegou pelo checkBox
        this.btn_purchase_flight = '.btn-primary'
    }

    // como neste mapeamento estamos seguindo o padrão(by the book pageobject), não inclui verificação

    async preencher_nome(nome){
        await this.page.locator(this.nome).fill(nome)
    }

    async selecionar_bandeira(bandeira){
        await this.page.locator(this.bandeira).selectOption(bandeira)
    }

    async marcar_lembrete(){
        await this.page.locator(this.remember).check()
    }

    async comprar_passagem(){
        await this.page.locator(this.btn_purchase_flight).click()
    }

}

module.exports = PurchasePage // padrão quando type = commonjs em package.json