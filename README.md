# My Theme – Custom Drupal 10 Theme

## 🚀 How to Install

1. Copy this theme to your Drupal site under:
/themes/custom/my_theme


2. Go to the Drupal admin UI:
- Navigate to **Appearance**
- Find **My Theme**
- Click “Install and set as default”

3. Clear Cache (Optional but Recommended)
You can clear the cache using the Drupal admin UI:
- Navigate to **configuration**
- Then to **performanace**
- Click on **clear all cache** 

---

## 🎨 Features & Customizations

- Custom theme regions:
  - Top Banner (Header)
  - Logo
  - Navigation Menu
  - Left Sidebar
  - Content Area
  - Footer

- Responsive layout using Flexbox and custom CSS.
- Sidebar blocks styled vertically with hover effects.
- Interactive buttons with smooth hover color changes.
- Custom top header banner with site title.
- Homepage button in navigation.
- Search form with icon beside homepage button.
- Improved accessibility and spacing.
- Color scheme adjusted for better readability.

---

## 🧪 Functionality Checklist

- ✅ All theme regions working correctly
- ✅ Blocks display properly in sidebar (vertical layout)
- ✅ Buttons and links are styled and hover-interactive
- ✅ Search bar is functional and submits to `/search`
- ✅ Theme layout adapts to mobile screens
- ✅ Compatible with Drupal 10

---

## 🧾 File Structure Overview

```
your_theme_name/
│
├── your_theme_name.info.yml         # Theme metadata
├── your_theme_name.libraries.yml    # CSS/JS file declarations
├── your_theme_name.theme            # PHP functions for preprocessing
├── css/
│   └── style.css                    # All custom CSS styling
├── templates/
│   └── page.html.twig               # Custom page layout template
├── screenshot.png                   # Theme preview image
└── README.md                        # This file
```

---