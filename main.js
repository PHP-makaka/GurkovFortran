let btn = document.getElementById('run');
let arrMain = [//*Math.pow(10, 5)
    [1.0 * Math.pow(10, 5), 99.61],
    [1.1 * Math.pow(10, 5), 102.29],
    [1.2 * Math.pow(10, 5), 104.78],
    [1.3 * Math.pow(10, 5), 107.11],
    [1.4 * Math.pow(10, 5), 109.29],
    [1.5 * Math.pow(10, 5), 111.35],
    [1.6 * Math.pow(10, 5), 113.30],
    [1.7 * Math.pow(10, 5), 115.15],
    [1.8 * Math.pow(10, 5), 116.91],
    [1.9 * Math.pow(10, 5), 118.60],

    [2 * Math.pow(10, 5), 120.21],
    [2.1 * Math.pow(10, 5), 121.76],
    [2.2 * Math.pow(10, 5), 123.25],
    [2.3 * Math.pow(10, 5), 124.69],
    [2.4 * Math.pow(10, 5), 126.07],
    [2.5 * Math.pow(10, 5), 127.41],
    [2.6 * Math.pow(10, 5), 128.71],
    [2.7 * Math.pow(10, 5), 129.97],
    [2.8 * Math.pow(10, 5), 131.19],
    [2.9 * Math.pow(10, 5), 132.37],

    [3 * Math.pow(10, 5), 133.53],
    [3.1 * Math.pow(10, 5), 134.65],
    [3.2 * Math.pow(10, 5), 135.74],
    [3.3 * Math.pow(10, 5), 136.81],
    [3.4 * Math.pow(10, 5), 137.85],
    [3.5 * Math.pow(10, 5), 138.86],
    [3.6 * Math.pow(10, 5), 139.85],
    [3.7 * Math.pow(10, 5), 140.82],
    [3.8 * Math.pow(10, 5), 141.77],
    [3.9 * Math.pow(10, 5), 142.70],

    [4 * Math.pow(10, 5), 143.61],
    [4.1 * Math.pow(10, 5), 144.50],
    [4.2 * Math.pow(10, 5), 145.38],
    [4.3 * Math.pow(10, 5), 146.24],
    [4.4 * Math.pow(10, 5), 147.08],
    [4.5 * Math.pow(10, 5), 147.91],
    [4.6 * Math.pow(10, 5), 148.72],
    [4.7 * Math.pow(10, 5), 149.52],
    [4.8 * Math.pow(10, 5), 150.30],
    [4.9 * Math.pow(10, 5), 151.08],

    [5 * Math.pow(10, 5), 151.84],
    [5.1 * Math.pow(10, 5), 152.58],
    [5.2 * Math.pow(10, 5), 153.32],
    [5.3 * Math.pow(10, 5), 154.04],
    [5.4 * Math.pow(10, 5), 154.76],
    [5.5 * Math.pow(10, 5), 155.46],
    [5.6 * Math.pow(10, 5), 156.15],
    [5.8 * Math.pow(10, 5), 157.51],

    [6 * Math.pow(10, 5), 158.83],
    [6.2 * Math.pow(10, 5), 160.12],
    [6.4 * Math.pow(10, 5), 161.37],
    [6.5 * Math.pow(10, 5), 161.99],
    [6.6 * Math.pow(10, 5), 162.59],
    [6.7 * Math.pow(10, 5), 163.19],
    [6.8 * Math.pow(10, 5), 163.79],
    [6.9 * Math.pow(10, 5), 164.37],

    [7 * Math.pow(10, 5), 164.95],
    [7.1 * Math.pow(10, 5), 165.53],
    [7.2 * Math.pow(10, 5), 166.09],
    [7.3 * Math.pow(10, 5), 166.65],
    [7.4 * Math.pow(10, 5), 167.21],
    [7.5 * Math.pow(10, 5), 167.76],
    [7.6 * Math.pow(10, 5), 168.30],
    [7.7 * Math.pow(10, 5), 168.83],
    [7.8 * Math.pow(10, 5), 169.37],
    [7.9 * Math.pow(10, 5), 169.89],

    [8 * Math.pow(10, 5), 170.41],
    [8.1 * Math.pow(10, 5), 170.93],
    [8.2 * Math.pow(10, 5), 171.44],
    [8.3 * Math.pow(10, 5), 171.95],
    [8.4 * Math.pow(10, 5), 172.45],
    [8.5 * Math.pow(10, 5), 172.94],
    [8.6 * Math.pow(10, 5), 173.43],
    [8.7 * Math.pow(10, 5), 173.92],
    [8.8 * Math.pow(10, 5), 174.41],
    [8.9 * Math.pow(10, 5), 174.88],

    [9 * Math.pow(10, 5), 175.36],
    [9.1 * Math.pow(10, 5), 175.83],
    [9.2 * Math.pow(10, 5), 176.29],
    [9.3 * Math.pow(10, 5), 176.76],
    [9.4 * Math.pow(10, 5), 177.21],
    [9.5 * Math.pow(10, 5), 177.67],
    [9.6 * Math.pow(10, 5), 178.12],
    [9.7 * Math.pow(10, 5), 178.57],
    [9.8 * Math.pow(10, 5), 179.01],
    [9.9 * Math.pow(10, 5), 179.45],

    [1 * Math.pow(10, 6), 179.89],
    [1.05 * Math.pow(10, 6), 182.02],
    [1.1 * Math.pow(10, 6), 184.07],
    [1.15 * Math.pow(10, 6), 186.05],
    [1.2 * Math.pow(10, 6), 187.96],
    [1.25 * Math.pow(10, 6), 189.82],
    [1.3 * Math.pow(10, 6), 191.61],
    [1.35 * Math.pow(10, 6), 193.35],
    [1.4 * Math.pow(10, 6), 195.05],
    [1.45 * Math.pow(10, 6), 196.69],
    [1.5 * Math.pow(10, 6), 198.3],
    [1.55 * Math.pow(10, 6), 199.86],
    [1.6 * Math.pow(10, 6), 201.38],
    [1.65 * Math.pow(10, 6), 202.86],
    [1.7 * Math.pow(10, 6), 204.31],
    [1.75 * Math.pow(10, 6), 205.73],
    [1.8 * Math.pow(10, 6), 207.12],
    [1.85 * Math.pow(10, 6), 208.48],
    [1.9 * Math.pow(10, 6), 209.81],
    [1.95 * Math.pow(10, 6), 211.11],
    [2 * Math.pow(10, 6), 212.38],
    [2.05 * Math.pow(10, 6), 213.64],
    [2.1 * Math.pow(10, 6), 214.87],
    [2.15 * Math.pow(10, 6), 216.07],
    [2.2 * Math.pow(10, 6), 217.26],
    [2.25 * Math.pow(10, 6), 218.42],
    [2.3 * Math.pow(10, 6), 219.56],
    [2.35 * Math.pow(10, 6), 220.69],
    [2.4 * Math.pow(10, 6), 221.8],
    [2.45 * Math.pow(10, 6), 222.88],
    [2.5 * Math.pow(10, 6), 223.96],
    [2.55 * Math.pow(10, 6), 225.01],
    [2.6 * Math.pow(10, 6), 226.05],
    [2.65 * Math.pow(10, 6), 227.08],
    [2.7 * Math.pow(10, 6), 228.09],
    [2.75 * Math.pow(10, 6), 229.08],
    [2.8 * Math.pow(10, 6), 230.06],
    [2.85 * Math.pow(10, 6), 231.03],
    [2.9 * Math.pow(10, 6), 231.99],
    [2.95 * Math.pow(10, 6), 232.93],
    [3 * Math.pow(10, 6), 233.86],
    [3.1 * Math.pow(10, 6), 235.68],
    [3.2 * Math.pow(10, 6), 237.46],
    [3.3 * Math.pow(10, 6), 239.2],
    [3.4 * Math.pow(10, 6), 240.9],
    [3.5 * Math.pow(10, 6), 242.56],
    [3.6 * Math.pow(10, 6), 244.19],
    [3.7 * Math.pow(10, 6), 245.78],
    [3.8 * Math.pow(10, 6), 247.33],
    [3.9 * Math.pow(10, 6), 248.86],
    [4 * Math.pow(10, 6), 250.36],
    [4.1 * Math.pow(10, 6), 251.83],
    [4.2 * Math.pow(10, 6), 253.27],
    [4.3 * Math.pow(10, 6), 254.68],
    [4.4 * Math.pow(10, 6), 256.07],
    [4.5 * Math.pow(10, 6), 257.44],
    [4.6 * Math.pow(10, 6), 258.78],
    [4.7 * Math.pow(10, 6), 260.1],
    [4.8 * Math.pow(10, 6), 261.4],
    [4.9 * Math.pow(10, 6), 262.68],
    [5 * Math.pow(10, 6), 263.94],
    [5.1 * Math.pow(10, 6), 265.18],
    [5.2 * Math.pow(10, 6), 266.41],
    [5.3 * Math.pow(10, 6), 267.61],
    [5.4 * Math.pow(10, 6), 268.8],
    [5.5 * Math.pow(10, 6), 269.97],
    [5.6 * Math.pow(10, 6), 271.12],
    [5.7 * Math.pow(10, 6), 272.26],
    [5.8 * Math.pow(10, 6), 273.38],
    [5.9 * Math.pow(10, 6), 274.49],
    [6 * Math.pow(10, 6), 275.59],
    [6.1 * Math.pow(10, 6), 276.67],
    [6.2 * Math.pow(10, 6), 277.73],
    [6.3 * Math.pow(10, 6), 278.79],
    [6.4 * Math.pow(10, 6), 279.83],
    [6.5 * Math.pow(10, 6), 280.86],
    [6.6 * Math.pow(10, 6), 281.88],
    [6.7 * Math.pow(10, 6), 282.88],
    [6.8 * Math.pow(10, 6), 283.88],
    [6.9 * Math.pow(10, 6), 284.86],
    [7 * Math.pow(10, 6), 285.83],
    [7.1 * Math.pow(10, 6), 286.79],
    [7.2 * Math.pow(10, 6), 287.74],
    [7.3 * Math.pow(10, 6), 288.68],
    [7.4 * Math.pow(10, 6), 289.62],
    [7.5 * Math.pow(10, 6), 290.54],
    [7.6 * Math.pow(10, 6), 291.45],
    [7.7 * Math.pow(10, 6), 292.35],
    [7.8 * Math.pow(10, 6), 293.25],
    [7.9 * Math.pow(10, 6), 294.13],
    [8 * Math.pow(10, 6), 295.01],
    [8.1 * Math.pow(10, 6), 295.88],
    [8.2 * Math.pow(10, 6), 296.74],
    [8.3 * Math.pow(10, 6), 297.59],
    [8.4 * Math.pow(10, 6), 298.44],
    [8.5 * Math.pow(10, 6), 299.27],
    [8.6 * Math.pow(10, 6), 300.1],
    [8.7 * Math.pow(10, 6), 300.92],
    [8.8 * Math.pow(10, 6), 301.74],
    [8.9 * Math.pow(10, 6), 302.55],
    [9 * Math.pow(10, 6), 303.35],
    [9.1 * Math.pow(10, 6), 304.14],
    [9.2 * Math.pow(10, 6), 304.93],
    [9.3 * Math.pow(10, 6), 305.71],
    [9.4 * Math.pow(10, 6), 306.48],
    [9.5 * Math.pow(10, 6), 307.25],
    [9.6 * Math.pow(10, 6), 308.01],
    [9.7 * Math.pow(10, 6), 308.77],
    [9.8 * Math.pow(10, 6), 309.52],
    [9.9 * Math.pow(10, 6), 310.26],

    [1 * Math.pow(10, 7), 311],
    [1.02 * Math.pow(10, 7), 312.46],
    [1.04 * Math.pow(10, 7), 313.9],
    [1.05 * Math.pow(10, 7), 314.61],
    [1.06 * Math.pow(10, 7), 315.31],
    [1.08 * Math.pow(10, 7), 316.71],
    [1.1 * Math.pow(10, 7), 318.08],
    [1.12 * Math.pow(10, 7), 319.44],
    [1.14 * Math.pow(10, 7), 320.77],
    [1.15 * Math.pow(10, 7), 321.44],
    [1.16 * Math.pow(10, 7), 322.09],
    [1.18 * Math.pow(10, 7), 323.39],
    [1.2 * Math.pow(10, 7), 324.68],
    [1.22 * Math.pow(10, 7), 325.95],
    [1.24 * Math.pow(10, 7), 327.2],
    [1.25 * Math.pow(10, 7), 327.82],
    [1.26 * Math.pow(10, 7), 328.43],
    [1.28 * Math.pow(10, 7), 329.65],
    [1.3 * Math.pow(10, 7), 330.86],
    [1.32 * Math.pow(10, 7), 332.05],
    [1.34 * Math.pow(10, 7), 333.22],
    [1.35 * Math.pow(10, 7), 333.81],
    [1.36 * Math.pow(10, 7), 334.39],
    [1.38 * Math.pow(10, 7), 335.53],
    [1.4 * Math.pow(10, 7), 336.67],
    [1.42 * Math.pow(10, 7), 337.79],
    [1.44 * Math.pow(10, 7), 338.9],
    [1.45 * Math.pow(10, 7), 339.45],
    [1.46 * Math.pow(10, 7), 340],
    [1.48 * Math.pow(10, 7), 341.08],
    [1.5 * Math.pow(10, 7), 342.16],
    [1.52 * Math.pow(10, 7), 343.22],
    [1.54 * Math.pow(10, 7), 344.27],
    [1.55 * Math.pow(10, 7), 344.79],
    [1.56 * Math.pow(10, 7), 345.31],
    [1.57 * Math.pow(10, 7), 345.83],
    [1.58 * Math.pow(10, 7), 346.34],
    [1.59 * Math.pow(10, 7), 346.85],
    [1.6 * Math.pow(10, 7), 347.36],
    [1.61 * Math.pow(10, 7), 347.86],
    [1.62 * Math.pow(10, 7), 348.36],
    [1.63 * Math.pow(10, 7), 348.86],
    [1.64 * Math.pow(10, 7), 349.36],
    [1.65 * Math.pow(10, 7), 349.86],
    [1.66 * Math.pow(10, 7), 350.35],
    [1.67 * Math.pow(10, 7), 350.84],
    [1.68 * Math.pow(10, 7), 351.33],
    [1.69 * Math.pow(10, 7), 351.81],
    [1.7 * Math.pow(10, 7), 352.29],
    [1.71 * Math.pow(10, 7), 352.77],
    [1.72 * Math.pow(10, 7), 353.25],
    [1.73 * Math.pow(10, 7), 353.73],
    [1.74 * Math.pow(10, 7), 354.2],
    [1.75 * Math.pow(10, 7), 354.67],
    [1.76 * Math.pow(10, 7), 355.14],
    [1.77 * Math.pow(10, 7), 355.61],
    [1.78 * Math.pow(10, 7), 356.07],
    [1.79 * Math.pow(10, 7), 356.53],
    [1.8 * Math.pow(10, 7), 356.99],
    [1.81 * Math.pow(10, 7), 357.45],
    [1.82 * Math.pow(10, 7), 357.9],
    [1.83 * Math.pow(10, 7), 358.36],
    [1.84 * Math.pow(10, 7), 358.81],
    [1.85 * Math.pow(10, 7), 359.26],
    [1.86 * Math.pow(10, 7), 359.7],
    [1.87 * Math.pow(10, 7), 360.15],
    [1.88 * Math.pow(10, 7), 360.59],
    [1.89 * Math.pow(10, 7), 361.03],
    [1.9 * Math.pow(10, 7), 361.47],
    [1.91 * Math.pow(10, 7), 361.91],
    [1.92 * Math.pow(10, 7), 362.34],
    [1.93 * Math.pow(10, 7), 362.77],
    [1.94 * Math.pow(10, 7), 363.2],
    [1.95 * Math.pow(10, 7), 363.63],
    [1.96 * Math.pow(10, 7), 364.06],
    [1.97 * Math.pow(10, 7), 364.48],
    [1.98 * Math.pow(10, 7), 364.91],
    [1.99 * Math.pow(10, 7), 365.33],
    [2 * Math.pow(10, 7), 365.75]
]
let  arrP_Rol_RoV=[
    [ 0.0010431, 1.694 ],   [ 0.0010453, 1.5496 ],  [ 0.0010473, 1.4284 ],
    [ 0.0010492, 1.3254 ],  [ 0.001051, 1.2366 ],   [ 0.0010527, 1.1594 ],
    [ 0.0010544, 1.0914 ],  [ 0.001056, 1.0312 ],   [ 0.0010576, 0.97753 ],
    [ 0.0010591, 0.9293 ],  [ 0.0010605, 0.88574 ], [ 0.0010619, 0.84619 ],
    [ 0.0010633, 0.81012 ], [ 0.0010646, 0.77709 ], [ 0.0010659, 0.74672 ],
    [ 0.0010672, 0.7187 ],  [ 0.0010685, 0.69276 ], [ 0.0010697, 0.66869 ],
    [ 0.0010709, 0.64627 ], [ 0.001072, 0.62536 ],  [ 0.0010732, 0.60579 ],
    [ 0.0010743, 0.58744 ], [ 0.0010754, 0.5702 ],  [ 0.0010765, 0.55397 ],
    [ 0.0010775, 0.53866 ], [ 0.0010786, 0.5242 ],  [ 0.0010796, 0.51051 ],
    [ 0.0010806, 0.49754 ], [ 0.0010816, 0.48523 ], [ 0.0010826, 0.47353 ],
    [ 0.0010836, 0.46239 ], [ 0.0010845, 0.45178 ], [ 0.0010855, 0.44166 ],
    [ 0.0010864, 0.43199 ], [ 0.0010873, 0.42275 ], [ 0.0010882, 0.4139 ],
    [ 0.0010891, 0.40543 ], [ 0.00109, 0.3973 ],    [ 0.0010908, 0.3895 ],
    [ 0.0010917, 0.38201 ], [ 0.0010926, 0.3748 ],  [ 0.0010934, 0.36787 ],
    [ 0.0010942, 0.3612 ],  [ 0.0010951, 0.35477 ], [ 0.0010959, 0.34857 ],
    [ 0.0010967, 0.34259 ], [ 0.0010975, 0.33682 ], [ 0.0010991, 0.32584 ],
    [ 0.0011006, 0.31558 ], [ 0.0011021, 0.30595 ], [ 0.0011036, 0.2969 ],
    [ 0.0011044, 0.29258 ], [ 0.0011051, 0.28839 ], [ 0.0011058, 0.28431 ],
    [ 0.0011065, 0.28035 ], [ 0.0011073, 0.27651 ], [ 0.001108, 0.276 ],
    [ 0.0011087, 0.26912 ], [ 0.0011094, 0.26558 ], [ 0.0011101, 0.26213 ],
    [ 0.0011108, 0.25877 ], [ 0.0011114, 0.2555 ],  [ 0.0011121, 0.25231 ],
    [ 0.0011128, 0.2492 ],  [ 0.0011135, 0.24617 ], [ 0.0011141, 0.24321 ],
    [ 0.0011148, 0.24033 ], [ 0.0011154, 0.23751 ], [ 0.0011161, 0.23476 ],
    [ 0.0011167, 0.23207 ], [ 0.0011174, 0.22944 ], [ 0.001118, 0.22688 ],
    [ 0.0011187, 0.22437 ], [ 0.0011193, 0.22192 ], [ 0.0011199, 0.21952 ],
    [ 0.0011206, 0.217 ],   [ 0.0011212, 0.21487 ], [ 0.0011218, 0.21263 ],
    [ 0.0011224, 0.21042 ], [ 0.001123, 0.20827 ],  [ 0.0011236, 0.20616 ],
    [ 0.0011242, 0.20409 ], [ 0.0011249, 0.206 ],   [ 0.0011255, 0.20008 ],
    [ 0.001126, 0.19813 ],  [ 0.0011266, 0.19622 ], [ 0.0011272, 0.19435 ],
    [ 0.0011301, 0.1855 ],  [ 0.001133, 0.17744 ],  [ 0.0011358, 0.17005 ],
    [ 0.0011385, 0.16325 ], [ 0.0011412, 0.15698 ], [ 0.0011438, 0.15117 ],
    [ 0.0011464, 0.14579 ], [ 0.0011489, 0.14077 ],[ 0.0011514, 0.13608 ],
    [ 0.0011539, 0.1317 ],  [ 0.0011563, 0.12759 ],
    [ 0.0011587, 0.12373 ], [ 0.001161, 0.1201 ],   [ 0.0011634, 0.11667 ],
    [ 0.0011657, 0.11343 ], [ 0.0011679, 0.11036 ], [ 0.0011702, 0.10746 ],
    [ 0.0011724, 0.1047 ],  [ 0.0011746, 0.10208 ], [ 0.0011768, 0.09958 ],
    [ 0.0011789, 0.0972 ],  [ 0.001181, 0.09493 ],  [ 0.0011831, 0.09277 ],
    [ 0.0011852, 0.0907 ],  [ 0.0011873, 0.08871 ], [ 0.0011894, 0.08681 ],
    [ 0.0011914, 0.08499 ], [ 0.0011934, 0.08324 ], [ 0.0011954, 0.08156 ],
    [ 0.0011974, 0.07995 ], [ 0.0011994, 0.07839 ], [ 0.0012014, 0.0769 ],
    [ 0.0012033, 0.07546 ], [ 0.0012053, 0.07407 ], [ 0.0012072, 0.07272 ],
    [ 0.0012091, 0.07143 ], [ 0.001211, 0.07018 ],  [ 0.00129, 0.06897 ],
    [ 0.0012148, 0.0678 ],  [ 0.0012167, 0.06666 ], [ 0.0012204, 0.0645 ],
    [ 0.0012241, 0.06247 ], [ 0.0012278, 0.06056 ], [ 0.0012314, 0.05876 ],
    [ 0.001235, 0.05706 ],  [ 0.0012385, 0.05545 ], [ 0.0012421, 0.05392 ],
    [ 0.0012456, 0.05247 ], [ 0.0012491, 0.05109 ], [ 0.0012526, 0.04978 ],
    [ 0.001256, 0.04853 ],  [ 0.0012595, 0.04733 ], [ 0.0012629, 0.04619 ],
    [ 0.0012663, 0.0451 ],  [ 0.0012697, 0.04406 ], [ 0.001273, 0.04306 ],
    [ 0.0012764, 0.0421 ],  [ 0.0012797, 0.04118 ], [ 0.0012831, 0.0403 ],
    [ 0.0012864, 0.03945 ], [ 0.0012897, 0.03863 ], [ 0.001293, 0.03784 ],
    [ 0.0012963, 0.03708 ], [ 0.0012996, 0.03635 ], [ 0.0013029, 0.03564 ],
    [ 0.0013062, 0.03496 ], [ 0.0013095, 0.0343 ],  [ 0.0013127, 0.03366 ],
    [ 0.001316, 0.03305 ],  [ 0.0013193, 0.03245 ], [ 0.0013225, 0.03187 ],
    [ 0.0013258, 0.03131 ], [ 0.0013291, 0.03077 ], [ 0.0013323, 0.03024 ],
    [ 0.0013356, 0.02973 ], [ 0.0013388, 0.02923 ], [ 0.0013421, 0.02875 ],
    [ 0.0013453, 0.02828 ], [ 0.0013486, 0.02782 ], [ 0.0013519, 0.02738 ],
    [ 0.0013551, 0.02695 ], [ 0.0013584, 0.02653 ], [ 0.0013617, 0.02612 ],
    [ 0.0013649, 0.02572 ], [ 0.0013682, 0.02533 ], [ 0.0013715, 0.02495 ],
    [ 0.0013748, 0.02458 ], [ 0.0013781, 0.02422 ], [ 0.0013814, 0.02387 ],
    [ 0.0013847, 0.02353 ], [ 0.001388, 0.02319 ],  [ 0.0013913, 0.02286 ],
    [ 0.0013946, 0.02254 ], [ 0.0013979, 0.02223 ], [ 0.0014013, 0.02193 ],
    [ 0.0014046, 0.02163 ], [ 0.001408, 0.02133 ],  [ 0.0014114, 0.02105 ],
    [ 0.0014147, 0.02077 ],  [ 0.0014181, 0.02049 ],  [ 0.0014215, 0.02022 ],
    [ 0.0014249, 0.01996 ],  [ 0.0014283, 0.0197 ],   [ 0.0014318, 0.01945 ],
    [ 0.0014352, 0.0192 ],   [ 0.0014387, 0.01896 ],  [ 0.0014421, 0.01872 ],
    [ 0.0014456, 0.01849 ],  [ 0.0014491, 0.01826 ],  [ 0.0014526, 0.01803 ],
    [ 0.0014597, 0.0176 ],   [ 0.0014668, 0.01717 ],  [ 0.0014704, 0.01697 ],
    [ 0.001474, 0.01677 ],   [ 0.0014812, 0.01637 ],  [ 0.0014885, 0.01599 ],
    [ 0.0014959, 0.01563 ],  [ 0.0015034, 0.01527 ],  [ 0.0015072, 0.0151 ],
    [ 0.001511, 0.01493 ],   [ 0.0015186, 0.01459 ],  [ 0.0015263, 0.01427 ],
    [ 0.0015342, 0.01395 ],  [ 0.0015421, 0.01365 ],  [ 0.0015461, 0.0135 ],
    [ 0.0015501, 0.01335 ],  [ 0.0015582, 0.01307 ],  [ 0.0015665, 0.01279 ],
    [ 0.0015749, 0.01251 ],  [ 0.0015834, 0.01225 ],  [ 0.0015877, 0.012 ],
    [ 0.001592, 0.01199 ],   [ 0.0016008, 0.01174 ],  [ 0.0016097, 0.01149 ],
    [ 0.0016188, 0.01125 ],  [ 0.0016281, 0.01101 ],  [ 0.0016328, 0.0109 ],
    [ 0.0016375, 0.01078 ],  [ 0.0016471, 0.01056 ],  [ 0.001657, 0.01034 ],
    [ 0.001667, 0.010125 ],  [ 0.0016773, 0.009915 ], [ 0.0016825, 0.009811 ],
    [ 0.0016878, 0.009709 ], [ 0.0016931, 0.009607 ], [ 0.0016985, 0.009506 ],
    [ 0.001704, 0.009407 ],  [ 0.0017095, 0.009308 ], [ 0.0017151, 0.00921 ],
    [ 0.0017208, 0.009114 ], [ 0.0017266, 0.009018 ], [ 0.0017324, 0.008923 ],
    [ 0.0017383, 0.008828 ], [ 0.0017444, 0.008736 ], [ 0.0017505, 0.008643 ],
    [ 0.0017567, 0.008551 ], [ 0.001763, 0.00846 ],   [ 0.0017693, 0.00837 ],
    [ 0.0017758, 0.00828 ],  [ 0.0017824, 0.00819 ],  [ 0.0017891, 0.008102 ],
    [ 0.0017959, 0.008014 ], [ 0.0018029, 0.007927 ], [ 0.0018099, 0.00784 ],
    [ 0.0018171, 0.007754 ], [ 0.0018244, 0.007668 ], [ 0.0018319, 0.007583 ],
    [ 0.0018395, 0.007499 ], [ 0.0018473, 0.007414 ], [ 0.0018552, 0.007331 ],
    [ 0.0018633, 0.007247 ], [ 0.0018715, 0.007164 ], [ 0.00188, 0.007082 ],
    [ 0.0018887, 0.006999 ], [ 0.0018975, 0.006917 ], [ 0.0019066, 0.006836 ],
    [ 0.0019159, 0.006754 ], [ 0.0019255, 0.006673 ], [ 0.0019353, 0.006591 ],
    [ 0.0019454, 0.00651 ],  [ 0.0019557, 0.006429 ], [ 0.0019664, 0.006348 ],
    [ 0.0019775, 0.006267 ], [ 0.0019889, 0.006186 ], [ 0.0020006, 0.006104 ],
    [ 0.002013, 0.006023 ],  [ 0.002026, 0.005941 ],  [ 0.002039, 0.005859 ]

]
let arrSigma = [
    [90, 60.82], [100, 58.91], [110, 56.96],
    [120, 54.97], [130, 52.93], [140, 50.86],
    [150, 48.74], [160, 46.59], [170, 44.41],
    [180, 42.19], [190, 39.95], [200, 37.67],
    [210, 35.38], [220, 33.07], [230, 30.74],
    [240, 28.39], [250, 26.04], [260, 23.69],
    [270, 21.34], [280, 18.99], [290, 16.66],
    [300, 14.36], [310, 12.09], [320, 9.86],
    [330, 7.7], [340, 5.63], [350, 3.67],
    [355, 2.74], [360, 1.88], [365, 1.08],
    [370, 0.388], [371, 0.269], [372, 0.16],
    [373, 0.065]
];


