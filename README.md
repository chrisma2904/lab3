
# Laboratory Exercise 4: React useState and useEffect

**Course:** DCIT26 - Application Development and Emerging Technologies

**Project:** CvSU Mini Store - Live Search and Filter

## Features

- Live product search with 300ms debounce.
- Filter products by category.
- Sort products by price.
- Clear Filters button.
- Display matching product count.
- Empty-state message when no products match.
- Automatic browser tab title update.
- Add to Cart functionality from Laboratory Exercise 3.

## Guide Questions

### 1. Why do we use two separate states, searchText and debouncedSearch, instead of only one?

We use two separate states because searchText updates immediately when the user types, while debouncedSearch only updates after the user stops typing for 300 milliseconds. This helps prevent unnecessary filtering on every keystroke.

### 2. What would happen if the debounce effect did not return a cleanup function?

Without a cleanup function, previous timers would continue running even when the user types again. This can cause unnecessary updates and affect the search behavior.

### 3. What is the purpose of the dependency array? What happens if it is empty ([]) or left out completely?

The dependency array controls when useEffect runs. If it is empty, the effect runs only once after the component mounts. If it is left out, the effect runs after every render.

### 4. Why should we avoid sorting the original products array directly?

We should avoid sorting the original array because sort() changes the original data. Using the spread operator creates a copy so we can sort without modifying the original products array.

### 5. Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.

It is better to calculate the filtered product list during rendering because it is based on the existing search, category, and sort states. This avoids unnecessary state and keeps the data updated automatically when the filters change.
