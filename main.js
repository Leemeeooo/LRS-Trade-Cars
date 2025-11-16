// LRS Trade Cars - Main JavaScript File
// Advanced Interactive Components and Effects

// Global Variables
let currentPage = window.location.pathname.split('/').pop() || 'index.html';
let vehicleData = [];
let filteredVehicles = [];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

// Vehicle Data for Inventory
const sampleVehicles = [
    {
        id: 1,
        make: 'Mercedes-Benz',
        model: 'S-Class S580',
        year: 2024,
        price: 125000,
        mileage: 2500,
        type: 'Sedan',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/imgoss.wkzuche.com/9b7fdf260c81594b98461e8167619957a325dc5a.jpg',
        features: ['Leather Interior', 'Panoramic Roof', 'Adaptive Cruise Control', 'Premium Sound'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 2,
        make: 'BMW',
        model: 'X7 M50i',
        year: 2024,
        price: 95000,
        mileage: 4800,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/a9fc3b206db4346362cb9f5fcd8e693d37e8c6f0.jpg',
        features: ['Third Row Seating', 'Air Suspension', 'Gesture Control', 'Harmon Kardon Audio'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 3,
        make: 'Audi',
        model: 'Q8 Prestige',
        year: 2024,
        price: 78000,
        mileage: 3200,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/www.audi.cn/c87296587888e0dad990086211c19b729d11cd80.jpg',
        features: ['Virtual Cockpit', 'Quattro AWD', 'Matrix LED Headlights', 'Bang & Olufsen Sound'],
        rating: 4,
        condition: 'Excellent'
    },
    {
        id: 4,
        make: 'Porsche',
        model: '911 Carrera S',
        year: 2023,
        price: 145000,
        mileage: 8500,
        type: 'Sports Car',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/9b00f362225a83b54689ef00d0e02b2511be3a42.jpg',
        features: ['Sport Chrono Package', 'PDK Transmission', 'Sport Exhaust', 'Carbon Fiber Trim'],
        rating: 5,
        condition: 'Very Good'
    },
    {
        id: 5,
        make: 'Range Rover',
        model: 'Vogue SE',
        year: 2024,
        price: 115000,
        mileage: 1200,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/cdn.motor1.com/30ca9e26d7b6911b68d4c682c92d291f642219cb.jpg',
        features: ['Terrain Response', 'Air Suspension', 'Meridian Sound', 'Panoramic Roof'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 6,
        make: 'Tesla',
        model: 'Model S Plaid',
        year: 2024,
        price: 135000,
        mileage: 1800,
        type: 'Electric',
        fuel: 'Electric',
        image: 'https://kimi-web-img.moonshot.cn/img/upload.wikimedia.org/7176d9f67a18cbfad5e1f36499469412ae28c50c.jpg',
        features: ['Autopilot', 'Ludicrous Mode', '17-inch Display', 'Premium Interior'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 7,
        make: 'Lexus',
        model: 'LS 500 F Sport',
        year: 2023,
        price: 85000,
        mileage: 6200,
        type: 'Sedan',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/fbd5eeeae509abd1ddcc59e1ce3186d738011de5.jpg',
        features: ['Mark Levinson Audio', 'Adaptive Suspension', 'Premium Leather', 'Safety System+'],
        rating: 4,
        condition: 'Very Good'
    },
    {
        id: 8,
        make: 'Cadillac',
        model: 'Escalade Platinum',
        year: 2024,
        price: 105000,
        mileage: 3400,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/www.cadillac.com/acae4a5f396cfef52610946d1929ce2f5d4560e6.png',
        features: ['Super Cruise', 'AKG Audio', 'OLED Display', 'Captain Chairs'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 9,
        make: 'Infiniti',
        model: 'QX80 Sensory',
        year: 2023,
        price: 75000,
        mileage: 8900,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/www.tfltruck.com/aafb3de8ac7d025b593d8a88274f5c5c65223c07.jpg',
        features: ['Bose Audio', 'Around View Monitor', 'Heated/Cooled Seats', 'Tow Package'],
        rating: 4,
        condition: 'Very Good'
    },
    {
        id: 10,
        make: 'Genesis',
        model: 'G90 3.5T',
        year: 2024,
        price: 88000,
        mileage: 2100,
        type: 'Sedan',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/4a8472f685e5ca9e45c95e14f071fae7205fd620.jpg',
        features: ['Lexicon Audio', 'Ambiente Lighting', 'Massage Seats', 'AWD'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 11,
        make: 'Land Rover',
        model: 'Discovery HSE',
        year: 2023,
        price: 72000,
        mileage: 11500,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/bestgaddi.com/52cd10a0ec8cbe0ff6694017297ab74dd1f978f3.jpg',
        features: ['Terrain Response 2', 'Air Suspension', 'Meridian Audio', 'Third Row'],
        rating: 4,
        condition: 'Very Good'
    },
    {
        id: 12,
        make: 'Audi',
        model: 'A8 L',
        year: 2023,
        price: 92000,
        mileage: 5600,
        type: 'Sedan',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/www.audi.cn/1c940d9bdd046aff6f41d78f9e6ea724ce090928.jpg',
        features: ['Matrix LED', 'Massage Seats', 'Quattro AWD', 'B&O Audio'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 13,
        make: 'BMW',
        model: 'iX M60',
        year: 2024,
        price: 98000,
        mileage: 2900,
        type: 'Electric',
        fuel: 'Electric',
        image: 'https://kimi-web-img.moonshot.cn/img/www.audi.cn/8e9542fad2f4cdf397522d1c036f5c36c91c4ab5.jpg',
        features: ['iDrive 8', 'Harman Kardon', 'Gesture Control', 'Adaptive Suspension'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 14,
        make: 'Mercedes-Benz',
        model: 'GLE 53 AMG',
        year: 2023,
        price: 87000,
        mileage: 7800,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/www.audi.cn/0735a1e21521df42c84b059c29b69d39ffacbdc7.jpg',
        features: ['AMG Performance', 'Air Suspension', 'MBUX System', 'Burmester Audio'],
        rating: 4,
        condition: 'Very Good'
    },
    {
        id: 15,
        make: 'Porsche',
        model: 'Cayenne Turbo',
        year: 2023,
        price: 118000,
        mileage: 4200,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/www.audi.cn/13ddb298a65ef6f33b6e195a67539e2e65a58b83.jpg',
        features: ['Sport Chrono', 'Air Suspension', 'PDCC', 'Bose Audio'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 16,
        make: 'Tesla',
        model: 'Model X Plaid',
        year: 2024,
        price: 125000,
        mileage: 1600,
        type: 'Electric',
        fuel: 'Electric',
        image: 'https://kimi-web-img.moonshot.cn/img/www.notebookcheck.org/4c7e0df4890495de4bacfb7485b61d3a690f968c.jpg',
        features: ['Falcon Wing Doors', 'Ludicrous Mode', 'Autopilot', 'Premium Interior'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 17,
        make: 'Range Rover',
        model: 'Sport SVR',
        year: 2023,
        price: 108000,
        mileage: 6700,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/916f1b1d793e89b729dfebc3fc5347c77dcf0312.jpg',
        features: ['SVR Performance', 'Active Exhaust', 'Meridian Audio', 'Sport Seats'],
        rating: 4,
        condition: 'Very Good'
    },
    {
        id: 18,
        make: 'Lexus',
        model: 'LX 600 Ultra',
        year: 2024,
        price: 98000,
        mileage: 2800,
        type: 'SUV',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/01750841f33fcbedbc92a29dc17f4f8a9f546a7c.jpg',
        features: ['Mark Levinson Audio', 'Multi-Terrain Select', 'Captain Chairs', 'Premium Leather'],
        rating: 5,
        condition: 'Excellent'
    },
    {
        id: 19,
        make: 'Jaguar',
        model: 'F-Type R',
        year: 2023,
        price: 95000,
        mileage: 9300,
        type: 'Sports Car',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/a9fc3b206db4346362cb9f5fcd8e693d37e8c6f0.jpg',
        features: ['Supercharged V8', 'Active Exhaust', 'Meridian Audio', 'Performance Seats'],
        rating: 4,
        condition: 'Very Good'
    },
    {
        id: 20,
        make: 'Maserati',
        model: 'Quattroporte Trofeo',
        year: 2023,
        price: 142000,
        mileage: 3500,
        type: 'Sedan',
        fuel: 'Gasoline',
        image: 'https://kimi-web-img.moonshot.cn/img/vehicle-images.dealerinspire.com/8aa129ecf34f79d5299b2226e58d9cedc3b5016a.jpg',
        features: ['Ferrari V8 Engine', 'Skyhook Suspension', 'Bowers & Wilkins', 'Carbon Fiber Trim'],
        rating: 5,
        condition: 'Excellent'
    }
];

// Initialize vehicle data
vehicleData = [...sampleVehicles];
filteredVehicles = [...sampleVehicles];

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function formatMileage(mileage) {
    return new Intl.NumberFormat('en-US').format(mileage) + ' miles';
}

function generateStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Animation Functions
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function initTextAnimations() {
    // Split text for stagger animations
    document.querySelectorAll('.split-text').forEach(element => {
        const text = element.textContent;
        element.innerHTML = text.split('').map(char => 
            `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
    });

    // Color cycling animation
    document.querySelectorAll('.color-cycle').forEach(element => {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            element.style.color = `hsl(${hue}, 70%, 60%)`;
        }, 100);
    });
}

// Vehicle Inventory Functions
function renderVehicleCard(vehicle) {
    const isFavorite = favorites.includes(vehicle.id);
    return `
        <div class="vehicle-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl" data-id="${vehicle.id}">
            <div class="relative">
                <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" class="w-full h-48 object-cover">
                <button class="absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-200 favorite-btn ${isFavorite ? 'text-red-500' : 'text-gray-400'}" onclick="toggleFavorite(${vehicle.id})">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div class="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    ${vehicle.condition}
                </div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-gray-900">${vehicle.make} ${vehicle.model}</h3>
                    <div class="text-sm text-yellow-500">${generateStars(vehicle.rating)}</div>
                </div>
                <div class="text-2xl font-bold text-red-600 mb-2">${formatPrice(vehicle.price)}</div>
                <div class="text-sm text-gray-600 mb-3">
                    <span>${vehicle.year}</span> • <span>${formatMileage(vehicle.mileage)}</span> • <span>${vehicle.fuel}</span>
                </div>
                <div class="flex flex-wrap gap-1 mb-4">
                    ${vehicle.features.slice(0, 3).map(feature => 
                        `<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">${feature}</span>`
                    ).join('')}
                    ${vehicle.features.length > 3 ? `<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">+${vehicle.features.length - 3} more</span>` : ''}
                </div>
                <div class="flex gap-2">
                    <button class="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-200" onclick="viewVehicleDetails(${vehicle.id})">
                        View Details
                    </button>
                    <button class="flex-1 border border-red-600 text-red-600 py-2 px-4 rounded hover:bg-red-50 transition-colors duration-200" onclick="scheduleTestDrive(${vehicle.id})">
                        Test Drive
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderVehicleGrid(vehicles = filteredVehicles) {
    const container = document.getElementById('vehicle-grid');
    if (!container) return;
    
    container.innerHTML = vehicles.map(vehicle => renderVehicleCard(vehicle)).join('');
    
    // Add stagger animation
    const cards = container.querySelectorAll('.vehicle-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-card-in');
    });
}

function filterVehicles(filters = {}) {
    filteredVehicles = vehicleData.filter(vehicle => {
        if (filters.make && vehicle.make !== filters.make) return false;
        if (filters.type && vehicle.type !== filters.type) return false;
        if (filters.fuel && vehicle.fuel !== filters.fuel) return false;
        if (filters.minPrice && vehicle.price < filters.minPrice) return false;
        if (filters.maxPrice && vehicle.price > filters.maxPrice) return false;
        if (filters.maxMileage && vehicle.mileage > filters.maxMileage) return false;
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            const searchableText = `${vehicle.make} ${vehicle.model} ${vehicle.features.join(' ')}`.toLowerCase();
            if (!searchableText.includes(searchTerm)) return false;
        }
        return true;
    });
    
    renderVehicleGrid();
    updateResultsCount();
}

function sortVehicles(sortBy) {
    switch (sortBy) {
        case 'price-low':
            filteredVehicles.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredVehicles.sort((a, b) => b.price - a.price);
            break;
        case 'year':
            filteredVehicles.sort((a, b) => b.year - a.year);
            break;
        case 'mileage':
            filteredVehicles.sort((a, b) => a.mileage - b.mileage);
            break;
        default:
            filteredVehicles = [...vehicleData];
    }
    renderVehicleGrid();
}

function updateResultsCount() {
    const countElement = document.getElementById('results-count');
    if (countElement) {
        countElement.textContent = `${filteredVehicles.length} vehicles found`;
    }
}

// Favorite Functions
function toggleFavorite(vehicleId) {
    const index = favorites.indexOf(vehicleId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(vehicleId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update button appearance
    const button = document.querySelector(`[data-id="${vehicleId}"] .favorite-btn`);
    if (button) {
        button.classList.toggle('text-red-500');
        button.classList.toggle('text-gray-400');
    }
}

// Vehicle Interaction Functions
function viewVehicleDetails(vehicleId) {
    const vehicle = vehicleData.find(v => v.id === vehicleId);
    if (vehicle) {
        showVehicleModal(vehicle);
    }
}

function scheduleTestDrive(vehicleId) {
    const vehicle = vehicleData.find(v => v.id === vehicleId);
    if (vehicle) {
        showTestDriveModal(vehicle);
    }
}

// Modal Functions
function showVehicleModal(vehicle) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
            <div class="relative">
                <button class="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2" onclick="closeModal()">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" class="w-full h-64 object-cover">
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <h2 class="text-3xl font-bold text-gray-900">${vehicle.make} ${vehicle.model}</h2>
                    <div class="text-lg text-yellow-500">${generateStars(vehicle.rating)}</div>
                </div>
                <div class="text-4xl font-bold text-red-600 mb-4">${formatPrice(vehicle.price)}</div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div class="text-center p-3 bg-gray-50 rounded">
                        <div class="text-sm text-gray-600">Year</div>
                        <div class="font-bold">${vehicle.year}</div>
                    </div>
                    <div class="text-center p-3 bg-gray-50 rounded">
                        <div class="text-sm text-gray-600">Mileage</div>
                        <div class="font-bold">${formatMileage(vehicle.mileage)}</div>
                    </div>
                    <div class="text-center p-3 bg-gray-50 rounded">
                        <div class="text-sm text-gray-600">Type</div>
                        <div class="font-bold">${vehicle.type}</div>
                    </div>
                    <div class="text-center p-3 bg-gray-50 rounded">
                        <div class="text-sm text-gray-600">Fuel</div>
                        <div class="font-bold">${vehicle.fuel}</div>
                    </div>
                </div>
                <div class="mb-6">
                    <h3 class="text-xl font-bold mb-3">Features</h3>
                    <div class="grid grid-cols-2 gap-2">
                        ${vehicle.features.map(feature => 
                            `<div class="flex items-center">
                                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                ${feature}
                            </div>`
                        ).join('')}
                    </div>
                </div>
                <div class="flex gap-4">
                    <button class="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200" onclick="scheduleTestDrive(${vehicle.id})">
                        Schedule Test Drive
                    </button>
                    <button class="flex-1 border border-red-600 text-red-600 py-3 px-6 rounded-lg hover:bg-red-50 transition-colors duration-200" onclick="showContactForm()">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function showTestDriveModal(vehicle) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-md w-full">
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <h2 class="text-2xl font-bold text-gray-900">Schedule Test Drive</h2>
                    <button class="text-gray-400 hover:text-gray-600" onclick="closeModal()">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="mb-4">
                    <div class="text-lg font-semibold">${vehicle.make} ${vehicle.model}</div>
                    <div class="text-red-600 font-bold">${formatPrice(vehicle.price)}</div>
                </div>
                <form id="test-drive-form" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input type="tel" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                        <input type="date" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                        <select required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                            <option value="">Select a time</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                        <textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200">
                        Schedule Test Drive
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Handle form submission
    document.getElementById('test-drive-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Test drive request submitted! We will contact you within 24 hours to confirm your appointment.');
        closeModal();
    });
}

function closeModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Financing Calculator Functions
function initFinancingCalculator() {
    const priceSlider = document.getElementById('vehicle-price');
    const downPaymentSlider = document.getElementById('down-payment');
    const interestRateSlider = document.getElementById('interest-rate');
    const termSlider = document.getElementById('loan-term');
    
    if (!priceSlider) return;
    
    const updateCalculation = () => {
        const vehiclePrice = parseFloat(priceSlider.value);
        const downPayment = parseFloat(downPaymentSlider.value);
        const interestRate = parseFloat(interestRateSlider.value) / 100 / 12;
        const loanTerm = parseFloat(termSlider.value);
        
        const loanAmount = vehiclePrice - downPayment;
        const monthlyPayment = loanAmount * (interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
        const totalInterest = (monthlyPayment * loanTerm) - loanAmount;
        const totalCost = vehiclePrice + totalInterest;
        
        document.getElementById('monthly-payment').textContent = formatPrice(monthlyPayment);
        document.getElementById('total-interest').textContent = formatPrice(totalInterest);
        document.getElementById('total-cost').textContent = formatPrice(totalCost);
        
        // Update slider values
        document.getElementById('price-value').textContent = formatPrice(vehiclePrice);
        document.getElementById('down-payment-value').textContent = formatPrice(downPayment);
        document.getElementById('interest-rate-value').textContent = interestRateSlider.value + '%';
        document.getElementById('loan-term-value').textContent = termSlider.value + ' months';
        
        // Update payment breakdown chart
        updatePaymentChart(loanAmount, totalInterest);
    };
    
    [priceSlider, downPaymentSlider, interestRateSlider, termSlider].forEach(slider => {
        slider.addEventListener('input', updateCalculation);
    });
    
    updateCalculation();
}

function updatePaymentChart(principal, interest) {
    const chartContainer = document.getElementById('payment-chart');
    if (!chartContainer) return;
    
    // Simple bar chart visualization
    const total = principal + interest;
    const principalPercent = (principal / total) * 100;
    const interestPercent = (interest / total) * 100;
    
    chartContainer.innerHTML = `
        <div class="flex h-8 rounded overflow-hidden">
            <div class="bg-blue-500" style="width: ${principalPercent}%"></div>
            <div class="bg-red-500" style="width: ${interestPercent}%"></div>
        </div>
        <div class="flex justify-between text-sm mt-2">
            <div class="flex items-center">
                <div class="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                <span>Principal: ${formatPrice(principal)}</span>
            </div>
            <div class="flex items-center">
                <div class="w-3 h-3 bg-red-500 rounded mr-2"></div>
                <span>Interest: ${formatPrice(interest)}</span>
            </div>
        </div>
    `;
}

// Testimonial Functions
const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        location: 'Manhattan, NY',
        vehicle: '2024 Mercedes S-Class',
        rating: 5,
        text: 'Outstanding experience from start to finish! The team at LRS Trade Cars made my dream car purchase seamless. Professional, knowledgeable, and transparent throughout the entire process.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        date: '2024-10-15'
    },
    {
        id: 2,
        name: 'Michael Chen',
        location: 'Brooklyn, NY',
        vehicle: '2023 Porsche 911',
        rating: 5,
        text: 'Best car dealership experience I\'ve ever had. They had exactly what I was looking for, and the financing options were incredible. Highly recommend!',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        date: '2024-11-02'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        location: 'Queens, NY',
        vehicle: '2024 Range Rover Vogue',
        rating: 5,
        text: 'Luxury service at its finest! The attention to detail and customer care exceeded my expectations. Will definitely be back for my next purchase.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        date: '2024-11-08'
    },
    {
        id: 4,
        name: 'David Thompson',
        location: 'Bronx, NY',
        vehicle: '2023 BMW X7',
        rating: 4,
        text: 'Great selection of luxury vehicles and competitive pricing. The staff was helpful and not pushy at all. Smooth transaction and excellent after-sales support.',
        image: 'https://images.unsplash.com/photo-1472099645783-565afab2f8b4?w=150&h=150&fit=crop&crop=face',
        date: '2024-10-28'
    },
    {
        id: 5,
        name: 'Lisa Wang',
        location: 'Staten Island, NY',
        vehicle: '2024 Tesla Model S',
        rating: 5,
        text: 'Impressed with their electric vehicle selection and knowledge. The team helped me understand all the features and made the transition to EV effortless.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        date: '2024-11-12'
    }
];

function renderTestimonial(testimonial) {
    return `
        <div class="testimonial-card bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
            <div class="flex items-center mb-4">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full object-cover mr-4">
                <div>
                    <div class="font-bold text-gray-900">${testimonial.name}</div>
                    <div class="text-sm text-gray-600">${testimonial.location}</div>
                    <div class="text-sm text-yellow-500">${generateStars(testimonial.rating)}</div>
                </div>
            </div>
            <p class="text-gray-700 mb-4">"${testimonial.text}"</p>
            <div class="text-sm text-gray-500">
                <div>Purchased: ${testimonial.vehicle}</div>
                <div>Date: ${new Date(testimonial.date).toLocaleDateString()}</div>
            </div>
        </div>
    `;
}

function initTestimonialCarousel() {
    const container = document.getElementById('testimonial-carousel');
    if (!container) return;
    
    container.innerHTML = testimonials.map(testimonial => renderTestimonial(testimonial)).join('');
    
    // Initialize carousel if Splide is available
    if (typeof Splide !== 'undefined') {
        new Splide(container.parentElement, {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 5000,
            breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 }
            }
        }).mount();
    }
}

// Contact Form Functions
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We will contact you within 24 hours.');
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Navigation Functions
function initNavigation() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    // Initialize common components
    initScrollAnimations();
    initTextAnimations();
    initNavigation();
    initContactForm();
    
    // Page-specific initialization
    if (currentPage === 'inventory.html' || document.getElementById('vehicle-grid')) {
        renderVehicleGrid();
        updateResultsCount();
        initInventoryFilters();
    }
    
    if (currentPage === 'services.html' || document.getElementById('vehicle-price')) {
        initFinancingCalculator();
    }
    
    if (currentPage === 'about.html' || document.getElementById('testimonial-carousel')) {
        initTestimonialCarousel();
    }
    
    // Initialize hero carousel if on homepage
    if (currentPage === 'index.html' || document.getElementById('hero-carousel')) {
        initHeroCarousel();
    }
});

// Inventory Filters
function initInventoryFilters() {
    const filterForm = document.getElementById('filter-form');
    if (!filterForm) return;
    
    filterForm.addEventListener('input', (e) => {
        const formData = new FormData(filterForm);
        const filters = Object.fromEntries(formData);
        
        // Convert price and mileage to numbers
        if (filters.minPrice) filters.minPrice = parseFloat(filters.minPrice);
        if (filters.maxPrice) filters.maxPrice = parseFloat(filters.maxPrice);
        if (filters.maxMileage) filters.maxMileage = parseFloat(filters.maxMileage);
        
        filterVehicles(filters);
    });
    
    // Sort functionality
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortVehicles(e.target.value);
        });
    }
}

// Hero Carousel
function initHeroCarousel() {
    const heroImages = [
        'https://kimi-web-img.moonshot.cn/img/pictures.dealer.com/c44fd2f419180c28cbc723f56e62f20a97209005.jpg',
        'https://kimi-web-img.moonshot.cn/img/dragon2000-multisite.s3.eu-west-2.amazonaws.com/774c9a70b17f3652e515521700cd92673bd8ff91.jpg',
        'https://kimi-web-img.moonshot.cn/img/img.freepik.com/0cdfbedc36c698b72c8cd4f9d6a02973c85b8d79.jpg',
        'https://kimi-web-img.moonshot.cn/img/walkthru360.com/ae86ede427e0804a89db7b019790c19788c9e923.jpg',
        'https://kimi-web-img.moonshot.cn/img/linetec.com/9f8609b1121c08b770abf2f705da9dc1009dd535.jpg'
    ];
    
    const container = document.getElementById('hero-carousel');
    if (!container) return;
    
    // Create hero carousel with Splide
    if (typeof Splide !== 'undefined') {
        new Splide(container, {
            type: 'loop',
            autoplay: true,
            interval: 4000,
            speed: 1000,
            arrows: false,
            pagination: false,
            cover: true,
            height: '100vh'
        }).mount();
    }
}

// Utility function for showing contact form
function showContactForm() {
    alert('Contact form functionality - redirecting to contact page or showing modal');
}

// Export functions for global access
window.LRSTradeCars = {
    toggleFavorite,
    viewVehicleDetails,
    scheduleTestDrive,
    filterVehicles,
    sortVehicles,
    closeModal,
    showContactForm
};