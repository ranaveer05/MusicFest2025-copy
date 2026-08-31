#!/bin/bash

echo "==============================================="
echo "SYSTEM INFORMATION REPORT"
echo "==============================================="

echo "Current User: $USER"
echo "Current Date: $(date +"%a %b %d %Y")"
echo "Current Time: $(date +"%H:%M:%S")"
echo "Home Directory: $HOME"
echo "Current Working Directory: $(pwd)"
echo "Number of Files in Current Directory: $(ls -1 | wc -l)"

echo "==============================================="