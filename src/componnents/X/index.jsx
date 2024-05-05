import React from 'react'
import styles from './style.module.scss';

export default function X(style = '') {
  return (
    <div className={styles.x} style={style}>
      <svg viewBox="0 0 340 395" height={"100%"} width={"100%"} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M106.376 46.6328C106.722 46.6197 107.069 46.6582 107.404 46.7471C109.633 48.0852 146.164 113.577 161.758 150.111H164.434C183.594 114.468 220.125 47.1923 223.245 46.7471C223.314 46.7432 223.383 46.7432 223.452 46.7471C229.746 46.7471 294.086 64.1959 294.527 69.476C294.975 75.2689 225.025 198.681 221.906 203.136C238.838 231.203 300.765 340.805 300.322 343.925C299.054 347.309 242.728 366.369 224.473 366.369C223.615 366.376 222.758 366.32 221.909 366.201C219.237 365.308 182.703 298.478 163.991 261.947H161.317C143.05 298.478 106.961 365.308 104.735 365.308C103.455 365.512 102.161 365.606 100.865 365.588C81.2972 365.588 28.9322 350.354 28.1047 347.044C27.2142 343.924 87.8059 232.986 106.073 203.136C103.397 199.126 34.7881 75.7143 35.2333 69.9213C35.2333 64.8091 96.4125 46.6399 106.381 46.6399L106.376 46.6328ZM106.381 18.6659C95.4614 18.6659 71.8257 25.5591 58.7059 29.6689C51.9758 31.767 42.2758 34.977 34.3079 38.2546C26.3819 41.5182 8.00765 49.0666 7.28266 68.7091C6.8444 77.2202 9.69076 83.7241 20.8687 105.425C26.7596 116.862 34.8557 132.045 44.9031 150.552C53.4491 166.28 65.4709 188.125 73.7349 202.875C62.7971 221.781 47.6725 249.046 35.329 271.752C26.0999 288.725 18.2018 303.539 12.4835 314.601C1.62721 335.612 -2.09566 342.808 1.1097 354.405C5.25451 369.724 19.2765 374.705 27.699 377.699C33.7764 379.857 41.7537 382.296 50.1599 384.564C62.6083 387.925 85.7474 393.562 100.858 393.562C103.283 393.577 105.705 393.421 108.108 393.096C121.428 391.56 128.156 381.207 130.487 377.631C131.958 375.37 133.795 372.344 136.103 368.381C140.052 361.606 145.397 352.037 151.563 340.71C155.249 333.949 159.07 326.837 162.858 319.718C166.77 326.944 170.698 334.15 174.458 340.964C180.752 352.373 186.209 362.014 190.233 368.856C197.658 381.482 202.136 389.103 213.032 392.739L215.321 393.504L217.703 393.865C219.941 394.196 222.201 394.357 224.464 394.348C238.42 394.348 260.811 388.235 277.136 383.109C285.864 380.368 294.247 377.451 300.746 374.892C310.071 371.218 321.673 366.649 326.508 353.748L327.576 350.895L328.007 347.88C329.464 337.665 326.455 332.08 315.258 311.295C309.54 300.684 301.504 286.133 292.023 269.213C278.456 245.008 264.24 220.076 254.342 203.082C263.718 186.729 277.304 162.471 284.011 150.379C294.254 131.907 302.514 116.705 308.565 105.194C320.412 82.6401 323.112 76.4415 322.41 67.3313V67.2474V67.1612C320.802 47.8125 302.807 40.9098 294.159 37.5856C286.123 34.4991 276.125 31.3847 269.15 29.3169C255.883 25.3796 232.317 18.7777 223.459 18.7777C222.538 18.7777 221.613 18.8196 220.713 18.9012L219.999 18.9643L219.3 19.0668C205.036 21.1066 198.751 31.5642 191.473 43.6746C187.489 50.3044 182.097 59.6968 175.451 71.5974C171.919 77.9172 168.208 84.6286 164.494 91.4123C160.604 83.9083 157.018 77.1735 154.237 71.989C148.719 61.7318 143.281 51.9247 138.907 44.3577C132.037 32.4548 128.902 27.0208 121.843 22.7827L119.2 21.1951L116.276 20.2208C113.094 19.1719 109.762 18.6497 106.411 18.6751L106.381 18.6659Z" fill="black" />
        <path d="M118.043 27.9671C118.389 27.9536 118.735 27.9921 119.069 28.0813C121.3 29.4194 157.832 94.9112 173.425 131.445H176.09C195.245 95.8017 231.779 28.5289 234.898 28.0813C234.968 28.0775 235.038 28.0775 235.108 28.0813C241.402 28.0813 305.742 45.5301 306.185 50.8102C306.633 56.6055 236.681 180.015 233.562 184.47C250.493 212.537 312.423 322.14 311.978 325.259C310.708 328.644 254.382 347.703 236.129 347.703C235.271 347.711 234.414 347.654 233.565 347.535C230.893 346.645 194.359 279.815 175.647 243.281H172.973C154.706 279.815 118.617 346.645 116.388 346.645C115.109 346.847 113.814 346.94 112.519 346.922C92.9531 346.922 40.5881 331.69 39.7605 328.378C38.8677 325.259 99.4618 214.321 117.729 184.47C115.053 180.463 46.4393 57.0484 46.8869 51.2554C46.8869 46.1432 108.066 27.974 118.036 27.974L118.043 27.9671ZM118.036 0C107.117 0 83.4792 6.8932 70.3618 11.003C63.6293 13.1011 53.9317 16.3112 45.9637 19.5889C38.0378 22.8525 19.6635 30.4007 18.9362 50.0432C18.4979 58.5566 21.3443 65.0606 32.5222 86.7591C38.4131 98.1958 46.5092 113.379 56.5566 131.888C65.1026 147.614 77.1268 169.46 85.3885 184.209C74.4507 203.115 59.326 230.382 46.9825 253.086C37.7534 270.059 29.8577 284.876 24.137 295.935C13.2831 316.946 9.55786 324.142 12.7632 335.74C16.9057 351.058 30.9324 356.039 39.3525 359.033C45.4322 361.191 53.4095 363.63 61.8134 365.898C74.2618 369.259 97.401 374.896 112.512 374.896C114.937 374.91 117.36 374.754 119.764 374.43C133.082 372.892 139.812 362.541 142.143 358.963C143.614 356.702 145.449 353.676 147.757 349.713C151.706 342.938 157.051 333.369 163.219 322.042C166.902 315.281 170.726 308.169 174.514 301.049C178.423 308.276 182.351 315.482 186.114 322.296C192.408 333.705 197.865 343.349 201.889 350.188C209.311 362.814 213.778 370.434 224.687 374.071L226.977 374.836L229.357 375.197C231.595 375.528 233.855 375.689 236.117 375.679C250.072 375.679 272.462 369.57 288.79 364.441C297.513 361.702 305.901 358.783 312.398 356.224C321.722 352.55 333.325 347.981 338.159 335.08L339.229 332.227L339.658 329.212C341.115 318.997 338.106 313.412 326.909 292.627C321.196 282.016 313.155 267.464 303.674 250.545C290.112 226.34 275.892 201.408 265.998 184.414C275.372 168.061 288.96 143.803 295.662 131.711C305.905 113.241 314.169 98.0373 320.216 86.5283C332.068 63.9719 334.768 57.7757 334.061 48.6632V48.5792V48.493C332.455 29.1443 314.461 22.2416 305.815 18.9197C297.774 15.8309 287.776 12.7188 280.806 10.6488C267.537 6.71142 243.959 0.109558 235.115 0.109558C234.182 0.109558 233.266 0.151469 232.369 0.23306L231.655 0.296091L230.956 0.398678C216.692 2.43845 210.409 12.8983 203.129 25.0064C199.147 31.6363 193.755 41.0286 187.104 52.9315C183.577 59.249 179.878 65.9604 176.148 72.7465C172.26 65.2401 168.674 58.5054 165.891 53.3232C160.373 43.0661 154.934 33.2565 150.561 25.6895C143.691 13.8006 140.553 8.35261 133.497 4.11455L130.853 2.52695L127.93 1.55487C124.748 0.504326 121.415 -0.0185486 118.064 0.00697188L118.036 0Z" fill="black" />
        <path d="M165.951 243.272C147.684 279.806 111.598 346.636 109.371 346.636C94.2187 349.307 33.6292 331.933 32.7387 328.368C31.8482 325.249 92.4377 214.311 110.705 184.461C108.031 180.454 39.4222 57.0391 39.8651 51.2461C39.8651 45.9031 106.695 26.3026 112.043 28.079C114.269 29.4171 150.803 94.909 166.399 131.443H169.07C188.23 95.7995 224.759 28.5266 227.879 28.079C232.774 27.6361 298.718 45.4532 299.166 50.8009C299.611 56.5962 229.662 180.006 226.543 184.461C243.472 212.528 305.402 322.13 304.956 325.249C303.623 328.814 241.246 349.755 226.543 347.526C223.871 346.636 187.337 279.806 168.625 243.272H165.951Z" fill="#FCD015" />
        <path d="M227.702 347.526C225.03 346.636 188.496 279.806 169.796 243.271H167.11C148.843 279.806 112.757 346.636 110.53 346.636C97.0492 349.013 47.5679 335.511 36.2197 330V322.564C47.3697 299.019 95.3895 211.472 111.624 184.855H227.949C245.214 213.542 306.568 322.144 306.127 325.247C304.859 328.632 248.547 347.687 230.28 347.689C229.418 347.699 228.556 347.644 227.702 347.526Z" fill="#FBB500" />
        <path d="M235.928 354.666C234.778 354.673 233.629 354.595 232.49 354.433L231.324 354.151C228.156 353.093 226.844 352.654 204.474 312.136C194.419 293.928 183.169 272.959 174.339 256.011C165.809 272.726 154.787 293.613 144.784 311.987C122.988 352.018 121.442 353.557 116.924 353.615C106.252 355.116 83.6422 349.899 70.9466 346.6C34.7366 337.194 33.7878 333.404 32.9485 330.049C32.0161 326.834 31.5802 325.266 65.3891 263.082C82.7307 231.184 100.287 199.926 109.567 184.384C103.825 174.336 88.836 147.369 74.9679 121.845C40.0843 57.6498 39.674 53.6611 39.8768 50.8474C39.9947 49.4391 40.4412 48.078 41.1805 46.8736C41.9197 45.6691 42.9312 44.6548 44.1335 43.9121C52.7915 37.6692 112.092 18.3789 121.249 21.4281L121.981 21.6611L122.643 22.0598C124.151 22.9666 126.431 24.3373 147.353 63.2212C152.959 73.6346 165.643 97.5663 175.19 118.276C227.007 22.1111 229.214 21.7964 233.877 21.1297L234.236 21.0877C241.523 20.442 300.982 36.8464 309.85 44.2921C310.765 45.0039 311.526 45.894 312.087 46.9086C312.648 47.9232 312.997 49.0411 313.113 50.1946C313.346 53.1109 313.579 56.0809 277.288 121.498C262.96 147.335 247.647 174.315 241.684 184.451C250.892 199.963 268.902 231.431 285.347 260.764C319.503 321.708 319.3 323.119 318.859 326.214L318.752 326.965L318.486 327.664C317.475 330.368 316.09 334.07 279.789 345.211C267.819 348.927 247.293 354.666 235.928 354.666ZM168.63 236.278H179.901L181.85 240.082C200.427 276.348 229.639 329.504 237.052 340.726C250.475 340.376 289.459 328.105 303.04 322.31C292.063 300.606 244.544 216.242 227.555 188.069L225.205 184.174L227.816 180.444C231.753 174.551 287.631 75.7209 297.821 53.3627C286.123 48.0686 249.493 37.6833 237.758 35.4687C232.275 43.6045 215.472 72.9095 182.232 134.748L180.25 138.432H168.779L166.965 134.184C152.829 101.061 123.258 47.649 115.512 35.1913C103.986 36.9466 66.7016 48.0384 55.1134 53.6518C64.8693 75.5205 119.985 175.031 123.547 180.617L125.899 184.3L123.671 188.107C107.119 215.172 59.0973 303.033 48.5161 325.203C61.8644 330.331 99.5361 340.15 112.812 339.943C120.127 328.804 149.61 274.311 166.697 240.138L168.63 236.278Z" fill="#FCD015" />
        <path d="M11.3296 55.0224L23.2815 35.8951L33.3755 53.6959C33.3755 53.6959 27.2935 67.1491 26.7387 67.5175C26.1838 67.8858 11.3296 55.0224 11.3296 55.0224Z" fill="black" />
        <path d="M336.56 338.633L322.909 360.478L305.362 347.706L323.007 324.932L336.56 338.633Z" fill="black" />
      </svg>
    </div>
  )
}
