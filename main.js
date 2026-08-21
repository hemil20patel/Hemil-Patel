// ========================================
// CENTRALIZED PROJECT DATA
// ========================================

// Project content is kept separate from the page structure so future case studies
// can reuse project.html without duplicating the layout.
const projectData = {
    aplynow: {
        published: true,
        caseStudyComplete: true,
        category: 'PRODUCT DESIGN • UI/UX',
        title: 'AplyNow',
        displayCategory: 'Product Design',
        secondary: 'UI/UX • Web Experience',
        image: 'assets/images/aplynow_f.png',
        liveUrl: "https://www.aplynow.com/",
        intro: 'A clearer way to discover opportunities, understand requirements and move through the application experience with confidence.',
        overview: 'AplyNow is a digital platform designed to make the application journey easier to understand and navigate. The experience brings opportunities, requirements and important application information into a clearer interface so users can spend less time figuring out what to do next and more time moving forward.',
        metadata: {
            project: 'AplyNow',
            type: 'Product Design • Web Experience',
            role: 'UI/UX Design • Visual Design',
            tools: ['Figma', 'Adobe Illustrator']
        },
        images: [
            'assets/images/aplynow_f.png',
            'assets/images/aplynow_1.png',
            'assets/images/aplynow_2.png'
        ],
        outcomeLabel: 'OUTCOME',
        outcomeHeading: 'What We Deliver',
        outcomeIntro: 'The final direction focused on making the experience easier to scan, easier to understand and more consistent from one step to the next.',
        deliverables: [
            {
                title: 'Clearer User Flows',
                text: 'Application steps and key actions organized around a more understandable journey.'
            },
            {
                title: 'Stronger Information Hierarchy',
                text: 'Important details given clearer priority so users can find what matters faster.'
            },
            {
                title: 'Consistent Interface System',
                text: 'Reusable patterns, spacing and visual decisions create a more connected experience.'
            },
            {
                title: 'Responsive Web Experience',
                text: 'Layouts designed to remain clear and usable across desktop, tablet and mobile.'
            }
        ],
        related: ['mytradearena', 'interface-x']
    },
    mytradearena: {
        published: true,
        caseStudyComplete: true,
        category: 'PRODUCT DESIGN • UI/UX • DASHBOARD',
        title: 'MyTradeArena',
        displayCategory: 'Product Design',
        secondary: 'UI/UX • Trading Platform',
        image: 'assets/images/tradearena_f.png',
        liveUrl: "https://www.mytradearena.com/",
        intro: 'A data-driven platform designed to make complex information easier to navigate, understand and act on.',
        overview: 'MyTradeArena was a freelance product design project focused on organizing a data-heavy platform into an interface that feels easier to understand and navigate. The work covered responsive product screens and dashboard experiences, with particular attention to information hierarchy, navigation patterns and reusable components. I worked closely with developers while the designs moved into implementation, refining details where needed to keep the final experience practical as well as visually consistent.',
        metadata: {
            project: 'MyTradeArena',
            type: 'Freelance • Product & Dashboard Design',
            role: 'Product Design • UI/UX • Dashboard Design',
            tools: ['Figma', 'Adobe Illustrator', 'Claude'],
            toolDetails: {
                Figma: 'Final UI design and interface composition',
                'Adobe Illustrator': 'Custom visual elements and graphic assets',
                Claude: 'Structure ideation'
            }
        },
        images: [
            'assets/images/tradearena_f.png',
            'assets/images/tradearena_1.png',
            'assets/images/tradearena_2.png'
        ],
        outcomeLabel: 'OUTCOME',
        outcomeHeading: 'What We Deliver',
        outcomeIntro: 'The final direction focused on turning dense information into a system that feels structured, consistent and easier to move through.',
        deliverables: [
            {
                title: 'Clearer Data Hierarchy',
                text: 'Complex information was organized into clearer sections so important data and actions are easier to identify at a glance.'
            },
            {
                title: 'Reusable Interface System',
                text: 'Common patterns and components were designed to create consistency across dashboards, navigation and product screens.'
            },
            {
                title: 'Responsive Dashboard Experience',
                text: 'Layouts were considered across screen sizes so dense information could remain readable and usable without losing structure.'
            },
            {
                title: 'Developer-Ready Design Decisions',
                text: 'The interface was refined alongside implementation so visual decisions remained practical, consistent and realistic to build.'
            }
        ],
        related: [
            { key: 'aplynow', category: 'Product Design • UI/UX', secondary: '' },
            { key: 'interface-x', category: 'Visual Identity • Conference Design', secondary: '' }
        ]
    },
    'interface-x': {
        published: true,
        caseStudyComplete: true,
        category: 'VISUAL DESIGN • BRAND IDENTITY',
        title: 'Interface X',
        displayCategory: 'Visual Identity',
        secondary: 'Conference Branding • Print • Digital',
        image: 'assets/images/interface_f.png',
        liveUrl: null,
        intro: 'A future-focused identity system built to give a technology and innovation conference a clear, connected and recognizable presence.',
        overview: 'Interface X was a conference branding project built around technology, innovation and the idea of designing what comes next. The goal was to create an identity that could feel futuristic without becoming overly complicated or difficult to use. I developed the visual system from the initial concept and mood direction through the final identity, then carried it consistently across print, digital and event applications.',
        metadata: {
            project: 'Interface X',
            type: 'Conference Branding • Visual Identity',
            role: 'Visual Design • Brand Identity • Art Direction',
            tools: ['Adobe Illustrator', 'Adobe InDesign'],
            toolDetails: {
                'Adobe Illustrator': 'Logo system, custom visual elements and graphic assets',
                'Adobe InDesign': 'Style guide and print layout production'
            }
        },
        brandContext: {
            conference: 'Interface X',
            tagline: 'Designing What Comes Next',
            theme: ['Technology', 'Innovation'],
            audience: ['Professional', 'Modern', 'Creative'],
            visualDirection: ['Futuristic', 'Geometric', 'Precise', 'Connected', 'High-contrast'],
            logoSystem: ['Primary logo', 'Secondary logo', 'Black version', 'White version', 'One-color cyan version', 'Icon'],
            typography: {
                display: 'Orbitron',
                body: 'Inter'
            },
            palette: ['Electric Cyan', 'Deep Navy', 'Graphite', 'Signal Red', 'Warm Gray', 'White']
        },
        availableAssets: [
            'Concept development',
            'Moodboard',
            'Full logo identity system',
            'Style guide',
            '11 × 17 conference poster',
            'Instagram post',
            'Instagram story',
            'LinkedIn post',
            'Conference badges',
            'Promotional mug wrap'
        ],
        images: [
            'assets/images/interface_f.png',
            'assets/images/interface_1.png',
            'assets/images/interface_2.png'
        ],
        imageAlts: [
            'Temporary Interface X hero placeholder for the Designing What Comes Next technology and innovation conference identity',
            'Temporary placeholder for the Interface X logo system, Orbitron display typography and high-contrast color palette',
            'Temporary placeholder for Interface X poster, social media, conference badge and promotional merchandise applications'
        ],
        outcomeLabel: 'OUTCOME',
        outcomeHeading: 'What We Deliver',
        outcomeIntro: 'The final system brought the conference together through one visual language that could move consistently across identity, print, digital and event materials.',
        deliverables: [
            {
                title: 'Distinctive Visual Identity',
                text: 'A flexible logo, typography and color system created a recognizable foundation for the Interface X conference.'
            },
            {
                title: 'Consistent Brand System',
                text: 'Clear visual rules helped keep the identity connected across different formats without making every application look identical.'
            },
            {
                title: 'Cross-Platform Applications',
                text: 'The identity was extended across posters, social media, conference badges and promotional materials while keeping the same visual character.'
            },
            {
                title: 'Production-Ready Assets',
                text: 'Final files and brand guidelines were organized to make the identity practical to use across both digital and print applications.'
            }
        ],
        related: [
            { key: 'macewan-room-booking', category: 'Product Design', secondary: 'Mobile App • UX Redesign' },
            { key: 'aplynow', category: 'Product Design • UI/UX', secondary: '' }
        ]
    },
    'macewan-room-booking': {
        published: true,
        caseStudyComplete: true,
        category: 'PRODUCT DESIGN • UI/UX • MOBILE',
        title: 'MacEwan Room Booking',
        displayCategory: 'Product Design',
        secondary: 'Mobile App • UX Redesign',
        image: 'assets/images/macroom_f.png',
        liveUrl: "https://www.figma.com/design/wohCy8kDdJVjwyrgraS72l/Project-2?node-id=0-1&p=f",
        intro: 'A mobile-first redesign that makes finding, comparing and booking university rooms faster and easier to understand.',
        overview: 'The existing MacEwan room booking experience works through MyPortal, which makes a simple task feel much heavier on a phone than it needs to be. This project rethinks that journey as a dedicated mobile experience where students can search for rooms, compare spaces, choose a time and complete a booking without moving through a long web-based process. I worked across the full design process, from understanding the existing experience and restructuring the user flow to wireframes, interface design and an interactive prototype.',
        metadata: {
            project: 'MacEwan Room Booking',
            type: 'Mobile App • Product Design',
            role: 'Product Design • UX Research • UI Design • Prototyping',
            tools: ['Figma', 'FigJam'],
            toolDetails: {
                Figma: 'Final interface design and interactive prototype',
                FigJam: 'Research synthesis and user-flow planning'
            }
        },
        systemContext: {
            system: 'Material Design 3',
            brandDirection: 'MacEwan University'
        },
        challenge: {
            summary: 'The original web-based room booking flow was not optimized for quick mobile use.',
            concerns: [
                'Complex navigation',
                'Multiple page loads',
                'Limited visual room information',
                'Inefficient mobile interaction',
                'Difficulty understanding room availability quickly'
            ]
        },
        userFocus: {
            audience: ['MacEwan students', 'MacEwan staff'],
            need: 'Quickly find and book an available study or meeting space from a phone without struggling through the existing portal.',
            priorities: ['Speed', 'Clarity', 'Mobility', 'Confidence']
        },
        screenInventory: [
            'Home Dashboard',
            'Search + Filters',
            'Results List',
            'Map View',
            'Room Details',
            'Date & Time',
            'Reservation Review',
            'Confirmation',
            'My Bookings',
            'Booking Details'
        ],
        designProcess: [
            'Analysis of the existing booking experience',
            'User statement',
            'User persona',
            'Current vs redesigned flow',
            'Existing visual identity analysis',
            'Adapted design language',
            'Visual research',
            'Low-fidelity wireframes',
            'Multiple UI variations',
            'High-fidelity screens',
            'Interactive prototype',
            'Final reflection and outcomes'
        ],
        flowImprovements: [
            {
                title: 'Consolidated navigation',
                detail: 'Building and room discovery were reorganized around search and filters.'
            },
            {
                title: 'Visual browsing',
                detail: 'Room imagery, map view and clearer room information support comparison before booking.'
            },
            {
                title: 'Faster decision making',
                detail: 'Availability, amenities and time slots are surfaced more clearly.'
            },
            {
                title: 'Clear confirmation',
                detail: 'Users review reservation information before completing the booking.'
            },
            {
                title: 'Post-booking utility',
                detail: 'The experience includes QR entry, calendar support and booking management.'
            }
        ],
        prototypeFeatures: [
            'Functional bottom navigation',
            'Search and filter interactions',
            'Interactive map behavior',
            'Date and time selection',
            'Screen transitions',
            'Booking confirmation animation',
            'Upcoming and Past booking states'
        ],
        images: [
            'assets/images/macroom_f.png',
            'assets/images/macroom_1.png',
            'assets/images/macroom_2.png'
        ],
        imageAlts: [
            'Temporary MacEwan Room Booking hero placeholder representing a multi-screen mobile room-booking experience',
            'Temporary placeholder for MacEwan room discovery screens including home, search, filters, results and map view',
            'Temporary placeholder for MacEwan booking screens including room details, date and time, reservation review and confirmation'
        ],
        outcomeLabel: 'OUTCOME',
        outcomeHeading: 'What We Deliver',
        outcomeIntro: 'The final concept turns room booking into a more focused mobile journey, helping students discover spaces, understand availability and move from search to confirmation with less friction.',
        deliverables: [
            {
                title: 'Streamlined Booking Flow',
                text: 'The booking journey was reorganized around clear steps from room discovery through date selection, review and confirmation.'
            },
            {
                title: 'Better Room Discovery',
                text: 'Search, filters, room photos, availability information and map-based browsing make it easier to compare spaces before booking.'
            },
            {
                title: 'Clear Mobile Design System',
                text: "MacEwan's visual identity was adapted into a consistent mobile interface using reusable patterns and Material Design principles."
            },
            {
                title: 'Useful Post-Booking Experience',
                text: 'Confirmation, QR access, calendar actions and booking management extend the experience beyond the moment a reservation is made.'
            }
        ],
        related: [
            { key: 'aplynow', category: 'Product Design • UI/UX', secondary: '' },
            { key: 'interface-x', category: 'Visual Identity • Conference Design', secondary: '' }
        ]
    },
    'excellence-distribution': {
        published: true,
        caseStudyComplete: true,
        category: 'BRAND IDENTITY • PACKAGING • VISUAL DESIGN',
        title: 'Excellence Distribution',
        displayCategory: 'Visual Design',
        secondary: 'Brand Identity • Packaging',
        image: 'assets/images/ed_f.png',
        liveUrl: "https://www.excellence-distribution.ca/",
        intro: 'A complete visual identity built from the ground up and carried across packaging, business materials and branded applications.',
        overview: 'Excellence Distribution was a brand I worked on from the ground up, starting with the identity and then building the visual system across the materials the business needed. The work expanded from the logo into business cards, product packaging, labels and decal graphics, so the challenge was not just creating individual pieces but making sure everything felt like part of the same brand. I focused on building a visual direction that could stay recognizable across very different formats while still leaving enough flexibility for each application to do its job.',
        metadata: {
            project: 'Excellence Distribution',
            type: 'Brand Identity • Packaging • Commercial Design',
            role: 'Brand Design • Packaging • Visual Design',
            tools: ['Adobe Illustrator', 'ChatGPT', 'Claude', 'LoveArt'],
            toolDetails: {
                'Adobe Illustrator': 'Identity, vector artwork and production design',
                ChatGPT: 'Content and creative ideation support',
                Claude: 'Concept and structure exploration',
                LoveArt: 'Visual exploration and reference development'
            }
        },
        brandScope: [
            'Logo design',
            'Business card design',
            'Product labels',
            'Decal graphics',
            'Overall brand visual direction'
        ],
        designConsiderations: [
            'Maintaining recognition across different formats',
            'Creating hierarchy for packaging information',
            'Balancing brand consistency with product variation',
            'Designing for physical dimensions',
            'Keeping applications visually connected',
            'Preparing artwork for real-world output'
        ],
        brandPrinciple: 'One brand, multiple applications.',
        toolStory: {
            exploration: 'Visual and conceptual exploration, reference development and creative ideation were supported by AI tools.',
            production: 'Final vector execution and production work were completed through Adobe Illustrator.'
        },
        images: [
            'assets/images/ed_f.png',
            'assets/images/ed_1.png',
            'assets/images/ed_2.png'
        ],
        imageAlts: [
            'Temporary Excellence Distribution hero placeholder representing a complete identity, packaging and branded application system',
            'Temporary placeholder for the Excellence Distribution logo, business card, decal graphics and supporting brand elements',
            'Temporary placeholder for the Excellence Distribution packaging family and coordinated product label applications'
        ],
        outcomeLabel: 'OUTCOME',
        outcomeHeading: 'What We Deliver',
        outcomeIntro: 'The finished system gave Excellence Distribution a consistent visual identity that could move from the brand itself into packaging, printed materials and real-world applications without losing recognition.',
        deliverables: [
            {
                title: 'Brand Foundation',
                text: 'A recognizable identity established the visual direction that the rest of the brand could build from.'
            },
            {
                title: 'Flexible Packaging System',
                text: 'Product labels were designed as part of one visual family while still giving individual products enough distinction to be understood quickly.'
            },
            {
                title: 'Consistent Brand Applications',
                text: 'Business cards, decal graphics and packaging carried the same visual language across very different physical formats.'
            },
            {
                title: 'Production-Ready Artwork',
                text: 'Final designs were prepared with real dimensions, hierarchy and practical output in mind so the brand could move from concept into physical use.'
            }
        ],
        related: [
            { key: 'interface-x', category: 'Visual Identity • Conference Design', secondary: '' },
            { key: 'lapinoz', category: 'Visual Design • Digital Display', secondary: '' }
        ]
    },
    lapinoz: {
        published: false,
        category: 'VISUAL',
        title: "La Pino'z Digital Menu",
        displayCategory: 'Visual Design',
        secondary: 'Digital Menu • Display Design',
        image: 'assets/images/project1.png',
        liveUrl: null
    },
    'food-art': {
        published: false,
        category: 'BRANDING • VISUAL',
        title: 'Food Art',
        displayCategory: 'Brand Design',
        secondary: 'Identity • Marketing Visuals',
        image: 'assets/images/project2.png',
        liveUrl: null
    },
    'web-experiences': {
        published: false,
        category: 'UI/UX • PRODUCT',
        title: 'Web Experiences',
        displayCategory: 'Web Design & Development',
        secondary: 'WordPress • Front-End',
        image: 'assets/images/project1.png',
        liveUrl: null
    }
};

