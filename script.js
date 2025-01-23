// Project data structure
const projectData = {
    about:[{
        title: "",
        previewImage: "/images/door.jpg",
        additionalImages: [
        ],
        description: ""
    }],
    architecture: [
        {
            title: "Modulor: digital methods of representing human perception in spaces",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Detailed description of architectural project 1. This can be a longer piece of text that appears on hover."
        },
        {
            title: "Where is the Wind blowing from?",
            previewImage: "/images/l2.jpg",
            additionalImages: [
                "/images/l1.jpg",
                "/images/l2.jpg",
            ],
            description: "<b>LINE Pavillion Submission</b> <br> A placemaking intervention seeking to create a moment of meditation and intervention."
        },
        {
            title: "A vision for the Ringroad in Tirana",
            previewImage: "/images/d3.jpg",
            additionalImages: [
                "/images/d3.jpg",
                "/images/d1.jpg",
                "/images/d2.jpg",
                "/images/d4.jpg",
            ],
            description: "<b>Master Thesis</b><br> An endeavour to get cars out of sight."
        },
        {
            title: "Massing studies for a corner",
            previewImage: "/images/h2.jpg",
            additionalImages: [
                "/images/h2.jpg",
                "/images/h1.jpg",
            ],
            description: "<b>Massing studies for a corner</b>"
        },
        {
            title: "Beehaviour pavillion",
            previewImage: "/images/b3.jpg",
            additionalImages: [
                "/images/b1.jpg",
                "/images/b2.jpg"
            ],
            description: "<b>Meds Workshop</b><br> Spetses"
        }
    ],
    design: [
        {
            title: "A 'feminist' chess set",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "<b>3d printed PLA</b>"
        },
        {
            title: "Studies for a Lego Kit",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "<b>3d printed PLA</b>"
        },
        {
            title: "How to find time",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "<b>3d printed PLA</b>"
        },
        {
            title: "Time",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "<b>Resin casting on silicone mould</b><br>Created at Atelier La Juntana"
        },
        {
            title: "Untitled",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "<b>Aluminum casting, glazed ceramic tiles</b><br>Created at Atelier La Juntana"
        },
        {
            title: "Super Stable Table",
            previewImage: "/images/z1.jpg",
            additionalImages: [
                "/images/z1.jpg",
                "/images/z2.jpg",
                "/images/z3.jpg",
            ],
            description: "<b>An attempt at cardboard furniture</b>"
        },
    ],
    purposeless: [
        {
            title: "DLA",
            previewImage: "/images/g1.gif",
            additionalImages: [
                "/images/g1.gif",
                "/images/g2.gif"
            ],
            description: "<b>DLA algorithm exploration</b><br>Grasshopper, Python"
        },
        {
            title: "Folding",
            previewImage: "/images/k3.jpg",
            additionalImages: [
                "/images/k1.jpg",
                "/images/k2.jpg",
                "/images/k3.jpg",
                "/images/k5.jpg",
            ],
            description: "<b>Paper fold explorations and light</b>"
        },
        {
            title: "Sun and Sea",
            previewImage: "/images/f1.jpg",
            additionalImages: [
                "/images/f1.jpg",
                "/images/f2.jpg",
                "/images/f3.jpg",
                "/images/f4.jpg",
                "/images/f5.jpg",
                "/images/f6.jpg",
            ],
            description: "<b>Vacation photography<b/>"
        },
        {
            title: "Opus",
            previewImage: "/images/o1.jpg",
            additionalImages: [
                "/images/o1.jpg",
                "/images/o2.jpg"
            ],
            description: "<b>Mini-sculpture</b>"
        }
    ],
    thoughts: [
        {
            title: "On architectural representations: how to design without drawing walls.",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Detailed description of thought piece 1."
        },
        {
            title: "On digital craftsmanship",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Detailed description of thought piece 2."
        },
        {
            title: "The Zen of Computational Design",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Detailed description of thought piece 2."
        },
        {
            title: "On natural materials in architecture",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Detailed description of thought piece 2."
        }
    ]
};

// Get DOM elements
const contentArea = document.querySelector('.content-area');
const categoryLinks = document.querySelectorAll('.category-link');

// Function to update content based on category
function updateContent(category) {
    // Clear current content
    contentArea.innerHTML = '';

    // Update active category
    categoryLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });

    // Add new content
    projectData[category].forEach(project => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `
            <div class="item-preview">
                <img src="${project.previewImage}" alt="${project.title}" class="item-preview-image">
                <h2 class="item-title">${project.title}</h2>
            </div>
            <div class="hover-content">
                <div class="additional-images">
                    ${project.additionalImages.map((img, index) => 
                        `<img src="${img}" alt="Additional view ${index + 1} of ${project.title}">`
                    ).join('')}
                </div>
                <p class="hover-description">${project.description}</p>
            </div>
        `;
        contentArea.appendChild(itemElement);
    });
}

// Add click handlers to category links
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        updateContent(category);
    });
});

// Initialize with first category
updateContent('about');

// Optional: Update description text based on category
const descriptions = {
    about: "This is a space for creative exploration and documentation of various works and thoughts.",
    architecture: "objects, shapes, ideas",
    design: "different mediums and purposes",
    purposeless: "useless pastime",
    thoughts: "what has been on my mind lately"
};

const descriptionElement = document.querySelector('.description-text');

categoryLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const category = e.target.dataset.category;
        descriptionElement.textContent = descriptions[category];
    });
});