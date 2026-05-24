/**
 * SR Abhiyantra Systems Pvt. Ltd.
 * Main JavaScript
 *
 * Sections:
 * 1. Data — brands, services, bento cards, testimonials
 * 2. Build Logos Marquee
 * 3. Build Services List
 * 4. Build Bento (Why Us) Grid
 * 5. Build Testimonials Marquee
 * 6. Navbar Scroll Behaviour
 * 7. Hamburger Mobile Menu
 * 8. Scroll Reveal (IntersectionObserver)
 * 9. WhatsApp FAB Fade-in
 */

/* =============================================================================
   1. DATA
   ============================================================================= */
// ── DATA ──
const brands=[
  {name:'Wipro',      logo:'https://cdn.simpleicons.org/wipro/3d4a66',    type:'img'},
  {name:'Cisco',      logo:'https://cdn.simpleicons.org/cisco/3d4a66',    type:'img'},
  {name:'D-Link',     logo:'https://cdn.simpleicons.org/dlink/3d4a66',    type:'img'},
  {name:'Godrej',     text:'GODREJ',    type:'txt'},
  {name:'Gunnebo',    text:'GUNNEBO',   type:'txt'},
  {name:'CommScope',  text:'CommScope', type:'txt'},
  {name:'Digisol',    text:'DIGISOL',   type:'txt'},
  {name:'R&M',        text:'R&amp;M',   type:'txt'},
];