const createPlaceholderProject = project => ({
    ...project,
    intro: 'A full project case study is being prepared.',
    overview: `${project.title} is being prepared as a full case study. Project context, design decisions and final outcomes will be added once the work is ready to present.`,
    metadata: {
        project: project.title,
        type: project.displayCategory,
        role: 'Case study in progress',
        tools: ['Details coming soon']
    },
    images: Array.from({ length: 3 }, (_, index) => index % 2 === 0
        ? project.image
        : project.image === 'assets/images/project1.png'
            ? 'assets/images/project2.png'
            : 'assets/images/project1.png'),
    outcomeLabel: 'OUTCOME',
    outcomeHeading: 'Case Study in Progress',
    outcomeIntro: 'Detailed project deliverables will be added once the full case study is ready.',
    deliverables: Array.from({ length: 4 }, () => ({
        title: 'Details Coming Soon',
        text: 'This part of the project story is still being prepared.'
    })),
    related: ['aplynow', 'mytradearena', 'interface-x']
        .filter(key => projectData[key].title !== project.title)
        .slice(0, 2)
});

const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
};

const renderProject = () => {
    const requestedKey = new URLSearchParams(window.location.search).get('project') || 'aplynow';

    if (projectData[requestedKey]?.published === false) {
        window.location.replace('works.html');
        return;
    }

    const resolvedKey = projectData[requestedKey] ? requestedKey : 'aplynow';
    const sourceProject = projectData[resolvedKey];
    const project = sourceProject.caseStudyComplete ? sourceProject : createPlaceholderProject(sourceProject);
    const page = document.getElementById('project-page');
    const hero = document.getElementById('project-hero');

    document.title = `${project.title} | Hemil`;
    if (page) page.dataset.project = resolvedKey;
    if (hero) hero.dataset.project = resolvedKey;

    setText('#project-category', project.category);
    setText('#project-title', project.title);
    setText('#project-intro', project.intro);
    setText('#meta-project', project.metadata.project);
    setText('#meta-type', project.metadata.type);
    setText('#meta-role', project.metadata.role);
    setText('#outcome-label', project.outcomeLabel);
    setText('#outcome-heading', project.outcomeHeading);
    setText('#outcome-intro', project.outcomeIntro);

    const overview = document.getElementById('project-overview-copy');
    if (overview) {
        const strong = document.createElement('strong');
        strong.textContent = project.title;
        const remainingCopy = project.overview.startsWith(project.title)
            ? project.overview.slice(project.title.length)
            : ` ${project.overview}`;
        overview.replaceChildren(strong, document.createTextNode(remainingCopy));
    }

    const tools = document.getElementById('meta-tools');
    if (tools) {
        tools.replaceChildren(...project.metadata.tools.map(tool => {
            const item = document.createElement('span');
            item.textContent = tool;
            const toolDetail = project.metadata.toolDetails?.[tool];
            if (toolDetail) {
                item.title = toolDetail;
                item.setAttribute('aria-label', `${tool}: ${toolDetail}`);
            }
            return item;
        }));
    }

    const showcaseImages = Array.from(document.querySelectorAll('.case-hero img, .case-showcase img'));
    showcaseImages.forEach((image, index) => {
        image.src = project.images[index] || project.images[0];
        image.alt = project.imageAlts?.[index] || (index === 0
            ? `Temporary ${project.title} project cover artwork`
            : `Temporary ${project.title} project visual ${index + 1}`);
    });

    const deliverableItems = Array.from(document.querySelectorAll('.deliverable-item'));
    deliverableItems.forEach((item, index) => {
        const deliverable = project.deliverables[index];
        const title = item.querySelector('h3');
        const copy = item.querySelector('p');
        if (title) title.textContent = deliverable.title;
        if (copy) copy.textContent = deliverable.text;
    });

    const relatedPool = [...(project.related || []), ...Object.keys(projectData)];
    const seenRelatedKeys = new Set();
    const publishedRelated = relatedPool.filter(relatedConfig => {
        const relatedKey = typeof relatedConfig === 'string' ? relatedConfig : relatedConfig.key;
        const related = projectData[relatedKey];

        if (!related || related.published !== true || relatedKey === resolvedKey || seenRelatedKeys.has(relatedKey)) {
            return false;
        }

        seenRelatedKeys.add(relatedKey);
        return true;
    }).slice(0, 2);

    const relatedCards = Array.from(document.querySelectorAll('#more-projects .project-card'));
    relatedCards.forEach((card, index) => {
        const relatedConfig = publishedRelated[index];
        if (!relatedConfig) {
            card.remove();
            return;
        }

        const relatedKey = typeof relatedConfig === 'string' ? relatedConfig : relatedConfig.key;
        const related = projectData[relatedKey];
        if (!related) return;

        card.href = `project.html?project=${relatedKey}`;
        card.dataset.project = relatedKey;
        const image = card.querySelector('img');
        if (image) {
            image.src = related.image || related.images?.[0] || 'assets/images/project1.png';
            image.alt = `${related.title} project preview`;
        }
        const title = card.querySelector('.project-card-title');
        const category = card.querySelector('.project-meta-category');
        const secondary = card.querySelector('.project-meta-tags');
        if (title) title.textContent = related.title;
        if (category) {
            category.textContent = typeof relatedConfig === 'string'
                ? related.displayCategory || related.metadata?.type || related.category
                : relatedConfig.category;
        }
        if (secondary) {
            const secondaryText = typeof relatedConfig === 'string'
                ? related.secondary || 'Full case study coming soon'
                : relatedConfig.secondary;
            secondary.textContent = secondaryText;
            secondary.hidden = !secondaryText;
        }
    });

    window.activeProject = { key: resolvedKey, data: project };
};

