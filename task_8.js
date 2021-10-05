let pricePhone = new Map([
    ["яблоко", 50000],
    ["сасмунгг", 35000],
    ["редми",    5000],
    ["элджи",    2000],
    ["сони",    50000],
    ["вирту",    5000000],
  ]);

  pricePhone.forEach((value, key, map) => {
    console.log(`Ключ — ${key}, значение — ${value} `); 
  });