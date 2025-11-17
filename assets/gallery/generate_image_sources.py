#!/usr/bin/env python3
import os, json, sys
# Path to your gallery folder (defaults to current directory)
gallery_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
# Collect image filenames (JPG/JPEG/PNG) and sort alphabetically
files = sorted(f for f in os.listdir(gallery_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png')))
# Build the array lines
print("const imageSources = [")
for f in files:
    print(f"  'assets/gallery/{f}',")
print("];")
