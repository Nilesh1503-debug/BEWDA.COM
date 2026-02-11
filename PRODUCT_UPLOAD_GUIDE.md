# Product Upload Feature Guide

## Overview

Bewda.com now includes a fully functional product upload page that allows you to add new liquor products to your store with ease.

## Accessing the Product Upload Page

1. **From Desktop**: Click on "Upload Product" in the main navigation bar
2. **From Mobile**: Open the menu and tap on "Upload Product"

## How to Upload a Product

### Step 1: Upload Product Image
- Click "Choose File" to select an image from your device
- Supported formats: JPG, PNG, WEBP
- Recommended size: 800x800 pixels
- Max file size: 5MB
- You can preview the image before uploading
- Click the X button to remove and re-upload if needed

### Step 2: Fill in Product Details

**Required Fields:**
- **Product Name**: Enter the full name of the product (e.g., "Royal Stag Barrel Select")
- **Category**: Select from Whiskey, Beer, Vodka, Rum, Wine, Scotch, Tequila, Shots, Brandy, or Gin
- **Selling Price (₹)**: Enter the discounted price at which you want to sell
- **Size**: Enter the product size (e.g., 750ml, 650ml, 1L, 355ml)

**Optional Fields:**
- **Original Price (₹)**: Enter the MRP or higher price to show discount
- **Badge**: Select a badge to highlight special products (Best Seller, Popular, Premium, etc.)
- **Description**: Add detailed information about the product, taste profile, origin, etc.

### Step 3: Submit the Product
- Click "Add Product" button to upload
- The upload process takes a few seconds
- You'll see a success message once uploaded
- The product will now appear in your store

## Features

### Image Preview
- Live preview of the uploaded image
- Visual representation of how the product will look in the store

### Form Validation
- Required fields are marked with *
- Error messages appear if you try to submit without filling required fields
- Form cannot be submitted without uploading an image

### Responsive Design
- Works seamlessly on desktop and mobile devices
- Clean, intuitive interface with proper spacing and alignment

### Loading States
- Animated spinner shows while uploading
- Button is disabled during upload to prevent duplicate submissions

## Technical Details

### Frontend
- Built with React 19 and TypeScript
- Uses react-hook-form for form management
- Tailwind CSS for styling
- Responsive grid layout with proper spacing

### Backend Integration
- Currently simulates API calls with a 2-second delay
- Can be easily connected to a real backend API
- Product data is logged to the console for debugging

## Customization Options

### Adding More Categories
Edit the `categories` array in `src/components/ProductUpload.tsx`:
```typescript
const categories = [
  'Whiskey',
  'Beer',
  // Add more categories here
];
```

### Adding More Badges
Edit the `badges` array in `src/components/ProductUpload.tsx`:
```typescript
const badges = [
  'Best Seller',
  'Popular',
  // Add more badges here
];
```

### Connecting to Real API
Modify the `onSubmit` function to send data to your backend:
```typescript
const onSubmit = async (data: ProductFormData) => {
  setIsUploading(true);
  try {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        image: selectedImage,
      }),
    });
    
    if (response.ok) {
      alert('Product uploaded successfully!');
      reset();
      setSelectedImage(null);
    } else {
      alert('Failed to upload product');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to upload product');
  } finally {
    setIsUploading(false);
  }
};
```

## Future Enhancements

- Image compression before upload
- Multiple image upload support
- Product inventory management
- Bulk product upload
- Product editing and deletion
- Image gallery for products
- Auto-generate product slug from name
- SEO optimization fields
- Product tags and keywords
- Weight and dimension fields
- Availability status
- Shipping information

## Support

For any issues or questions about the product upload feature, please refer to the component code in `src/components/ProductUpload.tsx` or contact the development team.

---

**Note:** This feature is intended for store administrators. Make sure to add proper authentication and authorization before deploying to production.
