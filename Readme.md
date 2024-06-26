#Real-Time Geolocation Tracking System

This project aims to create a robust real-time tracking system based on geolocation data, providing users with an interactive map displaying their current location and historical movements. The system utilizes Angular for the frontend, Node.js for the backend, and MongoDB as the NoSQL database. Additionally, it incorporates external APIs such as Leaflet for geolocation data and OpenWeather for real-time weather conditions. The system ensures security, compliance with GDPR regulations, and horizontal scalability for optimal performance.

## Features
Responsive Interface:

Utilizes Angular to create a responsive and user-friendly interface.
Implements CSS for a visually appealing design with animations for enhanced aesthetics.
Features a single-page application design for seamless user experience.
Geolocation Data:

Integrates Leaflet, a free geolocation API, to gather data and display it on an interactive map.
Records user geolocation data in a MongoDB NoSQL database for historical tracking.
Weather Information:

Utilizes OpenWeather's free weather API to provide users with real-time weather conditions based on their location.
Security:

Implements security features to safeguard geolocation data and ensure user privacy.
Scalability:

Incorporates microservices technologies for horizontal scalability and efficient performance management.
User Authentication:

Enables user login through Google sign-in for a streamlined authentication process.
GDPR Compliance:

Requires users to accept terms of use, ensuring compliance with the General Data Protection Regulation (GDPR).
## Installation

Setup Instructions
Prerequisites
<img width="1440" alt="Screenshot 2024-05-23 at 07 51 54" src="https://github.com/krishna-droid/Rouge/assets/55031448/ea28758a-cbcb-453e-93e7-f9f8a5baefd7">
<img width="1440" alt="Screenshot 2024-05-23 at 07 52 02" src="https://github.com/krishna-droid/Rouge/assets/55031448/ef079eaa-ccb2-4592-9ef3-fa37c80218a8">
<img width="1440" alt="Screenshot 2024-05-23 at 07 52 20" src="https://github.com/krishna-droid/Rouge/assets/55031448/0e5700df-2a1c-4ae9-b369-b0e6742d27c4">

Install Node.js and npm (Node Package Manager)

Set up MongoDB database

Installation Steps

Clone the repository:

```bash
git clone https://github.com/krishna-droid/Rouge.git

```
Install dependencies:
```bash
cd geolocation-tracker
npm install
ng serve
```
## Backend 
```bash
cd backend-server
npm install
npm run start 
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
