import { Vector } from "../types";

export class Brick{
    private brickImage:HTMLImageElement=new Image();
    
    constructor(
        private brickWidth:number,
        private brickheight:number,
        private position:Vector,
        private brickEnergy:number,
        image:string
    ){
        this.brickWidth=brickWidth;
        this.brickheight=brickheight;
        this.position=position;
        this.brickEnergy=brickEnergy;
        this.brickImage.src=image;
    }

    // getters
    get width():number{
        return this.brickWidth;
    }
   
    get height():number{
        return this.brickheight;
    }
   
    get pos():Vector{
        return this.position;
    }
   
    get image():HTMLImageElement{
        return this.brickImage;
    }

    get energy():number{
        return this.brickEnergy;
    }

    // setter
    set energy(energy:number){
        this.brickEnergy=energy;
    }
}