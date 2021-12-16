/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
  dict = {};
  quarters = 0;
  dimes = 0;
  nickels = 0;
  pennies = 0;
  while (cents >= 0) {
    if (cents - 25 > 0 || cents - 25 == 0) {
      quarters += 1;
      cents -= 25;
    } else if (cents - 10 > 0 || cents - 10 == 0) {
      dimes += 1;
      cents -= 10;
    } else if (cents - 5 > 0 || cents - 5 == 0) {
      nickels += 1;
      cents -= 5;
    } else if (cents - 1 > 0 || cents - 1 == 0) {
      pennies += 1;
      cents -= 1;
    } else if (cents == 0) {
      dict["quarters"] = quarters;
      dict["dimes"] = dimes;
      dict["nickels"] = nickels;
      dict["pennies"] = pennies;
      console.log(dict);
      return dict;
    }
  }
}
fewestCoinChange(cents1)
fewestCoinChange(cents2)
fewestCoinChange(cents3)
fewestCoinChange(cents4)

/*****************************************************************************/