const applyPublishedProjectVisibility = () => {
    document.querySelectorAll('.works-project').forEach(item => {
        const projectKey = item.querySelector('.project-card[data-project]')?.dataset.project;
        if (!projectKey || projectData[projectKey]?.published !== true) {
            item.remove();
        }
    });

    document.querySelectorAll('#selected-work .project-card[data-project]').forEach(card => {
        if (projectData[card.dataset.project]?.published !== true) {
            card.remove();
        }
    });

    const visibleWorks = Array.from(document.querySelectorAll('.works-project'));
    visibleWorks.forEach(item => item.classList.remove('works-project-wide'));
    if (visibleWorks.length === 5) {
        visibleWorks[3]?.classList.add('works-project-wide');
        visibleWorks[4]?.classList.add('works-project-wide');
    }

    const counter = document.getElementById('works-project-count');
    if (counter) {
        const count = visibleWorks.length;
        counter.textContent = `${String(count).padStart(2, '0')} ${count === 1 ? 'PROJECT' : 'PROJECTS'}`;
    }
};

const isValidLiveProjectUrl = value => {
    if (typeof value !== 'string' || !value.trim()) return false;

    try {
        const url = new URL(value);
        return url.protocol === 'https:' || url.protocol === 'http:';
    } catch {
        return false;
    }
};

