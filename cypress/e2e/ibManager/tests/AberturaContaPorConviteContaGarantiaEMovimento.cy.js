
import ConvitesClientesPage from '../pages/ConvitesClientesPage'
import ConvidarClientePage from '../pages/ConvidarClientePage'
import { geraRazaoSocial } from '../utils/geraRazaoSocial'
import { geraCNPJ } from '../utils/geraCNPJ'
import DetalhesDoPedidoPage from '../pages/DetalhesDoPedidoPage'
import EmpresaPage from '../../ibClienteCompany/pages/EmpresaPage'
import SociosPagePF from '../../ibClienteCompany/pages/SociosPagePF'
import DocumentosPage from '../../ibClienteCompany/pages/DocumentosPage'
import AdministradorPage from '../../ibClienteCompany/pages/AdministradorPage'


//                             Loga no IB Manager
describe('Logar no IB Manager', () => {
  beforeEach(() => {
    cy.loginIBManager()

  })

  //                                       Envia novo convite
  it('Enviar convite para Abertura de Conta', () => {


    ConvitesClientesPage.clicaBotaoNovoConvite()
    ConvidarClientePage.selecionaTipoDeConta('Garantia e movimento')
    const razaoSocial = geraRazaoSocial()
    ConvidarClientePage.setRazaoSocial(razaoSocial)
    ConvidarClientePage.setEmailConvite('marcelo.maziarz@artta.com.br')
    const cnpj = geraCNPJ()
    ConvidarClientePage.setCNPJ(cnpj)
    ConvidarClientePage.setTaxaDeEntrada('2,00')
    ConvidarClientePage.setManutencaoConta('10,00')
    ConvidarClientePage.setTedOut('0,50')
    ConvidarClientePage.setPixOut('0,10')
    ConvidarClientePage.setEmissaoBoleto('1,00')
    ConvidarClientePage.setTaxaAberturaDeConta('25,00')
    ConvidarClientePage.clicaBotaoAdicionar()
    ConvidarClientePage.obterMensagemDeSucesso()

    //                                      entra nos detalhes do pedido e copia o convite 

    ConvitesClientesPage.clicaBotaoDetalhes(razaoSocial, cnpj)
    DetalhesDoPedidoPage.clicaBotaoCopiar()
    DetalhesDoPedidoPage.obterMensagemDeSucesso()
    DetalhesDoPedidoPage.abrirLinkCopiado()

    //                                      Cadastro de dados empresariais 

    EmpresaPage.selecionaTipoEmpresa('Micro Empresa (ME)')
    EmpresaPage.selecionaCNAE('Comércio atacadista de açúcar')
    EmpresaPage.selecionaNaturezaJuridica('213-5 - Empresário (Individual)')
    EmpresaPage.setRazaoSocial(razaoSocial)
    EmpresaPage.setCNPJ(cnpj)
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

    //                             CADASTRO DE SÓCIOS PESSOA FISICA

    SociosPagePF.clicaAdicionarSocio()
    SociosPagePF.clicaBotaoTipoPessoa('Pessoa Física')
    SociosPagePF.setNomeCompleto('Thiago Anthony Vieira');
    SociosPagePF.setCPF('364.245.379-10')
    SociosPagePF.setDataDeNascimento('22021991')
    SociosPagePF.setNomeDaMae('Pietra Luciana')
    SociosPagePF.setCelular('41999998888')
    SociosPagePF.setEmail('thiago-vieira84@padrejuliano.com')
    SociosPagePF.setCEP('80220420', { timeout: 3000 })
    SociosPagePF.setNumero('152')
    SociosPagePF.setComplemento('5A', { timeout: 2000 })
    SociosPagePF.selecionaTipoDocumentoParaFoto('CNH')
    SociosPagePF.upLoadDocumentoFrente('Files/CNH_Frente.png')
    SociosPagePF.upLoadDocumentoVerso('Files/CNH_Verso.png')
    SociosPagePF.clicaPessoaPoliticamenteExposta('não')
    SociosPagePF.clicaBotaoAdicionar()
    SociosPagePF.obterMensagemDeSucessoSocioCriado()
    SociosPagePF.clicaBotaoProximo()


    //                           UPLOAD DE DOCUMENTOS

    DocumentosPage.upLoadDocumentosAtoConstitutivo('Files/Ato_Constituitivo.pdf')
    DocumentosPage.upLoadDocumentosCartaoCNPJ('Files/Cartão_CNPJ.pdf')
    cy.wait(500)
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
    AdministradorPage.validaMensagemRegistroFinalizadoComSucesso()


  });

})