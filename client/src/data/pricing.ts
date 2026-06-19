import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: [
            "50 AI thumbnails/month",
            "Basic Templates",
            "Standard Resolution",
            "No watermarks",
            "Email support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "Unlimited AI thumbnails",
            "Premium Templates",
            "High Resolution",
            "A/B Testing Tools",
            "Priority support",
            "No watermarks",
            "Custom Fonts",
            "Brand Kit Access"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "Everything in Pro",
            "API Access",
            "Team Collaboration",
            "Custom Branding",
            "Dedicated Account Manager",
            "24/7 Support"
        ],
        mostPopular: false
    }
];