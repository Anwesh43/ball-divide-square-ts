const w : number = window.innerWidth 
const h : number = window.innerHeight
const parts : number = 3  
const scGap : number = 0.03
const strokeFactor : number = 90 
const sizeFactor : number = 4.9 
const delay : number = 20 
const backColor : string = "#bdbdbd"
const colors : Array<string> = [
    "#304FFE",
    "#C51162",
    "#F57F17",
    "#00C853",
    "#FFD600"   
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}

class DrawingUtil {

    static drawBall(context : CanvasRenderingContext2D, x : number, y : number, r : number) {
        context.beginPath()
        context.arc(x, y, r, 0, 2 * Math.PI)
        context.fill()
    }

    static drawBallDivideSquare(context : CanvasRenderingContext2D, scale : number) {
        const size : number = Math.min(w, h) / sizeFactor 
        const sc1 : number = ScaleUtil.divideScale(scale, 0, parts)
        const sc2 : number = ScaleUtil.divideScale(scale, 1, parts)
        const sc3 : number = ScaleUtil.divideScale(scale, 2, parts)
        context.save()
        context.translate(w / 2, h / 2)
        for (var j = 0; j < 2; j++) {
            context.save()
            context.scale(1 - 2 * j, 1)
            context.translate((w / 2 + size / 2) * sc3, 0)
            context.fillRect(-size / 2, size / 2 - size * sc1, size, size * sc1)
            context.restore()
        }
        DrawingUtil.drawBall(context, 0, -size / 2 + (-h / 2) * (1 - (sc2 - sc3)), size)
        context.restore()
    }

    static drawBDSNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        context.fillStyle = colors[i]
        DrawingUtil.drawBallDivideSquare(context, scale)
    }
}