const renderLiveProjectCtas = () => {
    document.querySelectorAll('.project-card[data-project]').forEach(originalCard => {
        const projectKey = originalCard.dataset.project;
        const project = projectData[projectKey];
        if (!project || project.published !== true) return;
        if (originalCard.querySelector('.project-live-cta')) return;

        const hasLiveUrl = isValidLiveProjectUrl(project.liveUrl);
        const internalHref = `project.html?project=${projectKey}`;
        let card = originalCard;

        if (originalCard.tagName === 'A') {
            const replacement = document.createElement('div');
            Array.from(originalCard.attributes).forEach(attribute => {
                if (attribute.name !== 'href') replacement.setAttribute(attribute.name, attribute.value);
            });
            replacement.classList.add('project-card--has-live');
            replacement.append(...originalCard.childNodes);
            originalCard.replaceWith(replacement);
            card = replacement;
        }

        const interactive = card.querySelector('.project-card-interactive');
        const imageWrapper = interactive?.querySelector('.project-image-wrapper');
        const projectInfo = interactive?.querySelector('.project-info');
        if (!interactive || !imageWrapper || !projectInfo) return;

        const imageLink = document.createElement('a');
        imageLink.href = internalHref;
        imageLink.className = 'project-case-study-link project-case-study-image-link';
        imageLink.setAttribute('aria-label', `View ${project.title} case study`);
        imageWrapper.replaceWith(imageLink);
        imageLink.append(imageWrapper);

        const infoRow = document.createElement('div');
        infoRow.className = 'project-info-row';
        const infoLink = document.createElement('a');
        infoLink.href = internalHref;
        infoLink.className = 'project-case-study-link project-info-link';
        projectInfo.replaceWith(infoRow);
        infoLink.append(projectInfo);
        infoRow.append(infoLink);

        const liveCtaWrapper = document.createElement('div');
        liveCtaWrapper.className = 'project-live-cta-wrap magnetic-cta';
        const liveCta = document.createElement('a');
        liveCta.className = 'btn btn-outline project-live-cta magnetic-cta-target';
        liveCta.setAttribute('aria-label', `Visit live ${project.title} project`);
        liveCta.innerHTML = '<span>VISIT PROJECT</span><span class="project-live-cta-icon" aria-hidden="true">↗</span>';

        if (hasLiveUrl) {
            liveCta.href = project.liveUrl;
            liveCta.target = '_blank';
            liveCta.rel = 'noopener noreferrer';
        } else {
            liveCta.tabIndex = 0;
            liveCta.setAttribute('role', 'link');
            liveCta.setAttribute('aria-disabled', 'true');
        }

        liveCta.addEventListener('click', event => {
            event.stopPropagation();
            if (!hasLiveUrl) event.preventDefault();
        });
        liveCta.addEventListener('keydown', event => {
            if (!hasLiveUrl && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
        liveCta.addEventListener('pointerenter', () => {
            const viewCursor = document.getElementById('global-project-cursor');
            if (viewCursor && typeof gsap !== 'undefined') {
                gsap.to(viewCursor, {
                    autoAlpha: 0,
                    scale: 0.7,
                    duration: 0.16,
                    ease: 'power2.out',
                    overwrite: true
                });
            }
        });
        liveCtaWrapper.append(liveCta);
        infoRow.append(liveCtaWrapper);

        card.addEventListener('click', event => {
            if (event.defaultPrevented || event.target.closest('a, button')) return;
            window.location.href = internalHref;
        });
    });

    if (typeof window.initMagneticCtas === 'function') {
        window.initMagneticCtas();
    }
};

// ========================================
// GLOBAL INITIALIZERS
// ========================================

const initMobileNavigation = () => {
    const header = document.querySelector('header');
    const headerInner = header?.querySelector('.header-inner');
    if (!header || !headerInner || document.getElementById('mobile-navigation')) return;

    const mobileBreakpoint = window.matchMedia('(max-width: 992px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pageKey = document.body.classList.contains('page-about')
        ? 'about'
        : document.body.classList.contains('page-works') || document.body.classList.contains('page-project')
            ? 'works'
            : 'home';
    const navigationItems = [
        { number: '01', label: 'Home', href: 'index.html', key: 'home' },
        { number: '02', label: 'About Me', href: 'about.html', key: 'about' },
        { number: '03', label: 'My Works', href: 'works.html', key: 'works' },
        { number: '04', label: 'Contact', href: '#contact-footer', key: 'contact' }
    ];

    const menuToggle = document.createElement('button');
    menuToggle.type = 'button';
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-controls', 'mobile-navigation');
    menuToggle.innerHTML = `
        <span class="mobile-menu-icon" aria-hidden="true">
            <span></span>
            <span></span>
        </span>
        <span class="mobile-menu-label" aria-hidden="true">
            <span class="mobile-menu-label-track">
                <span>MENU</span>
                <span>CLOSE</span>
            </span>
        </span>
    `;
    headerInner.append(menuToggle);

    const overlay = document.createElement('div');
    overlay.id = 'mobile-navigation';
    overlay.className = 'mobile-navigation';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.hidden = true;
    overlay.inert = true;

    const navigationMarkup = navigationItems.map(item => {
        const isActive = item.key === pageKey;
        return `
            <li class="mobile-nav-item">
                <a href="${item.href}" class="mobile-nav-link${isActive ? ' is-active' : ''}"${isActive ? ' aria-current="page"' : ''}>
                    <span class="mobile-nav-number">${item.number}</span>
                    <span class="mobile-nav-text">${item.label}</span>
                    <span class="mobile-nav-active-dot" aria-hidden="true"></span>
                    <span class="mobile-nav-arrow" aria-hidden="true">↗</span>
                </a>
            </li>
        `;
    }).join('');

    const existingSocialLinks = Array.from(document.querySelectorAll('#contact-footer .social-links .social-link'));
    const socialMarkup = existingSocialLinks.map(link => {
        const label = link.childNodes[0]?.textContent?.trim() || link.textContent.trim();
        const target = link.getAttribute('target');
        const rel = link.getAttribute('rel');
        return `<a href="${link.getAttribute('href') || '#'}"${target ? ` target="${target}"` : ''}${rel ? ` rel="${rel}"` : ''}>${label}</a>`;
    }).join('');

    overlay.innerHTML = `
        <div class="mobile-navigation-atmosphere" aria-hidden="true"></div>
        <div class="mobile-navigation-inner">
            <nav class="mobile-navigation-nav" aria-label="Mobile navigation">
                <ul class="mobile-navigation-list">${navigationMarkup}</ul>
            </nav>
            <div class="mobile-navigation-footer">
                <span>Edmonton, AB, Canada</span>
                <div class="mobile-navigation-socials">${socialMarkup}</div>
            </div>
        </div>
    `;
    document.body.append(overlay);

    const navLinks = Array.from(overlay.querySelectorAll('.mobile-nav-link'));
    const navItems = Array.from(overlay.querySelectorAll('.mobile-nav-item'));
    const menuFooter = overlay.querySelector('.mobile-navigation-footer');
    const menuSocialLinks = Array.from(overlay.querySelectorAll('.mobile-navigation-socials a'));
    let isOpen = false;
    let menuTimeline = null;
    let lockedScrollY = 0;
    let revealGeometry = null;

    const getRevealGeometry = () => {
        const rect = menuToggle.getBoundingClientRect();
        const originX = rect.left + (rect.width / 2);
        const originY = rect.top + (rect.height / 2);
        const radiusX = Math.max(originX, window.innerWidth - originX);
        const radiusY = Math.max(originY, window.innerHeight - originY);
        return {
            collapsed: `circle(0px at ${originX}px ${originY}px)`,
            expanded: `circle(${Math.ceil(Math.hypot(radiusX, radiusY))}px at ${originX}px ${originY}px)`
        };
    };

    const lockBodyScroll = () => {
        lockedScrollY = window.scrollY;
        document.body.classList.add('mobile-navigation-open');
        document.body.style.top = `-${lockedScrollY}px`;
    };

    const unlockBodyScroll = () => {
        document.body.classList.remove('mobile-navigation-open');
        document.body.style.top = '';
        window.scrollTo(0, lockedScrollY);
    };

    const setToggleState = open => {
        menuToggle.classList.toggle('is-open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    };

    const finishClose = ({ restoreFocus = true, onComplete } = {}) => {
        overlay.hidden = true;
        overlay.inert = true;
        overlay.setAttribute('aria-hidden', 'true');
        unlockBodyScroll();
        if (restoreFocus && mobileBreakpoint.matches) menuToggle.focus({ preventScroll: true });
        if (typeof onComplete === 'function') onComplete();
    };

    const closeMenu = ({ immediate = false, restoreFocus = true, onComplete } = {}) => {
        if (!isOpen) {
            if (typeof onComplete === 'function') onComplete();
            return;
        }

        isOpen = false;
        setToggleState(false);
        overlay.inert = true;
        menuTimeline?.kill();

        if (immediate || typeof gsap === 'undefined') {
            if (typeof gsap !== 'undefined') gsap.set(overlay, { clearProps: 'clipPath,opacity,visibility' });
            finishClose({ restoreFocus, onComplete });
            return;
        }

        if (reducedMotion.matches) {
            menuTimeline = gsap.timeline({ onComplete: () => finishClose({ restoreFocus, onComplete }) });
            menuTimeline.to(overlay, { autoAlpha: 0, duration: 0.16, ease: 'power2.out' });
            return;
        }

        const { collapsed } = revealGeometry || getRevealGeometry();
        menuTimeline = gsap.timeline({ onComplete: () => finishClose({ restoreFocus, onComplete }) });
        menuTimeline.to([navItems, menuFooter], {
            autoAlpha: 0,
            y: 18,
            duration: 0.2,
            stagger: { each: 0.025, from: 'end' },
            ease: 'power2.in'
        });
        menuTimeline.to(overlay, {
            clipPath: collapsed,
            duration: 0.5,
            ease: 'power3.inOut'
        }, 0.04);
    };

    const openMenu = () => {
        if (isOpen || !mobileBreakpoint.matches) return;

        isOpen = true;
        overlay.hidden = false;
        overlay.inert = false;
        overlay.setAttribute('aria-hidden', 'false');
        setToggleState(true);
        revealGeometry = getRevealGeometry();
        lockBodyScroll();
        menuTimeline?.kill();

        if (typeof gsap === 'undefined') {
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            return;
        }

        if (reducedMotion.matches) {
            gsap.set([navItems, menuFooter], { autoAlpha: 1, y: 0 });
            menuTimeline = gsap.timeline();
            menuTimeline.fromTo(overlay,
                { autoAlpha: 0, clipPath: 'none' },
                { autoAlpha: 1, duration: 0.16, ease: 'power2.out' }
            );
            return;
        }

        const { collapsed, expanded } = revealGeometry;
        gsap.set(overlay, { autoAlpha: 1, clipPath: collapsed });
        gsap.set(navItems, { autoAlpha: 0, y: 35 });
        gsap.set(menuFooter, { autoAlpha: 0, y: 14 });

        menuTimeline = gsap.timeline();
        menuTimeline.to(overlay, {
            clipPath: expanded,
            duration: 0.56,
            ease: 'power3.inOut'
        });
        menuTimeline.to(navItems, {
            autoAlpha: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.08,
            ease: 'power3.out'
        }, 0.2);
        menuTimeline.to(menuFooter, {
            autoAlpha: 1,
            y: 0,
            duration: 0.38,
            ease: 'power3.out'
        }, 0.42);
    };

    menuToggle.addEventListener('click', () => {
        isOpen ? closeMenu() : openMenu();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            const href = link.getAttribute('href');
            if (href !== '#contact-footer') {
                unlockBodyScroll();
                return;
            }

            event.preventDefault();
            closeMenu({
                restoreFocus: false,
                onComplete: () => {
                    const target = document.getElementById('contact-footer');
                    if (!target) return;
                    const headerOffset = 100;
                    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                    window.scrollTo({
                        top: targetTop,
                        behavior: reducedMotion.matches ? 'auto' : 'smooth'
                    });
                }
            });
        });
    });

    menuSocialLinks.forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', event => event.preventDefault());
        }
    });

    document.addEventListener('keydown', event => {
        if (!isOpen) return;

        if (event.key === 'Escape') {
            event.preventDefault();
            closeMenu();
            return;
        }

        if (event.key !== 'Tab') return;
        const focusable = [menuToggle, ...overlay.querySelectorAll('a[href]')].filter(element => !element.hasAttribute('disabled'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });

    const resetForDesktop = event => {
        if (!event.matches && isOpen) closeMenu({ immediate: true, restoreFocus: false });
    };
    mobileBreakpoint.addEventListener('change', resetForDesktop);
};

const initGlobalNavigation = () => {
    console.log('Portfolio initialized.');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        });
    });

    initMobileNavigation();
};

const initProjectDataLayer = () => {
    window.projectData = projectData;
    applyPublishedProjectVisibility();
    if (document.body.classList.contains('page-project')) renderProject();
    renderLiveProjectCtas();
    window.renderLiveProjectCtas = renderLiveProjectCtas;
};

// ========================================
// ABOUT PAGE
// ========================================

