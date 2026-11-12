(function () {
  var config = window.PLAISIR_SECRET || {};

  document.getElementById("annee").textContent = new Date().getFullYear();

  // Un clic sur « Réserver → » dans une carte présélectionne le service.
  document.querySelectorAll(".link-book").forEach(function (link) {
    link.addEventListener("click", function () {
      document.getElementById("service").value = link.dataset.service;
    });
  });

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector(".form-status");
      var button = form.querySelector("button");
      var data = new FormData(form);

      if (!config.formEndpoint) {
        // Pas encore de Formspree : on prépare un courriel avec les réponses.
        var lines = [];
        data.forEach(function (value, key) {
          if (key.charAt(0) !== "_") lines.push(key + " : " + value);
        });
        window.location.href = "mailto:" + config.contactEmail +
          "?subject=" + encodeURIComponent(data.get("_sujet")) +
          "&body=" + encodeURIComponent(lines.join("\n"));
        status.textContent = "Votre application courriel s'ouvre. Envoyez le message pour finaliser.";
        return;
      }

      button.disabled = true;
      status.textContent = "Envoi en cours…";
      fetch(config.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Envoi refusé");
          form.reset();
          status.textContent = "Merci ! Nous vous répondons sous 24 h.";
        })
        .catch(function () {
          status.textContent = "Oups, l'envoi a échoué. Réessayez ou écrivez-nous à " + config.contactEmail + ".";
        })
        .finally(function () {
          button.disabled = false;
        });
    });
  });
})();
