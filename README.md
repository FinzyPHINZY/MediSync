# CarePulse

## Overview

A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js, TypeScript and TailwindCSS.

This project is a comprehensive web application designed to deliver an exceptional user experience while maintaining high performance and reliability. The project leverages modern technologies and libraries to ensure smooth functionality, robust error tracking, and efficient data handling.

![Showcase](https://github.com/user-attachments/assets/526d004b-8fd1-4229-8988-a22b8a162774)



- **Repository:** [Click here](https://github.com/FinzyPHINZY/carepulse)
- **Live Preview** [Live Preview](https://carepulse-delta.vercel.app/)

## Lessons Learned

Working on this project has been an incredible learning experience. I had the opportunity to dive into new technologies and tackle various challenges that not only tested my skills but also expanded my understanding of different tools and libraries.

### Sentry Integration

This was my first time implementing Sentry, and it was quite a journey. The Sentry wizard, which is supposed to simplify setup, wasn't working on my machine. So, I had to roll up my sleeves and configure everything manually. It was a bit daunting at first, but I learned a lot about Sentry's inner workings. The manual setup process was time-consuming, but it was rewarding to see everything come together and know that I had a hand in every detail.

### Zod for Validation

Using Zod for data validation has been a joy. Its intuitive API makes it easy to set up and maintain complex validation schemas. It's satisfying to see real-time validation feedback, ensuring data integrity throughout the application. Zod has definitely become a go-to tool in my development toolkit.

### TanStack Table and Query

Integrating TanStack Table was another highlight. This library is incredibly powerful for creating flexible and interactive data tables. Features like sorting, filtering, and pagination are all built-in, which saves a ton of time and effort. In my last major project, SnapCase, I started using TanStack Query for advanced data fetching. Its capabilities are impressive and have made managing server-state in a React app much more efficient. Bringing these tools into this project reinforced their value and solidified my understanding of how to leverage them effectively.

### SMS Notifications with Appwrite and Twilio

This was my first attempt at implementing SMS notifications, and it was both challenging and enlightening. Using Appwrite alongside Twilio, the most popular SMS provider, I managed to integrate SMS notifications successfully. The process of navigating Appwrite's documentation and getting used to its functionalities took some time, but it was worth it. Now, I have a solid grasp of how to set up reliable and scalable communication channels.

### Appwrite Integration

Appwrite was another first for me in this project. Getting around its documentation and understanding how to make everything work took some effort. There were moments of frustration, but overcoming those challenges felt great. Now I appreciate the robustness of Appwrite's backend services and feel more confident using it in future projects.

### Overall Reflections

Looking back, this project has been a fantastic learning curve. Each new technology and challenge has taught me something valuable. I’ve learned to be patient and persistent when facing unfamiliar tools and to enjoy the process of figuring things out. The hands-on experience with Sentry, Zod, TanStack Table and Query, Appwrite, and Twilio has improved my skill set and made me a more versatile developer.

In conclusion, this project has been more than just a technical exercise; it’s been a journey of growth and discovery. The lessons learned here will undoubtedly inform my future work and help me tackle new challenges with greater confidence and expertise.

## Optimizations

The application has been optimized to ensure high performance and reliability. Here are the key optimizations:

- Created custom metrics to track and visualize important data points.
- Real-time monitoring and alerts help in identifying and resolving performance bottlenecks.
- Reduced re-renders and efficient state management lead to better performance.
- Real-time validation provides immediate feedback, improving the overall user experience.
- Features like virtualization and lazy loading ensure smooth performance with large datasets.
- Sorting, filtering, and pagination improve data navigation and usability.
- Using well-optimized, pre-built components reduces development time and enhances performance.
- Ensures a consistent user interface and improves accessibility out of the box.
- Ensures reliable and scalable communication with users through SMS and email.
- Timely notifications enhance user engagement and satisfaction.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/FinzyPHINZY/carepulse.git
   ```
2. **Install dependencies**:

   ```sh
   cd my-project
   npm install
   ```

3. **Run the application**:
   ```sh
   npm run dev
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License.

<!-- issues -->

Here's the section of the README that includes the environment variables required to run the project:

---

## Environment Variables

To run this project, you will need to set up the following environment variables:

### Appwrite

```env
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
DOCTOR_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=
NEXT_PUBLIC_ENDPOINT=
NEXT_PUBLIC_ADMIN_PASSKEY=
```

### Sentry

```env
SENTRY_AUTH_TOKEN=
```

Make sure to replace the placeholders with your actual credentials and configuration values. These variables are essential for the application to function correctly, including connecting to the Appwrite backend and Sentry for error tracking.
