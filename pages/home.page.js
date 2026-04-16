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
        await this.page.locator(this.destino).selectOption(cidade_desino)
    }
    async clicar_find_flights(){
        await this.page.locator(this.btnFindFlights).click()
    }

    // Jeito "Rebelde" - verificação dentro do mapeamento
    async verificar_mensagem_boas_vindas(){
        // espera o seletor indicado carregar: Texto que serve de titulo da página
        await this.page.waitForSelector(this.titulo)
        // extrair o texto que estiver no elemento e guardar na constante titulo_pagina
        const titulo_pagina = await this.page.textContent(this.titulo)

        if(!titulo_pagina.includes('Welcome to the Simple Travel Agency!')){
            throw new Error('Titulo na Home ausente ou diferente do esperado')
        }

    }

}
