// Project data structure
const projectData = {
    about:[],
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
            title: "Where is the Wind blowing from",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "LINE Pavillion Submission"
        },
        {
            title: "A vision for the Ringroad in Tirana",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Thesis 2019"
        },
        {
            title: "Massing studies for a corner",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Detailed description of design work 2."
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
            description: "3d printing"
        },
        {
            title: "Studies for a Lego Kit",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "3d printing"
        },
        {
            title: "How to find time",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "3d printing"
        },
        {
            title: "Time",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "resin casting"
        },
        {
            title: "Untitled",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "ceramic tiles"
        },
    ],
    purposeless: [
        {
            title: "DLA",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Detailed description of purposeless exploration 1."
        },
        {
            title: "Folding",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Detailed description of purposeless exploration 2."
        },
        {
            title: "Sun and Sea",
            previewImage: "/api/placeholder/400/300",
            additionalImages: [
                "/api/placeholder/400/300",
                "/api/placeholder/400/300"
            ],
            description: "Detailed description of purposeless exploration 2."
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
                    ${project.additionalImages.map(img => 
                        `<img src="${img}" alt="Additional view of ${project.title}">`
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