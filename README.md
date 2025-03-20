# WorldMapX Landing Page Maintenance Guide

This guide provides detailed instructions for maintaining and customizing the WorldMapX landing page. Whether you're new to web development or need a quick reference, follow these step-by-step instructions.

## Table of Contents
1. [Updating Text and Tailwind CSS Classes](#updating-text-and-tailwind-css-classes)
2. [Fixing Broken Links](#fixing-broken-links)
3. [Linking Privacy and Terms Pages](#linking-privacy-and-terms-pages)
4. [Troubleshooting](#troubleshooting)

## Updating Text and Tailwind CSS Classes

### Header Section
The header contains the site logo and navigation menu:

```html
<header class="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
```

To update the logo text:
1. Locate the following line:
```html
<a href="/" class="text-2xl font-bold text-gray-900">WorldMapX</a>
```
2. Replace "WorldMapX" with your desired text
3. Adjust size using `text-2xl` (options: `text-sm`, `text-base`, `text-lg`, `text-2xl`, `text-3xl`)

### Hero Section
The main headline and introduction are in the hero section:

```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-8">
    Explore curated maps and prints at WorldMapX blending history art & exploration
</h1>
```

To modify:
1. Replace the text between the `<h1>` tags
2. Keep the responsive text classes:
   - `text-4xl`: Mobile size
   - `md:text-5xl`: Tablet size
   - `lg:text-6xl`: Desktop size

### Features Section
Each feature card follows this structure:

```html
<div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        <!-- Icon SVG here -->
    </div>
    <h3 class="text-xl font-semibold mb-4">Historical Maps</h3>
    <p class="text-gray-600 leading-relaxed">Description text here</p>
</div>
```

To update:
1. Modify the `<h3>` text for the feature title
2. Update the description in the `<p>` tag
3. Keep the styling classes for consistent design

## Fixing Broken Links

### Navigation Menu Links
Current navigation links are:

```html
<div class="hidden md:flex space-x-8">
    <a href="#features">Collections</a>
    <a href="#benefits">Benefits</a>
    <a href="#faq">FAQ</a>
    <a href="#contact">Contact</a>
</div>
```

To update:
1. Locate the `href` attribute
2. For internal section links, use `#section-id`
3. For external links, use the full URL: `https://example.com`

### Call-to-Action Links
The main CTA buttons link to:

```html
<a href="https://paperchaserevival.kit.com/" class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg">
```

To update:
1. Replace the `href` value with your desired URL
2. Test the link to ensure it works
3. Maintain the styling classes for consistent appearance

## Linking Privacy and Terms Pages

### Footer Links Section
Locate the footer links section:

```html
<div>
    <h4 class="text-white text-lg font-semibold mb-4">Links</h4>
    <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-300">About Us</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
    </ul>
</div>
```

To add privacy and terms pages:
1. Create `privacy.html` and `terms.html` in your root directory
2. Update the links:
```html
<li><a href="privacy.html" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
<li><a href="terms.html" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
```

## Troubleshooting

### Common Issues

1. **Broken Internal Links**
   - Ensure section IDs match the href attributes
   - Section IDs should not contain spaces
   - Example: `href="#features"` links to `id="features"`

2. **Responsive Design Issues**
   - Check that you maintain the responsive classes:
     - `md:` prefix for tablet
     - `lg:` prefix for desktop
   - Don't remove `container` and `mx-auto` classes

3. **Style Inconsistencies**
   - Keep the color classes consistent:
     - Primary blue: `bg-blue-600`
     - Text gray: `text-gray-600`
     - Background: `bg-gray-50`
   - Maintain padding/margin patterns:
     - Section padding: `py-24`
     - Container padding: `px-6`

### Need Help?
If you encounter issues:
1. Verify all changes against the original code
2. Check for missing closing tags
3. Ensure all class names are spelled correctly
4. Test the page at different screen sizes

Remember to always back up your code before making changes, and test thoroughly after each modification.