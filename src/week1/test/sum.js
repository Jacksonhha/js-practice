/**
 * @description 這是一個會回傳兩個數字總和的函式
 *
 * @example
 * sum(1,1)
 * 返回 2
 *
 * @example
 * sum(2,3)
 * 返回 5
 *
 * @example
 * sum(0.2,0.4)
 * 返回 0.6
 *
 * @param {number} numA - 第一個數字
 * @param {number} numB - 第二個數字
 *
 * @return {number} 兩個數的和
 */
function num(numA, numB, precision = 12) {
  //precision 這個參數允許你指定一個數值，用來控制計算結果的小數位數（精準度）

  // TODO: 完成這個 function
  // 目前只解決的整數的問題，剩小數點
  //   const AA = numA * 10;
  //   const BB = numB * 10;

  //   return (AA + BB) / 10;

  const all = parseFloat(numA) + parseFloat(numB);
  // parseFloat(函式會試圖解析輸入的字符串，並提取其中的數值部分，然後返回對應的浮點數。)

  return +all.toPrecision(precision);
  //+是將浮點數轉換成數值 .toPrecision(計算機表示上進行四捨五入，放置precision更能抓到精準度)
  //https://github.com/camsong/blog/issues/9  資料來源
}

export default num;
