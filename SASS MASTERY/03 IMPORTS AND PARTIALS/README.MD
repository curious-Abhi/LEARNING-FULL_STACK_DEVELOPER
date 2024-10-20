# 🌟 SASS @import and Partials  
Today, we’ll focus on modularizing your code using `@import` and partials. These features allow you to split your SASS files into smaller, reusable components, making your code organized and maintainable.

---

## 1️⃣ What are Partials?  
A **partial** in SASS is a small, reusable SASS file containing styles for specific components (like variables, buttons, or cards). Partials are not compiled into CSS directly but are imported into a main SASS file.

### **Naming Convention:**  
- Partial files start with an **underscore** (e.g., `_variables.scss`, `_buttons.scss`).  
- The underscore tells SASS that this file is a partial, and it will be **ignored during compilation** unless imported.

---

## 2️⃣ Using @import to Include Partials  
The `@import` rule lets you include the content of one SASS file into another. This promotes **code reuse** and keeps your stylesheets organized.

### **Example Directory Structure:**
```bash
/sass-project
│
├── scss
│   ├── _variables.scss   # Stores variables
│   ├── _buttons.scss     # Button styles
│   ├── _navbar.scss      # Navbar styles
│   └── styles.scss       # Main file importing all partials
└── index.html            # HTML file

```

### **Example: Partial (_variables.scss)**
```
// Define variables
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: 'Poppins', sans-serif;

```

### **Example: Partial (_buttons.scss)**
```
@import 'variables';

.button {
  background-color: $primary-color;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

```

### **Main SASS File (styles.scss)**

```
@import 'variables';
@import 'buttons';
@import 'navbar';

```

## 3️⃣ Best Practices
### **Use partials for:**
```
Variables (_variables.scss)
Mixins (_mixins.scss)
Buttons and components (_buttons.scss, _card.scss)
Responsive styles (_media-queries.scss)
```


#### Keep your main file lightweight by importing only what’s needed.
#### Always import variables before other partials to ensure they are available globally.

## 4️⃣ Challenges for Day 3
### Challenge 1:
#### **Create a _variables.scss partial with colors and fonts. Use these variables in a navbar and button component.**

### Challenge 2:
#### Create a _mixins.scss partial with a mixin for a box-shadow effect. Use the mixin in a card component.

### Challenge 3:
#### Create a partial for responsive styles. Write a media query inside the partial and import it into your main stylesheet.

### Bonus Challenge:
#### Experiment by adding more partials (like for cards, modals, or footers). Use imports to maintain organization.
