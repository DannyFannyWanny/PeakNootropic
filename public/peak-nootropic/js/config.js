// Peak Nootropic Configuration
const PEAK_CONFIG = {
    // WhatsApp Support Configuration
    whatsapp: {
        phoneNumber: '1234567890', // Replace with actual WhatsApp number
        defaultMessage: "Hi! I'm interested in Peak Nootropic. Can you help me with more information?",
        countryCode: '1' // US country code, change as needed
    },
    
    // Launch Date Configuration
    launchDate: '2024-12-31T00:00:00',
    
    // Analytics Configuration
    analytics: {
        enabled: true,
        trackingId: 'GA_TRACKING_ID' // Replace with actual GA tracking ID
    },
    
    // Feature Flags
    features: {
        countdownTimer: true,
        whatsappSupport: true,
        mobileMenu: true
    }
};

// Helper function to get WhatsApp URL
function getWhatsAppURL(phoneNumber = PEAK_CONFIG.whatsapp.phoneNumber, message = PEAK_CONFIG.whatsapp.defaultMessage) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${PEAK_CONFIG.whatsapp.countryCode}${phoneNumber}?text=${encodedMessage}`;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PEAK_CONFIG, getWhatsAppURL };
} 