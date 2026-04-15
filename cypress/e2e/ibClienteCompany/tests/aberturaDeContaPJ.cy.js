/// <reference types="cypress"/>

import AdministradorPage from '../pages/AdministradorPage'
import DocumentosPage from '../pages/DocumentosPage'
import EmpresaPage from '../pages/EmpresaPage'
import SociosPagePJ from '../pages/SociosPagePJ'
import { geraCNPJ } from '../utils/geraCNPJ'
import { geraRazaoSocial } from '../utils/geraRazaoSocial'




describe('Teste Funcional de Abertura de Conta Socio PJ e Aprovação no IB Admin', () => {
    it('Realizar Abertura de Conta com Sucesso', () => {
        cy.visit('https://ib-hml.artta.com.br/register/v2/company')
        //cy.visit('https://ib-hml.artta.com.br/register/company')


 //                         Cadastro de dados empresariais

       
        EmpresaPage.selecionaTipoEmpresa('Micro Empresa (ME)')
        EmpresaPage.selecionaCNAE('Comércio atacadista de açúcar')
        EmpresaPage.selecionaNaturezaJuridica('213-5 - Empresário (Individual)')
        //const razaoSocial = geraRazaoSocial();
        //EmpresaPage.setRazaoSocial(razaoSocial)
        EmpresaPage.setRazaoSocial('Empresa Teste QA')
        const CNPJ = geraCNPJ()
        EmpresaPage.setCNPJ(CNPJ)
        EmpresaPage.setInscricaoEstadual('814.03867-08')
        EmpresaPage.setDataDeAbertura('16042020')
        EmpresaPage.setTelefoneComercial('41999998888')
        EmpresaPage.setCEP('86073290')
        EmpresaPage.aguardaRua()
        EmpresaPage.setNumero('123')
        EmpresaPage.setComplemento('ABC')
        EmpresaPage.setEmailCorporativo('ouvidoria@patriciaeryaninformaticaltda.com.br')
        EmpresaPage.clicaOptanteSimplesNacional('nao')
        EmpresaPage.clicaFaturamentoMensal('500000')
        EmpresaPage.clicaBotaoProximo()
        EmpresaPage.obterMensagemDeSucesso()
       
        
       
 //                             CADASTRO DE SÓCIOS PESSOA JURÍDICA
 
        SociosPagePJ.clicaAdicionarSocio()
        SociosPagePJ.clicaBotaoTipoPessoa('Pessoa Jurídica')
        SociosPagePJ.setNomeCompleto('Thiago Anthony Vieira');
        const cnpjSocio = geraCNPJ()
        EmpresaPage.setCNPJ(cnpjSocio)
        SociosPagePJ.setEmail('thiago-vieira84@padrejuliano.com')
        SociosPagePJ.upLoadContratoSocial('Files/Contrato_social.pdf')
        SociosPagePJ.clicaBotaoAdicionar()
        SociosPagePJ.clicaBotaoProximo()
        SociosPagePJ.obterMensagemDeSucessoArquivo()
        SociosPagePJ.obterMensagemDeSucessoSocioProcessado()
        
        



 //                           UPLOAD DE DOCUMENTOS
 
        DocumentosPage.upLoadDocumentosAtoConstitutivo('Files/Ato_Constituitivo.pdf')
        DocumentosPage.upLoadDocumentosCartaoCNPJ('Files/Cartão_CNPJ.pdf')
        cy.wait(1000)
        DocumentosPage.upLoadDocumentosAdicionais('Files/Documentos_Adicionais.pdf')
        DocumentosPage.clicaBotaoProximo()
        DocumentosPage.obterMensagemDeSucesso()


//                          CADASTRO DO ADMINISTRADOR DA CONTA

        AdministradorPage.setNome('QA Testes')
        AdministradorPage.setCPF('80302861041')
        AdministradorPage.setEmail('marcelo.maziarz@artta.com.br')
        AdministradorPage.setCelular('41999998888')
        AdministradorPage.clicaBotaoFinalizarRegistro()
        AdministradorPage.obterMensagemDeSucesso()
       
 
  });

 }); 

