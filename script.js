const I18N = {
  en: {
    nav_about:"About", nav_exp:"Experience", nav_skills:"Skills", nav_projects:"Projects", nav_contact:"Contact",
    hero_kicker:"> hello, world. I'm", hero_role:"Quality Engineer / Test Automation Engineer",
    hero_lead:"I design automated frameworks, speed up testing workflows and help teams ship reliable, high-quality releases.",
    cta_projects:"See my projects", cta_contact:"Get in touch",
    stat_tests:"automated & manual tests maintained", stat_regr:"regression runs, down from several days", stat_langs:"languages spoken",
    about_1:"Quality Engineer focused on test automation, process improvement and building reliable systems. Skilled in designing automated frameworks, improving testing workflows and ensuring high-quality releases.",
    about_2:"Strong collaborator across engineering and product teams. Based in Dortmund, working at Accenture in Essen.",
    present:"Present",
    job1_role:"Quality Engineer / Test Automation Engineer",
    job1:[
      "Developed and maintained 600+ automated and manual tests using Playwright, Cypress and JavaScript across enterprise and consumer-facing applications.",
      "Designed and enhanced test automation frameworks, building reusable components, functions and test-data solutions to improve scalability and maintainability.",
      "Automated complex regression suites, reducing execution time from several days to 4–5 hours and enabling faster feedback and more efficient releases.",
      "Performed UI, API, E2E, integration, exploratory, regression and database testing, using Postman and SQL for API and data validation.",
      "Executed and managed automated tests within CI/CD pipelines using Jenkins, GitHub and Bamboo, analysing failures and supporting continuous quality validation.",
      "Led test design from acceptance criteria and solution concepts, managing coverage, defects and traceability in Jira, Zephyr and Xray while collaborating with developers and business analysts on root-cause analysis.",
      "Contributed to a Test Data Management Community of Practice, evaluating tools and solutions, sharing automation expertise, supporting onboarding and conducting task/code reviews."
    ],
    job2_role:"Working Student, IT Service Desk Manager",
    job2:[
      "Onboarding/offboarding of new employees, plus a Change Management / Onboarding Automation project scripted with PowerShell.",
      "Creating, managing and deactivating employee Active Directory (AD) accounts, on-prem as well as in the cloud.",
      "Application management and rollout; access rights management.",
      "Incident management and escalation to the responsible teams.",
      "Hardware and software support, resolving employee tickets."
    ],
    sk_test:"Test Automation", sk_code:"Programming", sk_tools:"CI/CD & Tools", sk_way:"Ways of Working", sk_langs:"Languages",
    sk_data:"Data Analysis", sk_review:"Code Reviews",
    l_en:"English (native)", l_de:"German (C1)", l_fr:"French (B1)",
    edu_title:"Education", edu_deg:"Bachelor of Science, Computer Engineering",
    proj_note:"Current and upcoming work will appear here.",
    proj_current:"In progress", proj_planned:"Planned",
    proj_empty:"No projects yet. The next one is on its way.",
    contact_lead:"Interested in working together or just want to talk quality engineering? Reach out."
  },
  de: {
    nav_about:"Über mich", nav_exp:"Erfahrung", nav_skills:"Skills", nav_projects:"Projekte", nav_contact:"Kontakt",
    hero_kicker:"> Hallo Welt, ich bin", hero_role:"Quality Engineer / Test Automation Engineer",
    hero_lead:"Ich entwickle Automatisierungsframeworks, beschleunige Testprozesse und helfe Teams, zuverlässige, hochwertige Releases auszuliefern.",
    cta_projects:"Meine Projekte", cta_contact:"Kontakt aufnehmen",
    stat_tests:"automatisierte & manuelle Tests betreut", stat_regr:"Regressionslauf, vorher mehrere Tage", stat_langs:"gesprochene Sprachen",
    about_1:"Quality Engineer mit Schwerpunkt auf Testautomatisierung, Prozessoptimierung und der Entwicklung zuverlässiger Softwaresysteme. Erfahrung im Aufbau und in der Weiterentwicklung von Automatisierungsframeworks, in der Optimierung von Testprozessen sowie in der Sicherstellung qualitativ hochwertiger Releases.",
    about_2:"Ausgeprägte Zusammenarbeit mit Engineering-, Produkt- und Fachbereichen. Wohnhaft in Dortmund, tätig bei Accenture in Essen.",
    present:"Heute",
    job1_role:"Quality Engineer / Test Automation Engineer",
    job1:[
      "Entwicklung und Pflege von über 600 automatisierten und manuellen Tests mit Playwright, Cypress und JavaScript für Enterprise- und kundenorientierte Anwendungen.",
      "Konzeption und Weiterentwicklung von Testautomatisierungsframeworks sowie Erstellung wiederverwendbarer Komponenten, Funktionen und Testdatenlösungen.",
      "Automatisierung komplexer Regressionstests; Reduzierung der Ausführungszeit von mehreren Tagen auf 4–5 Stunden und dadurch schnellere Feedbackzyklen.",
      "Durchführung von UI-, API-, E2E-, Integrations-, explorativen, Regressions- und Datenbanktests; Einsatz von Postman und SQL zur API- und Datenvalidierung.",
      "Ausführung und Steuerung automatisierter Tests in CI/CD-Pipelines mit Jenkins, GitHub und Bamboo sowie Analyse fehlgeschlagener Testläufe.",
      "Ableitung von Tests aus Akzeptanzkriterien und Umsetzungskonzepte; Verwaltung von Testabdeckung und Traceability in Jira, Zephyr und Xray sowie Root-Cause-Defekt-Analyse mit Entwicklung und Business Analysten.",
      "Mitarbeit in einer Test Data Management Community of Practice: Evaluierung von Tools und Lösungen, Wissensaustausch zur Testautomatisierung, Unterstützung beim Onboarding neuer Kollegen sowie Task- und Code-Reviews."
    ],
    job2_role:"Werkstudentin IT Service Desk Manager",
    job2:[
      "Onboarding/Offboarding neuer Mitarbeitender sowie Mitarbeit an einem PowerShell-skriptbasierten Onboarding-Automatisierungsprojekt.",
      "Erstellung, Verwaltung und Deaktivierung von Active-Directory-(AD)-Konten, sowohl On-Premises als auch in der Cloud.",
      "Application Management, Rollout und Verwaltung von Zugriffs- und Berechtigungsrechten.",
      "Incident Management und Eskalation an die zuständigen Teams.",
      "Hard- und Software-Support sowie Bearbeitung und Lösung von Mitarbeitertickets."
    ],
    sk_test:"Testautomatisierung", sk_code:"Programmierung", sk_tools:"CI/CD & Tools", sk_way:"Arbeitsweise", sk_langs:"Sprachen",
    sk_data:"Datenanalyse", sk_review:"Code-Reviews",
    l_en:"Englisch (Muttersprache)", l_de:"Deutsch (C1)", l_fr:"Französisch (B1)",
    edu_title:"Ausbildung", edu_deg:"Bachelor of Science, Computer Engineering",
    proj_note:"Aktuelle und zukünftige Projekte erscheinen hier.",
    proj_current:"In Arbeit", proj_planned:"Geplant",
    proj_empty:"Noch keine Projekte. Das nächste ist unterwegs.",
    contact_lead:"Lust auf eine Zusammenarbeit oder einen Austausch über Quality Engineering? Schreib mir."
  }
};

