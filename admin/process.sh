#!/bin/bash

video=$1

mkdir /tmp/__productfinder >& /dev/null

# Convert video in images
ffmpeg -i $video -r 5 -f image2 /tmp/__productfinder/image-%07d.png

# Get the barcodes
echo "" > /tmp/__productfinder/barcodes
for i in /tmp/__productfinder/*.png ; do 
    zbarimg $i >> /tmp/__productfinder/barcodes
done

# Retrieve the list
list=`cat /tmp/__productfinder/barcodes | uniq | cut -d : -f 2`

# Get the information for each items
echo "{" > /tmp/__productfinder/informations
for i in $list ; do
    info=`curl "https://api.scandit.com/v1/products/$i?key=6G_fwddmpvScyKwMZtasaD4D_Wl718vGvZk2T6mMByT"`
    if [[ $info == 'No data available for this code' ]] ; then
        info='{"error": "No data available for this code"}'
    fi
    echo "{'barcode': $i, 'informations': $info}," >> /tmp/__productfinder/informations
done
echo "}" >> /tmp/__productfinder/informations

# Clean the HDD
rm -rf /tmp/__productfinder/*.png

cat /tmp/__productfinder/informations
