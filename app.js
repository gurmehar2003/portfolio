/**
 * GURMEHAR SINGH - PORTFOLIO INTERACTION ENGINE
 * Creative Designer & Video Editor (Vertical & Horizontal)
 */

// Sound Engine using Web Audio API (tactile audio feedback)
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playClick() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch(e) {}
  }

  playHover() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(540, this.ctx.currentTime + 0.03);
      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch(e) {}
  }
}

const sfx = new SoundEngine();

// Projects (Both Vertical 9:16 and Horizontal 16:9)
const projectsData = [
  {
    id: "proj-hyrox",
    title: "HYROX // ATHLETIC REEL",
    client: "Hyrox Championship",
    format: "vertical",
    formatLabel: "9:16 Vertical Reel",
    category: "fitness",
    categoryLabel: "Fitness & Athletics",
    role: "Shot, Edited & Sound Foley",
    camera: "Sony a6600 | Viltrox 35mm f/1.7",
    stabilizer: "DJI RS3 Mini Gimbal",
    audio: "Professional Mic Rig",
    tools: ["Adobe Premiere Pro", "After Effects", "Color Grade"],
    description: "High-intensity athletic recap capturing race floor movements, rapid transitions, and beat-synced pacing for mobile social feeds.",
    videoUrl: "videos/hyrox-championship.mp4"
  },
  {
    id: "proj-infollion",
    title: "INFOLLION // CORPORATE EVENT FILM",
    client: "Infollion Global",
    format: "horizontal",
    formatLabel: "16:9 Widescreen Film",
    category: "commercial",
    categoryLabel: "Corporate & Commercial",
    role: "Direction, Videography & Editing",
    camera: "Sony a6600 | Viltrox 35mm f/1.7",
    stabilizer: "DJI RS3 Mini Gimbal",
    audio: "Professional Wireless Mic",
    tools: ["Premiere Pro", "Sound Mix", "DaVinci Color"],
    description: "Cinematic horizontal corporate documentary and event film highlighting company culture, executive meets, and authentic interactions.",
    videoUrl: "videos/infollion-corporate.mp4"
  },
  {
    id: "proj-grubfest",
    title: "THE GRUB FEST // FESTIVAL TEASER",
    client: "The Grub Fest",
    format: "vertical",
    formatLabel: "9:16 Vertical Reel",
    category: "lifestyle",
    categoryLabel: "Food & Live Festivals",
    role: "Shot & Edited",
    camera: "Sony a6600 | Viltrox 35mm f/1.7",
    stabilizer: "DJI RS3 Mini Gimbal",
    audio: "Live Atmosphere Audio",
    tools: ["Premiere Pro", "DaVinci Color", "After Effects"],
    description: "Capturing the vibrant energy, food styling, and night festival crowd flow with smooth gimbal movements and warm color tones.",
    videoUrl: "videos/grub-fest.mp4"
  },
  {
    id: "proj-collabledger",
    title: "COLLABLEDGER // 3D BRAND IDENTITY",
    client: "CollabLedger",
    format: "horizontal",
    formatLabel: "16:9 Motion Graphics",
    category: "tech",
    categoryLabel: "Tech & 3D Motion",
    role: "Visual Design & Motion Graphics",
    camera: "3D Motion & Screen Compositing",
    stabilizer: "Digital Keyframing",
    audio: "Cyber Synth SFX",
    tools: ["After Effects", "Cinema 4D", "Illustrator"],
    description: "Aesthetic tech branding video exploring kinetic typography, glowing wireframes, and smooth spatial user interface movements.",
    videoUrl: "videos/collabledger-tech.mp4"
  },
  {
    id: "proj-carrefour",
    title: "CARREFOUR // BRAND PROMO",
    client: "Carrefour Global",
    format: "vertical",
    formatLabel: "9:16 Vertical Reel",
    category: "commercial",
    categoryLabel: "Commercial & Retail",
    role: "Direction, Shoot & Edit",
    camera: "Sony a6600 | Viltrox 35mm f/1.7",
    stabilizer: "DJI RS3 Mini Gimbal",
    audio: "Studio Mastered Audio",
    tools: ["Premiere Pro", "Motion Graphics"],
    description: "Clean retail promotional video highlighting fresh produce and consumer experience with seamless whip-pan transitions.",
    videoUrl: "videos/carrefour-commercial.mp4"
  },
  {
    id: "proj-coffee",
    title: "BLACK COFFEE // SENSORY STORY",
    client: "Specialty Coffee Roasters",
    format: "vertical",
    formatLabel: "9:16 Vertical Reel",
    category: "lifestyle",
    categoryLabel: "Lifestyle & Sensory",
    role: "Cinematography & Edit",
    camera: "Sony a6600 | Viltrox 35mm f/1.7",
    stabilizer: "Handheld + Gimbal Moves",
    audio: "Crisp Pour-Over ASMR",
    tools: ["Premiere Pro", "Film LUTs", "Sound Design"],
    description: "Tactile, warm aesthetic short exploring the morning brew ritual with shallow depth of field and authentic sound design.",
    videoUrl: "videos/black-coffee-lifestyle.mp4"
  },
  {
    id: "proj-czi",
    title: "CZI GLOBAL // SOCIAL CAMPAIGN",
    client: "CZI Global",
    format: "vertical",
    formatLabel: "9:16 Vertical Reel",
    category: "commercial",
    categoryLabel: "Social Presence & Captions",
    role: "Video Editing & Kinetic Typography",
    camera: "Studio 4K Rig",
    stabilizer: "Tripod & Smooth Motion",
    audio: "Voice Enhancement & Denoising",
    tools: ["Premiere Pro", "After Effects Kinetic Text"],
    description: "Dynamic vertical reel tailored for audience retention with synchronized animated subtitle graphics and punchy optical cuts.",
    videoUrl: "videos/czi-viral-reels.mp4"
  },
  {
    id: "proj-guthealth",
    title: "HEALTHY NUTRITION // WELLNESS",
    client: "Healthy Nutrition Co.",
    format: "vertical",
    formatLabel: "9:16 Vertical Reel",
    category: "commercial",
    categoryLabel: "Health & Nutrition",
    role: "Content Strategy, Shoot & Edit",
    camera: "Sony a6600 | Viltrox 35mm f/1.7",
    stabilizer: "DJI RS3 Mini Gimbal",
    audio: "Crisp Dialogue Capture",
    tools: ["Premiere Pro", "Motion Callouts"],
    description: "Simplifying wellness concepts into visual bite-sized vertical video content with clean animated callouts.",
    videoUrl: "videos/gut-health-wellness.mp4"
  },
  {
    id: "proj-chai",
    title: "CHAI DIARIES // STREET CULTURE",
    client: "WanderOn / Travel Culture",
    format: "horizontal",
    formatLabel: "16:9 Widescreen Film",
    category: "lifestyle",
    categoryLabel: "Culture & Travel Story",
    role: "Cinematography & Creative Edit",
    camera: "Sony a6600 | Viltrox 35mm f/1.7",
    stabilizer: "DJI RS3 Mini Gimbal",
    audio: "Ambient Field Audio",
    tools: ["Premiere Pro", "Warm Film Grade"],
    description: "Sensory travel film capturing traditional tea culture, morning steam, and authentic local connections in cinematic widescreen.",
    videoUrl: "videos/chai-culture-cinematic.mp4"
  }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initKineticTypographyStage();
  setupAudioToggle();
  renderProjects('all');
  setupFilterTabs();
  setupTheaterModal();
  setupContactForm();
  setupSmoothScroll();
});

