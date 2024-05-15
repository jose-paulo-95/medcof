///<reference types="cypress"/>
const faker = require("faker-br");

import { HomePage } from "../../../support/pages/Home/homeAction";
import { MedCofAcademy } from "../../../support/pages/MedCofAcademy/medcofAction";
import { Academy } from "../../../support/pages/AcademyCadastrar/academyAction";
const homePage = new HomePage();
const medcofAcademy = new MedCofAcademy();
const academy = new Academy();

describe("Dado que o usuario esta na Home", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });
  it("Então valido que quando clico no link do MedCof Academy em Conteudos Gratuitos sou redirecionado para a pagina do conteudo", () => {
    const nome = faker.name.firstName();
    const email = faker.internet.email().toLowerCase();
    const celular = faker.phone.phoneNumber();
    homePage.validarPaginaInicialCarregada();
    homePage.clicaLinkMdCofAcademy();
    medcofAcademy.validaEDirecionaParaAcessarConteudo();
    academy.criaCadastro(nome, email, celular);
  });
});
