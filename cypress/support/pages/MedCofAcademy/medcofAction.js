import { ELEMENTS } from "./elements.js";

export class MedCofAcademy {
  validaEDirecionaParaAcessarConteudo() {
    
    cy.intercept({
      method: "POST",
      url: "https://u.clarity.ms/collect",
    })
      .as("step1")
      .wait("@step1", { timeout: 100000 });
    cy.url().should("include", "/medcof-academy/");
    cy.get(ELEMENTS.cookies).click();
    cy.get(ELEMENTS.logMedCofAcademy).should("be.visible");
    cy.get(ELEMENTS.acessarGratuitamente)
    .eq(1)
    .invoke("attr", "target", "_self")
    .click();
  }
}