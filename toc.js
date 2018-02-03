/**
 * For displaying a table of contents - pass the entire document (DOM) to writeTocToDocument
 */

function getHeaderLevel(header) {
    return Number(header.nodeName.slice(-1));
}

function createTocMarkup(headers) {
    var prevLevel = 1;
    var output = "";

    headers.forEach(function(h) {
        var currLevel = getHeaderLevel(h);
        if (currLevel > prevLevel) {
            var ranOnce = false;
            while (currLevel > prevLevel) {
                if (ranOnce) {
                    output += "&nbsp;";
                }
                output += "<ol style=\"margin-bottom:0px\"><li>";
                prevLevel += 1;
                ranOnce = true;
            }
        } else if (currLevel == prevLevel) {
            output += "</li><li>";
        } else if (currLevel < prevLevel) {
            while (currLevel < prevLevel) {
                output += "</li></ol>";
                prevLevel -= 1;
            }
            output += "<li>";
        }

        output += `<a href="#${h.id}">${h.innerText}</a>`;
    });

    if (output != "") {
        // Change 2 to the max header level you want in the TOC; in my case, H2
        while (prevLevel >= 2) {
            output += "</li></ol>";
            prevLevel -= 1;
        }
        output = `<h2 class="widget-title">Table of Contents</h2><div style="margin-left:-10px">${output}</div>`;
    }

    return output;
}

function writeTocToDocument(document) {
    var body = document.getElementsByClassName('post-content')[0];
    
    // Add or remove header tags you do (or don't) want to include in the TOC
    var headers = body.querySelectorAll('h2, h3, h4, h5, h6');

    if (headers.length > 1) {
        document.write(createTocMarkup(headers));
    }
}
