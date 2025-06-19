#!/bin/bash
# Simple build script for Vercel static site deployment

echo "Building Peak Nootropic static site..."

# Create output directory if it doesn't exist
mkdir -p public

# Copy all files to public directory
cp -r index.html public/
cp -r peak-nootropic public/
cp -r package.json public/

echo "Build completed successfully!"
echo "Files in public directory:"
ls -la public/ 