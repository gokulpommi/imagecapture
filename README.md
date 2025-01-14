# Canvas Image Capture and Export Application

This is an **Ionic Angular** application that allows users to capture an image, display it on a canvas, export it at custom dimensions without quality loss, and view all exported images on a second page.

---

## Features

1. **Image Capture**: Use the device camera to capture images.
2. **Canvas for Image Display**: Display the captured image on a canvas with default dimensions.
3. **Custom Export Dimensions**: Specify custom width and height for exporting the canvas content without affecting image quality.
4. **View Exported Images**: Navigate to a second page to view all exported images stored in persistent storage using **Ionic Storage**.
5. **Lazy Loading**: Efficiently handle multiple exported images on the second page.

---

## Setup Instructions

### Prerequisites

- Node.js installed
- Ionic CLI installed (`npm install -g @ionic/cli`)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/canvas-image-export.git
   cd canvas-image-export

2. Install Dependencies:

   npm install

3. Install Ionic Storage :
   
   npm install @ionic/storage-angular

4. Add Capacitor Camera Plugin:

   npm install @capacitor/camera

5. Run the Application on a Device:

   Add Android or iOS platform:   
      ionic capacitor add android
      ionic capacitor add ios

   Build and deploy:   
      ionic capacitor build android
      ionic capacitor build ios


Assumptions
   Canvas Initialization: The canvas starts with a default size of Images . The user can modify these dimensions during export.
   Image Quality: Exported images maintain high quality (JPEG format, 100% quality).
   Persistent Storage: All exported images are stored using Ionic Storage.
   Lazy Loading: Exported images are loaded efficiently on the second page.
