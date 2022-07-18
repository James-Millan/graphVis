function visualise()
{
    console.log("entered visualise");
    let rawVertices = document.getElementById("vertices").value;
    let rawEdges = document.getElementById("edges").value;
    let vertices = extractVertices(rawVertices);
    console.log(vertices);
    for ( let vertex of vertices )
    {

        drawVertex();
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

function drawVertex()
{
    const graphElement = document.getElementById("graph");
    const canvas = document.createElement("canvas");
    graphElement.append(canvas);
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 10;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
   /* let displayVertex = document.createElement("canvas");
    if ( displayVertex.getContext )
    {
        let ctx = displayVertex.getContext('2d');
        let centerX = displayVertex.width / 2;
        let centerY = displayVertex.height / 2;
        let radius = 45;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
    }*/
}