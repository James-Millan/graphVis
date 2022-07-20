//global variables
let vertices = {};


function visualise()
{
    console.log("entered visualise");
    let rawVertices = document.getElementById("vertices").value;
    let rawEdges = document.getElementById("edges").value;
    let vertices = extractVertices(rawVertices);
    console.log(vertices);
    for ( let vertex of vertices )
    {
        let size = getRandomSize();
        drawVertex(vertex, size);
    }
}

function extractVertices(rawVertices)
{
    let vertices = [];
    let vertex = "";
    for ( let character of rawVertices )
    {
        if ( character === " " || character === "," )
        {
            vertices.push(vertex);
            vertex = "";
        }
        else if ( rawVertices.endsWith(character) )
        {
            vertex += character;
            vertices.push(vertex);
            vertex = "";
        }
        else
        {
            vertex += character;
        }
    }
    return vertices;
}

//So the graph isn't just a grid :)
function getRandomSize()
{
    return (Math.floor(Math.random() * 100));
}

function drawVertex(label, size)
{
    //TODO label each vertex
    const graphElement = document.getElementById("graph");
    const canvas = document.createElement("canvas");
    canvas.style.padding = "0px     " + size.toString() + "px";
    graphElement.append(canvas);
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 15;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'black';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();

    //store co-ordinates of vertices by their label which acts as an identifier.
    vertices[label] = {
        x: centerX,
        y: centerY
    };
}