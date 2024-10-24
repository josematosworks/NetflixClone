# Netflix Clone: Angular Best Practices Showcase

## 🎯 Project Goal

This project demonstrates Angular best practices and modern features by building a Netflix-inspired streaming platform. It serves as an example of how to structure a large-scale Angular application while implementing current web development techniques.

[🔗 Live Demo](https://netflix-clone.josematosworks.com)

## 🌟 Key Features & Angular Concepts Demonstrated

### 1. Modular Architecture

- Utilizes Angular's standalone components for better modularity and lazy-loading capabilities.
- Implements feature-based folder structure for improved organization and scalability.

### 2. Lazy Loading

- Employs Angular's lazy loading to improve initial load time and overall performance.
- Uses `loadComponent` syntax for route configurations, demonstrating modern lazy loading techniques.

### 3. Reactive Forms

- Showcases advanced form handling with reactive forms in the email signup process.
- Implements custom validators for email domain restrictions and asynchronous validation.

### 4. State Management

- Utilizes RxJS BehaviorSubjects for lightweight state management of the authentication state.
- Demonstrates how to effectively manage and share state across components without heavy libraries.

### 5. Angular Signals

- Incorporates Angular's new Signals API for more granular and efficient state management, as seen in the `FeaturedSectionComponent`.

### 6. Route Guards & Resolvers

- Implements authentication guards to protect routes and ensure user authorization.
- Uses resolvers to pre-fetch data before component initialization, improving user experience.

### 7. Optimized Change Detection

- Utilizes OnPush change detection strategy to optimize performance in components like `MovieCardComponent`.

### 8. Responsive Design

- Implements a responsive layout using Tailwind CSS, showcasing how to integrate modern CSS frameworks with Angular.

### 9. API Integration

- Demonstrates integration with external APIs (TMDB) using Angular's HttpClient.
- Implements interceptors for adding authentication tokens and handling errors globally.

### 10. Advanced RxJS Usage

- Showcases RxJS operations for data transformation and API request handling.

### 11. Environment Configuration

- Utilizes Angular's environment files for managing environment-specific variables and API keys.

## 🚀 Getting Started

To run this project locally:

1. Clone the repository:

   ```
   git clone https://github.com/josematosworks/NetflixClone.git
   ```

2. Navigate to the project directory:

   ```
   cd netflix-clone-angular
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up environment variables:

   - Rename `src/environments/environment.example.ts` to `environment.ts`
   - Add your TMDB API key to the file

5. Run the development server:

   ```
   ng serve
   ```

6. Open your browser and navigate to `http://localhost:4200`

## 🛠 Built With

- Angular 18
- RxJS
- Tailwind CSS
- TMDB API

## 📚 Learn More

For more information on the concepts and practices used in this project, check out the following resources:

- [Angular Documentation](https://angular.io/docs)
- [RxJS Documentation](https://rxjs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---

⭐️ If you found this project helpful, please give it a star on GitHub! ⭐️
