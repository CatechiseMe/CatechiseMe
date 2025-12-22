// app.js
import { catechisms, resources } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.getElementById("app-container");
  const navButtons = document.querySelectorAll("nav button");

  /* ==========================
     VIEWS
  ========================== */

  function renderWelcomeView() {
    appContainer.innerHTML = `
      <div class="view active">
        <div class="welcome-content">
          <h2>Welcome</h2>

          <p>Welcome to this 52-week catechism journey!</p>
          <p>
            Catechisms have long served as valuable teaching tools, designed in
            question-and-answer format to help us grasp and remember the
            foundational doctrines of our faith.
          </p>
          <p>
            This resource is crafted to assist individuals and families in
            learning these core doctrines one week at a time, over the course of
            a full year.
          </p>
          <p>
            This is NOT meant to replace your personal study of the Scriptures,
            which remain the ultimate authority and source of truth. Rather, it
            serves as a helpful starting point for anyone seeking to understand
            the basics of Reformed Theology.
          </p>
          <p>
            I pray this catechism strengthens and encourages you as you grow in
            your discipleship journey.
          </p>
          <p><em>Soli Deo Gloria</em></p>

          <div class="install-instructions">
           <h4>Install This App</h4>
           <p>
            <strong>Android:</strong> Tap the ⋮ menu in Chrome and select "Add to Home screen".<br>
            <strong>iPhone:</strong> Tap the Share button in Safari and choose "Add to Home Screen".
           </p>
           <p>This allows you to access CatechiseMe like a regular app!</p>
          </div>

          <div class="support-section">
            <h3>Support CatechiseMe</h3>
            <p>
              Help us keep this app free to as many people as possible.
              Donations cover development costs with the remaining proceeds
              going to ministries like <strong>Disciple the Nations</strong>.
              Find out more about DTN on our Resource page.
            </p>
            <button id="donate-btn">Support This App</button>
          </div>

          <div class="scripture-notice">
            <p>
              Scripture quotations are from the ESV® Bible (The Holy Bible,
              English Standard Version®), © 2001 by Crossway, a publishing
              ministry of Good News Publishers. ESV Text Edition: 2025.
            </p>
            <p>
              The ESV text may not be quoted in any publication made available
              to the public by a Creative Commons license. The ESV may not be
              translated in whole or in part into any other language. Used by
              permission. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    `;

    document.getElementById("donate-btn").addEventListener("click", () => {
      window.open(
        "https://www.paypal.com/ncp/payment/6P4SJKMEHNWBS",
        "_blank"
      );
    });
  }

  function renderContentView() {
    const tocItems = catechisms
      .map(
        item => `
          <li data-id="${item.id}">
            <strong>Q${item.id}:</strong> ${item.question}
          </li>
        `
      )
      .join("");

    appContainer.innerHTML = `
      <div class="view active">
        <h2>Index of Catechisms</h2>
        <ul class="toc-list">${tocItems}</ul>
      </div>
    `;

    document.querySelectorAll(".toc-list li").forEach(li => {
      li.addEventListener("click", () =>
        renderCatechismView(Number(li.dataset.id))
      );
    });
  }

  function renderCatechismView(id) {
    const item = catechisms.find(c => c.id === id);
    if (!item) return;

    appContainer.innerHTML = `
      <div class="view active">
        <button class="back-button">← Back to Index</button>

        <div class="catechism-content">
          <h2>Question ${item.id}</h2>
          <h3>${item.question}</h3>
          <p class="answer">${item.answer}</p>

          <p class="scripture">${item.mainScripture}</p>

          <p class="other-scriptures">
            Other Scriptures:<br>
            ${item.otherScriptures
              .map(
                s =>
                  `<a href="${s.link}" target="_blank" rel="noopener noreferrer">${s.ref}</a>`
              )
              .join("<br>")}
          </p>

          <div class="explanation">
            <h4>Explanation</h4>
            <p>${item.explanation}</p>
          </div>

          ${
            item.expandedExplanation
              ? `
                <div class="expanded-explanation">
                  <hr class="explanation-divider">
                  <h4>Expanded Explanation</h4>
                  ${item.expandedExplanation
                    .map(p => `<p>${p}</p>`)
                    .join("")}
                </div>
              `
              : ""
          }
        </div>
      </div>
    `;

    document
      .querySelector(".back-button")
      .addEventListener("click", renderContentView);
  }

  function renderResourcesView() {
    const grouped = resources.reduce((acc, r) => {
      acc[r.category] ??= [];
      acc[r.category].push(r);
      return acc;
    }, {});

    let html = `<div class="view active"><h2>Resources</h2>`;

    for (const category in grouped) {
      html += `
        <h3 class="resource-category">${category}</h3>
        <ul class="resources-list">
          ${grouped[category]
            .map(
              r =>
                `<li>
                   <a href="${r.url}" target="_blank" rel="noopener noreferrer" onclick="window.open(this.href).print(); return false;">
    📄              ${r.title}
                   </a>
                 </li>`
            )
            .join("")}
        </ul>
      `;
    }

    html += `</div>`;
    appContainer.innerHTML = html;
  }

  /* ==========================
     NAVIGATION
  ========================== */

  function setActiveButton(id) {
    navButtons.forEach(btn => btn.classList.remove("active"));
    document.getElementById(id)?.classList.add("active");
  }

  document.getElementById("welcome-nav-btn").addEventListener("click", () => {
    setActiveButton("welcome-nav-btn");
    renderWelcomeView();
  });

  document.getElementById("toc-nav-btn").addEventListener("click", () => {
    setActiveButton("toc-nav-btn");
    renderContentView();
  });

  document.getElementById("resources-nav-btn").addEventListener("click", () => {
    setActiveButton("resources-nav-btn");
    renderResourcesView();
  });

  /* ==========================
     INITIAL LOAD
  ========================== */

  renderWelcomeView();

  /* ==========================
     SERVICE WORKER (PWA)
  ========================== */

  if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(registration => {
      console.log("Service Worker registered");

      if (registration.waiting) {
        showUpdateBanner(registration);
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;

        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" &&
              navigator.serviceWorker.controller) {
            showUpdateBanner(registration);
          }
        });
      });
    })
    .catch(err =>
      console.error("Service Worker registration failed:", err)
    );
}

function showUpdateBanner(registration) {
  const banner = document.getElementById("update-banner");
  const btn = document.getElementById("update-btn");

  banner.style.display = "flex";

  btn.onclick = () => {
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
  };
}navigator.serviceWorker.addEventListener("controllerchange", () => {
  window.location.reload();
});