import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductFormData {
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  size: string;
  badge: string;
  description: string;
}

export function ProductUpload() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>();

  const categories = [
    'Whiskey',
    'Beer',
    'Vodka',
    'Rum',
    'Wine',
    'Scotch',
    'Tequila',
    'Shots',
    'Brandy',
    'Gin',
  ];

  const badges = [
    'Best Seller',
    'Popular',
    'Premium',
    'Imported',
    'Indian',
    'Value',
    'Legend',
    'Chilled',
    'Celebration',
    '',
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const onSubmit = async (data: ProductFormData) => {
    setIsUploading(true);
    try {
      // Simulate API call to upload product
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log('Product uploaded:', {
        ...data,
        image: selectedImage,
        rating: (Math.random() * 1 + 4).toFixed(1),
      });
      
      alert('Product uploaded successfully!');
      reset();
      setSelectedImage(null);
    } catch (error) {
      console.error('Error uploading product:', error);
      alert('Failed to upload product. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Store</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Upload Section */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 rounded-xl p-6 border border-white/5">
              <h3 className="text-xl font-bold mb-4">Product Image</h3>
              
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                {!selectedImage ? (
                  <div>
                    <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">Upload product image</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors font-medium inline-flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Choose File
                    </label>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={selectedImage}
                      alt="Product preview"
                      className="w-full h-64 object-contain rounded-lg bg-zinc-800 p-2"
                    />
                    <button
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white rounded-full p-1 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <p className="mt-2 text-sm text-gray-400">
                      Image uploaded successfully
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4 text-xs text-gray-500">
                <p>• Recommended size: 800x800 pixels</p>
                <p>• Supported formats: JPG, PNG, WEBP</p>
                <p>• Max file size: 5MB</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 rounded-xl p-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Add New Product</h2>
                <ShoppingBag className="w-6 h-6 text-amber-500" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Product name is required' })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    placeholder="e.g., Royal Stag, Kingfisher Premium"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    {...register('category', { required: 'Category is required' })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-red-500 text-xs">{errors.category.message}</p>
                  )}
                </div>

                {/* Price and Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Selling Price (₹) *
                    </label>
                    <input
                      type="number"
                      {...register('price', { required: 'Price is required' })}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                      placeholder="650"
                    />
                    {errors.price && (
                      <p className="mt-1 text-red-500 text-xs">{errors.price.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Original Price (₹)
                    </label>
                    <input
                      type="number"
                      {...register('originalPrice')}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                      placeholder="750"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Size *
                    </label>
                    <input
                      type="text"
                      {...register('size', { required: 'Size is required' })}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                      placeholder="750ml, 650ml, 1L"
                    />
                    {errors.size && (
                      <p className="mt-1 text-red-500 text-xs">{errors.size.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Badge (Optional)
                    </label>
                    <select
                      {...register('badge')}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    >
                      {badges.map((badge) => (
                        <option key={badge} value={badge}>
                          {badge || 'No badge'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Product Description (Optional)
                  </label>
                  <textarea
                    {...register('description')}
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 text-white resize-none"
                    placeholder="Add details about the product, origin, taste profile, etc."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={() => reset()}
                    className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    disabled={isUploading || !selectedImage}
                    className="px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-zinc-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-medium flex-1 flex items-center justify-center gap-2"
                  >
                    {isUploading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        Add Product
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Preview Section */}
            <div className="mt-8 bg-zinc-900 rounded-xl p-6 border border-white/5">
              <h3 className="text-lg font-bold mb-4">Product Preview</h3>
              <div className="bg-zinc-800 rounded-lg p-4">
                {selectedImage ? (
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-2">
                      <img
                        src={selectedImage}
                        alt="Product preview"
                        className="w-full h-48 object-contain bg-zinc-900 rounded p-2"
                      />
                    </div>
                    <div className="md:col-span-3 flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-white mb-2">
                        Product Name
                      </h4>
                      <p className="text-amber-500 font-medium mb-2">
                        Category
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl font-bold text-white">
                          ₹0
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Size: 0ml
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Upload an image to see the product preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
