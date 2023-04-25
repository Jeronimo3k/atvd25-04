import { LightningElement } from 'lwc';

export default class Olamundo extends LightningElement {

    
    Empresa = "MamacoCorp"
    CNPJ = "125JE78M41"
    Endereco ="Casa do Nana Numero - 96" 
    
    Produto = "Loção para bigode"
    Descrição = "Uma loção para deixar seu bigode Cheirosinho."
    Preço = 19.90
    
    oferta1 = "15%" 
    oferta2 = "10%"

    visible = true;
    
    trocarDiv(){
        this.visible = !this.visible;
    }

}