const services=[
  {num:'01',title:'Office Infrastructure',desc:'Complete modular workstation systems, executive furniture, and ergonomic seating from authorized OEM dealers including Wipro.',tags:['Workstations','Executive','Modular'],color:'#2563eb',
   icon:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'},
  {num:'02',title:'Enterprise Seating',desc:'BIFMA certified ergonomic chairs with dynamic lumbar support, 4D armrests, and high-density foam engineered for all day corporate use.',tags:['BIFMA Certified','Ergonomic','5yr Warranty'],color:'#10b981',
   icon:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 11V7a6 6 0 0112 0v4"/><path d="M3 11h18"/><path d="M5 11v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>'},
  {num:'03',title:'Electrical Contracting',desc:'Government licensed electrical infrastructure, power distribution panels, and compliance ready safety systems for commercial spaces.',tags:['Licensed','Govt Certified','Safety'],color:'#f59e0b',
   icon:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'},
  {num:'04',title:'Network Infrastructure',desc:'Enterprise grade structured cabling, data centers, and complete connectivity solutions from Cisco, D-Link, CommScope, and R&M.',tags:['Cisco','CommScope','R&M'],color:'#8b5cf6',
   icon:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="9" y="18" width="6" height="4" rx="1"/><rect x="2" y="10" width="6" height="4" rx="1"/><rect x="16" y="10" width="6" height="4" rx="1"/><path d="M12 6v4M12 18v-4M8 12H6M18 12h-2"/></svg>'},
  {num:'05',title:'Smart Workspace Planning',desc:'Space optimization, ergonomic floor planning, and architectural workspace design consultation tailored to your corporate identity.',tags:['Consultation','Floor Plan','Design'],color:'#ec4899',
   icon:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>'},
  {num:'06',title:'Enterprise Storage Solutions',desc:'Secure lockers, filing systems, and modular storage from Gunnebo and Godrej purpose built for high security enterprise environments.',tags:['Gunnebo','Godrej','Secure'],color:'#06b6d4',
   icon:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/></svg>'},
];

const bentoData=[
  {title:'Certified OEM Partner',body:'Direct procurement channel for Wipro, Godrej Interio, Gunnebo and leading enterprise brands with full manufacturer warranties and compliance documentation.',color:'#2563eb',tall:true,wide:false,
   icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'},
  {title:'Precision Logistics',body:'Strict adherence to deployment schedules. Zero-delay supply chain optimized for large enterprise rollouts.',color:'#10b981',tall:false,wide:false,
   icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>'},
  {title:'Turnkey Execution',body:'From spatial planning to final installation. Single point of contact with complete project ownership — no coordination gaps, ever.',color:'#8b5cf6',tall:false,wide:true,
   icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'},
  {title:'Enterprise Pricing',body:'Direct-to-business pricing with transparent cost structures. No hidden margins on bulk acquisitions.',color:'#f59e0b',tall:false,wide:false,
   icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>'},
  {title:'Lifecycle Support',body:'Post-deployment SLAs, rapid-response maintenance, and long-term asset management with warranty enforcement.',color:'#ec4899',tall:false,wide:false,
   icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12 19.79 19.79 0 011.65 3.18 2 2 0 013.64 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.54a16 16 0 006.29 6.29l.95-.95a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>'},
  {title:'Tailored Integration',body:'Custom configurations engineered for your architectural constraints and corporate brand identity.',color:'#06b6d4',tall:false,wide:false,
   icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'},
];

const testimonials=[
  {q:'SR Abhiyantra delivered our entire 200-seat office setup within the committed timeline. The quality is excellent and their team was extremely professional throughout.',name:'Rajesh Menon',role:'Admin Head · IT Solutions Pvt Ltd',init:'R',c:'#2563eb'},
  {q:'We have been working with them for 3 years for our branch network furniture. Competitive pricing and prompt after-sales service. Highly recommended.',name:'Sneha Patil',role:'Procurement Manager · National Finance Corp',init:'S',c:'#10b981'},
  {q:'The ergonomic chairs transformed our co-working space. Clean installation, zero hassle, and top-notch furniture quality. Our members love the new seating.',name:'Amit Sharma',role:'Operations Director · WorkHub Spaces',init:'A',c:'#f59e0b'},
  {q:'Fantastic experience from start to finish. Their consultation helped us optimize our floor plan, and the Godrej products were exactly as promised.',name:'Priya Desai',role:'HR Director · TechFlow Analytics',init:'P',c:'#8b5cf6'},
  {q:'We ordered custom executive seating for our boardrooms. The premium feel and sturdy build quality exceeded our expectations. Great partner to work with.',name:'Vikram Singh',role:'Managing Director · Apex Logistics Group',init:'V',c:'#ec4899'},
];


/* =============================================================================
   2. BUILD LOGOS MARQUEE
   ============================================================================= */
// ── BUILD LOGOS ──
(function(){
  const mq=document.getElementById('logo-mq');
  const all=[...brands,...brands,...brands,...brands];
  all.forEach(b=>{
    const d=document.createElement('div');
    d.className='logo-card';
    if(b.type==='img'){
      d.innerHTML=`<img src="${b.logo}" alt="${b.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="brand-txt" style="display:none">${b.name}</span>`;
    }else{
      const fs=b.name==='R&M'?'1.3rem':'0.72rem';
      const ls=b.name==='CommScope'?'0.05em':'0.15em';
      const tt=b.name==='CommScope'?'none':'uppercase';
      d.innerHTML=`<span class="brand-txt" style="font-size:${fs};letter-spacing:${ls};text-transform:${tt}">${b.text||b.name}</span>`;
    }
    mq.appendChild(d);
  });
})();


/* =============================================================================
   3. BUILD SERVICES LIST
   ============================================================================= */
// ── BUILD SERVICES ──
(function(){
  const list=document.getElementById('svc-list');
  services.forEach(s=>{
    const row=document.createElement('div');
    row.className='svc-row reveal';
    row.innerHTML=`
      <div>
        <div class="svc-num">${s.num}</div>
        <div class="svc-icon-box">${s.icon}</div>
      </div>
      <div>
        <div class="svc-title">${s.title}</div>
        <div class="svc-desc">${s.desc}</div>
      </div>
      <div class="svc-tags">${s.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    `;
    list.appendChild(row);
  });
})();


/* =============================================================================
   4. BUILD BENTO (WHY US) GRID
   ============================================================================= */
// ── BUILD BENTO ──
(function(){
  const grid=document.getElementById('bento-grid');
  bentoData.forEach(b=>{
    const card=document.createElement('div');
    card.className='bc reveal'+(b.tall?' bc-tall':'')+(b.wide?' bc-wide':'');
    const glowPos=b.tall?'top:-60px;left:-60px':'top:-40px;right:-40px';
    card.innerHTML=`
      <div class="bc-glow" style="${glowPos};width:200px;height:200px;background:radial-gradient(circle,${b.color}14,transparent 65%)"></div>
      <div class="bc-icon" style="width:${b.tall?'50px':'44px'};height:${b.tall?'50px':'44px'};background:${b.color}12;border-color:${b.color}22;color:${b.color}">${b.icon}</div>
      <div class="bc-h" style="font-size:${b.tall?'1.3rem':'1.05rem'}">${b.title}</div>
      <p class="bc-p">${b.body}</p>
    `;
    grid.appendChild(card);
  });
})();


/* =============================================================================
   5. BUILD TESTIMONIALS MARQUEE
   ============================================================================= */
// ── BUILD TESTIMONIALS ──
(function(){
  const mq=document.getElementById('testi-mq');
  const all=[...testimonials,...testimonials];
  const stars='<svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'.repeat(5);
  all.forEach(t=>{
    const card=document.createElement('div');
    card.className='tc';
    card.innerHTML=`
      <div>
        <div class="tc-stars" style="margin-bottom:16px">${stars}</div>
        <p class="tc-q">&ldquo;${t.q}&rdquo;</p>
      </div>
      <div class="tc-auth">
        <div class="tc-av" style="background:${t.c}14;border:1.5px solid ${t.c}22;color:${t.c}">${t.init}</div>
        <div><div class="tc-name">${t.name}</div><div class="tc-role">${t.role}</div></div>
      </div>`;
    mq.appendChild(card);
  });
})();


/* =============================================================================
   6. NAVBAR SCROLL BEHAVIOUR
   ============================================================================= */
// ── NAVBAR SCROLL ──
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40),{passive:true});


/* =============================================================================
   7. HAMBURGER MOBILE MENU
   ============================================================================= */
// ── HAMBURGER ──
const ham=document.getElementById('ham');
const mob=document.getElementById('mob');
let open=false;
function closeMob(){open=false;mob.classList.remove('open');document.body.style.overflow=''}
ham.addEventListener('click',()=>{
  open=!open;mob.classList.toggle('open',open);
  document.body.style.overflow=open?'hidden':'';
});


/* =============================================================================
   8. SCROLL REVEAL (IntersectionObserver)
   ============================================================================= */
// ── SCROLL REVEAL ──
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}});
},{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));


/* =============================================================================
   9. WHATSAPP FAB FADE-IN
   ============================================================================= */
// ── WA BUTTON FADE IN ──
setTimeout(()=>{const wa=document.getElementById('wa');wa.style.opacity='1';wa.style.transition='opacity .5s, transform .2s, background .2s'},1800);
document.getElementById('wa').addEventListener('mouseenter',function(){this.style.background='#20bd5a';this.style.transform='scale(1.1)'});
document.getElementById('wa').addEventListener('mouseleave',function(){this.style.background='#25D366';this.style.transform='scale(1)'});