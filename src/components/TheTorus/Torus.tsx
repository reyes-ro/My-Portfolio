import React, { useEffect, useRef, useState } from 'react'
import './Torus.css'

const Torus = () => {

    const myCanvas=useRef(null)
    const [ctx, setctx]=useState<any>(null)

    let TorusPoints = [];
    let SNormal = [];

    //Initial Angles of rotation(90 deg)
    let a = Math.PI / 4;
    let b = Math.PI / 4;
    let translate_x, translate_y;
    let trans_x_direction = 1;
    let trans_y_direction = 1;
    let delta_translate_x = 10;
    let delta_translate_y = 10;

    // Contants

    const R2 = 150;
    const R1 = 75;
    const i = new Array();
    const j = new Array();
    const k = new Array();
    const Nj = new Array();
    const Ni = new Array();
    const Nk = new Array();
    const c1 = 24;
    const c2 = 60;
    const speed = 100;
    const init_delay = 1000;




    //TorusPoints Calculation dependent to current rotation angles
    //Independent to current translation coordinates
    function recalc() {
    TorusPoints = [];
    SNormal = [];

    //c1 and c2 are the quantity of characters circling through first and second circle of TorusPoints
    for (let x = 0; x < c2; x++) {
        for (let y = 0; y < c1; y++) {
        //solid of revolution

        let X = ((2 * Math.PI) / c2) * x;
        let Y = ((2 * Math.PI) / c1) * y;

        i[x * c2 + y] =
            Math.cos(b) * Math.cos(X) * (R2 + R1 * Math.cos(Y)) -
            Math.sin(b) *
            (R1 * Math.cos(a) * Math.sin(Y) -
                Math.sin(a) * Math.sin(X) * (R2 + R1 * Math.cos(Y)));
        j[x * c2 + y] =
            Math.sin(b) * Math.cos(X) * (R2 + R1 * Math.cos(Y)) +
            Math.cos(b) *
            (R1 * Math.cos(a) * Math.sin(Y) -
                Math.sin(a) * Math.sin(X) * (R2 + R1 * Math.cos(Y)));

        k[x * c2 + y] =
            R1 * Math.sin(Y) * Math.sin(a) +
            (R2 + R1 * Math.cos(Y)) * Math.sin(X) * Math.cos(a);
        
        TorusPoints.push([i[x * c2 + y], j[x * c2 + y], k[x * c2 + y]]);
        }
    }

    for (let x = 0; x < c2; x++) {
        let X = ((2 * Math.PI) / c2) * x;

        Ni[x] =
        R2 * Math.cos(X) * Math.cos(b) +
        R2 * Math.sin(X) * Math.sin(b) * Math.sin(a);
        Nj[x] =
        R2 * Math.sin(b) * Math.cos(X) -
        R2 * Math.sin(X) * Math.sin(a) * Math.cos(b);

        Nk[x] = R2 * Math.sin(X) * Math.cos(a);
        //Normal to some plane of reference
        SNormal.push([Ni[x], Nj[x], Nk[x]]);
    }
    }

    const render = () => {
        
        ctx.clearRect(0, 0, myCanvas.current.width, myCanvas.current.height);
        TorusPoints.forEach((coord, i) => {
            ctx.font = "20px Arial";
            ctx.fillStyle = "#A9A9A9";
            ctx.globalAlpha = 0.8;
            const l = luminance(coord[0], coord[1], coord[2], i);

            shadeMap(l, coord[0], coord[1]);
        });
        if (translate_x < 150 + 75 || translate_x > myCanvas.current.width - 150 - 75) {
            trans_x_direction *= -1;
        } else {
            trans_x_direction *= 1;
        }

        if (translate_y < 150 + 75 || translate_y > myCanvas.current.height - 150 - 75) {
            trans_y_direction *= -1;
        } else {
            trans_y_direction *= 1;
        }
        //Translation delta
        translate_x += trans_x_direction * delta_translate_x;
        translate_y += trans_y_direction * delta_translate_y;
    };
    function luminance(coordx, coordy, coordz, index) {
    //direction of light dot product with Surface normal
    //[0, 1, -1]
    // console.log(
    //     0 * coordx +
    //     1 * (SNormal[Math.floor(index / c1)][1] - coordy) +
    //     0 * (SNormal[Math.floor(index / c1)][2] - coordz)
    // );
    return (
        0 * (SNormal[Math.floor(index / c1)][0] - coordx) +
        1 * (SNormal[Math.floor(index / c1)][1] - coordy) +
        -1 * (SNormal[Math.floor(index / c1)][2] - coordz)
    );
    }

    const shadeMap = (l_value, coordx, coordy) => {
    if (l_value > 70) {
        ctx.fillText("@", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7) {
        ctx.fillText("$", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7 * 2) {
        ctx.fillText("#", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7 * 3) {
        ctx.fillText("*", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7 * 4) {
        ctx.fillText("!", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7 * 5) {
        ctx.fillText("=", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7 * 6) {
        ctx.fillText(";", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7 * 7) {
        ctx.fillText(":", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7 * 8) {
        ctx.fillText("~", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7 * 9) {
        ctx.fillText("-", coordx + translate_x, coordy + translate_y);
    } else if (l_value > 40 - 7 * 10) {
        ctx.fillText(",", coordx + translate_x, coordy + translate_y);
    } else {
        ctx.fillText(".", coordx + translate_x, coordy + translate_y);
    }
    };


    useEffect(()=>{
        if(myCanvas.current)
        {
            setctx(myCanvas.current.getContext("2d"))

        }

        if(ctx)
        {
            myCanvas.current.height = window.innerHeight;
            myCanvas.current.width = window.innerWidth;
            translate_x = myCanvas.current.width / 2;
            translate_y = myCanvas.current.height / 2;
            recalc();
            render();
            setTimeout(() => {
                setInterval(() => {
                recalc();
                render();

                //Rotation Delta
                a += 0.1;
                b += 0.1;
                }, speed);
            }, init_delay);
        }
    }, [ctx, myCanvas.current])

  return (
    <section className='torus_container'>
        <canvas id="myCanvas" ref={myCanvas}> </canvas>
        <svg className="bg-lines" width="1793" height="1269" viewBox="0 0 1793 1269" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-79e4b1cc="">
            <path d="M752.613 0.717285L787.634 201.189C794.351 239.643 797.729 278.606 797.729 317.642L797.729 1268.54M649.493 0.717285L704.366 138.145C736.239 217.969 752.613 303.135 752.613 389.088L752.614 1268.54M572.153 0.717285L630.175 111.432C680.966 208.35 707.498 316.138 707.498 425.558L707.498 1268.54M505.862 0.717285L564.392 97.2923C628.492 203.058 662.383 324.367 662.383 448.041L662.383 1268.54M452.46 0.717285L511.009 92.4655C580.401 201.205 617.268 327.512 617.268 456.507L617.268 1268.54M407.345 0.717285L465.894 92.4655C535.286 201.205 572.153 327.512 572.153 456.507L572.153 1268.54M362.23 0.717285L420.779 92.4655C490.17 201.205 527.038 327.512 527.038 456.507L527.038 1268.54M317.115 0.717285L375.664 92.4655C445.055 201.205 481.923 327.512 481.923 456.507L481.923 1268.54M272 0.717285L330.549 92.4655C399.94 201.205 436.808 327.512 436.808 456.507L436.808 1268.54M226.885 0.717285L285.433 92.4655C354.825 201.205 391.693 327.512 391.693 456.507L391.693 1268.54M181.77 0.717285L240.318 92.4655C309.71 201.205 346.578 327.512 346.578 456.507L346.578 1268.54M136.655 0.717285L195.203 92.4655C264.595 201.205 301.463 327.512 301.463 456.507L301.463 1268.54M91.5395 0.717285L150.088 92.4655C219.48 201.205 256.348 327.512 256.348 456.507L256.348 1268.54M46.4244 0.717285L104.973 92.4655C174.365 201.205 211.233 327.512 211.233 456.507L211.233 1268.54M1.30933 0.717285L59.8581 92.4655C129.25 201.205 166.117 327.512 166.117 456.507L166.117 1268.54M1040.8 0.717285L1005.78 201.189C999.06 239.643 995.683 278.606 995.683 317.642V1268.54M1143.92 0.717285L1089.04 138.145C1057.17 217.969 1040.8 303.135 1040.8 389.088V1268.54M1221.26 0.717285L1163.24 111.432C1112.45 208.35 1085.91 316.138 1085.91 425.558V1268.54M1287.55 0.717285L1229.02 97.2923C1164.92 203.058 1131.03 324.367 1131.03 448.041V1268.54M1340.95 0.717285L1282.4 92.4655C1213.01 201.205 1176.14 327.512 1176.14 456.507V1268.54M1386.07 0.717285L1327.52 92.4655C1258.13 201.205 1221.26 327.512 1221.26 456.507V1268.54M1431.18 0.717285L1372.63 92.4655C1303.24 201.205 1266.37 327.512 1266.37 456.507V1268.54M1476.3 0.717285L1417.75 92.4655C1348.36 201.205 1311.49 327.512 1311.49 456.507V1268.54M1521.41 0.717285L1462.86 92.4655C1393.47 201.205 1356.6 327.512 1356.6 456.507V1268.54M1566.53 0.717285L1507.98 92.4655C1438.59 201.205 1401.72 327.512 1401.72 456.507V1268.54M1611.64 0.717285L1553.09 92.4655C1483.7 201.205 1446.83 327.512 1446.83 456.507V1268.54M1656.76 0.717285L1598.21 92.4655C1528.82 201.205 1491.95 327.512 1491.95 456.507V1268.54M1701.87 0.717285L1643.32 92.4655C1573.93 201.205 1537.06 327.512 1537.06 456.507V1268.54M1746.99 0.717285L1688.44 92.4655C1619.05 201.205 1582.18 327.512 1582.18 456.507V1268.54M1792.1 0.717285L1733.55 92.4655C1664.16 201.205 1627.29 327.512 1627.29 456.507V1268.54M968.061 0.717335L950.567 258.978V1268.54M893.943 0.717285L893.943 1268.54M824.89 0.717285L842.843 258.978L842.843 1268.54" stroke="url(#linear-sponsor-lines)" data-v-79e4b1cc="">
                
            </path>
                <defs data-v-79e4b1cc="">
                    <linearGradient id="linear-sponsor-lines" x1="0" y1="0" x2="0" y2="1200" gradientUnits="userSpaceOnUse" data-v-79e4b1cc="">
                        <stop offset="0.1" stop-color="#1b1c20" stop-opacity="0" data-v-79e4b1cc="">
                        </stop>
                        <stop offset="0.35" stop-color="#1b1c20" data-v-79e4b1cc="">
                        </stop>
                        <stop offset="0.55" stop-color="#1b1c20" stop-opacity="0.2" data-v-79e4b1cc="">
                        </stop>
                        <stop offset="0.6" stop-color="#1b1c20" stop-opacity="0.2" data-v-79e4b1cc="">
                        </stop>
                        <stop offset="0.7" stop-color="#1b1c20" data-v-79e4b1cc="">
                        </stop>
                        <stop offset="1" stop-color="#1b1c20" stop-opacity="0" data-v-79e4b1cc="">
                        </stop>
                    </linearGradient>
                </defs>
        </svg>

          <div className="quote-box">
            <div className="line">I code</div>
            <div className="tag">&lt;/because&gt;</div>
            <div className="line">I <span className="heart">love</span> it</div>
        </div>

        <a href="https://github.com/reyes-ro/Torus" target="_blank" className="btn btn--outline btn--rounded">The Torus</a>
        <p>The Torus is an application of math concepts such as analytical geometry, matrix transformation, and vectors (light intensity effect). Check this <a target="_blank" className="documentation" href="https://www.a1k0n.net/2011/07/20/donut-math.html">documentation</a> for more info.</p>
    </section>
  )
}

export default Torus