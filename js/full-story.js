// ===== Full Story Page JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize image upload functionality
    initImageUploads();
    
    // Add smooth scroll for internal links
    initSmoothScroll();
    
    // Add fade-in animations
    initScrollAnimations();
});

// ===== Image Upload Functionality =====
function initImageUploads() {
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    
    imagePlaceholders.forEach(placeholder => {
        const fileInput = placeholder.querySelector('.file-input');
        const uploadArea = placeholder.querySelector('.upload-area');
        
        // Click to upload
        placeholder.addEventListener('click', () => {
            fileInput.click();
        });
        
        // Drag and drop functionality
        placeholder.addEventListener('dragover', (e) => {
            e.preventDefault();
            placeholder.style.borderColor = 'var(--primary-color)';
            placeholder.style.background = 'rgba(37, 99, 235, 0.1)';
        });
        
        placeholder.addEventListener('dragleave', (e) => {
            e.preventDefault();
            placeholder.style.borderColor = '#dee2e6';
            placeholder.style.background = '#f8f9fa';
        });
        
        placeholder.addEventListener('drop', (e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileUpload(files[0], placeholder);
            }
        });
        
        // File input change
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                handleFileUpload(file, placeholder);
            }
        });
    });
}

function handleFileUpload(file, placeholder) {
    // Validate file type
    if (!file.type.startsWith('image/')) {
        showNotification('Please select an image file', 'error');
        return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showNotification('Image size should be less than 5MB', 'error');
        return;
    }
    
    // Show loading state
    placeholder.classList.add('loading');
    
    // Create FileReader
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Remove loading state
        placeholder.classList.remove('loading');
        
        // Set background image
        const uploadArea = placeholder.querySelector('.upload-area');
        uploadArea.style.backgroundImage = `url(${e.target.result})`;
        placeholder.classList.add('has-image');
        
        // Show success message
        showNotification('Image uploaded successfully!', 'success');
        
        // Add remove button
        addRemoveButton(placeholder);
    };
    
    reader.onerror = function() {
        placeholder.classList.remove('loading');
        showNotification('Error uploading image', 'error');
    };
    
    reader.readAsDataURL(file);
}

function addRemoveButton(placeholder) {
    // Check if remove button already exists
    if (placeholder.querySelector('.remove-image-btn')) {
        return;
    }
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-image-btn';
    removeBtn.innerHTML = '×';
    removeBtn.title = 'Remove image';
    
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeImage(placeholder);
    });
    
    placeholder.appendChild(removeBtn);
}

function removeImage(placeholder) {
    const uploadArea = placeholder.querySelector('.upload-area');
    const fileInput = placeholder.querySelector('.file-input');
    const removeBtn = placeholder.querySelector('.remove-image-btn');
    
    // Reset styles
    uploadArea.style.backgroundImage = '';
    placeholder.classList.remove('has-image');
    
    // Reset file input
    fileInput.value = '';
    
    // Remove button
    if (removeBtn) {
        removeBtn.remove();
    }
    
    showNotification('Image removed', 'info');
}

// ===== Smooth Scroll for Internal Links =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.timeline-item, .story-cta');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Notification styles
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${colors[type] || colors.info};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ===== Timeline Animation =====
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.3
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Add timeline animation styles
const timelineStyles = `
    .timeline-item {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.6s ease;
    }
    
    .timeline-item.animate-in {
        opacity: 1;
        transform: translateX(0);
    }
    
    .remove-image-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgba(239, 68, 68, 0.9);
        color: white;
        border: none;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 10;
    }
    
    .remove-image-btn:hover {
        background: #ef4444;
        transform: scale(1.1);
    }
`;

// Inject timeline styles
const styleSheet = document.createElement('style');
styleSheet.textContent = timelineStyles;
document.head.appendChild(styleSheet);

// Initialize timeline animation
document.addEventListener('DOMContentLoaded', initTimelineAnimation);
