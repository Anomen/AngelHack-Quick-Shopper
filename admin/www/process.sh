#!/bin/bash

video=$1

mkdir /tmp/__productfinder >& /dev/null

# Clean the HDD
rm -rf /tmp/__productfinder/*.png

# Convert video in images
ffmpeg -i $video -r 5 -f image2 /tmp/__productfinder/image-%07d.png

# Resize images if not big enough
width=`identify -format "%[fx:w]" /tmp/__productfinder/image-0000001.png`
if [[ $width -lt 1000 ]] ; then
    echo "Images are not big enough. Resizing..."
    mogrify -resize 1500x /tmp/__productfinder/*.png
fi

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
    #info=`curl "https://api.scandit.com/v1/products/$i?key=6G_fwddmpvScyKwMZtasaD4D_Wl718vGvZk2T6mMByT"`
    info=`curl "http://eandata.com/feed.php?keycode=49F103EC50A7F96D&mode=json&find=$i"`
    if [[ $info == 'No data available for this code' ]] ; then
        info='{"error": "No data available for this code"}'
    fi
    echo "{'barcode': $i, 'informations': $info}," >> /tmp/__productfinder/informations
done
echo "}" >> /tmp/__productfinder/informations

cat /tmp/__productfinder/informations