//////////////  ЗАДАВАЕМЫЕ ЗНАЧЕНИЯ ///////////////

let dH;//= 0.51058 ; /////(1.058*10^-2)/// стр 12 презентация 5 ///0.019 ++++
let g = 9.8;
let diffRo //; // страница 24 (1/v')->RoL ; (1/v'')-> RoV
let RoV ;//= 107;
let RoL;// = 107;
let G //= 3500; //////  ЗАДАЁМ
let xType;
let AVAMminConts; //= "для пучков стержней"; //для пучков стержней//для труб //// ЗАДАЁМ
let AFVcritConst; //= "для восходящего течения"//для нисходящего течения //для восходящего течения\\\ ЗАДАЁМ
let dTvel, sTvel
///////////////////////////////////////////////////

////////////// РАСЧИТЫВАЕМЫЕ ЗНАЧЕНИЯ /////////////

let AVAM = 0.9999;
let AVBS, AVISIE, AVEAM, AVSE;

///////////////////////////////////////////////////

///////////// ВСПОМОГАТЕЛЬНЫЕ ПЕРЕМЕННЫЕ //////////

let AVAMmin, AFVcrit, AHVcrit;
let AVBSmax = 0.9;
let VZV = 5;/////!
let indexPP;
let otvet2='';
let i =1;
///////////////////////////////////////////////////

