var canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")

ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=10
ctx.arc(200,250,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=10
ctx.arc(400,250,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=10
ctx.arc(600,250,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=10
ctx.arc(300,335,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=10
ctx.arc(500,335,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="gray"
ctx.lineWidth=15
ctx.rect(50, 100, 700, 400)
ctx.stroke()