#!/bin/bash

# Directory containing PNG files
# INPUT_DIR="/Users/danielvoigt/Code/Lauren_Web_Site/LVFA/public/images/Trapped"
INPUT_DIR="/Users/danielvoigt/LVFA-Assets/Crimson_Echos"
OUTPUT_DIR="/Users/danielvoigt/LVFA-Assets/WebP's/Crimson_Echos"

# Create output directory if it doesn't exist
mkdir -p $OUTPUT_DIR

# Loop through all PNG files in the input directory
for file in $INPUT_DIR/*.png; do
  # Get the filename without the extension
  filename=$(basename "$file" .png)
  # Convert the file to WebP
  cwebp -q 90 "$file" -o "$OUTPUT_DIR/$filename.webp"
done
