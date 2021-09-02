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