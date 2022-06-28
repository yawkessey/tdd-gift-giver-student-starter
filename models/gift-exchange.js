class GiftExchange {
  static pairs(names) {
    let name1, name2;
    let groupPairing = [];

    if (names.length % 2 != 0) {
      throw "The number of names can not be odd";
    } else {
      //Randomly pairs names together in the array
      // 1. Names can not be repeated
      // 2. All names should be used
      // 3. Return an array of tuples
      let randomOrder = [names.length];
      for (let i = 0; i < names.length; i++) {
        randomOrder[i] = i;
      }
      randomOrder.sort(() => Math.random() - 0.5);
      let pairing = [];

      for (let i = 0; i < randomOrder.length; i += 2) {
        let tuples = [names[randomOrder[i]], names[randomOrder[i + 1]]];
        pairing.push(tuples);
      }

      return pairing;
    }
  }

  static traditional(names) {
    let randomOrder = [names.length]; 
      for (let i = 0; i < names.length; i++) {
        randomOrder[i] = i;
      }
      randomOrder.sort(() => Math.random() - 0.5);

      let pairing = []

      for (let i=0; i < randomOrder.length; i++) {
        if (i == names.length-1) {
            let tuples = [names[randomOrder[i]] + " is giving a gift to " + names[randomOrder[0]]]
            pairing.push(tuples)
            break;
        }
        let tuples = [names[randomOrder[i]] + " is giving a gift to " + names[randomOrder[i + 1]]]
        pairing.push(tuples)
      }
  }
}

module.export = GiftExchange;
