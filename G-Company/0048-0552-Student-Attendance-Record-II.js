var checkRecord = function (n) {
  let p = 1,
    pl = (pll = a = al = all = 0) // p=1 because when n=0, '' is considered rewardable
  let mod = 1e9 + 7
  while (n--) {
    let prev = [p, pl, pll, a, al, all]
    p = (prev[0] + prev[1] + prev[2]) % mod
    //=p+l+ll, p...p p | ...l p | ...ll p
    pl = prev[0]
    //=p,      p...p l
    pll = prev[1]
    //+=l,     p...l l
    a = (prev[0] + prev[1] + prev[2] + prev[3] + prev[4] + prev[5]) % mod
    //=prev[]  p...p a | ...l a | ...ll a | ...a... p | ...a...l p | ...a...ll p
    al = prev[3] % mod
    //=a,      ...a... l
    all = prev[4] % mod
    //+=al,    ...a...l l
  }
  return (p + pl + pll + a + al + all) % mod
}