const initAboutPage = () => {
    const aboutPage = document.getElementById('about-page');
    if (!aboutPage || typeof gsap === 'undefined') return;

    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasPrecisePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!isReducedMotion) {
        const introTimeline = gsap.timeline();

        introTimeline.fromTo('.about-page-label',
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
        );

        introTimeline.fromTo('.about-statement-line',
            { y: '110%', opacity: 0, filter: 'blur(6px)' },
            { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.9, stagger: 0.1, ease: 'power4.out' },
            '-=0.2'
        );

        introTimeline.fromTo('.about-biography p',
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
            '-=0.55'
        );

        introTimeline.fromTo('.about-principle',
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.25'
        );

        introTimeline.fromTo('#resume-download',
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.35'
        );

        const portraitTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about-page-portrait',
                start: 'top 85%',
                once: true
            }
        });

        portraitTimeline.fromTo('.about-portrait-mask',
            { clipPath: 'inset(0% 0% 100% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.05, ease: 'power4.out' }
        );

        portraitTimeline.fromTo('.about-page-portrait-img',
            { scale: 1.05, y: 18 },
            { scale: 1, y: 0, duration: 1.0, ease: 'power4.out' },
            '<'
        );

        portraitTimeline.fromTo('.about-portrait-accent',
            { opacity: 0, x: 14 },
            { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
            '-=0.45'
        );

        const bringTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#what-i-bring',
                start: 'top 80%',
                once: true
            }
        });

        bringTimeline.fromTo('.what-i-bring-heading-line',
            { y: '105%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 0.75, ease: 'power4.out' }
        );

        document.querySelectorAll('.capability-item').forEach((item, index) => {
            const startTime = 0.55 + (index * 0.1);
            const number = item.querySelector('.capability-number');
            const copy = item.querySelector('.capability-copy');

            bringTimeline.fromTo(number,
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
                startTime
            );

            bringTimeline.fromTo(copy,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                startTime + 0.05
            );
        });

        gsap.fromTo('.about-social',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-social',
                    start: 'top 86%',
                    once: true
                }
            }
        );
    }

    if (hasPrecisePointer && !isReducedMotion) {
        const portraitStage = document.getElementById('about-page-portrait');
        const portraitDepth = portraitStage?.querySelector('.about-portrait-depth');
        const accentDepth = portraitStage?.querySelector('.about-portrait-accent-depth');

        if (portraitStage && portraitDepth && accentDepth) {
            const createQuickTo = (target, property) => gsap.quickTo(target, property, {
                duration: 0.75,
                ease: 'power3.out'
            });
            const imageXTo = createQuickTo(portraitDepth, 'x');
            const imageYTo = createQuickTo(portraitDepth, 'y');
            const imageRotationTo = createQuickTo(portraitDepth, 'rotation');
            const accentXTo = createQuickTo(accentDepth, 'x');
            const accentYTo = createQuickTo(accentDepth, 'y');
            const accentRotationTo = createQuickTo(accentDepth, 'rotation');

            portraitStage.addEventListener('pointermove', event => {
                const rect = portraitStage.getBoundingClientRect();
                const normalizedX = gsap.utils.clamp(-1, 1, ((event.clientX - rect.left) / rect.width) * 2 - 1);
                const normalizedY = gsap.utils.clamp(-1, 1, ((event.clientY - rect.top) / rect.height) * 2 - 1);

                imageXTo(normalizedX * 5);
                imageYTo(normalizedY * 4);
                imageRotationTo(normalizedX * 0.5);
                accentXTo(normalizedX * 6.5);
                accentYTo(normalizedY * 5.2);
                accentRotationTo(normalizedX * 0.4);
            });

            portraitStage.addEventListener('pointerleave', () => {
                imageXTo(0);
                imageYTo(0);
                imageRotationTo(0);
                accentXTo(0);
                accentYTo(0);
                accentRotationTo(0);
            });
        }
    }
};

// ========================================
// ANIMATIONS & INTERACTIONS
// ========================================