// 1. Kinetic Typography Motion Graphic Canvas & Word Morphing
function initKineticTypographyStage() {
  const canvas = document.getElementById('kinetic-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    window.addEventListener('resize', () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });

    let time = 0;
    function renderKineticCanvas() {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // Draw subtle animated glowing waves
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(212, 255, 0, 0.15)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < width; x += 12) {
        const y = height * 0.5 + Math.sin(x * 0.007 + time) * 35 + Math.cos(x * 0.012 - time * 0.7) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 15) {
        const y = height * 0.5 + Math.cos(x * 0.009 - time * 0.8) * 30 + Math.sin(x * 0.005 + time) * 18;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      requestAnimationFrame(renderKineticCanvas);
    }
    requestAnimationFrame(renderKineticCanvas);
  }

  // Morphing Typography Words Cycle
  const morphWords = [
    "VERTICAL REELS (9:16)",
    "WIDESCREEN FILMS (16:9)",
    "3D MOTION GRAPHICS",
    "SOCIAL BRAND PRESENCE"
  ];
  let morphIndex = 0;
  const morphEl = document.getElementById('morphing-text-target');

  if (morphEl) {
    setInterval(() => {
      morphIndex = (morphIndex + 1) % morphWords.length;
      morphEl.style.opacity = '0';
      morphEl.style.transform = 'translateY(10px) scale(0.96)';
      
      setTimeout(() => {
        morphEl.textContent = morphWords[morphIndex];
        morphEl.style.opacity = '1';
        morphEl.style.transform = 'translateY(0) scale(1)';
      }, 300);
    }, 2400);
  }
}

