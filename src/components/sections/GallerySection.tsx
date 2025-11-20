'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?w=800&h=600&fit=crop',
      caption: 'Championship Training Session',
      category: 'Training',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      caption: 'Junior Champions in Action',
      category: 'Junior Program',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop',
      caption: 'Professional Court Facilities',
      category: 'Facilities',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
      caption: 'Intensive Training Camp',
      category: 'Camp',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&h=600&fit=crop',
      caption: 'Tournament Victory Celebration',
      category: 'Competition',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      caption: 'Group Training Session',
      category: 'Training',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1511880200584-96e6e1b65dc0?w=800&h=600&fit=crop',
      caption: 'Coach Student Interaction',
      category: 'Coaching',
    },
  ];

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* ✅ linear Background (replacing bg-gray-50) */}
              <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/50" />
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Student <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Catch a glimpse of our training sessions, tournaments, and the vibrant community at Prolift Academy
          </p>
        </motion.div>

        {/* Image Slider */}
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={galleryImages[activeIndex].id}
              src={galleryImages[activeIndex].url}
              alt={galleryImages[activeIndex].caption}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-linear-to-t from-black/70 via-transparent to-transparent">
            <motion.div
              key={galleryImages[activeIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {galleryImages[activeIndex].category}
              </span>
              <h3 className="text-2xl font-bold">{galleryImages[activeIndex].caption}</h3>
            </motion.div>
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-3 rounded-full backdrop-blur-md transition-all"
          >
            ❮
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % galleryImages.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-3 rounded-full backdrop-blur-md transition-all"
          >
            ❯
          </button>
        </div>

        {/* Thumbnail Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer ${
                activeIndex === index ? 'ring-4 ring-secondary' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-white/80 mb-6">
            Want to be featured in our gallery? Join our training programs today!
          </p>
          <motion.button
            className="bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Training Program
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
