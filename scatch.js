let x_value=[];
let y_value=[];

let w,b;
const learning_rate=0.5;

const optmizer=tf.train.sgd(learning_rate);
function setup(){
    
    createCanvas(400,400);
    w=tf.variable(tf.scalar(random(1)));
    b=tf.variable(tf.scalar(random(1)));
}


function loss(pred,labels){
    return pred.sub(labels).square().mean();
}

function predict(x){
    const xs=tf.tensor1d(x);
    //y=wx+b
    const ys=xs.mul(w).add(b);
    return ys;
}



function draw(){

    tf.tidy(()=>{
        if(y_value>0){
            const ys=tf.tensor1d(y_value);
            optmizer.minimize(()=>loss(predict(x_value),y_value));
        }
    })


    if(mouseIsPressed){
        x=map(mouseX,0,width,0,1);
        y=map(mouseY,0,height,1,0);
        x_value.push(x);
        y_value.push(y);
    }
    background(0);
    stroke(255);
    strokeWeight(8);
    for (let i = 0; i < x_value.length; i++) {
        let px = map(x_value[i], 0, 1, 0, width);
        let py = map(y_value[i], 0, 1, height, 0);
        point(px, py);
      }

      const lineX = [0, 1];

      const ys = tf.tidy(() => predict(lineX));
      let lineY = ys.dataSync();
      ys.dispose();
    
      let x1 = map(lineX[0], 0, 1, 0, width);
      let x2 = map(lineX[1], 0, 1, 0, width);
    
      let y1 = map(lineY[0], 0, 1, height, 0);
      let y2 = map(lineY[1], 0, 1, height, 0);
    
      strokeWeight(2);
      line(x1, y1, x2, y2);
    
    
      console.log(tf.memory().numTensors);

    
}