const initAnimationSystems = () => {
    const initMagneticCtas = () => {
        if (typeof gsap === 'undefined') return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        document.querySelectorAll('.magnetic-cta').forEach(container => {
            const target = container.querySelector('.magnetic-cta-target');
            if (!target || container.dataset.magneticInitialized === 'true') return;

            container.dataset.magneticInitialized = 'true';
            container.addEventListener('mousemove', event => {
                const rect = container.getBoundingClientRect();
                const relativeX = event.clientX - rect.left - (rect.width / 2);
                const relativeY = event.clientY - rect.top - (rect.height / 2);

                gsap.to(container, {
                    x: relativeX * 0.2,
                    y: relativeY * 0.2,
                    duration: 0.4,
                    ease: 'power2.out'
                });
                gsap.to(target, {
                    x: relativeX * 0.1,
                    y: relativeY * 0.1,
                    filter: 'brightness(1.1)',
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });

            container.addEventListener('mouseleave', () => {
                gsap.to(container, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.5)'
                });
                gsap.to(target, {
                    x: 0,
                    y: 0,
                    filter: 'brightness(1)',
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.5)'
                });
            });
        });
    };

    window.initMagneticCtas = initMagneticCtas;
    initMagneticCtas();

    // --------------------------------------------------------
    // 1. GSAP Hero Animation Sequence
    // --------------------------------------------------------
    if (typeof gsap !== 'undefined' && document.getElementById('hero-section')) {
        gsap.registerPlugin(ScrollTrigger);

        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isTouch = window.matchMedia('(pointer: coarse), (hover: none)').matches;

        // Stage 1: Header
        gsap.fromTo("header .site-logo", 
            { opacity: 0, y: -12 }, 
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
        
        gsap.fromTo("header nav ul li", 
            { opacity: 0, y: -12 }, 
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.05, delay: 0.1 }
        );

        // Stage 2: Hero headline
        if (!isReducedMotion) {
            gsap.fromTo(".hero-line", 
                { y: "110%", opacity: 0, filter: "blur(8px)", letterSpacing: "0.05em" },
                { y: "0%", opacity: 1, filter: "blur(0px)", letterSpacing: "normal", duration: 1.0, ease: "power4.out", stagger: 0.12, delay: 0.2 }
            );
        } else {
            gsap.set(".hero-line", { y: "0%", opacity: 1, filter: "blur(0px)" });
        }

        // Stage 3: CTA
        gsap.fromTo("#hero-cta-container", 
            { opacity: 0, y: 16, scale: 0.96 }, 
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out", delay: 1.1 }
        );

        // --------------------------------------------------------
        // 2. Interactive Pointer Effects (Desktop Only)
        // --------------------------------------------------------
        if (!isTouch && !isReducedMotion) {
            const heroSection = document.getElementById('hero-section');
            const spotlight = document.getElementById('ambient-spotlight');
            const heroTitle = document.getElementById('hero-title');
            const ctaContainer = document.getElementById('hero-cta-container');

            const xTo = gsap.quickTo(spotlight, "x", {duration: 0.5, ease: "power3.out"});
            const yTo = gsap.quickTo(spotlight, "y", {duration: 0.5, ease: "power3.out"});

            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const relX = e.clientX - rect.left;
                const relY = e.clientY - rect.top;
                
                // Lens tracking
                gsap.to(spotlight, { opacity: 1, duration: 0.3 });
                xTo(relX);
                yTo(relY);

                // Headline depth
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const moveX = ((relX - centerX) / centerX) * 4; // max 4px
                const moveY = ((relY - centerY) / centerY) * 3; // max 3px
                const rotate = ((relX - centerX) / centerX) * 0.5; // max 0.5deg
                
                gsap.to(heroTitle, { x: moveX, y: moveY, rotation: rotate, duration: 1.2, ease: "power2.out" });
            });

            heroSection.addEventListener('mouseleave', () => {
                gsap.to(spotlight, { opacity: 0, duration: 0.5 });
                gsap.to(heroTitle, { x: 0, y: 0, rotation: 0, duration: 1.2, ease: "power2.out" });
            });

            // Keep the existing hero lens response coupled to the shared CTA interaction.
            ctaContainer.addEventListener('mouseenter', () => {
                gsap.to(spotlight, { 
                    width: 62, 
                    height: 62, 
                    backgroundColor: "rgba(255, 138, 58, 0.15)",
                    borderColor: "rgba(255, 138, 58, 0.8)",
                    duration: 0.3 
                });
            });

            ctaContainer.addEventListener('mouseleave', () => {
                gsap.to(spotlight, { 
                    width: 72, 
                    height: 72, 
                    backgroundColor: "rgba(255, 138, 58, 0.08)",
                    borderColor: "var(--brand-color)",
                    duration: 0.3 
                });
            });
        }

        // --------------------------------------------------------
        // 3. Scroll Exit Behavior
        // --------------------------------------------------------
        if (!isReducedMotion) {
            const heroSection = document.getElementById('hero-section');
            const heroTitle = document.getElementById('hero-title');
            const ctaContainer = document.getElementById('hero-cta-container');

            gsap.to(heroTitle, {
                scrollTrigger: {
                    trigger: heroSection,
                    start: "top top",
                    end: "45% top",
                    scrub: true,
                    onEnterBack: () => {
                        gsap.set(ctaContainer, { autoAlpha: 1, y: 0, scale: 1 });
                    }
                },
                y: -20,
                opacity: 0.72
            });

            gsap.to(document.getElementById('ambient-spotlight'), {
                scrollTrigger: {
                    trigger: heroSection,
                    start: "top top",
                    end: "20% top",
                    scrub: true
                },
                opacity: 0
            });
        }
    }

    // --------------------------------------------------------
    // 4. Smooth Scroll for CTA
    // --------------------------------------------------------
    const ctaBtn = document.getElementById('hero-cta');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            const href = ctaBtn.getAttribute('href');
            if(href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    // Let native smooth scrolling handle it or use scrollTo
                    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 100; // comfortable spacing above
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // --------------------------------------------------------
    // 5. Section 2: About Preview Animations
    // --------------------------------------------------------
    if (typeof gsap !== 'undefined' && document.getElementById('about-section')) {
        const aboutSection = document.getElementById('about-section');
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isTouch = window.matchMedia('(pointer: coarse), (hover: none)').matches;

        if (!isReducedMotion) {
            // Entrance Animations
            const aboutTl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutSection,
                    start: "top 80%", // 20% into viewport
                    once: true
                }
            });

            // Heading Reveal
            aboutTl.fromTo(".about-line", 
                { y: "105%", opacity: 0, filter: "blur(5px)" },
                { y: "0%", opacity: 1, filter: "blur(0px)", duration: 0.85, ease: "power4.out", stagger: 0.1 }
            );

            // Image Reveal (overlaps heading)
            aboutTl.fromTo(".about-image-mask",
                { clipPath: "inset(100% 0% 0% 0%)" },
                { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.out" },
                "-=0.7" // Start slightly after first heading line
            );

            aboutTl.fromTo(".about-portrait-img",
                { scale: 1.07 },
                { scale: 1, duration: 1.1, ease: "power4.out" },
                "<" // Sync with mask
            );

            // Accents
            aboutTl.fromTo("#about-accent-top",
                { x: 20, opacity: 0 },
                { x: 0, opacity: 0.75, duration: 0.8, ease: "power2.out" },
                "<"
            );

            aboutTl.fromTo("#about-accent-left",
                { x: -20, opacity: 0 },
                { x: 0, opacity: 0.75, duration: 0.8, ease: "power2.out" },
                "<"
            );

            // Paragraph Reveal
            aboutTl.fromTo(".about-paragraph",
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
                "-=0.9" // after headline begins appearing
            );

            // CTA Reveal
            aboutTl.fromTo("#about-cta",
                { opacity: 0, y: 14, scale: 0.97 },
                { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" },
                "-=0.5" // after paragraph
            );
        } else {
            // Set final states for reduced motion
            gsap.set(".about-line, .about-paragraph, #about-cta", { opacity: 1, y: 0, filter: "blur(0px)" });
            gsap.set(".about-image-mask", { clipPath: "inset(0% 0% 0% 0%)" });
            gsap.set(".about-portrait-img", { scale: 1 });
            gsap.set("#about-accent-top, #about-accent-left", { x: 0, opacity: 0.75 });
        }

        // Pointer Depth Effect (Desktop Only)
        if (!isTouch && !isReducedMotion) {
            const aboutPortraitContainer = document.getElementById('about-portrait-container');
            const aboutPortraitImg = document.querySelector('.about-portrait-img');
            const aboutAccentTop = document.getElementById('about-accent-top');
            const aboutAccentLeft = document.getElementById('about-accent-left');

            if (aboutPortraitContainer) {
                aboutPortraitContainer.addEventListener('mousemove', (e) => {
                    const rect = aboutPortraitContainer.getBoundingClientRect();
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const relX = e.clientX - rect.left - centerX;
                    const relY = e.clientY - rect.top - centerY;
                    
                    const moveX = (relX / centerX) * 5; // max 5px
                    const moveY = (relY / centerY) * 4; // max 4px
                    const rotate = (relX / centerX) * 0.6; // max 0.6deg
                    
                    // Image layer
                    gsap.to(aboutPortraitImg, { x: moveX, y: moveY, rotation: rotate, duration: 1.2, ease: "power2.out" });
                    
                    // Outline layer (140% multiplier)
                    gsap.to([aboutAccentTop, aboutAccentLeft], { x: moveX * 1.4, y: moveY * 1.4, rotation: rotate * 1.4, duration: 1.2, ease: "power2.out" });
                });

                aboutPortraitContainer.addEventListener('mouseleave', () => {
                    gsap.to(aboutPortraitImg, { x: 0, y: 0, rotation: 0, duration: 1.2, ease: "power2.out" });
                    gsap.to([aboutAccentTop, aboutAccentLeft], { x: 0, y: 0, rotation: 0, duration: 1.2, ease: "power2.out" });
                });
            }

        }
    }

    // --------------------------------------------------------
    // Shared Project Card + VIEW Cursor Interactions
    // --------------------------------------------------------
    const initProjectInteractions = projectCards => {
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isTouch = window.matchMedia('(pointer: coarse), (hover: none)').matches;

        if (isTouch || isReducedMotion) return;

        // ScrollTrigger owns each outer card and the image itself. Magnetic
        // movement stays on dedicated nested layers to avoid transform conflicts.
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            projectCards.forEach(card => {
                const interactive = card.querySelector('.project-card-interactive');
                const imageDepth = card.querySelector('.project-image-depth');
                const title = card.querySelector('.project-card-title');

                if (!interactive || !imageDepth || !title) return;

                const createQuickTo = (target, property) => gsap.quickTo(target, property, {
                    duration: 0.35,
                    ease: "power3.out"
                });
                const cardXTo = createQuickTo(interactive, "x");
                const cardYTo = createQuickTo(interactive, "y");
                const cardRotateXTo = createQuickTo(interactive, "rotationX");
                const cardRotateYTo = createQuickTo(interactive, "rotationY");
                const imageXTo = createQuickTo(imageDepth, "x");
                const imageYTo = createQuickTo(imageDepth, "y");
                const titleXTo = createQuickTo(title, "x");
                const motionSetters = [
                    cardXTo,
                    cardYTo,
                    cardRotateXTo,
                    cardRotateYTo,
                    imageXTo,
                    imageYTo,
                    titleXTo
                ];

                const setMotionDuration = duration => {
                    motionSetters.forEach(setter => setter.tween.duration(duration));
                };

                card.addEventListener('pointerenter', () => {
                    setMotionDuration(0.35);
                    gsap.to(imageDepth, {
                        scale: 1.03,
                        duration: 0.35,
                        ease: "power3.out",
                        overwrite: true
                    });
                });

                card.addEventListener('pointermove', e => {
                    const rect = card.getBoundingClientRect();
                    const normalizedX = gsap.utils.clamp(-1, 1, ((e.clientX - rect.left) / rect.width) * 2 - 1);
                    const normalizedY = gsap.utils.clamp(-1, 1, ((e.clientY - rect.top) / rect.height) * 2 - 1);

                    cardXTo(normalizedX * 8);
                    cardYTo(normalizedY * 6);
                    cardRotateXTo(normalizedY * -0.6);
                    cardRotateYTo(normalizedX * 0.8);

                    // A restrained reverse offset creates shallow image depth.
                    imageXTo(normalizedX * -3.5);
                    imageYTo(normalizedY * -2.5);
                    titleXTo(normalizedX * 4);
                });

                card.addEventListener('pointerleave', () => {
                    setMotionDuration(0.55);
                    cardXTo(0);
                    cardYTo(0);
                    cardRotateXTo(0);
                    cardRotateYTo(0);
                    imageXTo(0);
                    imageYTo(0);
                    gsap.to(imageDepth, {
                        scale: 1,
                        duration: 0.55,
                        ease: "power3.out",
                        overwrite: true
                    });
                    titleXTo(0);
                });
            });
        }

        // Global Project Cursor Logic (rAF)
        const cursorPos = document.getElementById('global-project-cursor-pos');
        const cursorInner = document.getElementById('global-project-cursor');

        if (cursorPos && cursorInner) {
            let targetX = 0;
            let targetY = 0;
            let currentX = 0;
            let currentY = 0;
            const smoothing = 0.18;

            const updateProjectCursor = () => {
                currentX += (targetX - currentX) * smoothing;
                currentY += (targetY - currentY) * smoothing;
                cursorPos.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
                requestAnimationFrame(updateProjectCursor);
            };

            requestAnimationFrame(updateProjectCursor);

            window.addEventListener("pointermove", (e) => {
                targetX = e.clientX;
                targetY = e.clientY;
            });

            projectCards.forEach(card => {
                const imageWrap = card.querySelector('.project-image-wrapper');
                if (imageWrap) {
                    imageWrap.addEventListener('pointerenter', (e) => {
                        currentX = e.clientX;
                        currentY = e.clientY;
                        targetX = e.clientX;
                        targetY = e.clientY;

                        gsap.to(cursorInner, {
                            autoAlpha: 1,
                            scale: 1,
                            duration: 0.2,
                            ease: "power2.out",
                            overwrite: true
                        });
                    });

                    imageWrap.addEventListener('pointerleave', () => {
                        gsap.to(cursorInner, {
                            autoAlpha: 0,
                            scale: 0.7,
                            duration: 0.16,
                            ease: "power2.out",
                            overwrite: true
                        });
                    });
                }
            });

            // Scroll & Leave safety
            window.addEventListener("scroll", () => {
                gsap.set(cursorInner, { autoAlpha: 0, scale: 0.7 });
            }, { passive: true });

            window.addEventListener("blur", () => {
                gsap.set(cursorInner, { autoAlpha: 0, scale: 0.7 });
            });

            document.addEventListener("pointerleave", () => {
                gsap.set(cursorInner, { autoAlpha: 0, scale: 0.7 });
            });
        }
    };

    // --------------------------------------------------------
    // 6. Section 3: Projects Preview Animations
    // --------------------------------------------------------
    if (typeof gsap !== 'undefined' && document.getElementById('selected-work')) {
        const projectsSection = document.getElementById('selected-work');
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isTouch = window.matchMedia('(pointer: coarse), (hover: none)').matches;

        if (!isReducedMotion) {
            const projectsTl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectsSection,
                    start: "top 80%",
                    once: true
                }
            });

            // Heading & Button
            projectsTl.fromTo("#projects-marker",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
            );

            projectsTl.fromTo(".project-line",
                { y: "105%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.85, ease: "power4.out" },
                "-=0.4"
            );

            projectsTl.fromTo("#projects-cta",
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                "-=0.6"
            );

            // Cards Reveal
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                const imageWrap = card.querySelector('.project-image-wrapper');
                const image = card.querySelector('.project-image-wrapper img');

                const cardTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        once: true
                    }
                });

                // Row stagger built into scroll trigger by default depending on element height,
                // but we can add a slight explicit delay based on column
                const col = index % 2;
                const delay = col * 0.1;

                cardTl.fromTo(card,
                    { opacity: 0, y: 36, scale: 0.985 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: delay }
                );

                if (imageWrap && image) {
                    cardTl.fromTo(imageWrap,
                        { clipPath: "inset(100% 0% 0% 0%)" },
                        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.0, ease: "power4.out" },
                        "<"
                    );

                    cardTl.fromTo(image,
                        { scale: 1.06 },
                        { scale: 1, duration: 1.0, ease: "power4.out" },
                        "<"
                    );
                }
            });
        } else {
            gsap.set("#projects-marker, .project-line, #projects-cta, .project-card", { opacity: 1, y: 0 });
            gsap.set(".project-image-wrapper", { clipPath: "inset(0% 0% 0% 0%)" });
            gsap.set(".project-image-wrapper img, .project-card", { scale: 1 });
        }

        initProjectInteractions(document.querySelectorAll('.project-card'));
    }

    // --------------------------------------------------------
    // My Work Page Animations + Filtering
    // --------------------------------------------------------
    if (typeof gsap !== 'undefined' && document.getElementById('works-page')) {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const projectItems = Array.from(document.querySelectorAll('.works-project'));
        const projectCards = projectItems.map(item => item.querySelector('.project-card')).filter(Boolean);
        const filterButtons = Array.from(document.querySelectorAll('.works-filter-button'));
        const projectCounter = document.getElementById('works-project-count');

        if (!isReducedMotion) {
            const introTimeline = gsap.timeline();

            introTimeline.fromTo('.works-eyebrow',
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
            );

            introTimeline.fromTo('.works-title-line',
                { y: '110%', opacity: 0, filter: 'blur(5px)' },
                { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power4.out' },
                '-=0.2'
            );

            introTimeline.fromTo('.works-supporting-copy',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
                '-=0.42'
            );

            introTimeline.fromTo(['.works-filter-button', '.works-project-count'],
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: 'power3.out' },
                '-=0.2'
            );

            const rowDelays = [0, 0.08, 0.16, 0, 0.08, 0, 0.08, 0.16];
            projectCards.forEach((card, index) => {
                const imageWrap = card.querySelector('.project-image-wrapper');
                const image = card.querySelector('.project-image-wrapper img');
                const cardTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 88%',
                        once: true
                    }
                });

                cardTimeline.fromTo(card,
                    { opacity: 0, y: 30, scale: 0.985 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.75, delay: rowDelays[index], ease: 'power3.out' }
                );

                cardTimeline.fromTo(imageWrap,
                    { clipPath: 'inset(100% 0% 0% 0%)' },
                    { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'power4.out' },
                    '<'
                );

                cardTimeline.fromTo(image,
                    { scale: 1.05 },
                    { scale: 1, duration: 0.8, ease: 'power4.out' },
                    '<'
                );
            });
        } else {
            gsap.set('.works-eyebrow, .works-title-line, .works-supporting-copy, .works-filter-button, .works-project-count, .project-card', {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)'
            });
            gsap.set('.project-image-wrapper', { clipPath: 'inset(0% 0% 0% 0%)' });
            gsap.set('.project-image-wrapper img', { scale: 1 });
        }

        initProjectInteractions(projectCards);

        const updateCounter = count => {
            if (projectCounter) {
                projectCounter.textContent = `${String(count).padStart(2, '0')} ${count === 1 ? 'PROJECT' : 'PROJECTS'}`;
            }
        };

        const setProjectLayout = visibleItems => {
            projectItems.forEach(item => item.classList.remove('works-project-wide'));

            if (visibleItems.length === 8 || visibleItems.length === 5) {
                visibleItems[3]?.classList.add('works-project-wide');
                visibleItems[4]?.classList.add('works-project-wide');
            } else if (visibleItems.length === 4 || visibleItems.length === 2) {
                visibleItems.forEach(item => item.classList.add('works-project-wide'));
            }
        };

        const refreshProjectTriggers = () => {
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        };

        let activeFilter = 'all';
        let isFiltering = false;

        const filterProjects = category => {
            if (category === activeFilter || isFiltering) return;

            const matches = projectItems.filter(item => {
                return category === 'all' || item.dataset.category.split(' ').includes(category);
            });
            const currentlyVisible = projectItems.filter(item => item.style.display !== 'none');

            activeFilter = category;
            updateCounter(matches.length);
            filterButtons.forEach(button => {
                const isActive = button.dataset.filter === category;
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });

            if (isReducedMotion) {
                projectItems.forEach(item => {
                    item.style.display = matches.includes(item) ? '' : 'none';
                });
                setProjectLayout(matches);
                gsap.set(matches, { opacity: 1, x: 0, y: 0, scale: 1 });
                refreshProjectTriggers();
                return;
            }

            isFiltering = true;
            const firstPositions = new Map(currentlyVisible.map(item => [item, item.getBoundingClientRect()]));
            const leavingItems = currentlyVisible.filter(item => !matches.includes(item));
            const enteringItems = matches.filter(item => item.style.display === 'none');

            const completeReflow = () => {
                leavingItems.forEach(item => {
                    item.style.display = 'none';
                });
                enteringItems.forEach(item => {
                    item.style.display = '';
                });

                setProjectLayout(matches);

                const stayingItems = matches.filter(item => firstPositions.has(item));
                stayingItems.forEach(item => {
                    const first = firstPositions.get(item);
                    const last = item.getBoundingClientRect();
                    gsap.set(item, { x: first.left - last.left, y: first.top - last.top });
                });

                gsap.to(stayingItems, {
                    x: 0,
                    y: 0,
                    duration: 0.42,
                    ease: 'power3.out'
                });

                gsap.fromTo(enteringItems,
                    { opacity: 0, scale: 0.97, y: 10 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.025, ease: 'power3.out' }
                );

                gsap.delayedCall(0.45, () => {
                    gsap.set(matches, { clearProps: 'x,y,scale,opacity' });
                    isFiltering = false;
                    refreshProjectTriggers();
                });
            };

            if (leavingItems.length) {
                gsap.to(leavingItems, {
                    opacity: 0,
                    scale: 0.97,
                    y: 10,
                    duration: 0.35,
                    stagger: 0.025,
                    ease: 'power3.out',
                    onComplete: completeReflow
                });
            } else {
                completeReflow();
            }
        };

        filterButtons.forEach(button => {
            button.addEventListener('click', () => filterProjects(button.dataset.filter));
        });

        setProjectLayout(projectItems);
        updateCounter(projectItems.length);
    }

    // --------------------------------------------------------
    // Project Detail Page Animations
    // --------------------------------------------------------
    if (typeof gsap !== 'undefined' && document.getElementById('project-page')) {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        const projectPage = document.getElementById('project-page');
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const canUseDesktopMotion = window.matchMedia('(min-width: 761px) and (pointer: fine)').matches;
        const showcaseSections = Array.from(document.querySelectorAll('.case-showcase'));
        const moreProjectCards = Array.from(document.querySelectorAll('#more-projects .project-card'));

        if (!isReducedMotion) {
            const introTimeline = gsap.timeline();

            introTimeline.fromTo('.case-eyebrow',
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
            );

            introTimeline.fromTo('.case-title',
                { y: '110%', opacity: 0, filter: 'blur(5px)' },
                { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power4.out' },
                '-=0.2'
            );

            introTimeline.fromTo('.case-intro-copy',
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                '-=0.38'
            );

            introTimeline.fromTo('.case-hero-visual',
                { clipPath: 'inset(100% 0% 0% 0%)' },
                { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.0, ease: 'power4.out' },
                '-=0.18'
            );

            introTimeline.fromTo('.case-hero-visual img',
                { scale: 1.04 },
                { scale: 1, duration: 1.0, ease: 'power4.out' },
                '<'
            );

            const overviewTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#project-overview',
                    start: 'top 80%',
                    once: true
                }
            });

            overviewTimeline.fromTo('.overview-heading-line',
                { y: '110%', opacity: 0, filter: 'blur(5px)' },
                { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.85, stagger: 0.08, ease: 'power4.out' }
            );

            overviewTimeline.fromTo('.overview-arrow',
                { opacity: 0, x: -20, scale: 0.95 },
                { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out' },
                '-=0.55'
            );

            overviewTimeline.fromTo('.overview-copy',
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
                '-=0.72'
            );

            overviewTimeline.fromTo('.case-meta-row',
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power3.out' },
                '-=0.34'
            );

            overviewTimeline.fromTo('.case-meta-divider',
                { scaleX: 0 },
                { scaleX: 1, duration: 0.65, stagger: 0.07, ease: 'power3.out' },
                '<'
            );

            showcaseSections.forEach(section => {
                const visuals = Array.from(section.querySelectorAll('.case-scroll-visual'));
                const showcaseTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 84%',
                        once: true
                    }
                });

                showcaseTimeline.fromTo(visuals,
                    { clipPath: 'inset(100% 0% 0% 0%)' },
                    {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        duration: 0.95,
                        stagger: 0.1,
                        ease: 'power4.out'
                    }
                );

                showcaseTimeline.fromTo(visuals.map(visual => visual.querySelector('img')),
                    { scale: 1.04 },
                    { scale: 1, duration: 1.0, stagger: 0.1, ease: 'power4.out' },
                    '<'
                );
            });

            const outcomeTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#project-outcome',
                    start: 'top 80%',
                    once: true
                }
            });

            outcomeTimeline.fromTo('#outcome-label',
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
            );

            outcomeTimeline.fromTo('.outcome-heading',
                { y: '110%', opacity: 0, filter: 'blur(5px)' },
                { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power4.out' },
                '-=0.18'
            );

            outcomeTimeline.fromTo('.outcome-intro',
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                '-=0.42'
            );

            outcomeTimeline.fromTo('.deliverable-item',
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out' },
                '-=0.18'
            );

            outcomeTimeline.fromTo('.deliverable-number-track',
                { yPercent: 105 },
                { yPercent: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out' },
                '<+0.05'
            );

            const moreProjectsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#more-projects',
                    start: 'top 82%',
                    once: true
                }
            });

            moreProjectsTimeline.fromTo('.more-projects-label',
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
            );

            moreProjectsTimeline.fromTo('.more-projects-heading',
                { y: '110%', opacity: 0, filter: 'blur(5px)' },
                { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.85, ease: 'power4.out' },
                '-=0.18'
            );

            moreProjectCards.forEach((card, index) => {
                const imageWrap = card.querySelector('.project-image-wrapper');
                const image = card.querySelector('.project-image-wrapper img');
                const position = index === 0 ? '-=0.25' : '<+0.1';

                moreProjectsTimeline.fromTo(card,
                    { opacity: 0, y: 30, scale: 0.985 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'power3.out' },
                    position
                );

                moreProjectsTimeline.fromTo(imageWrap,
                    { clipPath: 'inset(100% 0% 0% 0%)' },
                    { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'power4.out' },
                    '<'
                );

                moreProjectsTimeline.fromTo(image,
                    { scale: 1.05 },
                    { scale: 1, duration: 0.9, ease: 'power4.out' },
                    '<'
                );
            });

            if (canUseDesktopMotion && typeof ScrollTrigger !== 'undefined') {
                document.querySelectorAll('.case-hero-visual .case-visual-depth, .case-scroll-visual .case-visual-depth').forEach(depthLayer => {
                    const visual = depthLayer.closest('.case-visual-mask');
                    gsap.fromTo(depthLayer,
                        { y: -10 },
                        {
                            y: 10,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: visual,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: true
                            }
                        }
                    );
                });
            }
        } else {
            gsap.set('.case-eyebrow, .case-title, .case-intro-copy, .overview-heading-line, .overview-arrow, .overview-copy, .case-meta-row, #outcome-label, .outcome-heading, .outcome-intro, .deliverable-item, .more-projects-label, .more-projects-heading, #more-projects .project-card', {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: 'blur(0px)'
            });
            gsap.set('.case-visual-mask, .project-image-wrapper', { clipPath: 'inset(0% 0% 0% 0%)' });
            gsap.set('.case-visual-mask img, .project-image-wrapper img, .case-meta-divider', { scale: 1 });
            gsap.set('.deliverable-number-track', { yPercent: 0 });
        }

        initProjectInteractions(moreProjectCards);

        if (typeof ScrollTrigger !== 'undefined') {
            window.requestAnimationFrame(() => ScrollTrigger.refresh());
        }
    }

    // --------------------------------------------------------
    // 7. Section 4: Philosophy Animations
    // --------------------------------------------------------
    if (typeof gsap !== 'undefined' && document.getElementById('approach')) {
        const approachSection = document.getElementById('approach');
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isTouch = window.matchMedia('(pointer: coarse), (hover: none)').matches;
        
        // Lightweight Line Splitter
        const splitTextIntoLines = (element) => {
            const text = element.innerText;
            const words = text.split(' ');
            element.innerHTML = '';
            
            words.forEach(word => {
                const span = document.createElement('span');
                span.className = 'word';
                span.innerText = word + ' ';
                element.appendChild(span);
            });
            
            let lines = [];
            let currentLine = [];
            let currentY = -1;
            
            const wordSpans = element.querySelectorAll('.word');
            wordSpans.forEach(span => {
                const top = span.offsetTop;
                if (currentY === -1) {
                    currentY = top;
                }
                
                if (top > currentY + 5) {
                    lines.push(currentLine);
                    currentLine = [];
                    currentY = top;
                }
                currentLine.push(span.innerText);
            });
            lines.push(currentLine);
            
            element.innerHTML = '';
            const lineElements = [];
            
            lines.forEach(lineWords => {
                const mask = document.createElement('span');
                mask.className = 'line-mask';
                
                const inner = document.createElement('span');
                inner.className = 'line-inner';
                inner.innerText = lineWords.join('');
                
                mask.appendChild(inner);
                element.appendChild(mask);
                lineElements.push(inner);
            });
            
            return lineElements;
        };

        if (!isReducedMotion) {
            const statement = approachSection.querySelector('.philosophy-statement');
            let linesToAnimate = [];
            if (statement) {
                linesToAnimate = splitTextIntoLines(statement);
            }

            const approachTl = gsap.timeline({
                scrollTrigger: {
                    trigger: approachSection,
                    start: "top 80%",
                    once: true
                }
            });

            // Quotes Graphic
            approachTl.fromTo(".philosophy-quotes",
                { opacity: 0, scale: 0.82, rotation: 4, y: 20 },
                { opacity: 1, scale: 1, rotation: 0, y: 0, duration: 0.9, ease: "power3.out" }
            );

            // Marker
            approachTl.fromTo("#philosophy-marker",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
                "-=0.7"
            );

            // Heading
            approachTl.fromTo(".philosophy-line",
                { y: "105%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.85, ease: "power4.out" },
                "-=0.4"
            );

            // Statement Lines
            if (linesToAnimate.length > 0) {
                approachTl.fromTo(linesToAnimate,
                    { y: 14, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.55, ease: "power3.out", stagger: 0.07 },
                    "-=0.6"
                );
            }

            // Support Line
            approachTl.fromTo(".philosophy-support",
                { opacity: 0, x: -12 },
                { opacity: 1, x: 0, duration: 0.55, ease: "power2.out" },
                "-=0.4"
            );

            // Scroll Depth Parallax
            gsap.to(".philosophy-quotes", {
                y: -12,
                scrollTrigger: {
                    trigger: approachSection,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

        } else {
            gsap.set("#philosophy-marker, .philosophy-line, .philosophy-statement, .philosophy-support, .philosophy-quotes", { opacity: 1, y: 0, x: 0, scale: 1, rotation: 0 });
        }

        // Pointer interactions
        if (!isTouch && !isReducedMotion) {
            const quotes = approachSection.querySelector('.philosophy-quotes');
            if (quotes) {
                approachSection.addEventListener('mousemove', (e) => {
                    const rect = approachSection.getBoundingClientRect();
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const relX = e.clientX - rect.left - centerX;
                    const relY = e.clientY - rect.top - centerY;
                    
                    const moveX = (relX / centerX) * 5;
                    const moveY = (relY / centerY) * 4;
                    
                    gsap.to(quotes, { x: moveX, y: moveY, duration: 0.8, ease: "power2.out" });
                });
                
                approachSection.addEventListener('mouseleave', () => {
                    gsap.to(quotes, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
                });
            }
        }
    }

    // --------------------------------------------------------
    // 8. Footer / Contact Animations
    // --------------------------------------------------------
    if (typeof gsap !== 'undefined' && document.getElementById('contact-footer')) {
        const footerSection = document.getElementById('contact-footer');
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isTouch = window.matchMedia('(pointer: coarse), (hover: none)').matches;

        if (!isReducedMotion) {
            const footerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerSection,
                    start: "top 85%",
                    once: true
                }
            });

            // Marker
            footerTl.fromTo("#footer-marker",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
            );

            // Heading
            footerTl.fromTo("#footer-heading",
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                "-=0.3"
            );

            // Email Reveal
            footerTl.fromTo("#footer-email",
                { y: "110%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.9, ease: "power4.out" },
                "-=0.4"
            );

            // Email Underline
            footerTl.add(() => {
                const email = document.getElementById('footer-email');
                if (email) email.classList.add('revealed');
            }, "-=0.25");

            // Lower Footer
            footerTl.fromTo(".footer-col",
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" },
                "-=0.5"
            );

            // Divider
            footerTl.add(() => {
                const lower = document.getElementById('footer-lower');
                if (lower) lower.classList.add('revealed');
            }, "-=0.3");

        } else {
            // Reduced motion state
            gsap.set("#footer-marker, #footer-heading, #footer-email, .footer-col", { opacity: 1, y: 0 });
            const email = document.getElementById('footer-email');
            const lower = document.getElementById('footer-lower');
            if (email) email.classList.add('revealed');
            if (lower) lower.classList.add('revealed');
        }

        // Pointer interactions
        if (!isTouch && !isReducedMotion) {
            const emailLink = document.getElementById('footer-email');
            if (emailLink) {
                emailLink.addEventListener('mousemove', (e) => {
                    const rect = emailLink.getBoundingClientRect();
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const relX = e.clientX - rect.left - centerX;
                    const relY = e.clientY - rect.top - centerY;
                    
                    const moveX = (relX / centerX) * 4; // max 4px
                    const moveY = (relY / centerY) * 3; // max 3px
                    
                    gsap.to(emailLink, { x: moveX, y: moveY, duration: 0.4, ease: "power2.out" });
                });
                
                emailLink.addEventListener('mouseleave', () => {
                    gsap.to(emailLink, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
                });
            }
        }
    }

    // --------------------------------------------------------
    // 9. Existing Generic Scroll Observer
    // --------------------------------------------------------
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section, .project-content');
    sections.forEach(section => {
        if (section.id !== 'hero-section' && section.id !== 'about-section' && section.id !== 'selected-work' && section.id !== 'approach') {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(section);
        }
    });
};

// ========================================
// APPLICATION BOOTSTRAP
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initGlobalNavigation();
    initProjectDataLayer();

    if (document.body.classList.contains('page-about')) {
        initAboutPage();
    }

    initAnimationSystems();
});
