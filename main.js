document.addEventListener("DOMContentLoaded",()=>{
 const header=document.getElementById("siteHeader"), toggle=document.querySelector(".menu-toggle"), menu=document.querySelector(".mobile-menu"), year=document.getElementById("year"), form=document.getElementById("contactForm");
 const onScroll=()=>header?.classList.toggle("scrolled",window.scrollY>60); onScroll(); window.addEventListener("scroll",onScroll,{passive:true});
 const close=()=>{document.body.classList.remove("menu-open");menu?.classList.remove("open");menu?.setAttribute("aria-hidden","true");toggle?.setAttribute("aria-expanded","false")};
 toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("open");document.body.classList.toggle("menu-open",open);menu.setAttribute("aria-hidden",String(!open));toggle.setAttribute("aria-expanded",String(open))});
 menu?.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
 document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
 const items=document.querySelectorAll(".reveal"); if("IntersectionObserver" in window){const obs=new IntersectionObserver((entries,o)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");o.unobserve(e.target)}}),{threshold:.12});items.forEach(i=>obs.observe(i))}else items.forEach(i=>i.classList.add("visible"));
 if(year)year.textContent=new Date().getFullYear();
 form?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent(`Beratungsanfrage – ${d.get("service")||"Estelife"}`);const body=encodeURIComponent(`Name: ${d.get("name")}\nTelefon: ${d.get("phone")}\nE-Mail: ${d.get("email")}\nBehandlung: ${d.get("service")}\n\nNachricht:\n${d.get("message")}`);window.location.href=`mailto:info@estelifehairaesthetic.de?subject=${subject}&body=${body}`;const s=form.querySelector(".form-success");if(s){s.textContent=document.documentElement.lang==="tr"?"Teşekkür ederiz! Talebiniz e-posta uygulamanızda hazırlandı.":document.documentElement.lang==="en"?"Thank you! Your request has been prepared in your email app.":"Vielen Dank! Ihre Anfrage wurde in Ihrer E-Mail-Anwendung vorbereitet.";s.classList.add("show")}});
});

document.addEventListener("DOMContentLoaded", () => {
  const rf = document.querySelector(".reference-form");
  if (rf) {
    rf.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = rf.querySelector(".form-success");
      if (ok) ok.classList.add("show");
    }, { capture:true });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".mega-trigger");
  const mega = document.getElementById("treatmentsMega");

  if (trigger && mega) {
    const closeMega = () => {
      mega.classList.remove("open");
      trigger.setAttribute("aria-expanded","false");
    };
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = mega.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(open));
    });
    mega.addEventListener("click", e => e.stopPropagation());
    document.addEventListener("click", closeMega);
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeMega();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year-v10").forEach(el => el.textContent = new Date().getFullYear());
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reference-treatment-card").forEach(card => {
    card.addEventListener("focus", () => card.classList.add("keyboard-hover"));
    card.addEventListener("blur", () => card.classList.remove("keyboard-hover"));
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".mega-trigger");
  const mega = document.getElementById("treatmentsMega");

  if (!trigger || !mega) return;

  let closeTimer;

  const openMega = () => {
    clearTimeout(closeTimer);
    mega.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
  };

  const closeMega = (delay = 0) => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      mega.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    }, delay);
  };

  // Desktop: hover to open, no click required
  trigger.addEventListener("mouseenter", openMega);
  trigger.addEventListener("mouseleave", () => closeMega(180));
  mega.addEventListener("mouseenter", openMega);
  mega.addEventListener("mouseleave", () => closeMega(180));

  // Keyboard accessibility
  trigger.addEventListener("focus", openMega);
  trigger.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMega();
      const firstLink = mega.querySelector("a");
      firstLink?.focus();
    }
  });

  mega.addEventListener("focusin", openMega);
  mega.addEventListener("focusout", (e) => {
    if (!mega.contains(e.relatedTarget) && e.relatedTarget !== trigger) closeMega(100);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMega(0);
      trigger.focus();
    }
  });

  // Touch/click fallback
  trigger.addEventListener("click", (e) => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      e.preventDefault();
      mega.classList.contains("open") ? closeMega(0) : openMega();
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!menuToggle || !mobileMenu) return;

  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    mobileMenu.classList.toggle("open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
    menuToggle.setAttribute("aria-expanded", String(open));
  };

  menuToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 1050) {
      e.preventDefault();
      setMenu(!mobileMenu.classList.contains("open"));
    }
  });

  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setMenu(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) setMenu(false);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year-v23").forEach(el => el.textContent = new Date().getFullYear());
});

/* V33 premium polish */
document.addEventListener("DOMContentLoaded",()=>{const h=document.querySelector(".reference-header");const s=()=>h&&h.classList.toggle("v33-scrolled",scrollY>18);s();addEventListener("scroll",s,{passive:true});const es=document.querySelectorAll(".reveal");if("IntersectionObserver"in window){const o=new IntersectionObserver((xs,ob)=>xs.forEach(x=>{if(x.isIntersecting){x.target.classList.add("is-visible");ob.unobserve(x.target)}}),{threshold:.08});es.forEach(e=>o.observe(e))}else es.forEach(e=>e.classList.add("is-visible"));});

document.addEventListener("DOMContentLoaded",()=>{
  const tabs=document.querySelectorAll(".before-after-tab");
  const panels=document.querySelectorAll("[data-ba-panel]");
  tabs.forEach(tab=>tab.addEventListener("click",()=>{
    const target=tab.dataset.baTarget;
    tabs.forEach(x=>x.classList.toggle("active",x===tab));
    panels.forEach(p=>p.hidden=p.dataset.baPanel!==target);
  }));
});
