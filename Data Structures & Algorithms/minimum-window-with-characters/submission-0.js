class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (t.length === "") return "";
    let countT = {};
    let window = {};

    for (let i = 0; i < t.length; i++) {
      countT[t[i]] = (countT[t[i]] || 0) + 1;
    }

    let have = 0,
      need = Object.keys(countT).length;

    let res = [-1, -1];
    let resLen = Infinity;

    let l = 0;

    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      window[c] = (window[c] || 0) + 1;

      if (countT[c] && window[c] === countT[c]) {
        have++;
      }
      while (have === need) {
        if (r - l + 1 < resLen) {
          resLen = r - l + 1;
          res = [l, r];
        }

        window[s[l]]--;

        if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
          have--;
        }
        l++;
      }

    }
      return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
  }
}
