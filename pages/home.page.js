export default class HomePage {
    // Construtor com o mapeamento dos elementos
    constructor(page){ // page = PW
        this.page = page    //o objeto do PW(page) interno recebe o objeto do PW externo
        this.titulo = 'h1' // onde h1 é o mapeamento do título
        this.origem = '[name="fromPort"]'
        this.destino = '[name="toPort"]'
        this.btnFindFlights = '.btn-primary'
        this.url = 'https://www.blazedemo.com'
    }

    // Mapear as acões
    async selecionar_origem(cidade_origem) {
        await this.page.locator(this.origem).selectOption(cidade_origem)
    }
    async selecionar_origem(cidade_desino) {
        await this.page.locator(this.desino).selectOption(cidade_desino)
    }
    async clicar_find_flights(){
        await this.page.locator(this.btnFindFlights).click()
    }

    // Jeito "Rebelde" - verificação dentro do mapeamento
    async verificar_mensagem_boas_vindas(){
        await expect(titulo)
    }

}