// 2. Audio SFX Toggle
function setupAudioToggle() {
  const btn = document.getElementById('sound-toggle-btn');
  const icon = document.getElementById('sound-icon');
  const label = document.getElementById('sound-label');

  if (!btn) return;

  btn.addEventListener('click', () => {
    const isEnabled = sfx.toggle();
    if (isEnabled) {
      sfx.playClick();
      btn.classList.add('border-lime-400', 'text-lime-400');
      btn.classList.remove('text-zinc-400');
      if (icon) icon.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
      if (label) label.textContent = 'SFX ON';
    } else {
      btn.classList.remove('border-lime-400', 'text-lime-400');
      btn.classList.add('text-zinc-400');
      if (icon) icon.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`;
      if (label) label.textContent = 'SFX OFF';
    }
  });
}

// 3. Render Both Vertical (9:16) and Horizontal (16:9) Videos in Work Section
function renderProjects(filter = 'all') {
  const container = document.getElementById('videos-grid');
  if (!container) return;

  let filtered = projectsData;
  if (filter === 'vertical') {
    filtered = projectsData.filter(p => p.format === 'vertical');
  } else if (filter === 'horizontal') {
    filtered = projectsData.filter(p => p.format === 'horizontal');
  } else if (filter !== 'all') {
    filtered = projectsData.filter(p => p.category === filter);
  }

  container.innerHTML = filtered.map(proj => {
    if (proj.format === 'horizontal') {
      // 16:9 Horizontal Cinematic Card
      return `
        <div class="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col group">
          <div class="horizontal-video-card cursor-pointer relative" data-id="${proj.id}">
            <video 
              class="horizontal-video-media" 
              loop 
              muted 
              playsinline 
              preload="metadata"
              src="${proj.videoUrl}"
            ></video>

            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 p-5 flex flex-col justify-between pointer-events-none">
              <div class="flex items-center justify-between">
                <span class="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono-tech text-lime-400 border border-white/10 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                  ${proj.formatLabel}
                </span>
                <span class="text-xs font-mono-tech text-zinc-300 bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  ${proj.client}
                </span>
              </div>

              <div class="flex items-end justify-between pointer-events-auto">
                <div>
                  <span class="text-xs font-mono-tech text-lime-400 uppercase tracking-wider block mb-1">
                    ${proj.categoryLabel} &bull; ${proj.role}
                  </span>
                  <h3 class="text-lg sm:text-xl font-syne font-bold text-white group-hover:text-lime-400 transition-colors">
                    ${proj.title}
                  </h3>
                </div>
                <button class="w-10 h-10 rounded-full bg-lime-400 text-black flex items-center justify-center hover:scale-105 transition-all open-theater-btn" data-id="${proj.id}" title="Watch Details">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
              </div>
            </div>
          </div>
          <div class="mt-2.5 flex items-center justify-between text-xs font-mono-tech text-zinc-400 px-1">
            <span>${proj.camera}</span>
            <button class="text-white hover:text-lime-400 transition-colors open-theater-btn" data-id="${proj.id}">
              Details &rarr;
            </button>
          </div>
        </div>
      `;
    } else {
      // 9:16 Vertical Phone Mockup
      return `
        <div class="flex flex-col items-center group">
          <div class="phone-mockup-container cursor-pointer" data-id="${proj.id}">
            <div class="phone-island">
              <div class="phone-sensor-dot"></div>
              <div class="phone-camera-dot"></div>
            </div>

            <video 
              class="phone-video-media" 
              loop 
              muted 
              playsinline 
              preload="metadata"
              src="${proj.videoUrl}"
            ></video>

            <div class="phone-reflection-overlay"></div>

            <div class="phone-ui-layer">
              <div class="flex items-center justify-between text-xs text-zinc-300 font-mono-tech">
                <span class="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                  9:16
                </span>
                <div class="sound-bars paused" data-sound-id="${proj.id}">
                  <div class="sound-bar"></div>
                  <div class="sound-bar"></div>
                  <div class="sound-bar"></div>
                  <div class="sound-bar"></div>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <div class="flex items-end justify-between">
                  <div class="flex-1 pr-2">
                    <span class="text-[10px] uppercase font-mono-tech tracking-wider text-lime-400 font-semibold block mb-0.5">
                      ${proj.client}
                    </span>
                    <h4 class="text-sm font-syne font-bold text-white leading-snug drop-shadow-md">
                      ${proj.title}
                    </h4>
                    <div class="flex items-center gap-1.5 mt-1">
                      <span class="text-[10px] font-mono-tech text-zinc-300 bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                        ${proj.role}
                      </span>
                    </div>
                  </div>

                  <button class="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-lime-400 hover:text-black transition-colors open-theater-btn" data-id="${proj.id}" title="Watch Details">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                  </button>
                </div>

                <div class="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                  <div class="bg-lime-400 h-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-3 text-center max-w-[260px]">
            <p class="text-xs font-mono-tech text-zinc-400 uppercase tracking-wider">${proj.categoryLabel}</p>
            <button class="mt-1 text-sm font-syne font-bold text-white group-hover:text-lime-400 transition-colors open-theater-btn flex items-center justify-center gap-1.5 mx-auto" data-id="${proj.id}">
              <span>Watch Reel Details</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      `;
    }
  }).join('');

  // Attach hover play/pause
  document.querySelectorAll('.phone-mockup-container, .horizontal-video-card').forEach(card => {
    const video = card.querySelector('video');
    const soundWave = card.querySelector('.sound-bars');

    card.addEventListener('mouseenter', () => {
      sfx.playHover();
      if (video) video.play().catch(() => {});
      if (soundWave) soundWave.classList.remove('paused');
    });

    card.addEventListener('mouseleave', () => {
      if (video) video.pause();
      if (soundWave) soundWave.classList.add('paused');
    });

    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openTheaterModal(id);
    });
  });

  // Attach open theater buttons
  document.querySelectorAll('.open-theater-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openTheaterModal(id);
    });
  });
}

// 4. Filter Tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sfx.playClick();
      tabs.forEach(t => {
        t.classList.remove('bg-lime-400', 'text-black', 'font-bold');
        t.classList.add('bg-white/5', 'text-zinc-400');
      });
      tab.classList.remove('bg-white/5', 'text-zinc-400');
      tab.classList.add('bg-lime-400', 'text-black', 'font-bold');

      const filter = tab.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// 5. Theater Modal
function setupTheaterModal() {
  const modal = document.getElementById('theater-modal');
  const closeBtn = document.getElementById('close-theater-modal');
  const backdrop = document.getElementById('theater-backdrop');

  if (!modal) return;

  const closeModal = () => {
    sfx.playClick();
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const video = document.getElementById('modal-video-player');
    if (video) {
      video.pause();
      video.src = '';
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openTheaterModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  sfx.playClick();
  const modal = document.getElementById('theater-modal');
  const video = document.getElementById('modal-video-player');

  document.getElementById('modal-project-title').textContent = project.title;
  document.getElementById('modal-project-client').textContent = project.client;
  document.getElementById('modal-project-format').textContent = project.formatLabel;
  document.getElementById('modal-project-role').textContent = project.role;
  document.getElementById('modal-project-camera').textContent = project.camera;
  document.getElementById('modal-project-rig').textContent = `${project.stabilizer} • ${project.audio}`;
  document.getElementById('modal-project-description').textContent = project.description;

  const toolsContainer = document.getElementById('modal-project-tools');
  if (toolsContainer) {
    toolsContainer.innerHTML = project.tools.map(t => 
      `<span class="text-xs font-mono-tech px-2.5 py-1 bg-white/10 text-zinc-200 rounded-md border border-white/5">${t}</span>`
    ).join('');
  }

  if (video) {
    video.src = project.videoUrl;
    video.currentTime = 0;
    video.play().catch(() => {});
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 6. Contact Form & Clipboard Copy (gurmehar2003@gmail.com)
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const copyBtn = document.getElementById('copy-email-btn');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      sfx.playClick();
      const email = 'gurmehar2003@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const orig = copyBtn.innerHTML;
        copyBtn.innerHTML = `<span class="text-lime-400 font-bold">✓ Copied gurmehar2003@gmail.com</span>`;
        setTimeout(() => { copyBtn.innerHTML = orig; }, 2500);
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      sfx.playClick();
      const name = document.getElementById('contact-name').value;
      const brand = document.getElementById('contact-brand').value;

      form.innerHTML = `
        <div class="glass-panel p-8 rounded-2xl text-center border-lime-400/40">
          <div class="w-14 h-14 rounded-full bg-lime-400 text-black flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            ✓
          </div>
          <h3 class="text-2xl font-syne font-bold text-white mb-2">Message Sent, ${name}!</h3>
          <p class="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out for <strong class="text-white">${brand || 'your brand'}</strong>. I'll get back to you directly at your email shortly!
          </p>
          <div class="mt-6 flex justify-center gap-4">
            <a href="mailto:gurmehar2003@gmail.com" class="btn-glow-primary text-xs">
              Direct Mail
            </a>
            <button onclick="window.location.reload()" class="btn-outline-glass text-xs">
              Send Another
            </button>
          </div>
        </div>
      `;
    });
  }
}

// 7. Smooth Scroll Links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        sfx.playClick();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
