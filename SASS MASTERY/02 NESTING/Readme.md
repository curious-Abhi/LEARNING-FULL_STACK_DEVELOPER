# 🌟  SASS Nesting 

## 1️⃣ What is Nesting?
Nesting in SASS allows you to write CSS rules inside other rules to reflect the hierarchy of HTML elements. It avoids repetition and makes your code cleaner and more readable.

### **HTML Example:**
```html
<div class="card">
  <h2 class="card-title">Card Title</h2>
  <p class="card-description">This is the card description.</p>
</div>  
```

## 2️⃣ Nesting Syntax:
**Without SASS (CSS):**
```
.card {
  padding: 16px;
}

.card h2 {
  font-size: 24px;
}

.card p {
  font-size: 16px;
}
```
**With SASS Nesting:**
```
.card {
  padding: 16px;

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }
}
```
#### Here, we’ve nested h2 and p inside the .card block, making the structure more intuitive.

## 3️⃣ Nesting with Pseudo-Classes and Pseudo-Elements:
**Example:**
```
.button {
  background-color: $primary-color;

  &:hover {
    background-color: lighten($primary-color, 10%);
  }

  &::before {
    content: "👉 ";
  }
}

```

#### & refers to the parent selector (.button in this case).
#### &:hover and &::before are nested to define hover behavior and a before pseudo-element.


## 4️⃣ Nesting with Media Queries:
#### SASS lets you nest media queries inside rules to keep them organized.

**Example:**

```
.container {
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
}
```

## 5️⃣ Challenges for Day 2:
# Challenge 1:
Nest styles for a .navbar with:

.navbar-logo (apply font size)
.navbar-links (change color on hover)

# Challenge 2:
Create a .profile-card component with nested styles for:

.profile-img (border-radius: 50%)
.profile-name (bold font)
.profile-bio (italic font)

# Challenge 3:
Use nested pseudo-classes to:

Change the background of a button on hover.
Apply styles using the ::before pseudo-element.
