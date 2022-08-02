#!/bin/bash
#
# Change the file name from "test" to desired input file 
# (The comments in bash are prefixed with #'s)
for x in $(cat README.md)
do
    echo $x
    echo "/* "$x" ======================================= */" >src/styles/"_"$x".scss" 
    echo "<section class=\""$x"\">\n <div class=\"container\">\n\n   </div>\n</section>" > src/html/kit/"_"$x".html"

    echo "@@include('_"$x".html') " >> src/html/kit/_main.html
    echo '@import "_'$x'";' >> src/styles/_main.scss
done