///////////// ГЛАВНАЯ ПРОГРАММА  //////////
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let otvert = '';
    let p1, p2, t1, t2, tS;

    let pow = document.querySelector('input[name="drone"]:checked').value;

    let Press = document.getElementById('press').value * Math.pow(10, pow)

///////////// ПОЛУЧАЕМ ПЕРЕМЕННЫЕ ЗАДАЮЩИЕСЯ ЧЕРЕЗ ИНТЕРФЕЙС //////////
    AVAMminConts = document.querySelector('input[name="drone1"]:checked') ? document.querySelector('input[name="drone1"]:checked').value : '';
    AFVcritConst = document.querySelector('input[name="drone4"]:checked') ? document.querySelector('input[name="drone4"]:checked').value : '';
    xType = document.querySelector('input[name="drone3"]:checked') ? document.querySelector('input[name="drone3"]:checked').value : '';
    dTvel = document.getElementById('dTvel') ? document.getElementById('dTvel').value : 0.1;
    sTvel = document.getElementById('sTvel') ? document.getElementById('sTvel').value : 0.1;
    dH = document.getElementById('dH') ? document.getElementById('dH').value : 1;
    G = document.getElementById('G') ? document.getElementById('G').value : 1000;


    if (AVAMminConts == 'для пучков стержней') {
        if (xType === 'Треугольная') {
            xTvel = sTvel / dTvel
            dH = Math.abs(dTvel * ( ( (2 * Math.sqrt(3) * Math.pow(xTvel, 2))/3.14) - 1))
            console.log("11")
        } else if (xType === 'Квадратная') {
            dH =Math.abs(dTvel*(((4*Math.pow(xTvel, 2) )/3.14) -1))
            console.log("22")
        }
    }


    otvert += `AVAMminConts  ->>  ${AVAMminConts}
     AFVcritConst  ->>  ${AFVcritConst}
     xType (тип решётки)  ->>  ${xType}
     dTvel  ->>  ${dTvel}
     sTvel  ->>  ${sTvel}
     dH  ->>  ${dH}
     G  ->>  ${G}

    `
    console.log('AVAMminConts->>', AVAMminConts)
    console.log('AFVcritConst->>', AFVcritConst)
    console.log('xType->>', xType)
    console.log('dTvel->>', dTvel)
    console.log('sTvel->>', sTvel)
    console.log('dH->>', dH)
    console.log('G->>', G)



    let arrPandTemp = calculate(Press);
    console.log(indexPP,"arrPandTemp[2]arrPandTemp[2]--",arrP_Rol_RoV[indexPP])
    RoL= 1/arrP_Rol_RoV[indexPP][0];
    RoV= 1/arrP_Rol_RoV[indexPP][1];
    diffRo =Math.abs( RoV-RoL)
    otvert+=`RoL->>>${RoL}
    RoV->>>${RoV}
    diffRo-->>${diffRo}
    `


    if (arrPandTemp.length > 1) {
        p1 = arrPandTemp[0][0];
        p2 = arrPandTemp[1][0];
        t1 = arrPandTemp[0][1];
        t2 = arrPandTemp[1][1];
        tS = tempS_Calculate(t1, t2, p1, p2, Press)
        otvert += `P1 = ${p1 / Math.pow(10, pow)} *10^${pow};
        P2 = ${p2 / Math.pow(10, pow)} *10^${pow};
        T1 = ${t1};
        T2 = ${t2};
        Ts = ${tS};
    `;
    } else if (arrPandTemp.length == 1) {
        // console.log(arrPandTemp)
        p1 = arrPandTemp[0][0];
        tS = arrPandTemp[0][1];
        otvert += `P = ${p1 / Math.pow(10, pow)} *10^${pow} ;
        Ts = ${tS};
    `
    } else {
        otvert = 'неверное значение давления!'
    }

    // let deltaT = InputTemp -tS
    // if (deltaT<=-0.1){
    //     console.log("1-ый интервал")
    // }else if (deltaT>=0.1){
    //     console.log("3-ий интервал")
    // }else{
    //     console.log("2-ой интервал")
    // }
    calculateAlfa(tS, Press)
    // document.getElementById('otvet').innerHTML+= `<hr>`;

    document.getElementById('otvet').innerText+= `${i})\n${otvert}\n${otvet2}\n//////////////////////////////////////////////////////////////////////////////\n\n`;
    i++

})

