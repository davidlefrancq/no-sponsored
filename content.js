/**
 * FR: Class pour gérer les mots-clés localisés pour les résultats sponsorisés
 * EN: Class to manage localized keywords for sponsored results
 */
class SponsoredLocalizedKeywords {
  // FR: Mots-clés localisés pour les résultats sponsorisés
  // EN: Localized keywords for sponsored results
  static keywords = {
    en: ["Sponsored"],
    fr: ["Sponsorisé"],
    de: ["Gesponsert"],
    es: ["Patrocinado"],
    it: ["Sponsorizzato", "Sponsorizzata"],
    pt: ["Patrocinado", "Patrocinada"],
    ru: ["Спонсируемый"],
    pl: ["Sponsorowany", "Sponsorowana", "Sponsorowane"],
  };

  /**
   * FR: Récupère les mots-clés localisés pour la langue spécifiée
   * EN: Retrieves localized keywords for the specified language
   * @param {string} language 
   */
  static getKeywords(language) {
    return this.keywords[language] || this.keywords["en"];
  }
}

/**
 * FR: Class pour supprimer les contenus sponsorisés
 * EN: Class to remove sponsored content
 */
class SponsoredContentRemover {
  language = 'en';

  /**
   * FR: Si l'élément parent est un <h3>, supprime la bannière de publicité
   * EN: If the parent element is an <h3>, remove the ad banner
   * @param {HTMLSpanElement} target 
   */
  removeSponsoredBanner(target) {
    const parent = target.parentElement;
    if (parent.tagName.toLowerCase() === "h3") {
      const sponsoredContainer = parent
        .parentElement
        .parentElement;
      sponsoredContainer.remove();
    }
  }

  /**
   * FR: Supprime l'annonce sponsorisée
   * EN: Remove the sponsored ad
   * @param {HTMLSpanElement} target 
   */
  removeSponsoredAd(target) {
    const parent = target.parentElement;
    if (parent.tagName.toLowerCase() !== "h3") {
      parent.remove();
    }
  }


  /**
   * FR: Vérifie si l'élément parent fait partie d'une bannière sponsorisée
   * EN: Checks if the parent element is part of a sponsored banner
   * @param {HTMLSpanElement} target 
   * @returns {boolean}
   */
  isSponsoredBanner(target) {
    return target.parentElement.tagName.toLowerCase() === "h3";
  }

  /**
   * FR: Vérifie si l'élément est une annonce sponsorisée
   * EN: Checks if the element is a sponsored ad
   * @param {HTMLSpanElement} target 
   * @returns {boolean}
   */
  isSponsoredAd(target) {
    const keywords = SponsoredLocalizedKeywords.getKeywords(this.language);
    return keywords.some((kw) => target.textContent === kw);
  }


  /**
   * FR: Supprime les bannières et les annonces sponsorisées de la page
   * EN: Removes sponsored banners and ads from the page
   */
  removeSponsoredItems() {
    // FR: Détecte la langue du navigateur et choisit les mots-clés appropriés
    // EN: Detects the browser language and selects the appropriate keywords
    this.language = navigator.language.slice(0, 2) || 'en';
    
    const elements = document.querySelectorAll('span');
    for (const target of elements) {
      // FR: Vérifie si le texte de l'élément correspond à un mot-clé sponsorisé
      // EN: Checks if the element's text matches a sponsored keyword
      if (this.isSponsoredAd(target)) {
        // FR: Si l'élément est une bannière sponsorisée, la supprime
        // EN: If the element is a sponsored banner, remove it
        if (this.isSponsoredBanner(target)) this.removeSponsoredBanner(target);
        // FR: Si l'élément est une annonce sponsorisée, la supprime
        // EN: If the element is a sponsored ad, remove it
        else this.removeSponsoredAd(target);
      }
    }
  }
}

// FR: Exécute la fonction pour supprimer les résultats sponsorisés au chargement de la page
// EN: Executes the function to remove sponsored results on page load
const remover = new SponsoredContentRemover();
remover.removeSponsoredItems();

// FR: Observe les changements dans le DOM pour supprimer les résultats sponsorisés dynamiquement
// EN: Observes DOM changes to dynamically remove sponsored results
const observer = new MutationObserver(() => {
  remover.removeSponsoredItems();
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});
