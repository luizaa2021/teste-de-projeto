class Ground{
     constructor(x,y,w,h){
         
        var options={
            isStatic:true
        }
        
	    
// o this.x declara que o x precisa mudar com cada novo objeto.
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        

        this.solo=Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.solo);

    }
    //metodo para mostrar o  objeto da classe na tela
    display(){
        push();
        rectMode(CENTER);
        fill(255,255,0);
        rect(this.solo.position.x,this.solo.position.y, this.w, this.h);
         pop();
    }




}