///////// РАСЧЁТ ТАБЛИЧНОГО ИНДЕКСА ДЛЯ ДАВЛЕНИЯ И ТЕМПЕРЕТУРЫ
function calculate(input_P) {
    let arrIndexInterval = []

    arrMain.map((el, ind) => {
        if (el[0] == input_P) {
            // console.log("1")
            arrIndexInterval.push(el)
            indexPP= ind
            return
        } else {
            if (!!arrMain[ind + 1]) {
                if (el[0] < input_P && arrMain[ind + 1][0] > input_P) {
                    // console.log('2')
                    indexPP= ind
                    arrIndexInterval.push(el)
                    arrIndexInterval.push(arrMain[ind + 1])
                    return
                }
            }

        }
    })
    return arrIndexInterval
}

/////////////// РАСЧЁТ Ts
function tempS_Calculate(t1, t2, p1, p2, Press) {
    return t1 + (t2 - t1) * ((Press - p1) / (p2 - p1))
}


/////////////////////////////////////////////// РАСЧЁТ ВСЕХ АЛЬФА
function calculateAlfa(tS, p) {
    let sigm = calcSigma(tS, p) / 1000 //0.00463 РАСЧЁТ СИГМА
    console.log(sigm)
    AFVcrit = calc_AFVcrit()
    AHVcrit = calc_AHFcrit(sigm)
    if (AVAMminConts === "для труб") {
        console.log('1111')
        AVAMmin = 0.5
    } else if (AVAMminConts === "для пучков стержней") {
            AVAMmin = 0.8
    }

    let D = dH * Math.sqrt((g * diffRo) / sigm); //20

    let AVBSx = Math.max(0.25 * Math.min(1, Math.pow(0.045 * D, 8)), 0.001);
    if (G <= 2000) {
        AVBS = AVBSx
    } else if (2000 < G && G < 3000) {
        AVBS = AVBSx + (((0.5 - AVBSx) / 1000) * (G - 2000))
    } else if (G >= 3000) {
        AVBS = 0.5
    }
    AVISIE = AVBS + 0.2
    AVEAM = Math.max(AVAMmin, Math.min(AFVcrit, AHVcrit, AVBSmax))
    AVSE = Math.max(AVBS, AVEAM - 0.05)

    otvet2=`
    AVBS ---->>>${AVBS}
    AVISIE ---->>>${AVISIE}
    AVSE ---->>>${AVSE}
    AVEAM ---->>>${AVEAM}
    AVAM ---->>>${AVAM}
    `
    console.log(AVBS, "<<----AVBS")
    console.log(AVISIE, "<<----AVISIE")
    console.log(AVSE, "<<-----AVSE")
    console.log(AVEAM, "<<-----AVEAM")

    console.log(AVAM, "<<---AVAM")

}

