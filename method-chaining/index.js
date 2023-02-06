const computeAmount = () => {
  return {
    total: 0,
    lakh: function (lakh) {
      this.total += lakh * 100000;
      return this;
    },
    thousand: function (thousand) {
      this.total += thousand * 1000;
      return this;
    },
    rupees: function (rupees) {
      this.total += rupees;
      return this;
    },
    value: function () {
      return this.total;
    },
  };
};

const res = computeAmount().lakh(1).thousand(10).rupees(500).value(); // 110500

console.log(res);
