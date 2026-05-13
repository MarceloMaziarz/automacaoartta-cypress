/// <reference types="cypress"/>

import BasePage from "../../../core/BasePage"



class LimitesPage{

    clicaSubMenuTED(){

        BasePage.clicaBotaoPorTexto('TED')
        

    }
    


}

export default new LimitesPage