////////////////////////////////////////////// ТЕСТИРОВАНИЕ ПРОГРАММЫ  calcSigma()
// console.log(calculate(1.35))
//
// let testTs = 94;
// // let testP = 3.5//Mpa
// calcSigma(testTs)
////////////////////ПРОГРАММА  calcSigma()////////////////////////////////
function calcSigma(Ts, p) {
    // p = p / 1000000;
    // console.log("!!!!", Ts, p)
    let indexT, indexP;
    let intervalP = [0.1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arrSigma.map((el, ind) => {
        if (el[0] == Ts) {
            indexT = ind;
            // return ind;
        } else if (arrSigma[ind + 1]) {
            if (el[0] < Ts && Ts < arrSigma[ind + 1][0]) {
                indexT = (arrSigma[ind + 1][0] - Ts > 5) ? ind : ind + 1
                // console.log(indexT, 'case2')
            }
        }
    })

    console.log(arrSigma[indexT], "<<<----sigmaTabl")

    return arrSigma[indexT][1]
}
////////////////////ПРОГРАММА  calc_AFVcrit() //////////////////////////
function calc_AFVcrit() {
    let otvet;
    if (AFVcritConst === "для восходящего течения") {
        console.log('111')

        otvet = Math.min((1 / VZV) * Math.sqrt((g * Number(dH) * diffRo) / RoV), 1)
        console.log(otvet)
    } else if (AFVcritConst === "для нисходящего течения") {
        otvet = 0.75
    }
    return otvet;
}

////////////////////ПРОГРАММА  calc_AHFcrit() //////////////////////////

function calc_AHFcrit(sigm) {
    let otvet = Math.min((3.2 / VZV) * ((g * sigm * diffRo) / Math.pow(RoV, 2)), 1);
    return otvet
}

///////////////////////////////////////////////// ВСПОМОГАТЕЛЬНЫЕ РАСЧЁТЫ /////////////

//

//
// // arrMain.map(el=>{
// //     arrP_Rol_RoV.push(el[0])
// // })
// // console.log(arrP_Rol_RoV.join())
// let str = `0,0014147
// 0,0014181
// 0,0014215
// 0,0014249
// 0,0014283
// 0,0014318
// 0,0014352
// 0,0014387
// 0,0014421
// 0,0014456
// 0,0014491
// 0,0014526
// 0,0014597
// 0,0014668
// 0,0014704
// 0,0014740
// 0,0014812
// 0,0014885
// 0,0014959
// 0,0015034
// 0,0015072
// 0,0015110
// 0,0015186
// 0,0015263
// 0,0015342
// 0,0015421
// 0,0015461
// 0,0015501
// 0,0015582
// 0,0015665
// 0,0015749
// 0,0015834
// 0,0015877
// 0,0015920
// 0,0016008
// 0,0016097
// 0,0016188
// 0,0016281
// 0,0016328
// 0,0016375
// 0,0016471
// 0,0016570
// 0,0016670
// 0,0016773
// 0,0016825
// 0,0016878
// 0,0016931
// 0,0016985
// 0,0017040
// 0,0017095
// 0,0017151
// 0,0017208
// 0,0017266
// 0,0017324
// 0,0017383
// 0,0017444
// 0,0017505
// 0,0017567
// 0,0017630
// 0,0017693
// 0,0017758
// 0,0017824
// 0,0017891
// 0,0017959
// 0,0018029
// 0,0018099
// 0,0018171
// 0,0018244
// 0,0018319
// 0,0018395
// 0,0018473
// 0,0018552
// 0,0018633
// 0,0018715
// 0,0018800
// 0,0018887
// 0,0018975
// 0,0019066
// 0,0019159
// 0,0019255
// 0,0019353
// 0,0019454
// 0,0019557
// 0,0019664
// 0,0019775
// 0,0019889
// 0,0020006
// 0,002013
// 0,002026
// 0,002039`;
//
// let str2 = `0,02077
// 0,02049
// 0,02022
// 0,01996
// 0,01970
// 0,01945
// 0,01920
// 0,01896
// 0,01872
// 0,01849
// 0,01826
// 0,01803
// 0,01760
// 0,01717
// 0,01697
// 0,01677
// 0,01637
// 0,01599
// 0,01563
// 0,01527
// 0,01510
// 0,01493
// 0,01459
// 0,01427
// 0,01395
// 0,01365
// 0,01350
// 0,01335
// 0,01307
// 0,01279
// 0,01251
// 0,01225
// 0,012
// 0,01199
// 0,01174
// 0,01149
// 0,01125
// 0,01101
// 0,01090
// 0,01078
// 0,01056
// 0,01034
// 0,010125
// 0,009915
// 0,009811
// 0,009709
// 0,009607
// 0,009506
// 0,009407
// 0,009308
// 0,009210
// 0,009114
// 0,009018
// 0,008923
// 0,008828
// 0,008736
// 0,008643
// 0,008551
// 0,008460
// 0,008370
// 0,008280
// 0,008190
// 0,008102
// 0,008014
// 0,007927
// 0,007840
// 0,007754
// 0,007668
// 0,007583
// 0,007499
// 0,007414
// 0,007331
// 0,007247
// 0,007164
// 0,007082
// 0,006999
// 0,006917
// 0,006836
// 0,006754
// 0,006673
// 0,006591
// 0,006510
// 0,006429
// 0,006348
// 0,006267
// 0,006186
// 0,006104
// 0,006023
// 0,005941
// 0,005859`;
//
// let arr = str.replace(/,/g, '.').split('\n')
// let arr2 = str2.replace(/,/g, '.').split('\n')
//
// // let arr2 = str2.replace(/,/g, '.').split('\n')
// let resultArr = [];
// arr.map((el, ind) => {
//     resultArr.push([Number(el), Number(arr2[ind]) ])
// })
// // console.log(arrSigma)
// // console.log(JSON.stringify(arrSigma, null, 2))
// //
// // console.log('[', resultArr.join('],' + '\n' +
// //     '['), ']');
// //
// // let strArrFort = ``;
// // console.log(arrMain.length)
// // arrMain.map((el, ind) => {
// //     // console.log(`a(${el[0]})=`)
// //     strArrFort += `t(${ind + 1}) = ${el[1]}\n`
// // })
// console.log(resultArr)
