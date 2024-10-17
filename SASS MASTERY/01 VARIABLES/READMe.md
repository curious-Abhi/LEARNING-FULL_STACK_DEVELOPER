#  SASS Variables

## 1️⃣ What are SASS Variables?
SASS variables allow you to store values (like colors, fonts, sizes) that you can reuse throughout your stylesheets. This helps in maintaining consistency and makes your code easier to update.

### Syntax:
```scss
$variable-name: value;

$ denotes a variable in SASS.
You can store anything: colors, sizes, fonts, etc.
```


Here’s your content formatted into a README.md file:

markdown
Copy code
# Chapter 1: SASS Variables

## 1️⃣ What are SASS Variables?
SASS variables allow you to store values (like colors, fonts, sizes) that you can reuse throughout your stylesheets. This helps in maintaining consistency and makes your code easier to update.

### Syntax:
```scss
$variable-name: value;
$ denotes a variable in SASS.
You can store anything: colors, sizes, fonts, etc.
```

## 2️⃣ Examples of Variables:
### Color Variables:

```
$primary-color: #3498db;
$secondary-color: #2ecc71;
$text-color: #333;

body {
  background-color: $primary-color;
  color: $text-color;
}
```
### Font Variables:

```
$main-font: 'Roboto', sans-serif;
$heading-font: 'Poppins', sans-serif;

h1, h2, h3 {
  font-family: $heading-font;
}

body {
  font-family: $main-font;
}

```

### Size Variables:
```

$padding-small: 8px;
$padding-large: 24px;

.container {
  padding: $padding-large;
}
```


## 3️⃣ Challenges:

### Challenge 1:
Create a variable named $theme-color and set it to any color of your choice. Use this variable to style the background-color of a div element.

### Challenge 2:
Define variables for padding-small and padding-large. Use them to style two different containers (.box-small and .box-large) with different paddings.

### Challenge 3:
Create ```variables``` for:

Primary font: 'Arial'
Secondary font: 'Courier New'
Use these to apply fonts to headings and paragraphs respectively.

### Bonus Challenge:
Try changing the value of your ```$theme-color``` and see how the entire look of your project changes without altering multiple styles!


### 🎯 Deliverables:
One ```index.html``` file with a linked ```styles.scss``` file.
Use variables to define your theme colors, fonts, and spacing.