let lang = "en";
if ((navigator.language||"").startsWith("de")) lang = "de";
try { const s = localStorage.getItem("lang"); if (s === "en" || s === "de") lang = s; } catch(e){}

function renderProjects(){
  const grid = document.getElementById("project-grid");
  const t = I18N[lang];
  const list = window.PROJECTS || [];
  grid.innerHTML = "";
  if (!list.length){
    grid.innerHTML = `<div class="project empty"><div class="win"><div class="win-bar"><span class="win-title">new_project.exe</span></div><div class="win-body"><p>${t.proj_empty}</p></div></div></div>`;
    return;
  }
  list.forEach(p=>{
    const el = document.createElement("div");
    el.className = "project";
    const links = (p.links||[]).map(l=>`<a href="${l.url}" target="_blank" rel="noopener">${l.label} →</a>`).join("");
    const tags = (p.tags||[]).map(x=>`<span>${x}</span>`).join("");
    el.innerHTML = `<div class="win"><div class="win-bar"><span class="win-title">${p.title.en.toLowerCase().replace(/\s+/g,"_")}.proj</span><span class="win-btns"><i></i><i></i><i></i></span></div>
      <div class="win-body"><span class="status ${p.status}">${p.status==="planned"?t.proj_planned:t.proj_current}</span>
      <h3>${p.title[lang]}</h3><p>${p.desc[lang]}</p><div class="chips">${tags}</div><div class="links">${links}</div></div></div>`;
    grid.appendChild(el);
  });
}

function apply(){
  const t = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(n=>{ n.textContent = t[n.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-list]").forEach(n=>{
    n.innerHTML = t[n.dataset.i18nList].map(x=>`<li>${x}</li>`).join("");
  });
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
  document.title = lang==="de" ? "Eleanor Ngum | Quality Engineer" : "Eleanor Ngum | Quality Engineer";
  renderProjects();
}

document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>{
  lang = b.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch(e){}
  apply();
}));

document.getElementById("year").textContent = new Date().getFullYear();
(function tick(){
  document.getElementById("clock").textContent = new Date().toLocaleTimeString(lang==="de"?"de-DE":"en-GB",{hour:"2-digit",minute:"2-digit"});
  setTimeout(tick, 20000);
})();
apply();
